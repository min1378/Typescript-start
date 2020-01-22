# TypeChain

Learning Typescript by making a Blockchain with it



## 개발환경 설정

- ``pakage.json`` 생성

    ```bash
    $ yarn init
    ```
``pakage.json``

    ```json
    {
    "name": "typechain",
    "version": "1.0.0",
    "description": "Learning Typescript by making a Blockchain with it",
    "main": "index.js",
    "repository": "https://github.com/min1378/Typescript-start.git",
    "author": "min1378 <qwes123@naver.com>",
    "license": "MIT"
    }
    ```
    
- ``typescript `` 설치

    ```bash
    $ yarn add typescript // typescript 설치.
    ```

- ``tsconfig.json`` 생성

    - typescript의 설정 입력하는 파일.

    ```json
{
      "compilerOptions": {
        "module": "commonjs",
        "target": "ES2015",
        "sourceMap": true
      },
      "include": ["index.ts"],
      "exclude": ["node_modules"]
    }
    ```
    - "compilerOptions"
      - module : import할 모듈
      - target : 어떤 javascript 버전을 쓸 것인지
    - "include" : 컴파일 과정에서 포함할 파일
    - "exclude" : default로 제외시킨다.
- index.ts 생성

  ```typescript
  console.log("Hello");
  ```

  ```bash
  $ tsc // yarn start
  ```

  ``pakage.json``

  ```json
  {
    "name": "typechain",
    "version": "1.0.0",
    "description": "Learning Typescript by making a Blockchain with it",
    "main": "index.js",
    "repository": "https://github.com/min1378/Typescript-start.git",
    "author": "min1378 <qwes123@naver.com>",
    "license": "MIT",
    "scripts": {
      "start": "node index.js", 
      "prestart": "tsc" 
    },
    "dependencies": {
      "typescript": "^3.7.5"
    }
  }
  ```
  - "start" : "node index.js"  
    - yarn start = node index.js 와 같다.
  - "prestart" : "tsc" 
    - start 이전에 prestart가 실행되는데 그 때 실행되는 tsc 

- index.ts를 컴파일하면 index.js.map index.js 파일이 생성된다. 이는 node.js는 js 확장자만 이해할 수 있기 때문.

## Typescript 시작하기

- typescript 기본 형식

    ```typescript
    const name = "윤성민",
      age = 24,
      gender = "male";

    const sayHi = (name, age, gender) => {
        //(name, age, gender?) 물음표가 붙은 인자는 선택사항.
      console.log(`Hello ${name}, you are ${age}, you are ${gender}`);
    };

    sayHi(name, age, gender);
    sayHi(name, age); // Expected 3 arguments, but got 2. 컴파일이 되지 않음
    // javascript 였다면 실행되고 you are undefined 라 떴을 것.
    export {};
    ```
    
- vscode에서 TSLint 익스텐션 활용하면 자동으로 Lint 해줌.    

- 인수에 타입 지정하기

  ```typescript
  const sayHi = (name: string, age: number, gender: string): void => {
      // function = (인수 : type): 함수의 type => {}
    console.log(`Hello ${name}, you are ${age}, you are ${gender}`);
  };
  
  sayHi("윤성민", 24, "male");
  
  export {};
  ```
  
- watch 모드로 실행하기 (매번 yarn start 치기 귀찮음... watch가 알아서 확인해준다.)

  1. tsc-watch 설치

   ```bash
     $ yarn add tsc-watch --dev
   ```

    2.  pakage.json 수정

       ```json
       {
         "name": "typechain",
         "version": "1.0.0",
         "description": "Learning Typescript by making a Blockchain with it",
         "main": "index.js",
         "repository": "https://github.com/min1378/Typescript-start.git",
         "author": "min1378 <qwes123@naver.com>",
         "license": "MIT",
         "scripts": {
           "start": "tsc-watch --onSuccess \" node dist/index.js\" "
         },
         "dependencies": {
           "typescript": "^3.7.5"
         },
         "devDependencies": {
           "tsc-watch": "^4.0.0"
         }
       }
       ```

    3. tsconfig.json 수정

       ```json
       {
         "compilerOptions": {
           "module": "commonjs",
           "target": "ES2015", 
           "sourceMap": true,
           "outDir": "dist"
         },
         "include": ["src/**/*"],
         "exclude": ["node_modules"]
       }
       ```

    4. dist 폴더 생성, src 폴더 생성 후 src폴더로 index.ts 이동

    5. yarn start 후 코드를 수정하면 dist 폴더에 저장된다.

       

- 오브젝트를 인수로 받는 함수.

  ```typescript
  interface Human {
    name: string;
    age: number;
    gender: string;
  }
  // interface는 js에서 작동하지 않는다. 오로지 ts에서 쓰기 위한 것.
  const Person = {
    name: "윤성민",
    age: 24,
    gender: "male"
  };
  const sayHi = (Person: Human): void => {
    console.log(
      `Hello ${Person.name}, you are ${Person.age}, you are ${Person.gender}`
    );
  };
  
  sayHi(Person);
  
  export {};
  ```

  

- Javascript에 interface를 넣고 싶을 때 Class를 활용.

  ```typescript
  class Human {
    public name: string; // js에선 public, private 구분이 없다
    public age: number; // private은 외부에서 변경할 수 없거나 호출하지 못하게 할때 쓴다.
    // 만약 
    // private age: number; 라면 sayHi 함수에서 Person.age로 호출 할 수 없다.
    public gender: string;
    constructor(
      name: string,
      age: number,
      gender: string //constructor는 클래스가 시작할 때 호출됨.
    ) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }
  const lynn = new Human("Lynn", 18, "female");
  const sayHi = (Person: Human): void => {
    console.log(
      `Hello ${Person.name}, you are ${Person.age}, you are ${Person.gender}`
    );
  };
  
  sayHi(lynn);
  
  export {};

  ```
  

## 블록체인 만들기

- 블록만들기

  ```typescript
  class Block {
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
  let blockChain: Block[] = [genesisBlock];
  blockChain.push("이건될까?"); // Argument of type '"이건될까?"' is not assignable to parameter of type 'Block'.
  console.log(blockChain);
  export {};
  ```
  
- crpyto.js 설치(Hash함수로 간편하게 바꿔주는 라이브러리)

  ```bash
  $yarn add crypto-js
  ```
  
- class 내에 Hash를 만드는 함수 생성.

  ```typescript
  import * as CryptoJS from "crypto-js"; // Typescript import 방식
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
  ```

- 블록체인 정보를 생성하는 함수 구현

  ```typescript
  const genesisBlock: Block = new Block(0, "123124234234", "", "Hello", 123456);
  
  let blockchain: Block[] = [genesisBlock];
  
  const getBlockchain = (): Block[] => blockchain;
  
  const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
  
  const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);
  ```

- 새로운 블록을 생성하는 함수 

  ```typescript
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
    return newBlock;
  };
  console.log(createNewBlock("Hello"), createNewBlock("bye bye"));
  // 결과값
  Block {
    index: 1,
    hash: '685697b2297986aff9736e7a65ecf8201f1f25f23d37638b2aff317b2c0e71bd',
    previousHash: '123124234234',
    data: 'Hello',
    timestamp: 1579659163
  } Block {
    index: 1,
    hash: '1569c770c844d7db0ce06788eb5b7c3b228835d287f176ffa18191903164c622',
    previousHash: '123124234234',
    data: 'bye bye',
    timestamp: 1579659163
  }
  // index가 변하지않는 오류가 있다. timestamp도 같다...
  ```

  

