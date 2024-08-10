// truffle-config.js
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*", // Coincidir con cualquier id de red
        },
    },
    compilers: {
        solc: {
            version: "0.8.0", // Versión del compilador Solidity
        },
    },
};