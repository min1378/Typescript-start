# Typescript

- TypeScript = Language

- javascript와 호환됨.

- 타입스크립트는 '프로그래밍 언어'

- 타입스크립트는 'Compiled Language' 

  - 전통적인 Complied Language 와는 다른 점이 많다.

  - 그래서 'Transpile' 이라는 용어를 사용한다.

- 자바스크립트는 'Interpreted Language'

  |            Compiled             |      Interpreted       |
  | :-----------------------------: | :--------------------: |
  |         컴파일이 필요 O         |    컴파일이 필요 X     |
  |        컴파일러가 필요 O        |   컴파일러가 필요 X    |
  |        컴파일하는 시점 O        |   컴파일 하는 시점 X   |
  |         => 컴파일 타임          |                        |
  |     컴파일된 결과물을 실행      |    코드 자체를 실행    |
  | 컴파일된 결과물을 실행하는 시점 | 코드를 실행하는 시점 O |
  |                                 |       => 런타임        |



## 2. 개발환경 및 실행환경 구축

### 자바스크립트 실행환경 설치

1. node.js 설치

   - https://nodejs.org

2. npm

   - ```bash
     npm init -y
     npm i typescript
     ```

   - package.json

   - ```json
         "scripts": {
             "transpile": "tsc", // 추가
             "test": "echo \"Error: no test specified\" && exit 1"
         } 
     ```

   - 