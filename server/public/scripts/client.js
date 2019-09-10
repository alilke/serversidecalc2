console.log('cliet.js is loaded ');
$(document).ready(handleReady);
function handleReady(){
    console.log('jq is ready');
    addClickListener();
    getHistory();
    //^this will fire off any clicks 
}

//global var to remeber what operator the user clicked
let operator = '';

function addClickListener(){
    $('#submit').on('click', handleSubmit )
    //^This will fire  off the submit when clicked
    $('#plus').on('click', handlePlusClick )
    //^This will fire  off the plus when clicked
    $('#minus').on('click', handleMinusClick )
    getHistory();

}

function handleSubmit(){
    console.log('clicked submit');
    //This will show that the button was clicked in the console 
    //capture inputs 
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    console.log(num1, num2);
    //Get the operator and make the data to send
    const dataToSend={
        num1: num1,
        num2: num1,
        operator: operator
    }
    console.log(dataToSend);
    //POST TO SERVER
    $.ajax({
        type:'POST',
        url: '/addCalc',
        data: dataToSend
    }).then(function(response){
        console.log(response);
        getHistory();
        
    })
    // NOTE ^ the above is comparable  to a promuse
    //then.... change dom?
}

function handlePlusClick(){
    // log if the button was clicked
    console.log('plus click');
    operator = '+';
    
}
function handleMinusClick(){
    // log if the button was clicked
    console.log('plus click');
    operator = '-';
    
}

function getHistory(){
$.ajax({
    type: 'GET',
    url: '/history'
}).then(function(response){
    console.log('back  from server with:',response);
    
    
})}

