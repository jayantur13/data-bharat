const jarray = require("../data/states");

let data = jarray.getAllData();

/**
 * Get states with districts in it
 * @param {*} stringify [String] takes y(yes) or n(no) or ()
 * @example - Usage
 const call = require('./dataIndia')
 //Or directly import the method name

 //No param defaults to raw JSON data
 console.log(call.statesAndDistricts())

 //Param y for stringify data
 console.log(call.statesAndDistricts('y'))

 //Param n for raw data
 console.log(call.statesAndDistricts('n'))
 * @returns raw or stringified JSON data
 * @link https://github.com/jayantur13/data-bharat
 */
const statesAndDistricts = (stringify) => {
  let rdata = [];
  if (stringify != null && stringify != "") {
    if (stringify === "y") {
      data.forEach((elem) => {
        rdata.push({
          id: elem.id,
          fullname: elem.placeFullName,
          district: elem.district,
        });
      });
      return JSON.stringify(rdata);
    } else if (stringify === "n") {
      data.forEach((elem) => {
        rdata.push({
          id: elem.id,
          fullname: elem.placeFullName,
          district: elem.district,
        });
      });
      return rdata;
    } else {
      
    }
  }else {
    data.forEach((elem) => {
      rdata.push({
        id: elem.id,
        fullname: elem.placeFullName,
        district: elem.district,
      });
    });
    return rdata;
  }
};

module.exports = {
  statesAndDistricts,
};
