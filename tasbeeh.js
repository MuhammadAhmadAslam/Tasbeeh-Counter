var dataCount = 0
function increment() {
    dataCount++
    document.getElementById("number").innerText = dataCount
}
function decrement() {
    if (dataCount > 0) {
        
        dataCount--
        document.getElementById("number").innerText = dataCount
    }
}

var resetvalue = 0
function reset() {
    document.getElementById('number').innerText = resetvalue
}