const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "");
    str = str.toLowerCase();
    let str2 = '';
    for (i = str.length; i >= 0; i--){
        str2 = str2.concat('', str.charAt(i));
    }
    if (str === str2){
        return true;
    } else return false;
}
// Do not edit below this line
module.exports = palindromes;
