/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 0,
      },
      metadata: {
        bytecodeHash: 'none',
      },
    },
  }
};
