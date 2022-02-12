import express, {Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import  apiRoutes  from './routes/api'
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors({
    origin: '*' // liberando acesso a api para qualquer site
    // caso queira liberar apenas um site --> origin: 'https://resttesttest.com'
}));

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded( { extended: true }));

server.use(apiRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'})
});

server.listen(process.env.PORT);