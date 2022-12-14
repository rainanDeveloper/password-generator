import { Password } from "./../entities/password.entity";
import { GeneratePasswordInputDto } from "./dto/generate-password-use-case-input.dto";

export class GeneratePasswordUseCase {
  public execute(input: GeneratePasswordInputDto) {
    const passwordObject = new Password(input);

    return passwordObject.password;
  }
}
