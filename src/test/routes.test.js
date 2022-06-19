const request = require('supertest');
const app = require('../app.js');

describe('Req para "/marcadores": Testando routes e metodos do controller', () => {

     

    it("GET '/marcadores': verificando tipo de dado da resposta", async () => {
        const res = await request(app).get('/marcadores')

        // console.log(res)
        expect(typeof res.text).toBe('string')
    })

    it("GET '/marcadores': verificando cabeçalho da requisição", async () => {
        const res = await request(app).get('/marcadores')

        // console.log(res.header)
        expect(res.header).toHaveProperty('content-type', 'application/json; charset=utf-8')
    })

    it("GET '/marcadores': verificando estatus code da requisição", async () => {
        const res = await request(app).get('/marcadores')

        expect(res.statusCode).toEqual(200)
    })

    it("POST '/marcadores': retornar status 500 e rejeitar POST sem dados", async () => {
        const res = await request(app).post('/marcadores')

        // console.log(res.body)
        expect(res.statusCode).toEqual(500)
        expect(res.body).rejects
    })
})

describe('Req para "/": Testando rota principal', () => {

    it("GET '/': precisa retornar 'Rotas OK'", async () => {
        const res = await request(app).get('/')

        console.log(res.text)
        expect(res.text).toEqual('Rotas OK')
    })

})