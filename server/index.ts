import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import AllRoute from './routes/allRoutes';
import bodyParser from 'body-parser';

const port = 5000;

dotenv.config();
const app: Express = express();


app.use(bodyParser());
app.use(AllRoute);

// return message if no route matches 
app.use('*', (req : Request, res: Response) => {
    res.json({ success: false, message: "Not found." });
})

app.listen(port, () => {
    console.log("Express is running at ", port);
});


