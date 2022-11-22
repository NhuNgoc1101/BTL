const mysql = require('mysql');

const app = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});

app.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
        app.query("CREATE DATABASE btlmcb",function(err,result){
            if(err) throw err;
            console.log("Database created")
       
    });
})



// //Tạo bảng
// const mysql = require('mysql');

// const app = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"btlmcb"

// });
// app.connect(function(err){
//     if(err) throw err;
//     console.log("Connected!");
//         app.query("CREATE TABLE dlcambien(ID int(10) AUTO_INCREMENT PRIMARY KEY,topic char(50),temp int(10),hum int(10), light int(10),currentTime timestamp NOT null DEFAULT CURRENT_TIMESTAMP)",function(err,result){
//             if(err) throw err;
//             console.log("Table created")
       
//     });
// })
