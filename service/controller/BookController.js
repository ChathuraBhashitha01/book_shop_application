const Book = require('../model/Book');

const BookController={

    getAllBooks:async function(req, res, next){
        try{
            const bookList=await Book.find();
            res.status(200).json(bookList);
        }catch (error){
            console.error(error)
            res.status(500).json({error: 'Something when wrong'})
        }
    },

    saveBook:async function(req, res, next){
        try {
            console.log(req.body)
            const bookData=req.body;

            // const { picture, ...otherFields } = req.body;
            //
            // // Decode Base64 image
            // const base64Data = picture.replace(/^data:image\/\w+;base64,/, '');
            // const buffer = Buffer.from(base64Data, 'base64');
            //
            //
            const book=await Book.create(bookData);
            res.status(200).json(book);
        }catch (err){
            console.error(err)
            res.status(500).json({error: 'Something when wrong'})
        }
    },

    updateBook:async function(req, res, next){
        try {
            let bookData=req.body;
            const book=await Book.findOneAndUpdate({code:bookData.code}, bookData,{ new: true});
            res.status(200).json(book);
        }catch (err){
            console.error(err)
            res.status(500).json({error: 'Something when wrong'})
        }
    },

    deleteBook:async function(req, res, next){
        try {
            let code=req.params.code;
            const book=await Book.findOneAndDelete(code);
            res.status(200).json(book);
        }catch (err){
            console.error(err)
            res.status(500).json({error: 'Something when wrong'})
        }
    },

    findBook:async function(req, res, next){
        try {
            let bookCode=req.params.code;
            const book=await Book.findOne({code:bookCode});
            res.status(200).json(book);
        }catch (err){
            console.error(err)
            res.status(500).json({error: 'Something when wrong'})
        }
    },

    findBookByName:async function(req, res, next){
        try {
            let bookName=req.params.name;
            const book=await Book.findOne({name:bookName});
            res.status(200).json(book);
        }catch (err){
            console.error(err)
            res.status(500).json({error: 'Something when wrong'})
        }
    },
    findAllBCategory:async (req, res, next)=>{
        try {
            let bookName=req.params.category;
            const book=await Book.find({category:bookName});
            res.status(200).json(book);
        }catch (err){
            console.error(err)
            res.status(500).json({error: 'Something when wrong'})
        }
    }

}

module.exports = BookController;
