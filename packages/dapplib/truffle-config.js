require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth soccer purpose hockey enter off stock'; 
let testAccounts = [
"0xf96b0f55e9a1c684aac1e303111b215135581a063ef19f6332451a746f88de4d",
"0x6aab5573573f85b9aa31e4084e619cea46edda0415c7ff7180744de16f15b8d3",
"0x8ddc6d10e637c62ef883a5ee2472a608a1b748dd273f370b62ece1b0386ff702",
"0x1cbc14822e42d467aa30a06e0ed742ce0ec4b94ffdd7e08cf4477cc36ec54e8a",
"0x7be08a7bd88f43dc9d8e8ddbc6ba3ddcca20eca6935e934115ec3592fa750a52",
"0x76f643a575860d359b189f20474ecc33a38c7dcee5f4d80241a75a8562a7a219",
"0x67fef93e777c2e9afa8c22e3edf08f4620fb56c7a42c46736fd409ed5433598f",
"0x0be164a7b5e3bda4d8549c180b233061e826c9cdb490c5e1e9d06e20b7f846a1",
"0xe29b16224bf13babcb422cc8693ce8a0241f093c1e3c217bd8506f5c3f1698c0",
"0x62f6e5716263ded629a03f56310f944bcdedd35de8737544ff1780a0f57b45f0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

