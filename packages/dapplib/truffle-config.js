require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remain evil install fork suspect taxi'; 
let testAccounts = [
"0xb0fe3fd971d467ddae3893dcb3bfa01bfc28b6df5add25f11b52c3a234ebcd48",
"0x582b92c57ec4a04a1c4ddf684b7a0c64d3b981e1178b0f62e868505758eeaa41",
"0x27e9221dc16bc8d7803a8db3a1e90754f845dc825174982590d52110860b513e",
"0xc545c51253164247266269c2c77714633943fe50b3b8b4249de1489789b9b5f3",
"0x4f1b9c5fdda56ce0851457600d958250507a2a4d10f736f698103321994caa38",
"0x4d48433382a4c3fcf157381cdb422d1a71ff79052af8a67e11c898590b78b164",
"0xfa5205e77f35808135339b6d2b12f6db8a4e441c0b323f72eb7a11194711acd9",
"0xf6798d96c2b78bf61fd818a7d8072d5718cab8ac690e202a53c5ff580ddd4c9e",
"0xbe1b9ee2c6bef4d5192c6531eb696ffcf55cb615e7b1ff9655169469a3d62b5a",
"0x783f5825119a219b4a10eeed6238be753fa582fd74833701b06c3e6167ca4959"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


