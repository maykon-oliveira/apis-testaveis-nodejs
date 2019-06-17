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
    },
    async post(req,res){
        todos.push(req.body);
        res.status(201).send('Created');
    },
    async delete(req,res){
        for (let index = 0; index < todos.length; index++) {
            const pessoa = todos[index];
            if (pessoa.id == req.params.id) {
                todos.splice(index, 1);
            }
        }
        res.status(204).send("Deletado");

    }



}