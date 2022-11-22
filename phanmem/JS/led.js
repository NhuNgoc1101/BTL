const socket = io();
const btnOn1 = document.querySelector('.btn-danger');
const btnOff1 = document.querySelector('.btn-light');
const btnOn2 = document.querySelector('.slider');
const btnOff2 = document.querySelector('.btn_led2');


btnOn1.addEventListener('click',() => {
    if(confirm('Bật đèn không?')==true){
        socket.emit('ledStatus1', 'on');
        console.log('Clicked');
        document.getElementById('led1').src = './img/ledsang.png'
    }
  })
  
  btnOff1.addEventListener('click',() => {
    if(confirm('Tắt đèn không?')==true){
        socket.emit('ledStatus1', 'off');
        console.log('Clicked');
        document.getElementById('led1').src = './img/ledtat.png'
    }
  })


  btnOn2.addEventListener('click',() => {
    if(confirm('Bật đèn không?')==true){
        socket.emit('ledStatus2', 'on');
        console.log('Clicked');
        document.getElementById('led2').src = './img/ledsang.png'
    }else if(confirm('Tắt đèn không?')==true){
      btnOff2.addEventListener('click',() => {
        socket.emit('ledStatus2', 'off');
        console.log('Clicked');
        document.getElementById('led2').src = './img/ledtat.png'
    })
    }})

  
  socket.on('data-sensors', msg => {
    console.log(msg);
    handlingData(msg);
  });
  
  socket.on('led1Status', msg => {
    if (msg === 'on') {
       led1 = document.getElementById('led1').src = './img/ledsang.png';
    }
    if (msg === 'off') {
        led1 = document.getElementById('led1').src = './img/ledtat.png';
    }
    console.log(`led 1 ${msg}`);
  });
  
  socket.on('led2Status', msg => {
    if (msg === 'on') {
       led2 = document.getElementById('led2').src = './img/ledsang.png';
  
    }
    if (msg === 'off') {
        led2 = document.getElementById('led2').src = './img/ledtat.png';
    }
    console.log(`led 2 ${msg}`);
  });
  
