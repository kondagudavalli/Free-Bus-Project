alert('WELCOME TO MY WEB PAGE❤️')
let getSeatAvailbility = prompt('Is Seat Available?')
if(getSeatAvailbility=="yes"){
    console.log('Seat is available');
    let isAge = prompt('Is youR age above 50');
    if(isAge=="yes"){
        console.log('age is above 50');
        let  isAdhar = prompt('R u having Adhar Card')
        if(isAdhar=="yes"){
            console.log('Welcome to ouR Bus🥰')
        }else{
            console.log("I'm SorrY🤞")
        }
    }else{
        console.log('youR age below 50,Sorry');
    }
}else{
    console.log('Seat is not available');
}