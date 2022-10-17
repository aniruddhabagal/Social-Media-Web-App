const mysql = require("mysql");
const secret = require("../secret");

 
let connection; 

function handleDisconnect() {
  connection = mysql.createPool({
    host: secret.Host,
    user: secret.user,
    password: secret.pass,
    database: secret.DB_name,
  });
  
  // connection.connect();
    
  connection.connect()
  .catch(err=>{
    console.log(err.code,'\n',err)
    return err
  })

}
handleDisconnect();

module.exports = connection;
