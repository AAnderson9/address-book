const express = require('express');
const Database = require('better-sqlite3')
const cors = require('cors');
const multer = require("multer");

const app = express();
app.options('*',cors());
upload = multer();

const db = new Database('contacts.db');

//display list of contacts
app.get('/contacts', (req,res) => {
    res.setHeader("Access-Control-Allow-Origin",'*');
    const sql = "SELECT * FROM contacts";
    const statement = db.prepare(sql);

    const arrOutput = [];

    for(const contact of statement.iterate())
    {
        arrOutput.push(contact)
    }

    res.end(JSON.stringify(arrOutput));
})

//add a contact
app.post('/contact', (req,res) => {
    res.setHeader("Access-Control-Allow-Origin",'*');
    const sql = "INSERT INTO contacts(img, fName, lName, email, phoneNum) VALUES (?,?,?,?,?)";
    const statement = db.prepare(sql);
    statement.run([req.body.img,req.body.fName,req.body.lName,req.body.email,req.body.phone]);
    res.end();
})

//delete a contact
app.delete('/contacts/:id', (req,res) => {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    const sql = "DELETE FROM contacts WHERE id =?";
    const statement = db.prepare(sql);
    statement.run([req.params.id]);
    res.end()
})

app.put('/contacts/:id', (req,res) => {
    res.setHeader("Access-Control-Allow-Origin",'*');
    const sql = "UPDATE contacts SET fName = ?, lName = ?, email = ?, phoneNum = ? WHERE id = ?";
    const statement = db.prepare(sql);
    statement.run([req.body.fName,req.body.lName,req.body.email,req.body.phone,req.params.id]);
    res.end();
})








app.listen(8000);


