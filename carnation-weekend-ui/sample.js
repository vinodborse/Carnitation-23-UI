
async function display() {
    const data = $('#inp-id').val();
    let url = '';

    if (parseFloat(data) == data) {
        url = 'http://localhost:8080/get-user?id='+data;
    } else {
        url = 'http://localhost:8080/nap?dat='+data;
    }
    
    const result = await fetch(url, {method: 'GET'});
    const finalResult = await result.json();
    let res = '';
    if (parseFloat(data) == data) {
        $('#result-dv').html('<h1>'+ finalResult.id + ' ' +finalResult.name + ' ' +finalResult.address +'</h1>');
    } else {
        // $('#result-dv').html('<h1>'+ finalResult[0].id +' '+finalResult[0].name +' '+finalResult[0].address +'</h1>');
        finalResult.forEach(element => {
            res = res + '<h1>'+ element.id +' '+element.name +' '+element.address +'</h1>'        
        });    
        $('#result-dv').html(res);
    }

}


async function displayAll() {
    const url = 'http://localhost:8080/users'
    const result = await fetch(url, {method: 'GET'});
    globalData = await result.json();

    let data = '';
    globalData.forEach(element => {
        data = data + '<h1>'+ element.id +' '+element.name +' '+element.address +'</h1>'        
    });    
    $('#result-dv').html(data);
}

var globalData = '';

async function filter() {
    let data = '';
    const filterData = $('#fltr').val();
    globalData.forEach(element => {
        if (element.address === filterData) {
            data = data + '<h1>'+ element.id +' '+element.name +' '+element.address +'</h1>'        
        }
    });    
    $('#result-dv').html(data);
}
