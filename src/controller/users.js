const UsersModel = require('../models/users');

const getAllUsers = async(req, res) => {
    try {
        const [data] = await UsersModel.getAllUser();
        res.status(200).json({
            message: 'get data success!',
            data
        });
    } catch(err) {
        res.status(500).json({
            message: 'server error',
            serverMessage: err
        });
    }
}

const createUser = async(req, res) => {
    const { body } = req;
    try {
        await UsersModel.createNewUser(body);
        console.log("berhasil create", res);
        res.status(201).json({
            message: 'create user sucess',
            data: body
        })
    } catch(err) {
        res.status(500).json({
            message: 'server error',
            serverMessage: err
        });
    }
}

const updateUsers = async(req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await UsersModel.updateUser(body, id);
        res.json({
            message: 'Update User Success',
            data: {id: id, ...body}
        })
    } catch(err) {
        res.status(500).json({
            message: 'Update server error',
            serverMessage: err
        });
    }
}

const deleteUser = async(req, res) => {
    const {id} = req.params;
    try {
        await UsersModel.deleteUser(id);
        res.json({
            message: 'Delete User Success',
            data: {
                id,
            }
        })
    } catch (err) {
        res.status(500).json({
            message: 'Update server error',
            serverMessage: err
        }); 
    }
}

module.exports = {
    getAllUsers, createUser, updateUsers, deleteUser
}