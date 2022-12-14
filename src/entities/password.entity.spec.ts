import { Password, PasswordProps } from "./password.entity";

describe("Password", () => {
  describe("constructor", () => {
    it("should create a new password", () => {
      // Arrange
      const props: PasswordProps = {
        length: 15,
      };
      // Act
      const result = new Password(props);
      // Assert
      expect(result.password).toHaveLength(props.length);
    });
  });
});
