const jarray = require("../data/states");

let data = jarray.getAllData();

/**
 * Get states and their capitals
 * @param {*} stringify [String] takes y(yes) or n(no) or ()
 * @example - Usage
 const call = require('./dataIndia')
 //Or directly import the method name

//No param defaults to raw JSON
console.log(call.statesWithCapital())

//Param y for stringified JSON
console.log(call.statesWithCapital('y'))

//Param n for raw JSON
console.log(call.statesWithCapital('n'))
 * @returns raw or stringified JSON data
 * @link https://github.com/jayantur13/data-bharat
 */
const statesWithCapital = (stringify) => {
  let rdata = [];
  if (stringify != null && stringify != "") {
    if (stringify === "y") {
      data.forEach((elem) => {
        rdata.push({
          id: elem.id,
          state: elem.placeFullName,
          capital: elem.capital,
        });
      });
      return JSON.stringify(rdata);
    } else if (stringify === "n") {
      data.forEach((elem) => {
        rdata.push({
          id: elem.id,
          state: elem.placeFullName,
          capital: elem.capital,
        });
      });
      return rdata;
    } else {
      if (stringify === "Y" || stringify === "N") {
        return "Pass only small y or small n as param";
      }
    }
  } else {
    data.forEach((elem) => {
      rdata.push({
        id: elem.id,
        state: elem.placeFullName,
        capital: elem.capital,
      });
    });
    return rdata;
  }
};

/**
 * Get single state and its capital
 * @param {*} searchterm [String] takes state name
 * @param {*} stringify [String] takes y(yes) or n(no)
 * @example - Usage
 const call = require('./dataIndia')
 //Or directly import the method name

 //Valid use #1,return raw json
 console.log(call.stateWithCapital('Assam'))

 //Valid use #2,return json stringified
 console.log(call.stateWithCaptial('Assam','y'))

 //Valid use #3,return raw json
 console.log(call.stateWithCapital('Assam','n'))
 * @link https://github.com/jayantur13/data-bharat
 * @returns dirty or stringified JSON data
 */
const stateWithCapital = (searchterm, stringify) => {
  let datacheck = [];
  let rdata = [];
  if (
    searchterm != null &&
    stringify === "y" &&
    stringify != stringify.toUpperCase()
  ) {
    datacheck.push(data.find((search) => search.placeFullName === searchterm));
    if (datacheck === undefined) return "Please check entered searchterm";
    datacheck.forEach((val) => {
      rdata.push({
        id: val.id,
        state: val.placeFullName,
        capital: val.capital,
      });
    });
    return JSON.stringify(rdata);
  } else if (
    searchterm != null &&
    stringify === "n" &&
    stringify != stringify.toUpperCase()
  ) {
    datacheck.push(data.find((search) => search.placeFullName === searchterm));
    if (datacheck === undefined) return "Please check entered searchterm";
    datacheck.forEach((val) => {
      rdata.push({
        id: val.id,
        state: val.placeFullName,
        capital: val.capital,
      });
    });
    return rdata;
  } else {
    if (searchterm == null && stringify == null) {
      return "Please pass both search term and stringify";
    } else {
      return "Check one or both missing search term and stringify(y or n)";
    }
  }
};

module.exports = {
  stateWithCapital,
  statesWithCapital,
};
