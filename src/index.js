const fastify = require('fastify')
const app = fastify({ logger: true })

const heroes = [
  { id: 1, name: 'Iron Man' },
  { id: 2, name: 'Thor' },
  { id: 3, name: 'Black Widow' },
  { id: 4, name: 'Hulk' },
]

app.get('/', async (req, res) => {
  return { works: true }
})

app.get('/heroes', async (req, res) => {
  return heroes
})

app.get('/heroes/:id', async (req, res) => {
  const { id } = req.params
  return heroes.find((h) => h.id === Number(id))
})

exports.app = async (req, res) => {
  await app.ready()
  app.server.emit('request', req, res)
}
