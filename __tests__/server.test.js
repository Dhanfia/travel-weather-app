//check explanation at https://zellwk.com/blog/endpoint-testing/

const app = require('../src/server/server')
const supertest = require('supertest')
const request = supertest(app)


test('Test endpoint from /geonamesData', async () => {
    const res = await request.post('/geonamesData')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toBeDefined()
})

