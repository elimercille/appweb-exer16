# Revue de code du TP1 de Nicolas Gourgues

Fait par Elisabeth Mercille

## Le code

**Le code est-il lisible, clair ou est-il trop complexe ?**

Le code est bien lisible selon moi, je comprends bien ce que l'élève voulait accomplir dans tous les composents. Je suggèrerais peut-être l'utilisation de scripts pour certaines choses réutilisables, par exemple définir l'interface d'un produit.

**Le code est-il conforme aux [bonnes pratiques de programmation](https://appweb.progwmj.ca/documentations/bonnes-pratiques/code) ?**

Dans son projet, l'élève a un fichier vide qui aurait dû être supprimé puisqu'il est inutile. Le code est bien découpé avec des composents pour chaque fonctionnalités du projet.

**Le code est-il conforme aux [normes et standards de programmation](https://appweb.progwmj.ca/documentations/normes) ?**

Les noms des composants ne contiennent pas le mot "Component" ou "Composant" dans leurs noms, ce qui ne respecte pas les standards de la programmation avec Vue.js. De plus, le camelCase a bien été utilisé pour le nommage de variables, fonctions et instances. Par contre, j'ai trouvé dans un composant une classe css non utilisée.

```js{4}
 <form
    @submit.prevent="ajouterProduit"
    novalidate
    class="needs-validation was-validated"
  >
```

## Autres

**Est-ce qu'un algorithme peut être amélioré ?**

Je trouve les algorithmes tous bien implémentés, ils ont tous un but précis.

```js{4}
const modifierProduit = ({
  index,
  produit,
}: {
  index: number;
  produit: { nom: string; description: string; prix: number; quantite: number };
}) => {
  produits.value[index] = produit;
};

const ajouterProduit = (produit: {
  nom: string;
  description: string;
  prix: number;
  quantite: number;
}) => {
  produits.value.push(produit);
};
```
