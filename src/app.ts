import fastify from 'fastify'
import initViewEngine from './config/view'
import homeRoutes from './routes/homeRoutes'
import fastifyStatic from '@fastify/static'
import path from 'path'

const server = fastify()

server.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'public'),
  prefix: '/public/',
})

initViewEngine(server)
homeRoutes(server)

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
