const corsFixed = 'https://cors-anywhere.herokuapp.com/';

$(function () {
    $("button").click(function() {
        this.disabled = true;
        const url = $("input").val();
    const resultDiv = $("div");
    resultDiv.empty();
    const promise1 = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", corsFixed + url, true);
        xhr.onload = () => {
            if(xhr.status === 200){
                resolve(xhr.responseText);
            } else {
                reject(xhr.status.toString() + ' ' + xhr.statusText);
            }
            };
        xhr.onerror = () => reject(xhr.responseText);
        xhr.send();
    });
    promise1.then((text) => {
        resultDiv.css("color: black");
        resultDiv.append(text);
        this.disabled = false;
    });

    promise1.catch((text) => {
        resultDiv.css("color: red");
        resultDiv.append(text);
        this.disabled = false;
    });

});});