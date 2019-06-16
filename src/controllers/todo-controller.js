const todos = [
    {
        id: 1,
        titulo: 'Apredendo a testar APIs rest com nodejs',
        dataCriacao: '2019-06-16T17:18:06.569Z',
        completo: false
    }
]

module.exports = {
    async findAll(req, res) {
        res.status(200).send(todos);
    }
}