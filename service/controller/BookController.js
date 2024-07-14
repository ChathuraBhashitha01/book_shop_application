const Book = require('../model/Book');

const BookController={

    getAllBooks:async function(req, res, next){
        try{
            const bookList=await Book.find();
            res.status(200).json(bookList);
        }catch (error){

        }
    },

    saveBook:async function(req, res, next){
        try {
            let bookData=res.body
            await Book.create(bookData);
        }catch (err){

        }
    },
}

module.exports = BookController;
