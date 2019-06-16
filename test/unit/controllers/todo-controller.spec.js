const TodoController = require('../../../src/controllers/todo-controller');
const sinon = require('sinon');

describe('TodoController', () => {

    const defaultTodo = {
        id: 1,
        titulo: 'Apredendo a testar APIs rest com nodejs',
        dataCriacao: '2019-06-16T17:18:06.569Z',
        completo: false
    }

    it('findAll(req, res)', () => {
        const res = {
            send: sinon.spy(),
            status: sinon.stub()
        }

        res.status.withArgs(200).returns(res);

        TodoController.findAll({}, res).then(() => {
            sinon.assert.calledWith(res.send, [defaultTodo]);
        });
    });
});