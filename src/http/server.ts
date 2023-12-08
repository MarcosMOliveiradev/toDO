import fastify from 'fastify'
import { toDo } from './rout/todo'
import view from '@fastify/view'
import handlebars from 'handlebars'
import cors from '@fastify/cors'
import fastifyStatic from '@fastify/static'
import path from 'node:path'


const app = fastify()

app.register(fastifyStatic, {
    root: path.join(__dirname, '../', '../')
})

app.register(view, {
    engine: {
        handlebars
    },
    templates: './'
})

app.get('/index', (request, reply) => {
    reply.view('index.ejs', { page: 'index' })
})

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