# Lister.JS

## Create Lists

### makeList
Builds a list that is n items long with a given procedure. 
```js
//Gets the first 5 even numbers
lister.makeList(5, (el) => el % 2 === 0)
//[0, 2, 4, 6, 8]
```