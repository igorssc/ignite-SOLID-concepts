import { HttpException } from "node-exceptions";

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    console.log(user_id);
    console.log(user);

    if (!user) throw new HttpException("User does not exist", 400);

    if (!user.admin) {
      throw new HttpException("user is not an administrator", 400);
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
