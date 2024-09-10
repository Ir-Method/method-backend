import { inject, injectable } from 'inversify';
import { IUserService } from '../services/users.service';
import { Controller, Get } from '../decorators/controllers.decorator';
import { Response,Request } from 'express';

@Controller('/users')
@injectable()
export class UserController {
  private userService: IUserService;

  constructor(@inject('UserService') userService: IUserService) {
    this.userService = userService;
  }

  @Get('/')
  getAllUsers(req:Request, res:Response) {
    const users = this.userService.getAllUsers();
    res.json(users);
  }
}