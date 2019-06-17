describe('Rotas de todos.js', () => {

    const defaultTodo = {
        id: 1,
        titulo: 'Apredendo a testar APIs rest com nodejs',
        dataCriacao: '2019-06-16T17:18:06.569Z',
        completo: false
    }

    // GET
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

    //POST
    describe('POST /todos', () => {
        context('Quando o metodo post for chamado', () => {
            it('Deve retornar um novo todo com o status 201', done => {
                const todoSalvoEsperado = {
                    id: 0,
                    titulo: 'Apredendo a testar APIs rest com nodejs',
                    dataCriacao: '2019-06-16T17:18:06.569Z',
                    completo: false
                }
                servidor
                    .post('/todos')
                    .send()
                    .end((err, res) => {
                        expect(res.statusCode).to.eql(201);
                        expect(res.body).to.eql([todoSalvoEsperado]);
                        done(err);
                    });
            });
        });
    });
});