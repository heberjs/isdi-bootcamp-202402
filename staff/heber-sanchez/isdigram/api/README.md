# API

## endpoints

- register user

```sh

🐖 curl -X POST -H "Content-Type: application/json" -d '{"name":"Pepito Grillo","birthdate":"2000-01-01","email":"pepito@grillo.com","username":"pepitogrillo","password":"123123123"}' http://localhost:8080/users -v
```

- login user



-logout user

```sh
curl -X PATCH -H "Content-Type: application/json" -d '{"status":"offline"}' http://localhost:8080/users/ojcfb9ylqi9 -v

```

