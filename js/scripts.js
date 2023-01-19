for (let i = 5; i <= 30; i += 5){
    console.log(i);
}


let countTo;
let countBy;
for (let i = countBy; i <= countTo; i += countBy){
    console.log(i);
}





function countUpBy(countTo, countBy){
    let absCountTo = Math.abs(countTo);
    let absCountBy = Math.abs(countBy)
        if (absCountTo === 0 || absCountBy === 0){
            console.log('cannot be zero')
        } else if (isNaN(parseInt(absCountTo)) || isNaN(parseInt(absCountBy))){
            console.log('must enter a numeric value')
        } else if (absCountTo < absCountBy) {
            console.log('count to must be larger than count by')
        } else {
        for (let i = absCountBy; i <= absCountTo; i += absCountBy){
            console.log(i);
        }
    }
}

// function submitFunc() {
//     let countNum = 33 document.getElementById('CountByNumber').input;
//     document.getElementById('CountToNumber').input;
//     countUpBy(document.getElementById('CountByNumber').input, document.getElementById('CountToNumber').input)
// }

// window.addEventListener("load", function(){
//     document.getElementById('submit').addEventListener("click", submitFunc);
// });              (absCountTo.trim() === '' || absCountBy.trim() === ''){
    //console.log('must enter a numeric value')