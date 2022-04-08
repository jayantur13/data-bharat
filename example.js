//Way of importing methods
//For documentation,try and hover
const call = require("./dataIndia");
const {
  getRawData,
  statesAndDistricts,
  statesWithAbbr,
  stateWithAbbr,
} = require("./dataIndia");
const rd = require("./methods/getRawData"); //or import any other method
const dd = require("./dataIndia").getRawData();

//Valid ways of using methods
console.log(call.getRawData()); //or call any other method
//console.log(statesAndDistricts())
//console.log(rd.getRawData())
//console.log(dd)
