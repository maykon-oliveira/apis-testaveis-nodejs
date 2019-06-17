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

    describe('DELETE /todos/:id',()=>{
        context('Quando um "Todos" for excluido.',()=>{
            it('Deve deletar um registro da listar por id',()=>{
                servidor
                    .delete(`/todos/${defaultTodo.id}`)
                    .end((err,res)=>{
                        expect(res.status).to.eql(204);
                    })
            })
        });
        
    });
    
});