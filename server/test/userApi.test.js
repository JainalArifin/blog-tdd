// const chai = require('chai')
// const should = chai.should()
// const chaiHttp = require('chai-http')
// const app = require('../app.js')
//
// chai.use(chaiHttp)
//
// const user = {
//   username: 'jainal',
//   password: '1'
// }
//
// describe('Register untuk mengetes', function () {
//   it('mengetes apakah user id berhasil di buat', function (done){
//     chai,request(app)
//     .post('/user/regiter')
//     .send(user)
//     .end(function (err, response) {
//       response.status.should.equal(200)
//       response.body.should.be.an('Object')
//       response.body.should.have.property('_id')
//       response.body.should.have.property('username')
//       response.body.should.have.property('password')
//       done()
//     })
//   })
// })
//
// describe('Login untuk mengetes', function () {
//   it('mengetes apakah user id berhasil masuk', function (done){
//     chai,request(app)
//     .post('/user/regiter')
//     .send(user)
//     .end(function (err, response) {
//       response.status.should.equal(200)
//       response.body.should.be.an('Object')
//       response.body.should.have.property('_id')
//       response.body.should.have.property('username')
//       response.body.should.have.property('password')
//       done()
//     })
//   })
// })
