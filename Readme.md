# react-sample
 
react scaffolding project 

### react installation 

```
// install react, react-dom, typescript 
npx create-react-app my-react --template typescript
```

### installed library

bootstrap@5.0.0-alpha2 : https://v5.getbootstrap.com/

```aidl
npm i bootstrap@next
```


### reference link 

react
- https://ko.reactjs.org/

typescript 
- https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

mobx 
- https://mobx.js.org/README.html
- https://mobx.js.org/react-integration.html
mobx-react-light
- https://github.com/mobxjs/mobx-react-lite

mobx ex
- https://woowabros.github.io/experience/2019/01/02/kimcj-react-mobx.html

class vs functino component
- https://velog.io/@sdc337dc/0.%ED%81%B4%EB%9E%98%EC%8A%A4%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8
- https://overreacted.io/ko/how-are-function-components-different-from-classes/

HoC
- https://reactjs.org/docs/higher-order-components.html

test
- https://jestjs.io/docs/en/tutorial-react
- https://testing-library.com/docs/example-react-router

react-typescript
- https://velog.io/@velopert/create-typescript-react-component
- https://github.com/typescript-cheatsheets/react

react-mobx-typescript
- https://velog.io/@honeysuckle/MobX%EB%A5%BC-React-Hooks-TypeScript-%EC%99%80-%ED%95%A8%EA%BB%98-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%EB%B0%A9%EB%B2%95#edit-srccitytsx-2

cra (Create React App) 
- https://github.com/facebook/create-react-app
- add ts : https://create-react-app.dev/docs/adding-typescript
- add router : https://create-react-app.dev/docs/adding-a-router

react-router
- https://reactrouter.com/web/guides/quick-start

plyfill
- https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md

production build
- https://create-react-app.dev/docs/production-build

route based code splitting
- https://reactjs.org/docs/code-splitting.html#route-based-code-splitting

mobx project structure
```
Stores

Domain Stores
stores the data which'll be needed in your app.
for ex. user data
View Stores
stores the data which'll be needed to present your app
for ex. loading, error variables
Models

Here you can define the data models
for ex- user model
Services

Here you can make services, api calls
Components

Container or Smart Component
Dumb or presentational component
```

atomic design
- https://brunch.co.kr/@ultra0034/63