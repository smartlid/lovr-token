const Token = artifacts.require("LOVR");

module.exports = function (deployer) {
  deployer.deploy(Token);
};
