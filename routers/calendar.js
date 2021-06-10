const router = require('express').Router();

const data = {};

router.get('', (req, res) => {
    res.send(data);
});

router.post('', (req, res) => {
    const chance = Math.random();
    if (chance <= .49) {
        throw new Error('AAAAAAAAAAAAAAAA');
    }

    const date = new Date(Date.parse(req.body.date));
    const key = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    data[key] = req.body;
    res.end();
});

module.exports = router;
