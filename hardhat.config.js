require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url:"https://eth-rinkeby.alchemyapi.io/v2/6ROYU7R-eojzFc308AtWLYQssFg3xuB2",
      accounts: ["f71453a73ca4e4a5784281c9f17e0f3946303a306066e59e6abef7656c95d587"],
    },
  },
};

//NFT Contract Address: 0xaE3288C99ecD89e6cf5031914C89A0F1F0991Ca9