# WHAT SHOULD I DO?
🥎 coding study
## stack
`React` `postcss` `youtube-api` `postman`

## learned

[DEMO](https://61e7fdcb95f0afd46c9f4361--start-coding.netlify.app)
### 1. Youtube api

- youtube api를 통해 영상과 영상의 정보들을 가지고 올 수 있습니다.
- 영상을 중점으로 한 프로젝트이다 보니 youtube api의 할당량이 넘어 영상을 불러올 수 없을 경우가 많았습니다. 처음에는 다른 구글 아이디를 사용하여 키를 새로 받았으나, 할당량을 계속 초과해 영상을 두개 정도만 받아와 작업하니 수월하게 할 수 있었습니다. 지금 생각해보면 데이터를 불 필요하게 계속 불러 쓰면서 작업했던 것 같습니다.

### 2. Postman

- `postman` : api 개발을 쉽게 구현할 수 있도록 하고 개발된 api를 테스트해 문서화를 도와주는 툴입니다.
- postman을 이용해 youtube api의 `videos` 와 `search` 를 각각 request로 불러왔습니다.
- 받아 온 데이터들을 다른 언어로도 변환해 받을 수 있어 편리합니다.
- api를 사용할 때 기능별로 컬렉션에 저장해 두면 프로젝트를 할 때 필요한 api를 꺼내어 사용할 수 있습니다.

### 3. Service logic

- 서비스를 관리하는 코드, 데이터를 포함하는 코드 내지는 사용자에게 시각적으로 표현되는 코드는 따로 관리되는 것이 좋습니다. 프로젝트가 커지면 커질수록, 웹페이지가 확장 될수록 한 곳에 코드를 관리하면 유지보수가 어렵고 그로 인해 잦은 에러를 맞을 수 있습니다.
- mvc 디자인 패턴은 module, view, controller 의 약자로 애플리케이션을 세가지의 역할로 구분한 개발 방법론입니다.
- 이 프로젝트에는 youtube api 를 사용하고 있습니다. mvc 관점으로 봤을 때 api 의 정보들을 가져오는 서비스 로직들은 view와 분리해 관리해야 합니다. api 를 관리하는 코드를 service 파일에 넣어 관리 해주었습니다.
- [MVC를 이해하기 위한 기술블로그 작성](https://usiyoung.github.io/2022/01/15/MVC/) 


