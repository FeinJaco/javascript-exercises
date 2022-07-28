function innerPalindromes(s) {
    return (s.length <= 1) || (innerPalindromes(s.substring(1,s.length-1)) && (s.charAt(0) == s.charAt(s.length - 1)));
}

const palindromes = function (s) {
    s = s.replace(/[.,!'":;><?|_{}-]/g, '').replace(/\s/g, '').toLowerCase();
    return innerPalindromes(s);
};

// Do not edit below this line
module.exports = palindromes;
