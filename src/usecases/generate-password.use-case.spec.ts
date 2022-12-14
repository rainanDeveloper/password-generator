import { GeneratePasswordUseCase } from './generate-password.use-case';
import { GeneratePasswordInputDto } from './dto/generate-password-use-case-input.dto';
describe('GeneratePasswordUseCase', () => {
    describe('execute', () => {
        it('should generate a password', () => {
            // Arrange
            const input: GeneratePasswordInputDto = {
                length: 15,
            }
            const generatePasswordUseCase = new GeneratePasswordUseCase();
            // Act
            const result = generatePasswordUseCase.execute(input);
            // Assert
            expect(result).toBeDefined();
            expect(result).toHaveLength(input.length);
        });
    });
});