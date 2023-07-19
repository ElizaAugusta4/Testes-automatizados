const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');

const app = require('../app');

describe('Testes da API', () => {
  it('Deve retornar uma mensagem de boas-vindas', async () => {
    const response = await supertest(app).get('/api');
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal('Bem-vindo à API!');
  });

  it('Deve somar dois números', async () => {
    const response = await supertest(app).post('/api/somar').send({ num1: 2, num2: 3 });
    expect(response.status).to.equal(200);
    expect(response.body.resultado).to.equal(5);
  });

  it('Deve retornar erro ao somar números inválidos', async () => {
    const response = await supertest(app).post('/api/somar').send({ num1: 2 });
    expect(response.status).to.equal(400);
    expect(response.body.error).to.equal('Certifique-se de fornecer "num1" e "num2".');
  });
});
