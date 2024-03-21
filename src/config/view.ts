import { FastifyInstance } from 'fastify'
import pointOfView from '@fastify/view'
import handlebars from 'handlebars'

export default async function (fastify: FastifyInstance) {
  fastify.register(pointOfView, {
    engine: {
      handlebars,
    },
  })
}
