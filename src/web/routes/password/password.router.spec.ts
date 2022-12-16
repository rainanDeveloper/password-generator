import * as supertestRequest from 'supertest';
import { app } from 'src/web/app';

describe('/api/password', () => {
  describe(':length', () => {
    it('should create a new password with the informed length and return it on the response', async () => {
      // Arrange
      const length = 35;
      // Act
      const response = await supertestRequest(app).get(
        `/api/password/${length}`,
      );
      // Assert
      expect(response.statusCode).toEqual(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toEqual('Ok');
      expect(response.body).toHaveProperty('password');
      expect(response.body.password).toHaveLength(length);
    });
  });
});
