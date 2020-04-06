[![Build Status](https://travis-ci.com/jpbulman/listerJS.svg?token=HvzeUFf9iuSD6ifqQNLz&branch=master)](https://travis-ci.com/jpbulman/listerJS)

## Installation
To install Lister, simply use

```
npm i lister
```

## Usage
```js
const lister = require('lister')
console.log(lister.makeList(4))
// [0, 1, 2, 3]
```

## Documentation
Uses [docsify](https://github.com/docsifyjs/docsify).

Currently not deployed, but can be run locally; see ```docInstructions.md```.

## Development Setup
After cloning the repo, run

```npm install```

to get all of the dependencies. 

## Testing
To run the test suite, simply run 

```npm test```

to make sure everything is still passing.