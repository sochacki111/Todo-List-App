const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();
chai.use(chaiHttp);

describe('Tasks API', () => {
  /**
   * Test the PATCH
   */
  describe('PATCH /todos/:todoId/tasks/:taskId', () => {
    it('should patch task by id', (done) => {
      const todoId = '5f27d756d07b500c6c7c0030';
      const taskId = '5f280eb7b397eb4988f77f45';
      chai.request(server)
        .patch(`/todos/${todoId}/tasks/${taskId}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});