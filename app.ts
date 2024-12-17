import express from 'express';
import cors from 'cors';
import Routes from './Routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(Routes);

export default app;
