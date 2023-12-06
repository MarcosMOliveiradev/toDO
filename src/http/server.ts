import fastify from 'fastify'
import { toDo } from './rout/todo'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
    origin: true,
  })

app.register(toDo, {
    prefix: '/todo'
})


app.listen({
    port: 3131,
    host: '0.0.0.0'
}).then(() => {
    console.log('HTTP Server running in localhost port 3131')
})