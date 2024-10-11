import express, { Request, Response } from "express"
const cors = require('cors');
import dotenv from "dotenv"



const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;


app.get('/', (req: Request, res: Response) => {
    res.send('Law Hub Server is Running!');
});

app.listen(port, () => {
    console.log(`Law Hub server is running on port ${port}`);

})