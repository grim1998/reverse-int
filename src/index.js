module.exports = function reverse (n) {
    let f=Math.abs(n);
    let g=String(f);    
    let arr = Array.from(g);
    let p = arr.reverse();
    return +p.join('');
}
