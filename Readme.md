# E-Sivana - Filtre de Grossièretés en Malgache

**E-Sivana** est une bibliothèque Node.js légère conçue pour filtrer et censurer les gros mots en malgache. Utilisez-la pour garantir un langage approprié dans vos applications.

## Fonctionnalités

- **Détection de Profanités** : Identifie les mots offensants dans une chaîne de texte.
- **Censure** : Remplace les mots offensants par des étoiles (`****`).
- **Personnalisation** : Ajoutez ou retirez des mots de la liste des gros mots.

## Installation

Pour installer la bibliothèque, exécutez la commande suivante :

```bash
npm install Esivana
```

## Utilisation

### Exemple de Censure

```javascript
const Filter = require('Esivana');

const filter = new Filter();

const text = "Masosopory ianareo jiaby";
const censoredText = filter.censor(text);

console.log(censoredText); // ******** ianareo jiaby
```

### Ajouter ou Retirer des Mots

```javascript
// Ajouter des mots à la liste des gros mots
filter.addWords('tay');
console.log(filter.censor('Hoano ny tay')); //Hoano ny ***

// Retirer des mots de la liste des gros mots
filter.removeWords('kindy');
console.log(filter.censor('Raha kindy ny olona')); // Raha kindy ny olona
```