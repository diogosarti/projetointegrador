import fastify from 'fastify'
import initViewEngine from './config/view'
import fastifyStatic from '@fastify/static'
import path from 'path'
import 'dotenv/config'
import { registerAllRoutes } from './routes/allRoutes'

const server = fastify()

server.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'public'),
  prefix: '/public/',
})

initViewEngine(server)
registerAllRoutes(server)

server.listen({ port: Number(process.env.NODE_APP_PORT) }, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(
    `Servidor rodando em: http://${process.env.NODE_APP_HOST}:${process.env.NODE_APP_PORT}`,
  )
})
