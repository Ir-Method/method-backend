import { Container } from 'inversify';
import { UserService } from '../services/users.service';
import { UserController } from '../controllers/users.controller';

const container = new Container();

// Register the UserService as a singleton
container.bind<UserService>('UserService').to(UserService).inSingletonScope();

// Register the UserController
container.bind<UserController>(UserController).to(UserController);

export { container };