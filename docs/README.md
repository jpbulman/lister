# Lister.JS
A library to make using lists in JavaScript easier.

## Getting Started

<!-- ## Create Lists
A series of functions that will produce lists. -->

<!-- ## List Properties

A list of function which, when given a list, will return some sort of value pertaining to a property of that list. -->

<!-- ## Modify Lists
A list of functions which, when given a list, will return a modified version of the list. -->

#### arraysAreEqual
Returns true if the array's contents are equal
```js
const oneToFour = lister.makeList(4, 1) // [1, 2, 3, 4]
const altOneToFour = [1, 2, 3, 4]
const why = lister.makeList(5, 0).pop() // [1, 2, 3, 4]
lister.arraysAreEqual(oneToFour, altOneToFour, why)
// true
```

#### cleanList
Removes any instances of null or undefined in a list
```js
lister.cleanList([1, null, 3, 5, undefined])
// [1, 3, 5]
```

#### count
Returns the number of times something appears in a list
```js
// Finds how many times 'the' is in the list
const dogStrArr = "the dog barks at the tree".split(" ")
lister.count(dogStrArr, "the")
// 2
```

#### flattenArray
Takes an array of items and lists and merges them all together into one single list
```js
lister.flattenArray([1, [2, 3, [4]], 5])
// [1, 2, 3, 4, 5]
```

#### includesAnd
Returns if the list contains all of the items in a given array
```js
const oneToFour = lister.makeList(4, 1) // [1, 2, 3, 4]
const twoAndFour = [2, 4]
lister.includesAnd(oneToFour, twoAndFour)
// true
```

#### includesOr
Returns if the list contains at least one of the items in a given array
```js
const oneToFour = lister.makeList(4, 1) // [1, 2, 3, 4]
const twoAndFive = [2, 5]
// Checks to see if either 2 or 5 are in the list
lister.includesOr(oneToFour, twoAndFive)
// true
```

#### indicesWhere
Returns a list of indices of the elements that satisfy a boolean function
```js
const oneToTen = [0, 2, 3, 9, 4, -2]
lister.indicesWhere(oneToTen, (el) => el % 2 === 0)
// [0, 1, 4, 5]
```

#### listTail
Gets the last <i>n</i> elements in a given list.
```js
// Gets the last 2 items
lister.listTail([1, 1, 2, 3, 5, 8], 2)
// [5, 8]
```

#### makeList
Builds a list that is n items long with a given procedure. 
```js
// Gets the first 5 even numbers, starting at 0
lister.makeList(5, 0, (el) => el % 2 === 0)
// [0, 2, 4, 6, 8]
```

#### mean
Returns the average of a list of numbers
```js
const oneToHund = lister.makeList(100, 1)
lister.mean(oneToHund)
// 50
```

#### median
Returns the median of a list of numbers
```js
const list = [8, 6, 7]
lister.median(list)
// 7

const evenList = [5, 3, 0, 9]
lister.median(evenList)
// 4
```

#### mode
Returns the number(s) that appears most in the list.
```js
const list = [2, 2, 3, 1, -5, 3, 0]
lister.mode(list)
// [2, 3]
```

#### peek
Returns the value of the last element in the array without removing it, like .pop() would
```js
lister.peek([1, 2, 3, 4])
// 4
```

#### removeAllDuplicates
Removes all duplicated items in the list. Preserves the first instance of each unique item.
```js
lister.removeAllDuplicates([1, 4, 1, 5, 9, 9])
// [1, 4, 5, 9]
```

#### removeAllInstancesOf
Removes every instance of the given item from the given list
```js
const list = [2, 2, 3, 3, 4, 0]
lister.removeAllInstancesOf(list, 2)
// [3, 3, 4, 0]
```

#### removeIf
Removes any items from the list if they return ```true``` for the given condition method
```js
const list = lister.makeList(5, 1) // [1, 2, 3, 4, 5] 
lister.removeIf(list, (el) => el % 2 === 0)
// [1, 3, 5]
```

#### replaceAllInstancesOf
Replaces all instances of the given item with the given replace item in the given list.
```js
const list = lister.makeList(4, 1) // [1, 2, 3, 4]
lister.replaceAllInstancesOf(list, 2, 0)
// [1, 0, 3, 4]
```

#### sum
Returns the sum of all of the elements of the list
```js
const oneToHund = lister.makeList(100, 1)
lister.sum(oneToHund)
// 5050
```