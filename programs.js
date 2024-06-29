const programs = [
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Guerre Israël-Hamas – Agir pour la libération des otages détenus depuis les massacres terroristes du Hamas ainsi que celle « des prisonniers politiques palestiniens ». Reconnaître « immédiatement l’Etat de Palestine aux côtés de l’Etat d’Israël »."
    },
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Ukraine – Défendre l’Ukraine et la paix sur le continent européen ainsi que « la souveraineté et la liberté du peuple ukrainien »."
    },
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Union européenne – Mettre fin aux traités de libre-échange comme le CETA et réformer la politique agricole commune."
    },
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "ENSEMBLE",
      partyName: "Ensemble",
      text: "Guerre Israël-Hamas – Ne pas reconnaître dans l’immédiat un Etat palestinien, car « les conditions ne sont pas réunies »."
    },
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "ENSEMBLE",
      partyName: "Ensemble",
      text: "Ukraine – Confirmer le soutien de la France à l’Ukraine, notamment par l’envoi d’avions, armes et munitions."
    },
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "ENSEMBLE",
      partyName: "Ensemble",
      text: "Union européenne – Imposer un bouclier commercial européen (fin des négociations avec les pays qui ne respectent pas l’accord de Paris, règles miroirs pour les produits importés…)."
    },
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "ENSEMBLE",
      partyName: "Ensemble",
      text: "Défense – Doubler le budget de l’armée française d’ici à 2030."
    },
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "LR",
      partyName: "Les Républicains",
      text: "Ukraine – Fournir « un soutien [financier] massif à l’Ukraine ». Refuser son adhésion à l’Union européenne."
    },
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "LR",
      partyName: "Les Républicains",
      text: "Union européenne – Instaurer une « préférence européenne » lorsque la réciprocité de l’accès des entreprises européennes aux marchés publics des pays tiers n’est pas assurée."
    },
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "RN",
      partyName: "Rassemblement National",
      text: "Guerre Israël-Hamas – S’opposer à la reconnaissance d’un Etat palestinien « en l’état actuel des choses »."
    },
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "RN",
      partyName: "Rassemblement National",
      text: "Ukraine – Continuer de soutenir l’Ukraine, à l’exception de l’envoi de missiles à longue portée, pour « éviter tout risque d’escalade »."
    },
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "RN",
      partyName: "Rassemblement National",
      text: "Union européenne – Mettre en place une « double frontière », européenne et française. Instaurer un moratoire sur les nouveaux accords de libre-échange. Baisser la contribution française au budget européen de 2 à 3 milliards d’euros."
    },
    {
      categoryId: "international",
      categoryName: "International",
      partyId: "RN",
      partyName: "Rassemblement National",
      text: "Défense – Augmenter le budget de la défense à hauteur de 55 milliards d’euros par an en 2027 (contre environ 44 milliards en 2023)."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "LR",
      partyName: "Les Républicains",
      text: "Energies renouvelables – Définancer les énergies éoliennes."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "LR",
      partyName: "Les Républicains",
      text: "Nucléaire – Continuer de développer la filière nucléaire."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "LR",
      partyName: "Les Républicains",
      text: "Passoires thermiques – Réautoriser la mise en location des logements énergivores que la loi sort progressivement du marché, depuis 2023 et jusqu’en 2034."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Energies renouvelables – Développer l’éolien en mer et les énergies hydroliennes."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Gestion de l’eau – Instaurer un moratoire sur les mégabassines et gérer 100 % de l’eau en régies locales publiques. Améliorer la qualité de tous les cours d’eau et faire contribuer les industriels à la dépollution des nappes et des sols."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Grands travaux – Mettre en place un moratoire sur les grands projets d’infrastructures autoroutières."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Passoires thermiques – Renforcer les aides à l’isolation des logements pour tous les ménages et garantir la prise en charge des travaux pour les plus modestes."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Pesticides – Rétablir le plan Ecophyto, interdire le glyphosate et les néonicotinoïdes et soutenir la filière du bio et l’agroécologie."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Polluants éternels (PFAS) – Interdire tous les PFAS pour toutes les utilisations, notamment les ustensiles de cuisine."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "RN",
      partyName: "Rassemblement National",
      text: "Energies renouvelables – Supprimer les subventions aux éoliennes, arrêter les projets éoliens et démanteler progressivement les parcs existants."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "RN",
      partyName: "Rassemblement National",
      text: "Passoires thermiques – Réautoriser la mise en location des logements énergivores que la loi sort progressivement du marché, depuis 2023 et jusqu’en 2034."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "RN",
      partyName: "Rassemblement National",
      text: "Transports – Revenir sur l’interdiction de la vente des voitures neuves à moteur thermique, fixée à 2035 en Europe ; supprimer les zones à faibles émissions dans les métropoles."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "RN",
      partyName: "Rassemblement National",
      text: "Nucléaire – Lancer un nouveau plan de relance du nucléaire."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "ENSEMBLE",
      partyName: "Ensemble",
      text: "Emissions de GES – Poursuivre une baisse annuelle de 6 % des émissions de gaz à effet de serre, afin d’atteindre une diminution de 55 % d’ici à 2030 par rapport à 1990."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "ENSEMBLE",
      partyName: "Ensemble",
      text: "Nucléaire – Développer huit nouveaux réacteurs nucléaires."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "ENSEMBLE",
      partyName: "Ensemble",
      text: "Passoires thermiques – Créer un fonds pour aider les classes moyennes à rénover leur logement (avec un objectif de 300 000 rénovations d’ici à 2027). Rénover la totalité des logements Crous."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "ENSEMBLE",
      partyName: "Ensemble",
      text: "Pesticides – Réduire les risques liés à l’usage des pesticides de 50 % d’ici à 2030, sur la base d’un indicateur gouvernemental."
    },
    {
      categoryId: "environnement",
      categoryName: "Environnement",
      partyId: "ENSEMBLE",
      partyName: "Ensemble",
      text: "Transports – Proposer 100 000 véhicules électriques par an en leasing social à 100 euros par mois maximum."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "ENSEMBLE",
      partyName: "Ensemble",
      text: "Emploi – Favoriser la création de 200 000 emplois industriels et l’ouverture de 400 usines."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "ENSEMBLE",
      partyName: "Ensemble",
      text: "Prix agricoles – Mettre en place des prix planchers par filière pour les agriculteurs."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "RN",
      partyName: "Rassemblement National",
      text: "Autoroutes – « Renationaliser » les autoroutes."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "RN",
      partyName: "Rassemblement National",
      text: "Normes – Réduire le nombre de normes, notamment dans l’immobilier."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "RN",
      partyName: "Rassemblement National",
      text: "Entreprises – Diminuer les impôts de production."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "RN",
      partyName: "Rassemblement National",
      text: "Impôt sur le revenu – Le supprimer pour les jeunes de moins de 30 ans ; exonérer d’impôts sur les sociétés pendant cinq ans les entreprises créées par des personnes de moins de 30 ans."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "LR",
      partyName: "Les Républicains",
      text: "Fonction publique – Revaloriser le salaire des enseignants."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "LR",
      partyName: "Les Républicains",
      text: "Normes – Supprimer les « normes inutiles » et proposer un moratoire sur toute nouvelle norme."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "LR",
      partyName: "Les Républicains",
      text: "Subventions aux entreprises – Baisser les « charges » des entreprises."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Commerce international – Instaurer une taxe kilométrique sur les produits importés."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Entreprises – Soutenir les PME et les TPE, ainsi que les entreprises en difficulté, grâce à des facilités de crédits pour favoriser les investissements."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Construction – Construire 200 000 logements publics par an pendant cinq ans, soit un million d’habitations."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Prix agricoles – Garantir un prix plancher et rémunérateur aux agriculteurs."
    },
    {
      categoryId: "economie",
      categoryName: "Economie",
      partyId: "NFP",
      partyName: "Nouveau Front Populaire",
      text: "Subventions aux entreprises – Conditionner les aides aux entreprises au respect de critères environnementaux, sociaux et de lutte contre les discriminations au sein de l’entreprise. Exiger le remboursement des aides en cas de non-respect des contreparties."
    }
  ];
  

document.addEventListener("DOMContentLoaded", () => {
    const listContainer = document.getElementById('programmes');
    const categories = {};

    // Group programs by category
    programs.forEach(program => {
        if (!categories[program.categoryId]) {
            categories[program.categoryId] = { name: program.categoryName, programs: [] };
        }
        categories[program.categoryId].programs.push(program);
    });

    // Generate HTML for each category
    for (const categoryId in categories) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'list';
        categoryDiv.id = categoryId;

        const categoryTitle = document.createElement('h3');
        categoryTitle.innerText = categories[categoryId].name;
        categoryDiv.appendChild(categoryTitle);

        categories[categoryId].programs.forEach(program => {
            const itemDiv = document.createElement('div');
            itemDiv.className = `item ${program.partyId}`;
            itemDiv.draggable = true;
            itemDiv.innerText = program.text;
            itemDiv.dataset.category = categoryId;  // Add category data attribute
            itemDiv.dataset.party = program.partyId;  // Add party data attribute
            categoryDiv.appendChild(itemDiv);
        });

        listContainer.appendChild(categoryDiv);
    }

    // Reattach event listeners after generating elements
    attachDragAndDropListeners();
});