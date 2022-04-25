const express = require('express');
const PORT = 8000;
const mongoose = require("mongoose")
const DB_url = "mongodb://127.0.0.1:27017/Bank"
const app = express();
const User = require("./schemas/user.schema")
const MasterAcc = require("./schemas/masterAcc.schema")
const FixedAcc = require("./schemas/fixedAcc.schema")
const SavingAcc = require("./schemas/savingsAcc.schema")
const BranchDetail = require("./schemas/branchDetails.schema")
mongoose.connect(DB_url);
let db = mongoose.connection;
app.use(express.json())
app.post("/users", async (req,res)=>{
    try{
        let createdUser = await User.create(req.body);
        res.status(200).json(createdUser);
    }
    catch(e){
        console.log(e.message);
        res.status(400).send(e.message);
    }
})

app.post("/savingaccs", async (req, res) => {
    try {
        let createdSavingAcc = await SavingAcc.create(req.body);
        res.status(200).json(createdSavingAcc);
    }
    catch (e) {
        console.log(e.message);
        res.status(400).send(e.message);
    }
})

app.post("/fixedaccs", async (req, res) => {
    try {
        let createdFixedAcc = await FixedAcc.create(req.body);
        res.status(200).json(createdFixedAcc);
    }
    catch (e) {
        console.log(e.message);
        res.status(400).send(e.message);
    }
})

app.post("/branchdetails", async (req, res) => {
    try {
        let createbranchDetails = await BranchDetail.create(req.body);
        res.status(200).json(createbranchDetails);
    }
    catch (e) {
        console.log(e.message);
        res.status(400).send(e.message);
    }
})

app.post("/masteraccs", async (req, res) => {
    try {
        let createmasterAcc = await MasterAcc.create(req.body);
        res.status(200).json(createmasterAcc);
    }
    catch (e) {
        console.log(e.message);
        res.status(400).send(e.message);
    }
})
app.get("/masteraccs", async (req, res) => {
    const masterAcc = await MasterAcc.find({}).populate('savingAcc fixedAcc branchDetial')
        .exec()
    console.log(masterAcc);
    res.status(200).json(masterAcc);

})

app.get("/masteraccs/:id", async (req, res) => {
    const id = req.params.id
    const masterAcc = await MasterAcc.find({ "_id": id },{account_number:1,balance:1,_id:0}).populate('savingAccounts fixedAccounts')
        .exec()
    console.log(masterAcc);
    res.status(200).json(masterAcc);

})

db.on("error", console.error.bind(console, "MongoDB Connection error"));
app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
})