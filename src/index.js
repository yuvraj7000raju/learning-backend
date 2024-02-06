
// require('dotenv').config()
import connectDB from './db/db.js';
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/f', (req, res) => {
//   res.send('Hello Wofgfrgrld!')
// })
// app.get('/jokes', (req, res) => {
//   const jokes = ["hello world","hello universe"];
//   res.send(jokes)
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}` ,"---",process.env.PORT )
// })

connectDB()
.then(console.log("database connected sussesfully"))
.catch((error)=>{
   console.log(" here is the error for database :",error)
   throw error;
})
