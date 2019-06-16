describe('Rotas de index.js', () => {


    describe('GET /', () => {
        
        it('Deveria retornar com status code 200 e hello world no corpo', () => {
            servidor
                .get('/')         
                .end((err, res) => {
                    expect(res.statusCode).eql(200);
                })
        });

    });

});