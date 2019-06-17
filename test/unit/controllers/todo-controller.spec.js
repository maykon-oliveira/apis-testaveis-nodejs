const TodoController = require('../../../src/controllers/todo-controller');
const sinon = require('sinon');

describe('TodoController', () => {

    const defaultTodo = {
        id: 1,
        titulo: 'Apredendo a testar APIs rest com nodejs',
        dataCriacao: '2019-06-16T17:18:06.569Z',
        completo: false
    }

    const defaultRequest = {
        params: {}
    };

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


    describe('createATask(req, res)', () => {
        it('Deve retornar um novo produto', () => {
            const requestWithBody = Object.assign({},
                { body: [defaultTodo] }
                ,defaultRequest
            );
            const response = {
                send: sinon.spy(),
                status: sinon.stub()
            };
            class fakeProduct {
                save() { }
            }
            response.status.withArgs(201).returns(response);
            sinon.stub(fakeProduct.prototype, 'save').withArgs().resolves();
            TodoController.createATask(requestWithBody, response).then(()=>{
                sinon.assert.calledWith(response.send);
            }).catch((err)=>{
                console.log(err);
            });
        });
    });
});