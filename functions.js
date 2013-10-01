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

document.write('<h4>Filter Text Array by Length</h4>');

/*
 * Takes an input array of text items and returns a list of the
 * elements that are longer than length
 */
var filterWordLength = function(list, length) {
  var result = [];
  for(var index = 0; index < list.length; index++) {
    var element = list[index];
    if((typeof element === 'string') && (element.length > length)) {
      result.push(element);
	}
  }
  return result;
}
var testWords = [
  'short',
  'longer',
  'maybe even longer',
  'a really long sentance or something'
];
document.write('<p>7 -> ' + filterWordLength(testWords, 7) + '</p>');
document.write('<p>1000 -> ' + filterWordLength(testWords, 100) + '</p>');

document.write('<h4>Date Greeting</h4>');

/*
 * Returns a greeting based on the time of day of a date.
 * Morning is midnight to noon, afternoon is noon to five,
 * otherwise it's the evening.
 */
var dateGreeting = function(date) {
  var hours = date.getHours();
  if(hours < 12) {
    return 'Good morning';
  }
  else if(hours < 17) {
    return 'Good afternoon';
  }
  else {
    return 'Good evening';
  }
}

var morning = new Date(2013, 8, 30, 2, 34);
document.write('<p>' + morning.toString() +
  ' -> ' + dateGreeting(morning) + '</p>');
var afternoon = new Date(2013, 8, 30, 13, 00);
document.write('<p>' + afternoon.toString() +
  ' -> ' + dateGreeting(afternoon) + '</p>');
var evening = new Date(2013, 8, 30, 21, 00);
document.write('<p>' + evening.toString() +
  ' -> ' + dateGreeting(evening) + '</p>');

document.write('<h4>Make Change</h4>');

/*
 * Given a dollar amount, computes the change required
 * to tender to a customer.
 * Returned value looks like:
 * { 'dollars': 1, quarters, 2: etc }
 */
var makeChange = function(amount) {
  var change = {};
  
  // convert to pennies to make the math easier
  amount *= 100;
  while(amount > 0) {
    // calculate hundreds
    if(amount >= 10000) {
      change.hundreds = parseInt(amount / 10000);
      amount -= change.hundreds * 10000;
    }
    else if(amount >= 5000) {
      change.fifties = parseInt(amount / 5000);
      amount -= change.fifties * 5000;
    }
    else if(amount >= 1000) {
      change.tens = parseInt(amount / 1000);
      amount -= change.tens * 1000;
    }
    else if(amount >= 500) {
      change.fives = parseInt(amount / 500);
      amount -= change.fives * 500;
    }
    else if(amount >= 100) {
      change.ones = parseInt(amount / 100);
      amount -= change.ones * 100;
    }
    else if(amount >= 25) {
      change.quarters = parseInt(amount / 25);
      amount -= change.quarters * 25;
    }
    else if(amount >= 10) {
      change.dimes = parseInt(amount / 10);
      amount -= change.dimes * 10;
    }
    else if(amount >= 5) {
      change.nickels = parseInt(amount / 5);
      amount -= change.hundreds * 10000;
    }
    else {
      change.pennies = parseInt(amount);
      amount = 0;
    }
  }
  
  return change;
}

document.write('<p>7.23 -> ' + JSON.stringify(makeChange(7.23)) + '</p>');
