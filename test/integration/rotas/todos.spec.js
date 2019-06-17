describe('Rotas de todos.js', () => {

    const defaultTodo = {
        id: 1,
        titulo: 'Apredendo a testar APIs rest com nodejs',
        dataCriacao: '2019-06-16T17:18:06.569Z',
        completo: false
    }

    describe('GET /todos', () => {

        it('Deveria retornar uma lista de todos com o status 200', () => {
            servidor
                .get('/todos')
                .end((err, res) => {
                    expect(res.statusCode).eql(200);
                    expect(res.body).eql([defaultTodo])
                });
        });
    });

    describe('DELETE /todos/:id', () => {
        context('Quando uma operação de deletar um "Todos" for enviada', () => {
            it('Deve deletar um registro da listar por id e retornar status 204', () => {
                servidor
                    .delete(`/todos/${defaultTodo.id}`)
                    .end((err, res) => {
                        expect(res.status).to.eql(204);
                    })
            })
        });

    });

    describe('POST /todos', () => {
        it('Deve retornar um novo todo com o status 201', done => {
            servidor
                .post('/todos')
                .send(defaultTodo)
                .end((err, res) => {
                    expect(res.statusCode).to.eql(201);
                    expect(res.body).to.eql(defaultTodo);
                    done(err);
                });
        });
    });
});