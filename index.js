// Required
const http = require('http')
const UsersRepository = require('./modules/UsersRepository')
// Constants
const usersRepository = new UsersRepository()

const hostname = '127.0.0.1'
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')

  var count = usersRepository.increase()
  res.end(`Hello from the server! You are ${count}th visitor.`)
})

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
