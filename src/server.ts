import express, { Request, Response } from 'express';
import dotenv from 'dotenv'


dotenv.config()

const app = express()
const PORT = process.env.PORT

app.get('/', async (req: Request, res: Response): Promise<any> => {
    try{
        res.send('<h1>Project Imposture Started</h1>')
    }catch(error: unknown){
        console.log(error)
    }
})

app.listen(PORT, (error: unknown) => {
    if(error) throw error
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`)
})
