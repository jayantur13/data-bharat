const jarray = require("../data/states");

let data = jarray.getAllData();

/**
 * Get raw list of all the data
 * @param {*} stringify [String] takes y(yes) or n(no) or ()
 * @example - Usage
 const call = require('./dataIndia')
 //Or directly import the method name

 //No param defaults to raw JSON data
 console.log(call.getRawData())

 //Param y for stringify data
 console.log(call.getRawData('y'))

 //Param n for raw data
 console.log(call.getRawData('n'))
 * @returns raw or stringified JSON data
 * @link https://github.com/jayantur13/data-bharat
 */
const getRawData = (stringify) => {
  let rdata = [];
  if (stringify != null && stringify != "") {
    if (stringify === "y") {
      data.forEach((elem) => {
        rdata.push({
          id: elem.id,
          abbr: elem.placeShortName,
          fullname: elem.placeFullName,
          statelnk: elem.placeWebsite,
          capital: elem.capital,
          capitallnk: elem.capitalWebsite,
          stateUt: elem.stateUt,
        });
      });
      return JSON.stringify(rdata);
    } else if (stringify === "n") {
      data.forEach((elem) => {
        rdata.push({
          id: elem.id,
          abbr: elem.placeShortName,
          fullname: elem.placeFullName,
          statelnk: elem.placeWebsite,
          capital: elem.capital,
          capitallnk: elem.capitalWebsite,
          stateUt: elem.stateUt,
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
        abbr: elem.placeShortName,
        fullname: elem.placeFullName,
        statelnk: elem.placeWebsite,
        capital: elem.capital,
        capitallnk: elem.capitalWebsite,
        stateUt: elem.stateUt,
      });
    });
    return rdata;
  }
};

module.exports = {
  getRawData,
};
