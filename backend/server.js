const express = require('express');
const Database = require()
const cors = require('cors');
const multer = require("multer");

const app = express();
app.options('*',cors());
upload = multer();

const db = new Database('contacts.db');

//display list of contacts
app.get('/contacts', (req,res) => {
    res.setHeader("Access-Control-Allow-Origin",'*');
    const sql = "SELECT * FROM contacts ORDER BY id";
    const statement = db.prepare(sql);

    const arrOutput = [];

    for(const contact of statement.iterate())
    {
        arrOutput.push(contact)
    }

    res.end(JSON.stringify(arrOutput));
})








app.listen(8000);


