describe('Todo App Tests', function() {
  
  describe('Creating Todo Items', function() {
    
    beforeEach(function() {
      $('body')
      	.append('<input class="new-todo">')
      	.append('<ul class="todo-list">')
      	.append('<div class="templates"><div class="todo-item"><span class="toggle"></span><label></label></div></div>');
      
      app.init({ skipLoad: true });
    });
    afterEach(function() {
      $('.new-todo').remove();
      $('.todo-list').remove();
      $('.templates').remove();
    })
    
    it('should add items to the list using a template', function() {
      var spy = sinon.spy(app, 'updateRemaining');
      
      // perform the code to add an item
      app.addNewItem('This is a new item', 'active');
      
      var item = $('.todo-list .todo-item');
      expect(item.length).to.equal(1);
      expect(item.hasClass('complete')).to.be.false;
      expect(item.find('label').text()).to.equal('This is a new item');
      
      // adding item call method to update the status
      expect(spy.callCount).to.equal(1);
    });
    
    it('should add completed items directly', function() {
      
      app.addNewItem('This is a complete item', 'complete');

      var item = $('.todo-list .todo-item');
      expect(item.length).to.equal(1);
      expect(item.hasClass('complete')).to.be.true;
      expect(item.find('label').text()).to.equal('This is a complete item');
    });
    
    it('should complete an item when the toggle is clicked', function() {
      app.addNewItem('This is a new item', 'active');
      
      $('.todo-item .toggle').click();
      
      var item = $('.todo-list .todo-item');
      expect(item.hasClass('complete')).to.be.true;
    });
    
    it('should trigger creating a new item from the input', function() {

      var spy = sinon.spy(app, 'addNewItem');

      $('.new-todo').val('Item from input');
      var ev = jQuery.Event('keypress');
      ev.which = 13;
      $('.new-todo').trigger(ev);
      
      expect(spy.callCount).to.equal(1);
      expect(spy.calledWith('Item from input')).to.be.true;
    });
  });
  
});