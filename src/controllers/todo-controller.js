const todos = [
    {
        id: 1,
        titulo: 'Apredendo a testar APIs rest com nodejs',
        dataCriacao: '2019-06-16T17:18:06.569Z',
        completo: false
    }
]
const novoTodo = {
    id: 0,
    titulo: 'Apredendo a testar APIs rest com nodejs',
    dataCriacao: '2019-06-16T17:18:06.569Z',
    completo: false
}
module.exports = {
    async findAll(req, res) {
        res.status(200).send(todos);
    },
    async createATask(req, res) {
        todos.push([novoTodo]);
        res.status(201).send([novoTodo]);
    }
}