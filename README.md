<p align="center"><img src="https://cdn.imgpaste.net/2022/04/09/KYmZZS.md.png"/></p>
<p align="center"> 
  <img src="https://img.shields.io/npm/l/data-bharat?style=flat-square"/>
  <img src="https://img.shields.io/bundlephobia/min/data-bharat?style=flat-square"/>
  <img src="https://img.shields.io/npm/v/data-bharat?style=flat-square"/>
  <img src="https://img.shields.io/npm/dm/data-bharat?style=flat-square"/>
  <img src="https://img.shields.io/jsdelivr/npm/hm/data-bharat?style=flat-square"/>
  <img src="https://img.shields.io/snyk/vulnerabilities/npm/data-bharat?style=flat-square"/>
</p>
<p align="center"><b>Get states,districts,Ut's and capitals etc,you'll get data in raw/stringified JSON format</b></p>
<hr>

# Features And Methods

- statesWithAbbr/stateWithAbbr - returns state abbreviation,name and is a state or ut
- statesWithCapital/stateWithCapital - returns state and its capital
- statesCapitalslink/stateCapitallnk - returns state,its website,capital and its website
- statesAndDistricts - returns states and their districts
- getRawData - returns complete non-manipulated data

# Installation

```
//Using npm
npm install data-bharat

//Using yarn
yarn add data-bharat
```

# Examples

- getRawData() - @param stringify [String] takes y(yes) or n(no) or ()

```
const call = require('./dataIndia')
//Or directly import the method name

//No param defaults to raw JSON data
console.log(call.getRawData())

//Param y for stringify data
console.log(call.getRawData('y'))

//Param n for raw data
console.log(call.getRawData('n'))
```

- statesWithAbbr - @param stringify [String] takes y(yes) or n(no) or ()

```
const call = require('./dataIndia')
//Or directly import the method name

//No param defaults to raw JSON data
console.log(call.statesWithAbbr())

//Param y for stringify data
console.log(call.statesWithAbbr('y'))

//Param n for raw data
console.log(call.statesWithAbbr('n'))
```

- stateWithAbbr
  @param - searchterm [String] takes state name
  @param - stringify [String] takes y(yes) or n(no)

```
const call = require('./dataIndia')
//Or directly import the method name

//Valid use #1,return raw json
console.log(call.stateWithAbbr('Assam'))

//Valid use #2,return json stringified
console.log(call.stateWithAbbr('Assam','y'))

//Valid use #3,return raw json
console.log(call.stateWithAbbr('Assam','n'))
```

#### Similarly,try and use other methods

> ### You can get more documentation while using the method on hover

### Using this package in your project ? Want to get added here ? Drop a message. 👍

### You can make contributions without breaking changes.Please read the <a href="https://github.com/jayantur13/data-bharat/blob/master/CODE_OF_CONDUCT.md">Code-Of-Conduct</a>

### License <a href="https://github.com/jayantur13/data-bharat/blob/master/LICENSE">MIT</a>. Please, attribute me and this repo if you use it for any of your purpose

### Last Updated: 08-04-2022
