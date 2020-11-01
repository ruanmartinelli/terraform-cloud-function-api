const fastify = require('fastify')
const app = fastify({ logger: true })
const { Firestore } = require('@google-cloud/firestore')

const heroes = [
  { id: 1, name: 'Iron Man' },
  { id: 2, name: 'Thor' },
  { id: 3, name: 'Black Widow' },
  { id: 4, name: 'Hulk' },
]

app.get('/', async (req, res) => {
  const firestore = new Firestore();
  
  // Obtain a document reference.
  const document = firestore.doc('posts/intro-to-firestore')

  // Enter new data into the document.
  await document.set({
    title: 'Welcome to Firestore',
    body: 'Hello World',
  })
  console.log('Entered new data into the document')

  // Update an existing document.
  await document.update({
    body: 'My first Firestore app',
  })
  console.log('Updated an existing document')

  // Read the document.
  const doc = await document.get()

  console.log('Read the document')

  return { works: true, doc }
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
