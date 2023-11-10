import express from "express";

const router = express.Router();

const users = [
    {
        firstName: "Peter",
        lastName: "Parker",
        age: 25
    },
    {
        firstName: "Mary",
        lastName: "Jane",
        age: 23
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

export default router;