const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("Signup", (req,res) => {
    const {username, email, password, dateOfBirth} = req.body;

    if(!username){
        return res.status(400).json({error: 'Username cannot be empty.'});
    }

    if(!email){
        return res.status(400).json({error: 'Email cannot be empty.'});
    }

    if(!password || password.length < 8 || password.length > 16){
        return res.status(400).json({error:'Password length should be greater than 8 or less than or equal to 16.'});
    }

    if(!dateOfBirth){
        return res.status(400).json({error: 'Date of Birth needs to be filled. '});
    }

    res.status(200).json({message: 'Sign Up Successful', data: {username, email, dateOfBirth}});
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Sign Up Page.</h1>')
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});