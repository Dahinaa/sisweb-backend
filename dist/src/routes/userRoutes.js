"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
// Get all users
userRouter.get('/', (req, res) => {
    res.send('Get a list of users');
});
// Get user by ID
userRouter.get('/:id', (req, res) => {
    res.send(`Get the user ${req.params.id}`);
});
// Create user
userRouter.post('/', (req, res) => {
    res.send(`Create a new user with ID: ${req.body.id}`);
});
// Update user
userRouter.patch('/:id', (req, res) => {
    res.send(`Update the user ${req.params.id} with the values of ${req.body.name}, ${req.body.email} and ${req.body.password}`);
});
// Delete user
userRouter.delete('/', (req, res) => {
    res.send(`Deleting the user ${req.body.id}`);
});
exports.default = userRouter;
