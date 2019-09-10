const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));
app.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`);
})

let historyArray = [];

//Routing.....
app.post('/addCalc', (req,res) => {
    //Log to see if addCalc is working
    console.log('addCalc');
    //since this is a post request we will use rec.body to see the data
    let data = req.body;
    console.log(data);
    //calculation logic
    makeCalculation(data);
    console.log(historyArray);
    //all good servers respond
    res.sendStatus(201);


})

app.get('/history',(req,res) => {
    res.send(historyArray);
})

function makeCalculation(dataToCalculate){
    //know which opperator and do the correct operation
    if(dataToCalculate.operator === '+'){
        //ADD TOGETHER
        let result = Number(dataToCalculate.num1) + Number(dataToCalculate.num2);
        //push the answer somewhere on the server side/save result in history array
        dataToCalculate.result = result;
        //^this is  not best practice because not all languages allow you to create a 
        // key within a function, better if the key is global
        historyArray.push(dataToCalculate);         
}


}
