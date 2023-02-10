const express = require('express');
const router = express.Router();

const UserCtrl = require('../controller/users')

// CREATE - post
router.post('/', UserCtrl.createUser);

// LIST
router.get('/', UserCtrl.getAllUsers);

// Update
router.patch('/:id', UserCtrl.updateUser);

// Delete
router.delete('/:id', UserCtrl.deleteUser);

module.exports = router;