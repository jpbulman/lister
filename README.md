[![Build Status](https://travis-ci.com/jpbulman/listerJS.svg?token=HvzeUFf9iuSD6ifqQNLz&branch=master)](https://travis-ci.com/jpbulman/listerJS)

## Installation
To install Lister, simply use

```
npm i lister
```

## Usage
```js
const lister = require('lister')
console.log(lister.makeList(7))
// [0, 1, 2, 3, 4, 5, 6]
```

## Documentation
https://jpbulman.github.io/listerJS/

Uses [docsify](https://github.com/docsifyjs/docsify).

To run and edit the docs locally, see ```docInstructions.md```

## Development Setup
After cloning the repo, run

```npm install```

to get all of the dependencies. 

## Testing
To run the test suite, simply run 

```npm test```

to make sure everything is still passing.