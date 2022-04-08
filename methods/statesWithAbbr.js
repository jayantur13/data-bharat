const jarray = require("../data/states");

let data = jarray.getAllData();

/**
 * Get states name with abbreviation and full name
 * @param {*} stringify [String] takes y(yes) or n(no) or ()
 * @example - Usage
 const call = require('./dataIndia')
 //Or directly import the method name

 //No param defaults to raw JSON data
 console.log(call.statesWithAbbr())

 //Param y for stringify data
 console.log(call.statesWithAbbr('y'))

 //Param n for raw data
 console.log(call.statesWithAbbr('n'))
 * @returns raw or stringified JSON data
 * @link https://github.com/jayantur13/data-bharat
 */
const statesWithAbbr = (stringify) => {
  let rdata = [];
  if (stringify != null && stringify != "") {
    if (stringify === "y") {
      data.forEach((val) => {
        rdata.push({
          id: val.id,
          abbr: val.placeShortName,
          fullname: val.placeFullName,
          isStateUt: val.stateUt,
        });
      });
      return JSON.stringify(rdata);
    } else if (stringify === "n") {
      data.forEach((val) => {
        rdata.push({
          id: val.id,
          abbr: val.placeShortName,
          fullname: val.placeFullName,
          isStateUt: val.stateUt,
        });
      });
      return rdata;
    } else {
      if (stringify === "Y" || stringify === "N") {
        return "Pass only small y or small n as param";
      }
    }
  } else {
    data.forEach((val) => {
      rdata.push({
        id: val.id,
        abbr: val.placeShortName,
        fullname: val.placeFullName,
        isStateUt: val.stateUt,
      });
    });
    return rdata;
  }
};

/**
 * Get single state with abbreviation and full name
 * @param {*} searchterm [String] takes state name
 * @param {*} stringify [String] takes y(yes) or n(no)
 * @example - Usage
 const call = require('./dataIndia')
 //Or directly import the method name

 //Valid use #1,return raw json
 console.log(call.stateWithAbbr('Assam'))

 //Valid use #2,return json stringified
 console.log(call.stateWithAbbr('Assam','y'))

 //Valid use #3,return raw json
 console.log(call.stateWithAbbr('Assam','n'))
 * @link https://github.com/jayantur13/data-bharat
 * @returns raw or stringified JSON data
 */
const stateWithAbbr = (searchterm, stringify) => {
  let rdata = [];
  let datacheck = [];
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
        abbr: val.placeShortName,
        state: val.placeFullName,
        stateUt: val.stateUt,
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
        abbr: val.placeShortName,
        state: val.placeFullName,
        stateUt: val.stateUt,
      });
    });
    return rdata;
  } else {
    if (searchterm == null && stringify == null) {
      return "Please pass both search term and stringify";
    } else {
      return "Check one or both missing search term or stringify should be y or n";
    }
  }
};

module.exports = {
  stateWithAbbr,
  statesWithAbbr,
};
