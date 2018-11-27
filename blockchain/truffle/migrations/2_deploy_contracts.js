var FlightTicket = artifacts.require("FlightTicket");

module.exports = function(deployer) {
  deployer.deploy(FlightTicket);
};
