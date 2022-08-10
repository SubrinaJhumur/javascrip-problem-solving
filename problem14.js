//findout the area of a circle

function areaOfCircle(r){
    const pi = 3.1416;
    const area= pi*r*r;
    return area.toFixed(2);
}
const areaofcircle = areaOfCircle(7);
console.log(areaofcircle + " mterersqure");