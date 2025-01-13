##### Autor: [Kauã Araújo Santos](https://www.linkedin.com/in/kau%C3%A3-ara%C3%BAjo-79b185233/)
##### Criado em: 12 de Janeiro de 2025


# Desafio NexBox - Pontos de Interesse por GPS
</br>
Este é um projeto desenvolvido como parte do processo seletivo da NexBox.

</br>

## Como executar o projeto com Docker

### Rodar o projeto com docker
```bash
$ docker-compose up -d
```

### Criar banco de dados no docker
```bash
$ docker exec -it app npx sequelize-cli db:create
```

### Migrate no banco de dados no docker
```bash
$ docker exec -it app npx sequelize-cli db:migrate
```
## Como executar o projeto forma tradicional

### Instalar dependências
```bash
npm install
```
### Criar banco de dados
```bash
$ npx sequelize-cli db:create
```
### Migrate no banco de dados no docker
```bash
$ docker exec -it app npx sequelize-cli db:migrate
```

## Melhorias futuras

- Implementar testes unitários e de integração.

## Agradecimentos

Agradeço a oportunidade de participar do processo seletivo da NextBox. Foi um desafio muito interessante e que me fez pensar em diversas soluções para os problemas propostos.
