import * as CryptoJS from "crypto-js"; // Typescript import
class Block {
  // sayHello = () => {return "Hello"} 이런 함수는 class를 생성했을 때만 호출할 수 있다.
  static calculateBlockHash = (
    // static은 class를 생성하지 않아도 클래스내에서 항상 호출 가능하다.
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (anyBlock: Block): boolean =>
    typeof anyBlock.index === "number" &&
    typeof anyBlock.hash === "string" &&
    typeof anyBlock.previousHash === "string" &&
    typeof anyBlock.data === "string" &&
    typeof anyBlock.timestamp === "number";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}
const genesisBlock: Block = new Block(0, "123124234234", "", "Hello", 123456);
let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const previousHash: string = previousBlock.hash;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousHash,
    newTimeStamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousHash,
    data,
    newTimeStamp
  );
  addBlock(newBlock);
  return newBlock;
};

const getHashforBlock = (anyBlock: Block): string =>
  Block.calculateBlockHash(
    anyBlock.index,
    getLatestBlock().hash,
    anyBlock.timestamp,
    anyBlock.data
  );

const isBlockVaild = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (candidateBlock.index !== previousBlock.index + 1) {
    return false;
  } else if (candidateBlock.previousHash !== previousBlock.hash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isBlockVaild(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};
createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");
console.log(blockchain);
export {};
