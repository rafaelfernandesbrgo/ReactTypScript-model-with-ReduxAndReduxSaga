In this repository there is a functional model of a React application with typing (TypeScript) and a very useful folder structure, using Redux and Redux-Saga, as well as other technologies.

A simple catalog structure is implemented, loaded with a FAKE API and a shopping cart with a list of items stored in a global state.

Technologies used:

   * To react
   * Redux: to deal with global states
   * Typscript: to type
   * Immer: to simplify the code without reducer
   * Redux Saga: to deal with asynchronous middlawes
   * Json-Server: to emulate a REST API
   * Styled-components: although the purpose of this project is not styling, this one to give a basic and understandable interface
    
I found this publication interesting since this structure, in addition to being organized and easy to understand, is also quite scalable and reusable for large projects.

The Redux folder structure (Flux architecture):

* modules: each global state is a module
    * cart
        * actions: as actions that the reducer will hear
        * reducer: listens to actions and manipulates the global state, also sets the initial state of the global
        * sagas: define which action should be performed after another, that is, the middleware, in this case functions with asynchronous requests (Redux Saga)
        * types: typing the state of this module and the action
    * rootReducers: join (combine) the module states in the global
    * rootSaga: configure Redux Saga middleware
* index: define global state, apply middleware

Instructions for use:

```

  yarn install
  yarn server
  yarn start
 
```

I know that Redux is a technology that can be replaced by more modern technologies such as API Context and many others, however, the market still uses this type of library (Redux), in addition to being very useful and performance in situations with complex global states. since it allows a granularization of the state.

This was a project carried out during the classes taught at https://github.com/Rocketseat.

***

(pt-br)

Nesse repositório há um modelo funcional de uma aplicação React com tipagem(TypeScript) e um estrutura bastante útil de pastas, usando Redux e Redux-Saga, bem como outras tecnologias. 

É implementado uma estrutura simples de catálogo carregadas de uma FAKE API e um carrinho de compras com uma listagem de itens armazenadas em um estado global.

Tecnologias usadas:

   * React
   * Redux: para lidar com estados globais
   * Typscript: para tipar
   * Immer: para simplificar o código no reducer
   * Redux Saga: para lidar com middlawes assíncronos
   * Json-Server: para emular uma API REST
   * Styled-components: ainda que o propósito desse projeto não seja a estilização, essa para dar uma interface básica e compreensível
    
Achei interessante essa publicação visto que essa estrutura, além de organizada e fácil a compreensão, é também bastate escalonável e reutilizável para grandes projetos.

A estrutura de pastas do Redux (arquitetura Flux):

* modules: cada estado global é um modulo
    * cart
        * actions: as ações que o reducer ouvirá
        * reducer: fica ouvindo ações e manipulando estado globais, também seta o estado inicial do global
        * sagas: define qual ação deve ser executada após uma outra, isto é, os middlewares, nesse caso funções com requisições assíncronas (Redux Saga)
        * types: ipagem do estado desse modulo e da action
    * rootReducers: junta(combina) os estados do modulo no global
    * rootSaga: configura o middlewares do Redux Saga
* index: define estado global, aplica middlewares

Instruções de usos:

```

  yarn install
  yarn server
  yarn start
 
```

Sei que Redux é uma tecnologia que pode ser substituida por tecnologias mais modernas como API Context e muitas outras, no entanto, o mercado ainda utiliza esse tipo de biblioteca (Redux), além de ser bastante útil e performático em situações com estados globais complexas uma vez que permite a granularização do estado.

Este foi um projeto realizado durante as aulas ministradas em https://github.com/Rocketseat.


