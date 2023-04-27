const express = require('express')
const app = express()
const port = 3000


const myClay = [
  {
    id: '001',
    artist: 'e hopper',
    class: 'adv w b',
    body: 'porcelain',
    glaze: 'clear',
  },
  {
    id: '002',
    artist: 's hughes',
    class: 'bc a-ii',
    body: 'little loafers',
    glaze: 'celedon',
  },
  {
    id: '003',
    artist: 'a barringer',
    class: 'bw c-ii',
    body: 'reclaim',
    glaze: 'black',
  },
]

// READ
app.get('/clay/:id', (req, res) => {
  const clayId = req.params.id

  //console.log(clayId)
const clay = myClay.find((clay)=>
clay.id === clayId)

if (!clay) {
  return res.send ('no clay found')
}
  res.send(clay)
})

//CREATE
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

//UPDATE
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

//DELETE
app.delete('/clay/:id', (req, res) => {
  const clayId = Number.parseInt (req.params.id)

  console.log('Delete clay: ', clayId)
  
  const clayIndex = myClay.findIndex (clay => clay.id === clayId)

  if (clayIndex < 0) {
    return res.send ('Piece not found')
  }
  myClay.splice (clayIndex,1)
  res.send('Got a DELETE request at /user')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

