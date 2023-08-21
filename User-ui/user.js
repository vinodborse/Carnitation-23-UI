
$('#clk-btn').click(function(){
    getAllUsers();
})

async function getAllUsers() {
    const url = "http://localhost:8082/get-all";
    const result = await fetch(url, {method: 'GET'});
    const finalResult = await result.json();

    console.log(finalResult);

}


$('#user-btn').click(function() {  
    getUserById();
})


async function getUserById() {

    const userId = $('#user-id').val();

    const url = 'http://localhost:8082/get-user?id='+ userId;
    const res = await fetch(url, {method: 'GET'});
    const finalRes = await res.json();
    console.log(finalRes);

    $('#result-data').html('<h1>'+ finalRes.firstName + ' '+ finalRes.lastName + '</h1>');

}