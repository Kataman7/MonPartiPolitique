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
  },
  {
    categoryId: "partage-article",
    categoryName: "Partage d'article",
    text: "Vous pouvez partager un article en cliquant sur les icônes de partage en haut à droite de celui-ci."
  },
  {
    categoryId: "reproduction-article",
    categoryName: "Reproduction d'article",
    text: "La reproduction totale ou partielle d’un article, sans l’autorisation écrite et préalable du Monde, est strictement interdite."
  },
  {
    categoryId: "pouvoir-achat",
    categoryName: "Pouvoir d'achat",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Primes et salaires – Augmenter les salaires nets en baissant les cotisations sociales."
  },
  {
    categoryId: "pouvoir-achat",
    categoryName: "Pouvoir d'achat",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Prix des énergies – Supprimer les taxes sur l’électricité qui financent les éoliennes."
  },
  {
    categoryId: "pouvoir-achat",
    categoryName: "Pouvoir d'achat",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Prix des énergies – Baisser la TVA sur le carburant, l’électricité, le gaz et le fioul à 5,5 % et négocier une dérogation aux règles du marché européen de l’électricité à l’avantage de la France."
  },
  {
    categoryId: "pouvoir-achat",
    categoryName: "Pouvoir d'achat",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Produits de première nécessité – « En cas de forte inflation », suspendre la TVA sur une centaine de produits de première nécessité."
  },
  {
    categoryId: "pouvoir-achat",
    categoryName: "Pouvoir d'achat",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Salaires – Exonérer les augmentations de salaire de cotisations patronales dans la limite de 10 % et jusqu’à 3 fois le smic, pendant trois à cinq ans."
  },
  {
    categoryId: "pouvoir-achat",
    categoryName: "Pouvoir d'achat",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Primes et salaires – Relever le plafond de la prime de partage de la valeur de 3 000 à 10 000 euros, en gardant l’exonération de cotisations sociales et d’impôt sur le revenu, et mensualiser cette prime. Augmenter les salaires compris entre le smic et 2 000 euros par mois avec une réforme des cotisations sociales."
  },
  {
    categoryId: "pouvoir-achat",
    categoryName: "Pouvoir d'achat",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Prix des énergies – Baisser de 15 % la facture d’électricité dès l’hiver 2024, en décorrelant les prix, grâce à la réforme du marché européen de l’électricité."
  },
  {
    categoryId: "pouvoir-achat",
    categoryName: "Pouvoir d'achat",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Primes et salaires – Indexer les salaires sur l’inflation, augmenter de 10 % le point d’indice pour les fonctionnaires."
  },
  {
    categoryId: "pouvoir-achat",
    categoryName: "Pouvoir d'achat",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Prix des énergies – Bloquer les prix des énergies et des carburants et annuler la hausse programmée du prix du gaz au 1er juillet."
  },
  {
    categoryId: "pouvoir-achat",
    categoryName: "Pouvoir d'achat",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Produits de première nécessité – Bloquer les prix des produits de première nécessité dans l’alimentation."
  },
  {
    categoryId: "pouvoir-achat",
    categoryName: "Pouvoir d'achat",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Salaire minimum – Augmenter le smic à 1 600 euros net par mois."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Hauts revenus et patrimoines – Sortir la résidence principale de l’assiette de l’impôt sur la fortune immobilière."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Héritage – Supprimer l’imposition sur les transmissions familiales d’entreprises et d’exploitations agricoles."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Niches fiscales – Taxer les importations qui ne respectent pas les normes françaises."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Niveau des prélèvements – Baisser les impôts."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Hauts revenus et patrimoines – Rétablir un ISF renforcé avec un volet climatique, supprimer la « flat tax » et rétablir l’« exit tax »."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Héritage – Réformer l’impôt sur l’héritage pour le rendre plus progressif, instaurer une transmission maximale de 12 millions d’euros."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Niches fiscales – Supprimer les niches fiscales inefficaces, injustes et polluantes."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Impôt sur le revenu – Accroître sa progressivité en fixant 14 tranches d’imposition, rendre la CSG progressive."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Entreprises – Taxer les superprofits des agro-industriels et de la grande distribution, généraliser la taxation des superprofits au niveau européen."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Hauts revenus et patrimoines – Remplacer l’impôt sur la fortune immobilière par un impôt sur la fortune financière."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Part fiscale – Accorder une part fiscale supplémentaire pleine dès le deuxième enfant (contre une demi-part aujourd’hui) ; rétablir la demi-part fiscale des veuves et veufs."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Héritage – Exonérer les donations aux enfants et aux petits-enfants jusqu’à 100 000 euros, tous les dix ans."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Héritage – Exonérer toutes les successions et donations, y compris pour les familles recomposées, jusqu’à 150 000 euros par enfant et jusqu’à 100 000 euros pour les petits-enfants."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Niches fiscales – Gabriel Attal a ouvert une mission portant sur les niches fiscales en avril, mais le sujet n’a pas été abordé plus en détail par le parti présidentiel au cours de la campagne des législatives."
  },
  {
    categoryId: "fiscalite",
    categoryName: "Fiscalité",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Niveau des prélèvements – Fixer une règle d’or budgétaire pour ne pas augmenter les impôts « quoi qu’il arrive »."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Accès au logement – Baisser les impôts sur les revenus locatifs pour remettre des logements sur le marché."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Aides sociales – Réserver les aides sociales non contributives aux résidents réguliers en France depuis plusieurs années."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Accès au logement – Encadrer les loyers dans les zones tendues. Mettre en place une garantie universelle des loyers. Interdire les expulsions locatives pour impayés sans proposition de relogement. Relancer la construction HLM. Renforcer l’hébergement d’urgence."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Aides sociales – Mettre en place « une garantie d’autonomie » pour les ménages vivant sous le seuil de pauvreté. Revaloriser les allocations pour le logement (APL) de 10 %. Porter l’allocation aux adultes handicapés (AAH) au niveau du salaire minimum."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Assurance-chômage – Abroger les réformes successives adoptées sous la présidence d’Emmanuel Macron."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Congé menstruel – Créer un congé menstruel dans toutes les entreprises et administrations."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Pénibilité – Organiser une « conférence nationale sur le travail et la pénibilité » qui vise, entre autres, au passage à 32 heures hebdomadaires dans les métiers pénibles ou de nuit."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Retraites – Abroger immédiatement la réforme adoptée en 2023 et « réaffirmer l’objectif commun » d’un âge légal de départ en retraite à 60 ans."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "RSA – Annuler la réforme qui conditionne le versement du revenu de solidarité active à au moins quinze heures d’activité hebdomadaire."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Accès au logement – Supprimer les frais de notaire à hauteur de 15 000 euros pour les primo-accédants qui achètent un bien de moins de 250 000 euros."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Aides sociales – Rendre leur versement automatique dès 2025."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Assurance-chômage – Mettre en place une nouvelle réforme de l’assurance-chômage le 1er juillet 2024 par décret."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Temps de travail – Expérimenter la semaine de quatre jours pour les salariés qui ne peuvent pas télétravailler."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Congé de naissance – Créer un congé de naissance mieux indemnisé pour que les deux parents puissent passer les premiers mois avec leur enfant."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Retraites – Relavoriser les retraites au niveau de l’inflation."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Accès au logement – Interdire l’obtention d’un logement social aux personnes qui ont un « casier judiciaire long comme le bras »."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Aides sociales – Réserver les prestations sociales, selon les cas, aux personnes de nationalité française ou qui ont travaillé au moins cinq ans en France."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Assurance-chômage – Annuler la réforme de l’assurance-chômage."
  },
  {
    categoryId: "social",
    categoryName: "Social",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Retraites – Permettre à ceux qui ont commencé à travailler avant 20 ans et qui disposent de quarante annuités de partir à la retraite à 60 ans et abroger la réforme votée en 2023 ; mettre en place un calendrier progressif pour revenir à l’âge légal de départ à la retraite à 62 ans et à un nombre de quarante-deux annuités de cotisation, « après la consultation de l’audit budgétaire »."
  },
  {
    categoryId: "services-publics",
    categoryName: "Services publics",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Effectifs – Augmenter les effectifs de l’hôpital public, de la santé et du médico-social, de l’école publique, de la justice ainsi que dans les services et les agences de l’Etat."
  },
  {
    categoryId: "services-publics",
    categoryName: "Services publics",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Salaires – Revaloriser les métiers et les salaires."
  },
  {
    categoryId: "services-publics",
    categoryName: "Services publics",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Accessibilité – Garantir l’accès aux services publics en faisant en sorte que personne ne puisse habiter à moins de trente minutes d’un guichet."
  },
  {
    categoryId: "services-publics",
    categoryName: "Services publics",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Accessibilité – Créer une maison France Services dans chaque canton, avec un objectif de 3 000 maisons d’ici à 2027."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Coût de la scolarité – Baisser le coût de la rentrée scolaire pour les familles avec l’achat groupé de fournitures scolaires (pour une réduction estimée à 15 % des dépenses)."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Autorité des professeurs – Instaurer un contrat parents/école pour affirmer l’autorité des professeurs sur les élèves."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Crous – Maintenir le repas à 1 euro dans les Crous pour les étudiants boursiers."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Ecrans et réseaux sociaux – Interdire le téléphone portable aux moins de 11 ans et les réseaux sociaux avant 15 ans."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Service national universel – Généraliser le SNU d’ici à 2026."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Choc des savoirs – Abroger la réforme dite du « choc des savoirs » voulue par Gabriel Attal et réduire les effectifs par classe sous la moyenne européenne de 19 élèves."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Coût de la scolarité – Engager les « premiers pas pour la gratuité intégrale à l’école » : cantine scolaire, fournitures, transports, activités périscolaires."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Crous – Mettre en place le repas à 1 euro dans les restaurants universitaires."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Enseignement supérieur – Supprimer le système d’orientation Parcoursup et la sélection dans l’université publique."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Handicap – Créer un service public d’accompagnement des élèves en situation de handicap."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Petite enfance – Ouvrir 500 000 places en crèches (ou autres solutions de garde)."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Service national universel – Supprimer le SNU."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Uniforme – Instaurer un uniforme au primaire et au collège."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Collège – Remplacer le collège unique par un collège « modulaire » pour orienter les élèves plus tôt et insérer certains élèves plus tôt sur le marché du travail."
  },
  {
    categoryId: "education",
    categoryName: "Education",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Ecrans et réseaux sociaux – Interdire le téléphone portable dans les établissements scolaires, y compris les lycées."
  },
  {
    categoryId: "sante",
    categoryName: "Santé",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Aide médicale de l’Etat – La maintenir et garantir l’accès à ce droit."
  },
  {
    categoryId: "sante",
    categoryName: "Santé",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Déserts médicaux – Réguler l’installation des médecins dans les déserts médicaux et rétablir des permanences de soin dans les centres de santé."
  },
  {
    categoryId: "sante",
    categoryName: "Santé",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Médicaments – Créer un pôle public du médicament avec renforcement des obligations de stocks."
  },
  {
    categoryId: "sante",
    categoryName: "Santé",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Sport – Augmenter le montant du Pass’Sport à 150 euros et étendre son utilisation au sport scolaire ; développer des maisons sport-santé et rembourser le sport sur ordonnance."
  },
  {
    categoryId: "sante",
    categoryName: "Santé",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Aide médicale de l’Etat – La restreindre aux soins urgents."
  },
  {
    categoryId: "sante",
    categoryName: "Santé",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Déserts médicaux – Favoriser l’installation de médecins dans les déserts médicaux."
  },
  {
    categoryId: "sante",
    categoryName: "Santé",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Accès aux soins – Créer une mutuelle publique à 1 euro par jour pour les retraités, les étudiants, les indépendants et les demandeurs d’emploi qui n’en ont pas. Permettre aux pharmaciens, aux sages-femmes, aux infirmiers, aux opticiens et aux orthophonistes d’effectuer des actes médicaux du quotidien."
  },
  {
    categoryId: "sante",
    categoryName: "Santé",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Aide médicale de l’Etat – La maintenir."
  },
  {
    categoryId: "sante",
    categoryName: "Santé",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Déserts médicaux – Doubler, d’ici à 2027, le nombre de médecins formés et instaurer un système garantissant un médecin de garde pour tous à moins de trente minutes du domicile dès l’été 2024."
  },
  {
    categoryId: "sante",
    categoryName: "Santé",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Handicap – Rembourser intégralement l’achat de fauteuils roulants."
  },
  {
    categoryId: "sante",
    categoryName: "Santé",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Aide médicale de l’Etat – La réformer pour qu’elle ne prenne en charge que les urgences vitales."
  },
  {
    categoryId: "sante",
    categoryName: "Santé",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Déserts médicaux – Exonérer les médecins d’impôt sur le revenu dans le cadre du cumul emploi-retraite."
  },
  {
    categoryId: "institutions",
    categoryName: "Institutions",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Référendum – Instaurer un référendum d’initiative citoyenne."
  },
  {
    categoryId: "institutions",
    categoryName: "Institutions",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Modes de scrutin – Instaurer une forte dose de proportionnelle aux élections législatives."
  },
  {
    categoryId: "institutions",
    categoryName: "Institutions",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Fonction publique – Interdire « certains postes stratégiques » aux binationaux, pour éviter « des risques d’ingérence »."
  },
  {
    categoryId: "institutions",
    categoryName: "Institutions",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Proportionnelle – Emmanuel Macron se dit toujours favorable à l’instauration d’une dose de proportionnelle aux élections législatives, mais l’idée d’une révision constitutionnelle est, pour l’heure, écartée."
  },
  {
    categoryId: "institutions",
    categoryName: "Institutions",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Modes de scrutin – Instaurer la proportionnelle aux élections législatives."
  },
  {
    categoryId: "institutions",
    categoryName: "Institutions",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Référendum – Instaurer un référendum d’initiative citoyenne."
  },
  {
    categoryId: "institutions",
    categoryName: "Institutions",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Usage du 49.3 – Abroger l’article 49.3 de la Constitution qui permet de faire adopter des textes sans vote du Parlement."
  },
  {
    categoryId: "institutions",
    categoryName: "Institutions",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "VIe République – Instaurer une VIe République au moyen d’une assemblée constituante citoyenne élue."
  },
  {
    categoryId: "institutions",
    categoryName: "Institutions",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Religion – Introduire dans la Constitution une règle « interdisant de se prévaloir de sa religion ou de son origine pour ne pas respecter les lois de la République »."
  },
  {
    categoryId: "international",
    categoryName: "International",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Ukraine – Fournir « un soutien [financier] massif à l’Ukraine ». Refuser son adhésion à l’Union européenne."
  },
  {
    categoryId: "immigration",
    categoryName: "Immigration",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Asile et immigration – Faciliter les expulsions de délinquants et criminels islamistes étrangers, en levant les contraintes administratives."
  },
  {
    categoryId: "immigration",
    categoryName: "Immigration",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Droit du sol – Le supprimer."
  },
  {
    categoryId: "immigration",
    categoryName: "Immigration",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Séjour irrégulier – Rétablir le délit de séjour irrégulier, supprimé en 2012 et qui avait été réintroduit par un article de la récente loi « immigration » finalement censuré par le Conseil constitutionnel."
  },
  {
    categoryId: "immigration",
    categoryName: "Immigration",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Asile et immigration – Proposer une réforme constitutionnelle pour protéger les frontières."
  },
  {
    categoryId: "immigration",
    categoryName: "Immigration",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Asile et immigration – Abroger les lois relatives à l’asile et l’immigration votées pendant les quinquennats d’Emmanuel Macron."
  },
  {
    categoryId: "immigration",
    categoryName: "Immigration",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Climat – Créer un statut de déplacé climatique."
  },
  {
    categoryId: "immigration",
    categoryName: "Immigration",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Régularisation – Faciliter l’accès aux visas, régulariser les travailleurs, les étudiants et les parents d’enfants scolarisés et instituer la carte de séjour de dix ans comme titre de séjour de référence."
  },
  {
    categoryId: "policeJustice",
    categoryName: "Police / Justice",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Justice des mineurs – Supprimer l’excuse de minorité pour les plus de 16 ans, afin qu’ils puissent être jugés comme des personnes majeures."
  },
  {
    categoryId: "policeJustice",
    categoryName: "Police / Justice",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Contrôles policiers – Mettre en place des récépissés dans le cadre des contrôles d’identité, réviser la doctrine sur l’ouverture du feu « pour que cessent les morts pour refus d’obtempérer » et interdire la reconnaissance faciale."
  },
  {
    categoryId: "policeJustice",
    categoryName: "Police / Justice",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Police – Rétablir la police de proximité et maintenir l’ensemble des gendarmeries. Mettre en place un nouveau code de déontologie des forces de l’ordre."
  },
  {
    categoryId: "policeJustice",
    categoryName: "Police / Justice",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Violences policières – Supprimer l’IGPN et l’IGGN afin de les remplacer par un nouvel organisme indépendant rattaché à la Défenseure des droits. Interdire l’usage des LBD et des grenades mutilantes."
  },
  {
    categoryId: "policeJustice",
    categoryName: "Police / Justice",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Justice des mineurs – Supprimer les allocations aux parents de mineurs récidivistes ; supprimer l’excuse de minorité pour les plus de 16 ans, afin qu’ils puissent être jugés comme des personnes majeures ; instaurer des peines d’incarcération courtes dans des centres éducatifs fermés."
  },
  {
    categoryId: "policeJustice",
    categoryName: "Police / Justice",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Peines planchers – Rétablir les peines planchers, via une nouvelle loi sur la sécurité."
  },
  {
    categoryId: "policeJustice",
    categoryName: "Police / Justice",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Police – Instaurer une présomption de légitime défense pour les membres des forces de l’ordre."
  },
  {
    categoryId: "policeJustice",
    categoryName: "Police / Justice",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Contrôles policiers – Recruter d’anciens militaires, policiers et inspecteurs des impôts pour réprimer les incivilités et la délinquance du quotidien."
  },
  {
    categoryId: "policeJustice",
    categoryName: "Police / Justice",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Justice des mineurs – Réformer la justice des mineurs."
  },
  {
    categoryId: "policeJustice",
    categoryName: "Police / Justice",
    partyId: "LR",
    partyName: "Les Républicains",
    text: "Peines planchers – Rétablir les peines planchers et créer des peines de prison immédiatement applicables."
  },
  {
    categoryId: "outreMer",
    categoryName: "Outre-Mer",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Nouvelle-Calédonie – Emmanuel Macron a suspendu, en juin, le projet de révision constitutionnelle permettant le dégel du corps électoral, sans y renoncer à moyen terme."
  },
  {
    categoryId: "outreMer",
    categoryName: "Outre-Mer",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Nouvelle-Calédonie – Organiser un nouveau référendum sur l’indépendance dans une quarantaine d’années ; poursuivre le processus de réforme constitutionnelle visant au dégel du corps électoral."
  },
  {
    categoryId: "outreMer",
    categoryName: "Outre-Mer",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Crise de l’eau – Organiser la distribution de bouteilles d’eau et plafonner le prix de l’eau dans les zones où le service d’eau potable est défaillant."
  },
  {
    categoryId: "outreMer",
    categoryName: "Outre-Mer",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Nouvelle-Calédonie – Abandonner le processus de réforme constitutionnelle visant au dégel immédiat du corps électoral."
  },
  {
    categoryId: "outreMer",
    categoryName: "Outre-Mer",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Pollution – Créer un fonds d’indemnisation de prévention contre les pollutions pour les victimes du chlordécone et des algues sargasses. Investir dans la dépollution et la décontamination des sols et des eaux."
  },
  {
    categoryId: "outreMer",
    categoryName: "Outre-Mer",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Prix – Renforcer le « bouclier qualité prix » et réglementer les tarifs de desserte aérienne."
  },
  {
    categoryId: "cultureMedias",
    categoryName: "Culture et Médias",
    partyId: "ENSEMBLE",
    partyName: "Ensemble",
    text: "Audiovisuel public – Réformer l’audiovisuel public en réunissant France Télévisions et Radio France dans un même groupe."
  },
  {
    categoryId: "cultureMedias",
    categoryName: "Culture et Médias",
    partyId: "RN",
    partyName: "Rassemblement National",
    text: "Audiovisuel public – Privatiser l’audiovisuel public."
  },
  {
    categoryId: "cultureMedias",
    categoryName: "Culture et Médias",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Audiovisuel public – Conforter le service public de l’audiovisuel en instaurant un financement pérenne pour remplacer la redevance, supprimée en 2022."
  },
  {
    categoryId: "cultureMedias",
    categoryName: "Culture et Médias",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Financement – Renforcer le budget public attribué à l’art, à la culture et à la création, pour le porter à 1 % du budget de l’Etat."
  },
  {
    categoryId: "cultureMedias",
    categoryName: "Culture et Médias",
    partyId: "NFP",
    partyName: "Nouveau Front Populaire",
    text: "Régulation – Exclure des aides publiques les médias « condamnés pour incitation à la haine ou atteinte à la dignité des personnes »."
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