a = 10;
b = 20;
c = a + b;
console.log(c);
alert(c);

function ex01(n) {
    s = '';
    for(let i = 0; i < n; i++) {
        for(let j = i ; j < n ; j++) {
            s += '*';
        }
        s += '\n';
    }
    

    return s;
}

console.log(ex01(5));

multiple(9);

function multiple(n) {
    let s = `<table border=1> `;
    for(let i = 1; i <= n; i++) {
        s += `<tr>`;
        for(let j = 1; j <= n; j++) {
            if (i+j % 2 == 0) {
                s += `<td style='background-color:red'> ${i} * ${j} = ${i*j} </td>`;
            }
            else{
                s += `<td> ${i} * ${j} = ${i*j} </td>`;
            }
        }
        s += `</tr>`;
    }
    document.body.innerHTML = s;
}