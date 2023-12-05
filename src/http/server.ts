import fastify from 'fastify'

const app = fastify()

app.listen({
    port: 3131,
    host: '0.0.0.0'
}).then(() => {
    console.log('HTTP Server running in localhost port 3131')
})