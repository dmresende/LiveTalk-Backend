# LiveTalk Backend

Este é o repositório do backend do projeto **LiveTalk**, uma plataforma de comunicação ao vivo que permite a interação em tempo real entre usuários.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de diretórios:

```
LiveTalk-Backend/
┣ node_modules/              # Módulos Node.js instalados
┣ src/                       # Código-fonte da aplicação
┃ ┣ adapters/               # Camada de adaptação
┃ ┃ ┗ controllers/          # Controladores da API
┃ ┃   ┗ userController.ts  # Controlador para gestão de usuários
┃ ┣ config/                 # Configurações do projeto
┃ ┃ ┗ connectionDB.ts       # Configuração da conexão com o banco de dados
┃ ┣ domain/                 # Domínio da aplicação
┃ ┃ ┣ entities/             # Entidades (ex: IUser.ts)
┃ ┃ ┣ interfaces/           # Interfaces (ex: userRepository.ts)
┃ ┃ ┗ useCases/             # Casos de uso (ex: getUserUseCase.ts)
┃ ┣ infrastructure/         # Infraestrutura
┃ ┃ ┣ database/             # Configurações de banco de dados (ex: User.ts)
┃ ┃ ┣ repositories/         # Repositórios (ex: userRepository.ts)
┃ ┃ ┗ webserver/            # Servidor e middlewares
┃ ┃   ┣ middlewares/       # Middlewares (ex: asyncHandler.ts)
┃ ┃   ┗ routes/             # Roteamento da API (ex: usersRoutes.ts)
┃ ┗ app.ts                  # Arquivo principal da aplicação
┣ .gitignore                # Arquivo de ignorar arquivos para o Git
┣ exemplo .env               # Arquivo de exemplo de variáveis de ambiente
┣ package-lock.json         # Arquivo gerenciado pelo npm
┣ package.json              # Configuração do projeto
┣ README.md                 # Este arquivo
┗ tsconfig.json             # Configuração do TypeScript
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
   npm start
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

## Licença

Este projeto está licenciado sob a ISC License. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Este é um guia básico para começar com o backend do projeto LiveTalk!