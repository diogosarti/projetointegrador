import { FastifyRequest, FastifyReply } from 'fastify'

interface Data {
  title: string
}

export async function renderHomePage(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  const data: Data = {
    title: 'Início',
  }

  return reply.view('/src/views/templates/index.hbs', data)
}
