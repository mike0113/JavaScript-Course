// let print = function(name) {
//     return `Good mormning ${name}`;
// }

// let a_print = name => `Good morning ${name}`;

// let tag = document.createElement('div');
// tag.innerHTML = a_print('Minkowski');
// document.body.appendChild(tag);

// let tag2 = document.createElement('div');
// tag2.innerHTML = print('Harrison');
// document.body.appendChild(tag2);

function cal(){
    
let a, b;
a = Number(document.getElementById('a').value);
b = Number(document.getElementById('b').value);
let ans = document.getElementById('answer');
ans.innerHTML = gcd(a,b);

}

let gcd = function(a,b) {

    if (b === 0) {
        return a;
    }else{
        return gcd(b, a%b);
    }
} 
