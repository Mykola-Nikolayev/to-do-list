import express from 'express';

const bookRouter = express.Router();

const findAllBookController = (req: any, res: any) => {
    const books = [
        {
         id: 1,
         name: "super",
         date: new Date(),   
        },
        {
            id: 2,
            name: "super",
            date: new Date(),   
        }
    ]

    res.status(200).send(books)
}

bookRouter.get('/', findAllBookController)

export default bookRouter;