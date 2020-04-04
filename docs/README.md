# Lister.JS
A library to make using lists in JavaScript easier.

## Create Lists
A series of functions that will produce lists.

### makeList
Builds a list that is n items long with a given procedure. 
```js
// Gets the first 5 even numbers
lister.makeList(5, (el) => el % 2 === 0)
// [0, 2, 4, 6, 8]
```

## List Properties

A list of function which, when given a list, will return some sort of value pertaining to a property of that list.

### listTail
Gets the last <i>n</i> elements in a given list.
```js
// Gets the last 2 items
lister.listTail([1, 1, 2, 3, 5, 8], 2)
// [5, 8]
```

### count
Returns the number of times something appears in a list
```js
// Finds how many times 'the' is in the list
const dogStrArr = "the dog barks at the tree".split(" ")
lister.count(dogStrArr, "the")
// 2
```