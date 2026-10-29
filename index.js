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
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
}