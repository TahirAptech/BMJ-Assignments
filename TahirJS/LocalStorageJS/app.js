const createAccount = () => 
{
    uname = document.getElementById("uname");
    age = document.getElementById("uage");
    cource = document.getElementById("ucource");
    uemail = document.getElementById("uemail");
    upassword = document.getElementById("upassword");
    let arrObj = JSON.parse(localStorage.getItem("user1")) || [];
    const obj1 = {
        username : uname.value,
        age : age.value,
        cource : cource.value,
        email : uemail.value,
        password : upassword.value
    }
    arrObj.push(obj1);
    localStorage.setItem("user1", JSON.stringify(arrObj));
    localStorage.setItem("Current_User",JSON.stringify(obj1));
    alert("Successfully Registered.");
    window.location.assign("./Dashboard.html");
}

const loginAccount = _ => {
    const uemail = document.getElementById("uemail").value;
    const upassword = document.getElementById("upassword").value;
    const arrObj = JSON.parse(localStorage.getItem("user1"));

    console.log(arrObj)
    debugger

    //Example 1:
    // let arrfunc_find = arr => {
    //     debugger
    //     return arr.email === uemail && arr.password === upassword;
    // }
    // let indexVal = arrObj.find(arrfunc_find);

    //Example 2:
    let indexValue = arrObj.find(x => x.email == uemail && x.password == upassword);

    //Example 3:
    // let indexVal = arrObj.find(function(x){
    //     return x.email == uemail && x.password == upassword
    // });

    if(indexValue){
        localStorage.setItem("Current_User",JSON.stringify(indexValue))
        alert("Login Successfull.");
        window.location.assign("./Dashboard.html");
    }
    else{
        alert("Email or Password is incorrect");
    }
}

const Logout = () => {
    localStorage.removeItem("Current_User")
    window.location.assign("./Login.html");
}

const loadHome = _ => {
    debugger
    const obj = JSON.parse(localStorage.getItem("Current_User"));
    document.getElementById("dname").innerHTML  = obj.username;
    document.getElementById("dage").innerHTML  = obj.age;
    document.getElementById("dcource").innerHTML  = obj.cource;
    document.getElementById("demail").innerHTML  = obj.email;
} 