# my-vue-project

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

## 유다윗
- 어려웠던 점
  - vuex를 쓰지 않으니 형제 컴포넌트(레벨이 같은 컴포넌트) 간 데이터를 참조하는 게 너무 어려웠다. 컴포넌트가 3개 이상일 경우에는 웬만하면 vuex를 쓰는 게 낫다는 생각이 들었다.

- 배운 점
  - 지연 로딩을 할 때 상단에 해당 컴포넌트를 import 하지 않는다. 왜냐하면 지연 로딩 시 import가 이루어지기 때문이다.
  - created()가 실행되기 전에 태그에서 참조하는 data가 없는 상태라면 콘솔 창에 오류가 발생한다. 기능에는 문제가 없으나 에러 메시지는 발생시키지 않는 것이 좋으므로 옵션 체이닝이나 v-if를 통해 해당 문제를 해결한다.
  - array.filter: 특정 조건을 충족하는 원소만 가져올 때 for문으로 각각의 원소를 접근하는 게 아니라 filter를 써서 원하는 조건의 원소들만 추출한다.
  - json 형식에서 key를 타고 들어갈 때 '0'도 경로에 포함된다.
  - js의 비교 연산자 사용법: 한 번에 하나의 비교만 수행해야 한다. 따라서 특정 두 수의 사이에 포함되었는지 여부를 체크할 때 각각의 비교를 && 연산자로 묶는다.
  - _random 사용법: const randIdx=_.random(targetMovies.length-1)
  - 조건이 true인 경우에만 특정 속성에 값 부여: :class="{ 'is-watched': movie.isWatched }">