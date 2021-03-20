import { Request, Response } from "express";
import { HttpException } from "node-exceptions";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.json(user);
    } catch (error) {
      return response
        .status((error as HttpException).status)
        .json({ error: (error as HttpException).message });
    }
  }
}

export { TurnUserAdminController };
