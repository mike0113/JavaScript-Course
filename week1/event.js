function a() {
    document.getElementById("mouseover").innerHTML = 'Orange';
}

function b() {
    document.getElementById("click").innerHTML = "Banana";
}

function c() {
    document.getElementById("mouseover").style.backgroundColor = 'magenta';
}

function minus(){
    let num = Number(document.getElementById("number").innerHTML);
    if (num !== 0){
        num -= 1;
        document.getElementById("number").innerHTML = num;
    }else {
        alert(":<");
    }

}

function add(){
    let num = Number(document.getElementById("number").innerHTML);
    num += 1;
    document.getElementById("number").innerHTML = num;
}

function start() {
    let num = Number(document.getElementById('star').value);
    console.log(num);
    s = '';
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= i; j++){
            s += '*';
        }
        s += '<br>';
    }

    document.getElementById('cal').innerHTML = s;
}