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
    const key = createId(date);
    data[key] = req.body;
    setTimeout(() => {
        res.end();
    }, 5000);
});

module.exports = router;
