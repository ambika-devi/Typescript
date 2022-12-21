"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added new todo', todo: newTodo, todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const todoid = params.todoId;
    const body = req.body;
    const todoindex = todos.findIndex((todoItem) => todoItem.id === todoid);
    if (todoindex >= 0) {
        todos[todoindex] = { id: todos[todoindex].id, text: body.text };
        return res.status(200).json({ message: 'Updated', todos: todos });
    }
    res.status(400).json({ message: 'could not find todo for this id' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    let found = false;
    const params = req.params;
    todos = todos.filter((todoItem) => {
        if (todoItem.id !== params.todoId) {
            return true;
        }
        else {
            found = true;
            return false;
        }
    });
    if (found) {
        return res.status(200).json({ message: 'Deleted', todos: todos });
    }
    else
        res.status(400).json({ message: 'could not find todo for this id,Unsuccful' });
});
exports.default = router;
