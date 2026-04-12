# Terres du Nord 🌍 Blog de voyage

Un blog de voyage consacré à la Scandinavie et aux pays nordiques. Ce projet offre aux utilisateurs une expérience interactive leur permettant d'explorer diverses destinations de voyage à travers des récits de voyage et des images époustouflantes. Il comprend une carte du monde interactive, des récits de voyage détaillés et une interface conviviale.
Pour le moment, retrouvez le récit de mon voyage en Islande. Suivront ceux à Oslo (Norvège) et à Stockholm (Suède).  

## 🚀 Principales fonctionnalités

- **Carte du monde interactive** : explorez les destinations grâce à des repères interactifs sur une carte du monde. 🗺️
- **Récits de voyage détaillés** : récits de voyage quotidiens approfondis avec descriptions et images. 📝
- **Galeries d'images** : présente des images de haute qualité de chaque voyage. 🖼️
- **Fenêtre modale** : affiche clairement les images et vidéos en plein écran. 🖼️🎬
- **Navigation** : navigation facile entre les jours d'un voyage. 🧭
- **Conception réactive** : garantit une expérience de visualisation optimale sur tous les appareils. 📱💻

## 🛠️ Stack Technique

- **Frontend** :
  - HTML5 : pour structurer les pages web.
  - Sass (Syntactically Awesome Style Sheets) : Un préprocesseur CSS. Il permet d'utiliser des fonctionnalités avancées comme les variables, les mixins et l'imbrication (nesting) pour une gestion plus modulaire et efficace des styles.
  Le fichier final est compilé en CSS3 (dans `styles/main.css`).
  - JavaScript : pour les éléments interactifs et le contenu dynamique :
    - `script/navbar.js` : gère l'état actif des boutons de navigation.
    - `script/modal.js` : implémente la fenêtre modale pour l'affichage des images et des vidéos.

## 📦 Pour commencer / Instructions de configuration

### Prérequis
- Un navigateur web (par exemple, Chrome, Firefox, Safari).
- Un éditeur de texte ou un IDE (par exemple, VS Code, Sublime Text).

### Installation

1.  **Clonez le dépôt :**

    ```bash
    git clone <repository_url>
    cd terres-du-nord
    ```

2.  **Ouvrez `index.html` dans votre navigateur :**

    Double-cliquez simplement sur le fichier `index.html` pour l'ouvrir dans votre navigateur web.

### Exécution locale

Aucune étape supplémentaire n'est nécessaire pour exécuter le projet localement. Le projet est conçu pour être ouvert directement dans un navigateur web sans avoir besoin d'un serveur local.

## 💻 Structure du projet

```
Terres-du-Nord/
├── img/                # Contient toutes les ressources multimédias
├── script/             # Contient tous les fichiers JavaScript
│   ├── modal.js        # Gère la fenêtre modale
│   └── navbar.js       # Gère les interactions de la barre de navigation
├── styles/             # Contient les sources Sass et le CSS compilé
│   ├── animations/     # Règles spécifiques pour les animations
│   │   └── _keyframes.scss
│   ├── modules/        # Styles pour les composants et éléments réutilisables
│   │   ├── _navbar.scss
│   │   └── _photos.scss
│   ├── pages/          # Styles spécifiques à chaque page (si nécessaire)
│   │   ├── _reset.scss
│   │   ├── _config.scss
│   │   ├── _index.scss
│   │   └── _islande.scss
│   ├── main.scss       # Fichier principal Sass qui importe tous les autres fichiers
│   └── main.css        # Fichier CSS final compilé (résultat)
├── index.html          # Page d'accueil du site
├── islande.html        # Exemple de page secondaire
└── README.md           # Ce fichier
```

## 📸 Captures d'écran

<img width="1469" height="793" alt="Capture d’écran 2025-12-15 à 21 58 05" src="https://github.com/user-attachments/assets/7fc6876e-b511-44eb-ac3d-732691002042" />
<img width="1470" height="797" alt="Capture d’écran 2025-12-15 à 21 58 20" src="https://github.com/user-attachments/assets/35081e29-5097-43cc-bfcc-5b5d78a84be7" />

## 📬 Contact

Pour toute question ou commentaire, vous pouvez me contacter : [bureau.lisa03@gmail.com]

## 💖 Remerciements

Merci d'avoir consulté le projet de blog de voyage Terres du Nord ! J'espère que vous le trouverez instructif et inspirant.
