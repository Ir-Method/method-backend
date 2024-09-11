import { Container } from 'inversify';
import { UserService } from '../services/users.service';
import { UserController } from '../controllers/users.controller';

const container = new Container();

// Services Bind
container.bind<UserService>('UserService').to(UserService).inSingletonScope();

// Controllers Bind
container.bind<UserController>(UserController).to(UserController);

export { container };