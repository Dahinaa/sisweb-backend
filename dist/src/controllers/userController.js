"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.modifyUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const getAllUsers = (req, res) => {
    res.send('Get a list of users');
};
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => {
    res.send(`Get the user ${req.params.id}`);
};
exports.getUserById = getUserById;
const createUser = (req, res) => {
    res.send(`Create a new user with ID: ${req.body.id}`);
};
exports.createUser = createUser;
const modifyUser = (req, res) => {
    res.send(`Update the user ${req.params.id} with the values of ${req.body.name}, ${req.body.email} and ${req.body.password}`);
};
exports.modifyUser = modifyUser;
const deleteUser = (req, res) => {
    res.send(`Deleting the user ${req.body.id}`);
};
exports.deleteUser = deleteUser;
