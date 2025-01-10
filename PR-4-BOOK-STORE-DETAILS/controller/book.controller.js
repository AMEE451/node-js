
const Book = require("../model/book.model")

const getStore = async(req,res)=>{
    res.send("welcome to the book store")
}

const getbook=async(req,res)=>{
   try {
     let books=await Book.find()
     res.send(books)
   } catch (error) {
     res.send("error",error)
   }
}

const getbookbyid=async(req,res)=>{
    try {
        let {id}=req.params;
        let book= await Book.findById(id);
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.send(book);
    } catch (error) {
        console.log("Error", error);
    }
};

const addbook=async(req,res)=>{
    try {
        let book= await Book.create(req.body);
        res.send(book   );
    } catch (error) {
        console.log("Error creating book", error);
    }
};

const updatebook=async(req,res)=>{
    try {
        let {id}=req.params;
        let book= await Book.findByIdAndUpdate(id,req.body,{new:true});
        res.send(book);
    } catch (error) {
        console.log("Error getting book", error);
    }
};

const deletebook=async(req,res)=>{
    try {
        let {id}=req.params;
        let book= await Book.findByIdAndDelete(id);
        res.send("deleted successfully");
    } catch (error) {
        console.log("Error getting book", error);
    }
};


module.exports={getbook,getbookbyid,addbook,updatebook,deletebook,getStore}