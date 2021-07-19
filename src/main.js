const{Blockchain, Transaction} = require('./blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('20dd33d52b39cd0560284bb69227a3734fe91138a0a28a662ba05ef17aa37d36');
const myWalletAddress = myKey.getPublic('hex');

const blocks = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
blocks.addTransaction(tx1);


console.log('\nStrating the miner..');
blocks.minePendingTransactions(myWalletAddress);


console.log('\nBalance of vidhi is',blocks.getBalanceOfAddress(myWalletAddress));

// blocks.chain[1].transactions[0].amount = 1;

console.log('Is chain valid? ',blocks.isChainValid());

              
