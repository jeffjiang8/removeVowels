// Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

var removeVowels = function(S) {
    return S.replace(/[aeiou-]/g,'')
};