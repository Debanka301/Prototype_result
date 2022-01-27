function register(){
    var nam= document.getElementById('name').value
    var pass= document.getElementById('pass').value
    var address= document.getElementById('address').value

    localStorage.setItem('name1',nam);
    localStorage.setItem('pass1',pass);
    localStorage.setItem('address1',address);

    window.location.href='login.html';
}

function login(){
    var n= document.getElementById('name').value
    var p= document.getElementById('pass').value

    var name1= localStorage.getItem('name1')
    var pass1= localStorage.getItem('pass1')

    if(n==name1 && p==pass1){
        alert('Successfull Login!!')
        window.location.href='main.html';
    }
    else{
        alert('Invalid Credentials!!')
    }
}

localStorage.setItem('doctor1','open');
localStorage.setItem('doctor2','open');
localStorage.setItem('doctor3','open');
localStorage.setItem('doctor4','open');

function status_button1(){
    localStorage.setItem('doctor1','closed');
}

function status_button2(){
    localStorage.setItem('doctor2','closed');
}

function status_button3(){
    localStorage.setItem('doctor3','closed');
}

function status_button4(){
    localStorage.setItem('doctor4','closed');
}

function b1(){
    if(localStorage.getItem('doctor1')=='closed'){
        alert('Doctor already Booked!!');
    }
    else{
        alert('Appointment Booked!!');
        status_button1();
    }
}

function b2(){
    if(localStorage.getItem('doctor2')=='closed'){
        alert('Doctor already Booked!!');
    }
    else{
        alert('Appointment Booked!!');
        status_button2();
    }
}

function b3(){
    if(localStorage.getItem('doctor3')=='closed'){
        alert('Doctor already Booked!!');
    }
    else{
        alert('Appointment Booked!!');
        status_button3();
    }
}

function b4(){
    if(localStorage.getItem('doctor4')=='closed'){
        alert('Doctor already Booked!!');
    }
    else{
        alert('Appointment Booked!!');
        status_button4();
    }
}

function register1(){
    window.location.href='Signup.html';
}