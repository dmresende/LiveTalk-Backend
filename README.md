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
   git clone https://github.com/dmresende/LiveTalk-Backend.git
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


## Temporário até ser criado repositorio mobileExpo

### **Cadastro de Usuários - Backend**  
**🎯 Objetivo:**  
Permitir que novos usuários se cadastrem no sistema por meio de uma rota de API, armazenando os dados no banco de dados MongoDB.  

**📋 Etapas:**  
1. Criar uma rota para cadastro de usuários no backend utilizando Node.js e Express.  
2. Validar os dados de entrada (nome, username, senha) antes de salvar.  
3. Armazenar os dados no banco de dados MongoDB.  
4. Retornar um feedback indicando sucesso ou falha no cadastro.  

---

### **Tela de Cadastro - Frontend (Expo)**  
**🎯 Objetivo:**  
Permitir que novos usuários se cadastrem utilizando uma interface no aplicativo.  

**📋 Etapas:**  
1. Criar uma tela de cadastro no app utilizando React Native (Expo).  
2. Adicionar campos para nome, username e senha, com validações básicas no frontend.  
3. Integrar a tela com a API de cadastro de usuários.  
4. Exibir mensagens de sucesso ou erro com base na resposta da API.  

---

### **Autenticação de Usuário - Backend**  
**🎯 Objetivo:**  
Implementar a funcionalidade de login, permitindo que apenas usuários autenticados acessem a aplicação.  

**📋 Etapas:**  
1. Criar uma rota de API para login no backend.  
2. Utilizar a biblioteca Passport.js para controle de acesso às rotas privadas.  
3. Validar as credenciais fornecidas (username e senha).  
4. Retornar um token ou sessão em caso de sucesso, e uma mensagem de erro em caso de falha.  

---

### **Tela de Login - Frontend (Expo)**  
**🎯 Objetivo:**  
Desenvolver uma interface de login para autenticar os usuários no aplicativo.  

**📋 Etapas:**  
1. Criar uma tela de login utilizando React Native (Expo).  
2. Adicionar campos para username e senha.  
3. Conectar a tela à API de autenticação.  
4. Implementar redirecionamento para a tela de chat após login bem-sucedido.  
5. Exibir mensagens de erro caso o login falhe.  

---

### **Chat em Tempo Real - Backend**  
**🎯 Objetivo:**  
Implementar a funcionalidade de troca de mensagens em tempo real entre usuários.  

**📋 Etapas:**  
1. Configurar o backend com o Socket.IO para comunicação em tempo real.  
2. Criar rotas para envio e recebimento de mensagens.  
3. Armazenar as mensagens no banco de dados MongoDB para persistência.  
4. Garantir a comunicação em tempo real entre usuários conectados.  

---

### **Tela de Chat - Frontend (Expo)**  
**🎯 Objetivo:**  
Desenvolver uma interface de chat para troca de mensagens em tempo real.  

**📋 Etapas:**  
1. Criar uma tela de chat utilizando React Native (Expo).  
2. Implementar a integração com o backend via Socket.IO.  
3. Exibir mensagens enviadas e recebidas em tempo real.  
4. Adicionar entrada de texto para envio de novas mensagens.  

---

### **Notificações de Novas Mensagens - Backend**  
**🎯 Objetivo:**  
Notificar usuários sobre novas mensagens recebidas.  

**📋 Etapas:**  
1. Implementar notificações em tempo real para mensagens recebidas usando Socket.IO.  
2. Configurar o envio de eventos para notificar clientes conectados.  

---

### **Notificações de Novas Mensagens - Frontend (Expo)**  
**🎯 Objetivo:**  
Exibir notificações no aplicativo ao receber mensagens novas.  

**📋 Etapas:**  
1. Configurar o recebimento de notificações de novas mensagens via Socket.IO.  
2. Implementar exibição de notificações no frontend, mesmo que o usuário esteja fora da tela de chat.  

---

### **Lista de Usuários Online/Offline - Backend**  
**🎯 Objetivo:**  
Manter o status atualizado dos usuários (online/offline) e disponibilizá-lo para o frontend.  

**📋 Etapas:**  
1. Implementar eventos para atualizar o status dos usuários em tempo real.  
2. Criar uma rota para consultar a lista de usuários online/offline.  

---

### **Exibição de Usuários Online/Offline - Frontend (Expo)**  
**🎯 Objetivo:**  
Mostrar a lista de usuários online ou offline no aplicativo.  

**📋 Etapas:**  
1. Criar uma interface para exibir a lista de usuários com seu status.  
2. Integrar a tela ao backend para consultar a lista de usuários.  
3. Atualizar a interface em tempo real conforme mudanças de status.  


