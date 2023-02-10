const UsersModel = require('../models/users');

const getAllUsers = async(req, res) => {
    try {
        const [data] = await UsersModel.getAllUser();
        res.json({
            message: 'get data success!',
            data
        })
    } catch(err) {
        res.status(500).json({
            message: 'server error',
            serverMessage: err
        })
    }
}

const createUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'create user sucess',
        data: req.body
    })
}

const updateUser = (req, res) => {
    console.log(req.params, req.body);
    const {id} = req.params;
    res.json({
        message: 'Update User Success',
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    res.json({
        message: 'Delete User Success',
        data: {
            id,
        }
    })
}

module.exports = {
    getAllUsers, createUser, updateUser, deleteUser
}