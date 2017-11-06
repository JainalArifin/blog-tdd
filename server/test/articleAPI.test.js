const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app.js')

const newArticle = {
  title: 'pengecekan title',
  content: 'pengecekan content',
  author: 'pengecekan author'
}
let id = ''

chai.use(chaiHttp)

describe('api endpoint create new article', function() {
  it('harus mengembalikan data article yang di post', function(done) {
    chai.request(app)
    .post('/article')
    .send(newArticle)
    .end(function (err, response) {
      response.status.should.equal(200)
      response.body.should.be.an('Object')
      response.body.should.have.property('_id')
      response.body.should.have.property('title')
      response.body.should.have.property('content')
      response.body.should.have.property('author')
      response.body.title.should.equal('pengecekan title')
      response.body.content.should.equal('pengecekan content')
      done()
    })
  })
})

describe('api endpoint get article', function() {
  it('harus mengembalikan data article yang di get', function(done) {
    chai.request(app)
    .get('/article')
    .send(newArticle)
    .end(function (err, response) {
      response.status.should.equal(200)
      response.body.should.be.an('array')
      response.body.should.have.property('_id')
      response.body.should.have.property('title')
      response.body.should.have.property('content')
      response.body.should.have.property('author')
      response.body.title.should.equal('pengecekan title')
      response.body.content.should.equal('pengecekan content')
      done()
    })
  })
})

describe('api endpoint yang menampilkan berdasarkan ID yang di pilih', function() {
  it('harus mengembalikan data Id yanng di pilih', function(done) {
    chai.request(app)
    .post('/article')
    .send(newArticle)
    .end(function (err, response) {
      // console.log(response.body)
      chai.request(app)
      .get(`/article/${response.body._id}`)
      .end(function (err, response) {
        response.status.should.equal(200)
        response.body.should.be.an('Object')
        response.body.should.have.property('_id')
        done()
      })
    })
  })
})

describe('api endpoint yang menampilkan berdasarkan ID yang di pilih', function() {
  it('harus mengembalikan data Id yanng di pilih', function(done) {
    chai.request(app)
    .post('/article')
    .send(newArticle)
    .end(function (err, response) {
      // console.log(response.body)
      chai.request(app)
      .put(`/article/${response.body._id}`)
      .end(function (err, response) {
        response.status.should.equal(200)
        response.body.should.be.an('Object')
        response.body.should.have.property('_id')
        done()
      })
    })
  })
})

describe('api endpoint yang akan menghapus berdasarkan ID yang di pilih', function() {
  it('harus mengembalikan data article yang di delete', function(done) {
    chai.request(app)
    .post('/article')
    .send(newArticle)
    .end(function (err, response) {
      // console.log(response.body)
      chai.request(app)
      .delete(`/article/${response.body._id}`)
      .end(function (err, response) {
        response.status.should.equal(200)
        response.body.should.be.an('Object')
        response.body.should.have.property('_id')
        done()
      })
    })
  })
})
