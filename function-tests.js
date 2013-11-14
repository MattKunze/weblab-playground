describe('Simple Function tests', function() {
  
  describe('Reverse String Function', function() {
    
    it('should reverse the characters in a string', function() {
      var text = 'test value';
      expect(reverseString(text)).to.equal('eulav tset');
    });
    
    it('should handle empty string values', function() {
      expect(reverseString('')).to.equal('');
    });
    
    it('should handle null values', function() {
      expect(reverseString(null)).to.equal(null);
    });
    
    it('should throw exceptions for non-string values', function() {
      expect(function() { reverseString(123) }).to.throw();
    });
  });
  
  describe('Filter word length function', function() {
    
    it('should filter a list of words by length', function() {
      var words = [ 'short', 'longer', 'even longer'];
      var result = filterWordLength(words, 5);
      expect(result).to.deep.equal([ 'longer', 'even longer' ]);
    });
    
    it('should handle empty arrays', function() {
      expect(filterWordLength([], 0)).to.deep.equal([]);
    });
    
  });
  
  describe('Date greeting function', function() {
    
    it('should return "Good morning" for morning dates', function() {
      var greeting = dateGreeting(new Date(2013, 8, 30, 2, 34));
      expect(greeting.toLowerCase()).to.equal('good morning');
    });
    
    it('should return "Good afternoon" for afternoon dates', function() {
      var greeting = dateGreeting(new Date(2013, 8, 30, 13, 00));
      expect(greeting.toLowerCase()).to.equal('good afternoon');
    });
    
    it('should return "Good evening" for evening dates', function() {
      var greeting = dateGreeting(new Date(2013, 8, 30, 21, 00));
      expect(greeting.toLowerCase()).to.equal('good evening');
    });
    
  });
  
  describe('Make change function', function() {
  
    it('should calculate the correct change for a dollar amount', function() {
      var change = makeChange(7.23);
      expect(change).to.have.property('fives').to.equal(1);
      expect(change).to.have.property('ones').to.equal(2);
      expect(change['dimes']).to.equal(2);
      expect(change).to.have.property('pennies').to.equal(3);
    });
    
    it('should not contain properties for demominations not rendered', function(done) {
      var change = makeChange(7.23);
      expect(change).to.not.have.property('tens');
      done();
    });
  
  });
  
});
