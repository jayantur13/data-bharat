const { getRawData } = require("./methods/getRawData");
const { statesAndDistricts } = require("./methods/statesAndDistricts");
const { statesCapitalslnk, stateCapitallnk } = require("./methods/statesCapitalslnk");
const { statesWithAbbr, stateWithAbbr } = require("./methods/statesWithAbbr");
const { statesWithCapital, stateWithCapital } = require("./methods/statesWithCapital");
module.exports = {
  getRawData,
  statesAndDistricts,
  stateCapitallnk,
  statesCapitalslnk,
  statesWithAbbr,
  stateWithAbbr,
  statesWithCapital,
  stateWithCapital,
};
