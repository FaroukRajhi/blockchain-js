const SHA256 = require('crypto-js/sha256')
class Block
{
    /*
    Each Block object takes in timestamp and block data.
    */
    constructor(timestamp, data)
    {
        this.index = 0;
        this.timestamp = timestamp; /* Shows when the block was created. */
        this.data = data;
        this.previousHash = "0";
        this.hash = this.calculateHash(); /* The hash of the previous block maintains the integrity of the chain. Derived from a calculateHash function */
        this.nonce = 0;
    }

    /* We will use this function to give each block its own hash */
    calculateHash()
    {
        return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString();
    }


    mineBlock(difficulty)
    {
        
    }
}