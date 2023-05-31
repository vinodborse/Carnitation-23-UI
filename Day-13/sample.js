function displayName() {
    // var name = document.getElementById('chotu').value;
//    alert(name);
    // alert(document.getElementById('chotu').value);   
    var name = document.getElementById('chotu').value;
    document.getElementById('h-name').innerText = name;            
}

function userLogin() {
    var name = document.getElementById('usr').value;
    var pass = document.getElementById('pwd').value;
    // alert(name +" "+ pass);

    if (pass == 'abc@123') {
    var name = document.getElementById('usr').value;
        document.getElementById('msg').innerText = "Welcom " + name;
    } else {
        document.getElementById('msg').innerText = "Password is wrong";
    }
}

// displayName();

// .
// #

