import express from 'express';
import redis from 'redis';

const app = express();

const redisClient = redis.createClient(6379);

redisClient.on('error', (err) => {
    console.log('Redis Client Error', err);
})

redisClient.on('ready', () => {
    console.log('Redis ready');
})

await redisClient.connect();

await redisClient.ping();

export default redisClient;


app.use(express.json());

import { getAllStudents, clearCache } from './controller/student-controller.js';

const router = express.Router();

router.get('/', getAllStudents);
router.post('/clear', clearCache);



// const routes = require('./routes/routes');

app.use('/student', router).all((_, res) => {
    res.setHeader('content-type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})