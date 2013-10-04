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

$(document).ready(function() {
  
  $('.execute-reverse-string').click(function() {
   	var text = $('#reverse-input').val();
    $('#reverse-output').val(reverseString(text));
    // prevent the form from submitting
    return false;
  });
  $('.reset-reverse-string').click(function() {
    $('#reverse-input,#reverse-output').val('');
    // prevent the form from submitting
    return false;
  });
})

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

$(document).ready(function() {
  
  $('.add-filter-string').click(function(){
    var text = $('#new-filter-string').val();
    if(text) {
	  $('.filter-string-list').append('<li>' + text + '</li>');
    }
    return false;
  });
  $('.filter-string-list').click('li', function(ev) {
    $(ev.target).remove();
  });
  $('.execute-filter-list').click(function() {
    var list = [];
    $('.filter-string-list li').each(function() {
      list.push($(this).text());
    });
    var length = parseInt($('#filter-length').val());
    var results = filterWordLength(list, length);
    $('.filter-results').text(JSON.stringify(results));
  });
});

//document.write('<h4>Date Greeting</h4>');

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

/*
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
*/

/*
 * Given a dollar amount, computes the change required
 * to tender to a customer.
 * Returned value looks like:
 * { 'dollars': 1, quarters, 2: etc }
 */
var makeChange = function(amount) {
  var change = {};
  
  var denominations = [
    { name: 'hundreds', value: 10000 },
    { name: 'fifties', value: 5000 },
    { name: 'twenties', value: 2000 },
    { name: 'tens', value: 1000 },
    { name: 'fives', value: 500 },
    { name: 'ones', value: 100 },
    { name: 'quarters', value: 25 },
    { name: 'dimes', value: 10 },
    { name: 'nickels', value: 5 },
    { name: 'pennies', value: 1 }
  ];
  
  // convert to pennies to make the math easier
  amount *= 100;
  for(var index = 0; index < denominations.length; index++) {
    var current = denominations[index];
    if(amount >= current.value) {
      var number = parseInt(amount / current.value);
      amount -= number * current.value;
      change[current.name] = number;
    }
  }
  
  return change;
}

/*
document.write('<p>7.23 -> ' + JSON.stringify(makeChange(7.23)) + '</p>');
document.write('<p>1234.56 -> ' + JSON.stringify(makeChange(1234.56)) + '</p>');

document.write('<h4>Movie Sort</h4>');
*/

var movies = [
    'The Shawshank Redemption,1994,1043071',
    'The Godfather,1972,732416',
    'The Godfather: Part II,1974,474640',
    'Pulp Fiction,1994,806431',
    'The Dark Knight,2008,1017508',
    '12 Angry Men,1957,255846',
    'Schindler\'s List,1993,528900',
    'The Lord of the Rings: The Return of the King,2003,738931',
    'Fight Club,1999,791186',
    'Star Wars: Episode V - The Empire Strikes Back,1980,503348'
];

/*
 * Takes a formatted list of movies, parses the data, and
 * returns the movies sorted by year released
 */
var movieSort = function(movies) {
  var results = [];
  for(var index = 0; index < movies.length; index++) {
    var items = movies[index].split(',');
    var movie = {
      title: items[0],
      year: parseInt(items[1]),
      votes: parseInt(items[2])
    };
    results.push(movie);
  }
  var sortMovies = function(lhs, rhs) {
    if(lhs.year < rhs.year) {
      return -1;
    }
    else if(lhs.year > rhs.year) {
      return 1;
    }
    else if(lhs.votes < rhs.votes) {
      return -1;
    }
    else if(lhs.votes > rhs.votes) {
      return 1;
    }
    else {
      return 0;
    }
  }
  return results.sort(sortMovies);
}

//document.write('<pre>' + 
//  JSON.stringify(movieSort(movies), null, '  ') + '</pre>');
