let a = 1;
const sumar = () => {
    a += 2;
};
console.log(a); // 1
sumar();
console.log(a); // 3
// La funcion anterior es igual a
function sumar() {
    a += 2;
}
// O igual a 
const sumar = function () {
    a += 2;
};

//*  KE 

try {
    a();
} catch (err) {
    console.warn(err);
}
try {
    b();
} catch (err) {
    console.warn(err);
}
try {
    c();
} catch (err) {
    console.warn(err);
}
const a = () => {
    console.log('A');
};
function b() {
    console.log('B');
}
const c = function () {
    console.log('C');
}

try {
    a();
} catch (err) {
    console.warn(err);
}
try {
    b();
} catch (err) {
    console.warn(err);
}
try {
    c();
} catch (err) {
    console.warn(err);
}