//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.l
let storedusername="resham222r@gmail.com";
let storedpassword=123456;
let inputusername="resham222r@gmail.com";
let inputpassword=12345;
if(storedusername==inputusername){
  if(storedpassword==inputpassword){
    console.log("login successfull");
  }else{
    console.log("wrong password");
  }
 }else{
    console.log("wrong credentials");
  }
  

