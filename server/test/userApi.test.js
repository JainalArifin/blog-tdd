const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app.js')

chai.use(chaiHttp)

const user = {
  username: 'jainal',
  password: '1'
}

describe('Register untuk mengetes', function () {
  it('mengetes apakah user id berhasil di buat', function (done){
    chai.request(app)
    .post('/user/register')
    .send(user)
    .end(function (err, response) {
      console.log('ini yang di user register --->', response.body)
      response.status.should.equal(200)
      response.body.should.be.an('Object')
      done()
    })
  })
})

describe('Login untuk mengetes', function () {
  it('mengetes apakah user id berhasil masuk', function (done){
    chai.request(app)
    .post('/user/login')
    .send(user)
    .end(function (err, response) {
      console.log('ini yang di user register --->', response.body)
      response.status.should.equal(200)
      response.body.should.be.an('Object')
      done()
    })
  })
})
