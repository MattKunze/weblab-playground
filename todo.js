var app = {
  init: function() {
    $('.new-todo').keypress(app.addNewItem);
    $('.todo-list').on('click', '.toggle', app.toggleStatus);
	$('.todo-list').on('dblclick', '.todo-item label', app.beginEdit);
    $('.todo-list').on('blur', '.todo-item input', app.endEdit);
    $('.todo-list').on('keypress', '.todo-item input', app.editKeypress);
    $('.show-all').click(app.showAll);
    $('.show-active').click(app.showActive);
    $('.show-complete').click(app.showComplete);
  },
  addNewItem: function(ev) {
    // when keypress is enter
    if(ev.which === 13) {
      // get the new todo label
      var label = $('.new-todo').val();
      // create new todo item and append
      var newItem = $('.templates .todo-item').clone();
      // update the label
      newItem.find('label').text(label)
      // append to list
      newItem.appendTo('.todo-list');
      // reset todo input
      $('.new-todo').val('');
      // update remaining
      app.updateRemaining();
    }
  }, 
  toggleStatus: function(ev) {
    $(ev.target).closest('.todo-item').toggleClass('complete');
    app.updateRemaining();
  },
  beginEdit: function(ev) {
    var todo = $(ev.target).closest('.todo-item');
    // adding a class to display
    todo.addClass('edit');
    // set value of input to the current label
    todo.find('input')
      .val($(ev.target).text())
      // focus the input
      .focus();
    return false;
  },
  endEdit: function() {
    // get value of the input
    var todo = $('.todo-item.edit');
    var value = todo.find('input').val();
    // update the label to the new value
    todo.find('label').text(value);
    // hide the input
    todo.removeClass('edit');    
  },
  editKeypress: function(ev) {
    // end edit if enter key pressed
    if(ev.which === 13) {
      app.endEdit();
    }
  },
  updateRemaining: function() {
    var remaining = $('.todo-list .todo-item').not('.complete');
    $('.remaining').text(remaining.length + ' remaining');
  },
  showAll: function() {
    $('.todo-list').removeClass('show-active show-complete');
  },
  showActive: function() {
    $('.todo-list').removeClass('show-complete');
    $('.todo-list').addClass('show-active');
  },
  showComplete: function() {
    $('.todo-list').removeClass('show-active');
    $('.todo-list').addClass('show-complete');
  }
}
