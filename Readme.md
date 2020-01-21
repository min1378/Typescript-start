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
  
- watch 모드로 실행하기 (매번 yarn start 치기 귀찮음...)

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
           "module": "commonjs", //  모듈 import
           "target": "ES2015", // 어떤 버전 javascript 쓸지
           "sourceMap": true,
           "outDir": "dist"
         },
         "include": ["src/**/*"], // 컴파일 과정에서 포함할 파일
         "exclude": ["node_modules"] // default로 제외시킨다.
       }
       ```
  
    4. dist 폴더 생성, src 폴더 생성 후 src폴더로 index.ts 이동
  
    5. yarn start 후 코드를 수정하면 dist 폴더에 저장된다.





