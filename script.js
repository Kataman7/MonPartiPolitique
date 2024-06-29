function attachClickListener() {
    const items = document.querySelectorAll('.item');
    const statsList = document.getElementById('stats-list');

    items.forEach(item => {
        item.addEventListener('click', () => {
            handleItemClick(item);
        });
    });

    function handleItemClick(item) {
        const listId = 'parti-ideal'; // ID de la liste cible
        const list = document.getElementById(listId);

        if (list.contains(item)) {
            // Si l'élément est déjà dans la liste "Mon Parti Idéal", on le déplace vers sa liste d'origine
            const originalListId = item.dataset.category;
            const originalList = document.getElementById(originalListId);
            originalList.appendChild(item);
        } else {
            // Sinon, on le déplace vers la liste "Mon Parti Idéal"
            list.appendChild(item);
        }

        updateStats();
    }

    function updateStats() {
        const idealItems = document.querySelectorAll('#parti-ideal .item');
        const partyCounts = {};
        const partyNames = {
            "NFP": "Nouveau Front Populaire",
            "RN": "Rassemblement National",
            "LR": "Les Républicains",
            "ENSEMBLE": "Ensemble",
            // Ajoutez les autres partis politiques avec leurs noms correspondants ici
        };

        idealItems.forEach(item => {
            const party = item.dataset.party;
            if (!partyCounts[party]) {
                partyCounts[party] = 0;
            }
            partyCounts[party]++;
        });

        statsList.innerHTML = '';
        const totalItems = idealItems.length;

        for (const party in partyCounts) {
            const percentage = ((partyCounts[party] / totalItems) * 100).toFixed(2);
            const li = document.createElement('li');
            const partyName = partyNames[party] || party; // Utilisation du nom du parti ou de l'ID s'il n'y a pas de correspondance
            li.innerText = `${partyName}: ${percentage}%`;
            statsList.appendChild(li);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    attachClickListener();

    const shareButton = document.getElementById('share-button');
    const shareModal = document.getElementById('share-modal');
    const closeModal = document.querySelector('.close');
    const shareText = document.getElementById('share-text');
    const copyButton = document.getElementById('copy-button');

    shareButton.addEventListener('click', () => {
        generateShareText();
        shareModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        shareModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == shareModal) {
            shareModal.style.display = 'none';
        }
    });

    copyButton.addEventListener('click', () => {
        shareText.select();
        document.execCommand('copy');
        alert('Texte copié dans le presse-papier');
    });

    function generateShareText() {
        const idealItems = document.querySelectorAll('#parti-ideal .item');
        let text = "Mon Parti Idéal:\n\n";

        idealItems.forEach(item => {
            const category = item.dataset.category;
            const categoryName = document.getElementById(category).querySelector('h3').innerText;
            text += `Catégorie: ${categoryName}\nProgramme: ${item.innerText}\nParti: ${item.dataset.party}\n\n`;
        });

        shareText.value = text;
    }
});