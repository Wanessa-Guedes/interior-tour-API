<h1 align=center> API DOCUMENTATION </h1>

<p align="center">
  <a href="https://github.com/Wanessa-Guedes/interior-tour-API.git">
  <img src="https://i.imgur.com/2UyYmmd.png" alt="readme-logo" width="80" height="80">
  </a>
  <div align="center">
    IMG FONT: (<a href="https://www.flaticon.com/br/icones-gratis/brasil" title="brasil ícones">Brasil ícones criados por Freepik - Flaticon</a>)
  </div>
  <h3 align="center">
    INTERIOR TOUR
  </h3>
</p>

## Usage

```bash
$ git clone https://github.com/Wanessa-Guedes/interior-tour-API.git

$ cd $nome-repositorio

$ npm install

$ npx prisma migrate dev

$ npx prisma generate

$ npx prisma db seed

$ npm run dev
```

API:

```bash
- AUTH ROTAS 

- POST /sign-in
    - Rota para logar no site
    - headers: {}
    - body: {"email": "teste@teste.com",
             "password": "teste"}
    
- POST /sign-up
    - Rota para realizar cadastro no site
    - headers: {}
    - body: {"email": "teste@teste.com",
             "userName": "teste",
             "profilepicture": "http://img.jpg",
             "password": "teste",
             "confirmpassword": "teste"}            
```

```bash
- ACCOUNT ROTA

- GET /infoaccount (autenticada)
    - Rota para obter as informações do usuário
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {}

```

```bash
- MAIN PAGE ROTA

- GET /main
    - Rota para listar as informações das cidades
    - headers: {}
    - body: [{}]
    
- GET /state/:stateId/cities
    - Rota para listar as informações das cidades de um determinado estado
    - headers: {}
    - body: [{}]
    
```

```bash
- SEARCH BAR ROTA
    
- POST /searchstate
    - Rota para listar as informações dos estados  
   - headers: {}
    - body: {"state": "nome do estado"}  
 
 ```
 ```bash
-  DISCOVERY CITY ROTA
  
  - GET /city/:cityId
    - Rota para listar as informações de uma determinada cidade
    - headers: {}
    - body: {}
``` 

 ```bash
-  COMMENTS ROTA
  
  - POST /infocity/insertComment/:cityId
    - Rota para postar um comentário sobre uma cidade
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {"comment": "comentário sobre a cidade"}
 
- GET /infocity/comments/:cityId
    - Rota para obter um comentários sobre uma cidade
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {}
    
- PUT /infocity/update/:commentId
    - Rota para atualizar um comentário sobre uma cidade
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {"comment": "comentário sobre a cidade"}
    
- DELETE /infocity/delete/:commentId
    - Rota para deletar um comentário sobre uma cidade
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {}
``` 

 ```bash
-  FAVORITE ROTA
  
- POST /main/:cityId/favorite
    - Rota para favoritar uma cidade
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {}
 
- POST /main/:cityId/unfavorite
    - Rota para desfavoritar uma cidade
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {}
    
- GET /main/favorites
    - Rota para obter as cidades favoritadas pelo usuário
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {}
``` 

 ```bash
-  LIKE ROTA
  
- POST /main/:cityId/like
    - Rota para curtir uma cidade
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {}
 
- POST /main/:cityId/dislike
    - Rota para descurtir uma cidade
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {}
    
```

 ```bash
-  VISITED ROTA
  
- POST /main/:cityId/visited
    - Rota para selecionar que já visitou uma cidade
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {}
 
- POST /main/:cityId/unvisited
    - Rota para desselecionar que já visitou uma cidade
    - headers: {"Authorization": "Bearer ${token}"}
    - body: {}
    
```
