document.write('<h4>Reverse String</h4>');

/*
 * Reverses the characters in the input text
 */
var reverseString = function(text) {
  var result = '';
  for(var index = text.length - 1; index >= 0; index--) {
    result += text[index];
  }
  return result;
//  return text.split('').reverse().join('');
}
document.write('<p>hello -> ' + reverseString('hello') + '</p>');
document.write('<p>a longer example -> ' + reverseString('a longer example') + '</p>');

document.write('<h4>Filter Text Array by Length');

/*
 * Takes an input array of text items and returns a list of the
 * elements that are longer than length
 */
var filterWordLength = function(list, length) {
  var result = [];
  return result;
}
