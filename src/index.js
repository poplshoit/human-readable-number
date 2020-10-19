module.exports = function toReadable (number) { 
    if (number < 100) {
        return twoDigit(number);
    } else if (number % 100 === 0) {
        return numbers[number / 100] + ' hundred';
    } else {
        return threeDigit(number);
    }
}

let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function twoDigit(num) {
    if (num < 20) {
        return numbers[num];
    } else if (num % 10 === 0){
        return tens[(num / 10) - 2];
    } else {
        return tens[Math.trunc(num / 100 * 10) - 2]+ ' ' + numbers[num % 10];
    }
}

function threeDigit(num) {
    return numbers[Math.trunc(num / 100)] + ' hundred ' + twoDigit(num % 100);
}