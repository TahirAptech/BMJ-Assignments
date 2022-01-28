const createAccount = _ => 
{
    uname = document.getElementById("uname");
    uemail = document.getElementById("uemail");
    upassword = document.getElementById("upassword");
    let arrObj = JSON.parse(localStorage.getItem("user1")) || [];
    const obj1 = {
        username : uname.value,
        email : uemail.value,
        password : upassword.value
    }
    arrObj.push(obj1);
    localStorage.setItem("user1", JSON.stringify(arrObj));
    alert("Successfully Registered.");
    window.location.assign("./Login.html");
}

const loginAccount = _ => {
    const uemail = document.getElementById("uemail").value;
    const upassword = document.getElementById("upassword").value;
    const obj = JSON.parse(localStorage.getItem("user1"));

    const arrObj = JSON.parse(localStorage.getItem("user1"));

    console.log(arrObj)
    let indexVal = arrObj.findIndex((arr)=>{
        debugger
        const aa=  arr.email === uemail && arr.password === upassword;
        return aa;
    });

    if(indexVal !== -1){
        alert("Login Successfull.");
    }
    else{
        alert("Email or Password is incorrect");
    }
}