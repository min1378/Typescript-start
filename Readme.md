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

    ``tsconfig.json``

    ```json
    {
      "compilerOptions": {
        "module": "commonjs", //  모듈 import
        "target": "ES2015", // 어떤 버전 javascript 쓸지
        "sourceMap": true
      },
      "include": ["index.ts"], // 컴파일 과정에서 포함할 파일
      "exclude": ["node_modules"] // default로 제외시킨다.
    }
    
    ```

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
      "start": "node index.js", // yarn start = node index.js 와 같다.
      "prestart": "tsc" // start 이전에 prestart가 실행되는데 그 때 실행되는 tsc
    },
    "dependencies": {
      "typescript": "^3.7.5"
    }
  }
  ```

- index.ts를 컴파일하면 index.js.map index.js 파일이 생성된다. 이는 node.js는 js 확장자만 이해할 수 있기 때문.

