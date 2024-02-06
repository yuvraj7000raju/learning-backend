
import dotenv from "dotenv";
import connectDB from './db/db.js';
import app from './app.js';
dotenv.config({
    path : "./env"
})
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
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`app is listning at port ${process.env.PORT}`)
    })
})

.catch((error)=>{
   console.log(" here is the error for database :",error)
   throw error;
})
