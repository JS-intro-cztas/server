const router = require('express').Router();
const uuid = require('uuid').v4;
const StorageService = require('../services/storage.service');

const storageService = StorageService.getInstance();

router.get('', (req, res) => {
    const getAll = req.query.all;
    if (getAll) {
        res.end(JSON.stringify({ users: storageService.storage.users }));
        return;
    }

    const token = req.query.token;
    const hasToken = storageService.storage.users?.hasOwnProperty(token);
    if (!hasToken) {
        res.status(400);
        res.end({ error: 'No such user', msg: 'Token not found' })
    }
    res.end(JSON.stringify({ userData: storageService.storage.users[token] }));
});

router.post('', (req, res) => {
    console.log(router);
    const token = createNewSubscriber();
    res.end(JSON.stringify({ token }));
});

function createNewSubscriber() {
    const id = uuid();
    if (!storageService.storage.users) {
        storageService.storage.users = {};
    }
    storageService.storage.users[id] = {};
    storageService.saveStorage();
    return id;
}

module.exports = router;
