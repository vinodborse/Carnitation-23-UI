

document.getElementById('btn').addEventListener('mouseover', function () {
    document.getElementById('div-1').innerHTML = "<h1 style='color: red;'>HELLO</h1>"
})

document.getElementById('btn').addEventListener('mouseleave', function () {
    document.getElementById('div-1').innerHTML = "<h1 style='color: green;'>HELLO</h1>"
})




async function search() {
    var val = document.getElementById('inp').value;
    
    var result =  await fetch('https://dummyjson.com/products/'+val, {method: 'GET'})
    var finalResult =  await result.json();
    document.getElementById('div-2').innerText =  finalResult.title;
}