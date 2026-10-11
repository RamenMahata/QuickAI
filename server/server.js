import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import {clerkMiddleware, requireAuth} from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app = express()

await connectCloudinary()

const allowedOrigins = process.env.CORS_ORIGINS
    ?.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)

app.use(cors({
    origin: allowedOrigins?.length ? allowedOrigins : true,
}))
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res)=> res.send('Server is Live!'))
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }))

app.use(requireAuth())

app.use('/api/ai', aiRouter)
app.use('/api/user', userRouter)

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || process.env.PORT || 3000
const HOST = '0.0.0.0'

const server = app.listen(PORT, HOST, ()=>{
    console.log('Server is running on port', PORT);
})

const shutdown = () => {
    server.close(() => process.exit(0))
}

process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)
