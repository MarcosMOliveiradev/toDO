import fastify from 'fastify'
import { toDo } from './rout/todo'
import view from '@fastify/view'
import handlebars from 'handlebars'
import cors from '@fastify/cors'
import fastifyStatic from '@fastify/static'
import path from 'node:path'


const app = fastify()

app.register(fastifyStatic, {
    root: path.join(__dirname, '../', '../', '../')
})

app.register(view, {
    engine: {
        handlebars
    }
})

app.register(cors, {
    origin: true,
  })

app.register(toDo, {
    prefix: '/todo'
})

const ports = parseInt(process.env.PORT) || 3131

app.listen({
    port: ports,
    host: '0.0.0.0'
}).then(() => {
    console.log(`HTTP Server running in localhost port ${ports}`)
})