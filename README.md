# mypjt

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## hs

### 들어가기 앞서

영화정보를 제공하는 SPA를 각종 플러그인을 사용하며 api를 axios get하는 과정을 통해 만드는 프로젝트였다. 여러 분들의 도움을 받아 무사히 완성할 수 있었다. 추가로 Live share 기능을 통해 실시간으로 vscode로도 두 명이 같이 수정을 할 수 있었던 점은 편했다. 본인은 최고 평점 영화 출력 및, 랜덤 영화 한 개 출력 부분의 컴포넌트를 만들기를 맡았으나 역시 여러 군데서 도움을 받은 끝에야 완성할 수 있었다. 다윗님에게 심심한 감사를 남기고 싶다.

### 컴포넌트 구조

router링크에 직접 연결된 Movie, Random, WatchList는 views에, 이들의 자식 컴포넌트들은 components에 만들고 name을 정하고 import 하는 등의 과정을 통해 SPA와 컴포넌트들의 구조를 만들었다. (index.js까지)딱 여기까지는 쉬웠다.

- 외워 두어야 할 것: 
  
  ```bash
  npm install axios, bootstrap, _
  ```
  
  등의, run serve하기 전에 필요한 패키지 설치할 것, lodash의 경우 cdn이 작동을 안 하는 경우가 있었다.

### 최고 평점 영화 출력

views의 MovieView의 자식으로 MovieCard가 있었다. 개인적으로는 가장 어려운 파트였다.

MovieView에서 For문을 돌며 MovieCard에게 정보중의 일부부만 prop하고 MovieCard를 불러오는 부분이 상당히 골치가 아팠다. 막상 API들은 예전에 했던 기억도 나고 tmdb사이트가 워낙 친절하게 제공해주기도 해서 금방 가져올 수 있었다.

- 기억할 것:
  
  ```html
  <MovieCard
          v-for= "(result,index) in results" 
          :key="index"
          :result="result"
          />
  ```
  
  위와 같이 vue 컴포넌트를 불러오는 태그 내에서 v-for문과 prop을 동시에 처리할 수 있다.
  
  ```html
  <div class="container">
        <div class='row'>
  ```
  
  위와 같이 card list역할을 할 container 안에 MovieCard를 담는다.
  
  ```html
  <div class="col-4 card h-25">
      <div class="h-25">
        <img :src="`https://image.tmdb.org/t/p/original/${result.poster_path}`" class="card-img-top" height="500">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{result.original_title}}</h5>
        <p class="card-text">{{result.overview}}</p>
      </div>
    </div>
  ```
  
  위와 같이 card를 만들 수 있었다. card의 부트 스트랩 속성으로 높이를 맞출수도 있었는데 신기하군요.

### 보고 싶은 영화 등록/ 현재 날씨에 따른 영화

보고 싶은 영화 등록은 todo list 작성과 거의 같았다. 눌렀을 때 line-through css를 주는 것은  click event에 함수로 !를 활용해서 만들 수 있었다. 현재 날씨에 따른 영화 추천은 마찬가지로 weather api를 받아서 그 날씨(weather.main.id?)에 따른 추천 장르들을 골라서 그 장르에 맞는 results를 필터링해서 lodash로 랜덤으로 반환했다. 갖가지 플러그인과 api가 섞인 재밌는 문제였다. 
