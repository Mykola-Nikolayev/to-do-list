import express from 'express';
import bookRouter from './book.route';

const appRouter = express.Router();

appRouter.use('/books', bookRouter)

export default appRouter;