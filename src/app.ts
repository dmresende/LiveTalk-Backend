import express from 'express';
import { UserController } from './adapters/controllers/userController';
import { GetUserUseCase } from './domain/useCases/getUserUseCase';
import { UserRepository } from './infrastructure/repositories/userRepository';
import { userRouter } from './infrastructure/webserver/routes/usersRoutes';
import {connectDB} from "./config/connectionDB";

const app = express();

/*  princípios de Inversão de Dependência (DI), como no caso da Clean Architecture
1. Criação de Dependências
Essa sequência de código cria as instâncias necessárias para que os componentes interajam de forma desacoplada e organizada:

UsuarioRepositorio:
Representa a implementação do repositório que acessa os dados (por exemplo, banco de dados).
É passado para o caso de uso para que ele tenha acesso às operações de persistência.
PegarUsuarioUseCase:

Contém a lógica de negócio específica de "pegar usuário".
Depende de um repositório (UsuarioRepositorio), mas não sabe qual implementação específica está sendo usada (isso respeita o princípio da inversão de dependência).
UsuarioController:

É responsável por intermediar a comunicação entre as rotas e os casos de uso.
Recebe o caso de uso (PegarUsuarioUseCase) como dependência.
Essa hierarquia segue o fluxo típico da Clean Architecture:

Controller (Interface de entrega) ->
UseCase (Aplicação) ->
Repositório (Interface de dados)

2. Por que isso é feito dessa forma?
Desacoplamento:
Cada camada ou componente conhece apenas a interface da camada abaixo, e não sua implementação específica. Isso facilita testes e mudanças.

Flexibilidade:
Se você quisesse trocar o banco de dados (por exemplo, usar MongoDB ao invés de SQL), bastaria criar uma nova implementação de UsuarioRepositorio que use MongoDB e passar essa nova instância.

Testabilidade:
Essa abordagem permite que você faça testes unitários. Por exemplo, em vez de usar um repositório real no teste, você pode passar um repositório falso (mock) para simular comportamentos.
 */
const userRepository = new UserRepository();
const getUserUseCase = new GetUserUseCase(userRepository);
const userController = new UserController(getUserUseCase);

//configurar banco primeiro
//connectDB();

app.use(express.json());

app.use('/users', userRouter(userController));

app.use('/', (req, res) => {
  res.status(200).json({ message: 'Tudo pronto 🚀!' });
});

app.listen(3000, () => {
  console.log(`Server running in http://localhost:3000/`);
});
