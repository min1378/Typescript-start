import * as CryptoJS from "crypto-js"; // Typescript import
class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  // sayHello = () => {return "Hello"} 이런 함수는 class를 생성했을 때만 호출할 수 있다.
  static calculateBlockHash = (
    // static은 class를 생성하지 않아도 클래스내에서 항상 호출 가능하다.
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
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

console.log(blockchain);
export {};
