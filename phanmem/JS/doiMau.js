//Start : đổi màu
// var nd1 = document.getElementById('randomNhietDo');    

//     function fsRandomNhietDo(){
//     nd1= Number(data);
//       if(nd1<20){
//           document.getElementById('nhietDo').style.background='#FF7F50';
//         }else if(nd1<40){
//           document.getElementById('nhietDo').style.background='#FF7256';
//         }else if(nd1<60){
//           document.getElementById('nhietDo').style.background='#EE5C42';
//         }else if(nd1<80){
//           document.getElementById('nhietDo').style.background='#FF0000';
//         }else {
//           document.getElementById('nhietDo').style.background='#8B3626';
//         }
//  }
//  fsRandomNhietDo()

var nd1 = document.getElementById('randomNhietDo');    
    function fsRandomNhietDo(){
    nd1= myNodeList[0].textContent;
      if(nd1<20){
          document.getElementById('nhietDo').style.background='#FF7F50';
        }else if(nd1<40){
          document.getElementById('nhietDo').style.background='#FF7256';
        }else if(nd1<60){
          document.getElementById('nhietDo').style.background='#EE5C42';
        }else if(nd1<80){
          document.getElementById('nhietDo').style.background='#FF0000';
        }else {
          document.getElementById('nhietDo').style.background='#8B3626';
        }
 }
 var da1 = document.getElementById('randomDoAm');
    function fsRandomDoAm(){ 
      da1 = myNodeList[1].textContent;
    if(da1<20){
      document.getElementById('doAm').style.background='#BBFFFF';
    }else if(da1<40){
      document.getElementById('doAm').style.background='#AFEEEE';
    }else if(da1<60){
      document.getElementById('doAm').style.background='#7AC5CD';
    }else if(da1<80){
      document.getElementById('doAm').style.background='#5F9EA0';
    }else {
      document.getElementById('doAm').style.background='#53868B';
    }
  }


    var as1 = document.getElementById('randomAnhSang');
  function fsRandomAnhSang(){
    as1 = myNodeList[2].textContent;
    if(as1<100){
      document.getElementById('anhSang').style.background='#9AFF9A';
    }else if(as1<300){
      document.getElementById('anhSang').style.background='#7CCD7C';
    }else if(as1<500){
      document.getElementById('anhSang').style.background='#00FF7F';
    }else if(as1<600){
      document.getElementById('anhSang').style.background='#00CD66';
    }else {
      document.getElementById('anhSang').style.background='#2E8B57';
    }
  }

// End: đổi màu