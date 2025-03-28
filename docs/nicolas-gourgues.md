# Revue de code du TP1 de Elisabeth Mercille

Fait par Nicolas Gourgues

## Le code

Le code est-il lisible, clair ou est-il trop complexe ?

**Le code est très lisible et clair et l'organisation des "components" est logique et intuitive. Il n'y as pas vraiment de passages qui mériterait d'être changé.**

Le code est-il conforme aux [bonnes pratiques de programmation](https://appweb.progwmj.ca/documentations/bonnes-pratiques/code) ?

**Oui, le code respecte bien les normes de programmation. Il est bien indenté et les défférentes fonctionnalités sont bien séparés en "components". Le code utilise bien les concepts des emit(s) et props.**

```js{4}
const props = defineProps<{
  product: Product;
}>();

const emit = defineEmits<{
  (e: "modifyProduct", product: Product): void;
  (e: "cancelModify"): void;
}>();
```

Le code est-il conforme aux [normes et standards de programmation](https://appweb.progwmj.ca/documentations/normes) ?

**Oui, le code est bien conforme aux normes et standards de programmation. Il y as seulement le nom des Components qui ne "respecte" pas les recommandations de nomenclature sur le site du cours.**
