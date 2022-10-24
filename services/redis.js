import redis from 'redis';

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