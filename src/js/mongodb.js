const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
const dbName = 'irene-coding-diaries';


MongoClient.connect(url, {useNewUrlParser:true}, (err, client)=>{
  if (err){
   return console.log('Error')
  }
  console.log('Connected!')

  const db=client.db(dbName)
  db.collection('testing').insertOne({
      title: 'Secrets Reveal',
      tags: 'js, css, node'
  })

})