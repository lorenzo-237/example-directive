# Titre

Petit projet de test pour comprendre comment fonctionne remark directive et le hastscript avec la fonction visit qui semble être assez puissant.

## Infos

En JavaScript, les types primitifs (comme les chaînes de caractères, les nombres et les booléens) sont passés par valeur et non par référence. Cela signifie que lorsqu'un type primitif est passé en tant qu'argument à une fonction, une copie de sa valeur est créée et utilisée à l'intérieur de la fonction.

PS : les autres types sont donc passés par référence, c'est le principe de cette fonction visit()

## index.js

Dans le fichier index.js, j'ai essayé d'implementer ma propre fonction visit, pour comprendre commnent ça fonctionne avec remark directive

`node index.js`

## example.js

Dans le fichier example.js, j'ai récupéré un exemple basique de remark directive pour voir comment convertir le md => html facilement

## Notes

J'ai découvert que dans cette partie

```
data.hName = hast.tagName;
data.hProperties = hast.properties;
```

Je peux aussi construitre mes propre children avec cette notation 

```
data.hChildren = hast.children; // ou mettre mes propres children
```

C'est assez puissant

`node example.js`