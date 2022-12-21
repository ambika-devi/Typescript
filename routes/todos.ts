import {Router} from "express";


import {Todo} from '../models/todos'
let todos:Todo[]=[];
const router=Router();
router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text
    }
    todos.push(newTodo);
    res.status(201).json({message:'Added new todo',todo:newTodo,todos:todos})
})

router.put('/todo/:todoId',(req,res,next)=>{
    const todoid=req.params.todoId;
    const todoindex=todos.findIndex((todoItem)=>todoItem.id===todoid);
    if(todoindex>=0){
        todos[todoindex]={id:todos[todoindex].id,text:req.body.text}
    return res.status(200).json({message:'Updated',todos:todos})
    }
    res.status(400).json({message:'could not find todo for this id'})
})

router.delete('/todo/:todoId',(req,res,next)=>{
     let found=false;
    todos=todos.filter((todoItem)=> {
     if(todoItem.id!==req.params.todoId){
            return true;
     }else{
          found=true;
          return false;
     }
     });
     if(found){
    return res.status(200).json({message:'Deleted',todos:todos})
    }else
    res.status(400).json({message:'could not find todo for this id,Unsuccful'})
})
export default router;
