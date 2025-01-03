# LiveTalk Backend

Este é o repositório do backend do projeto **LiveTalk**, uma plataforma de comunicação ao vivo que permite a interação em tempo real entre usuários.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de diretórios:

```
LiveTalk-Backend/
┣ src/
┃ ┣ controller/
┃ ┃ ┗ userController.ts
┃ ┣ data/
┃ ┃ ┣ database/
┃ ┃ ┃ ┗ db.ts
┃ ┃ ┗ repositories/
┃ ┃   ┗ UserRepository.ts
┃ ┣ domain/
┃ ┃ ┣ Entities/
┃ ┃ ┃ ┗ User.ts
┃ ┃ ┣ repositories/
┃ ┃ ┃ ┗ IUserRepository.ts
┃ ┃ ┗ usecases/
┃ ┃   ┗ getUserByIdUseCase.ts
┃ ┗ app.ts
┣ package-lock.json
┣ package.json
┣ readme.md
┗ tsconfig.json
```

## Scripts

- **`start`**: Inicia o servidor usando o `nodemon`, monitorando mudanças em arquivos TypeScript e recompilando automaticamente.
- **`build`**: Compila o TypeScript em JavaScript para produção.
- **`test`**: Comando base para testes (não configurado).

## Configuração

1. Copie o arquivo `exemplo .env` para um novo arquivo `.env`.
2. Configure as variáveis de ambiente conforme necessário (ex: `MONGO_URI` para conexão com o banco de dados).

## Como rodar o projeto

1. Clone o repositório:

   ```bash
   git clone [URL_DO_REPOSITÓRIO]
   cd LiveTalk-Backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   npm run dev
   ```

4. Acesse a API em `http://localhost:3000`.

## Estrutura de Diretórios

- **src/adapters/controllers**: Lógica de controle para as requisições da API.
- **src/domain/entities**: Definições de entidades e interfaces.
- **src/infrastructure/database**: Configuração e modelos de dados (Mongoose).
- **src/infrastructure/repositories**: Implementação de repositórios para comunicação com o banco de dados.
- **src/infrastructure/webserver/routes**: Definição das rotas da API.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir pull requests.
