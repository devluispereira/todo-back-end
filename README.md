# Projeto To Do - NODE JS 
Projeto simples de implementação de um TO DO list .


# Arquitetura

A Arquitetura do projeto foi baseada na arquitetura em camadas , simplificando o uso.
## Camadas

### Services 

Responsável pela regra de negócio e validações.

### Repositories

Responsável pelas busca de dados . 

### Client

Responsável pelas comunição externa da aplicação. No momento apenas com o client de banco . 

### Lib 

Fornece ferramentas para facilitar algums implemtações, como middlewares e utils . 


### Config

Aloca as configurações da aplicação. 


# Implementações futuras e justificativas .


Devido ao tempo para executar o projeto , alguns assuntos não foram executados. Tais como :
- Testes: Os testes foram implementados apenas na cadama de serviço devido ao tempo para contrução do projeto.
- Teste de rotas .  
- Ferramentas de observabilidades. 
- Cache nas camadas mais externas da aplicação.
- Circuit brakes.



# Como rodar o projeto.

## Requisitos
    
Caso use o nvm como gerenciador de versões do node use o comando :

    nvm use

Ou use a versão do node 16.

Use o arquivo .example.env para criar um copia do arquivo .env e preencha as variaveis

## Docker file.

O projeto possui o arquivo de Dockerfile para ambientes de docker .

Use o comando 

    docker build -t todo-app-be:1.0 .

Após criar a imagem, use o comando:

    docker run -d -p 5000:5000 app-ada-be:1.0