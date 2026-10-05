//Using express
const express = require('express');
const mongoose = require('mongoose');

//Create a instance of express
const app = express();
app.use(express.json());

//Connecting mongodb
mongoose.connect('mongodb://localhost:27017/todo-app')
.then(() => {
    console.log('DB Connected');
})
.catch((err) => {
    console.log(err);
});

//Creating schema
const todoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: String
});

//Creating Model
const todoModel = mongoose.model('Todo', todoSchema);

//Sample in-memory storage for Todos item
// let todos = [];

// Define a route
// app.get('/',(req, res) => {
//     res.send("Hello Kurama")
// })

//Create item API
//Create a new todo item
app.post('/todos', async(req,res) => {
    const {title, description} = req.body;
    // const newTodo = {
    //     id: todos.length + 1,
    //     title,
    //     description
    // };
    // todos.push(newTodo);
    // console.log(todos);
    try{
        const newTodo = new todoModel({title, description});
        await newTodo.save();
        res.status(201).json(newTodo);
    }catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
    
})

//Get all items
app.get('/todos', async(req, res) => {
    try {
        const todos = await todoModel.find();
        res.json(todos);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
})

//Updat a todo item
app.put("/todos/:id", async (req, res) => {
    try {
         const {title, description} = req.body;
    const id = req.params.id;
    const updatedTodo = await todoModel.findByIdAndUpdate(
        id,
        {title, description},
        {new: true}
    )
    if(!updatedTodo){
        return res.status(404).json({message: "Todo not found"})
    }
     res.json(updatedTodo)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
    } )

    //Delete todo item
    app.delete('/todos/:id', async (req, res) => {
        try {
            const id = req.params.id;
            await todoModel.findByIdAndDelete(id);
            res.status(204).end();  
        } catch (error) {
            console.log(error);
            res.status(500).json({message: error.message});
        }
        
    })


//Start the server
const port = 3000;
app.listen(port, () => {
    console.log("Server is listening to "+port);
})
