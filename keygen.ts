import {Keypair} from "@solana/web3.js";

let keypair = Keypair.generate();

console.log(`You've generated a new Solana wallet: ${keypair.publicKey.toBase58()} [${keypair.secretKey}]`);