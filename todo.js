var app = {
  init: function(options) {
    $('.new-todo').keypress(app.newKeypress);
    $('.todo-list').on('click', '.toggle', app.toggleStatus);
	$('.todo-list').on('dblclick', '.todo-item label', app.beginEdit);
    $('.todo-list').on('blur', '.todo-item input', app.endEdit);
    $('.todo-list').on('keypress', '.todo-item input', app.editKeypress);
    $('.show-all').click(app.showAll);
    $('.show-active').click(app.showActive);
    $('.show-complete').click(app.showComplete);
    
    // needed by test harness to initialize event bindings
    if(!options || !options.skipLoad) {
	  app.loadList();
    }
  },
  addNewItem: function(label, status) {
    // create new todo item and append
    var newItem = $('.templates .todo-item').clone();
    // update the label
    newItem.find('label').text(label)
    // complete new item if needed
    if(status === 'complete') {
      newItem.addClass('complete');
    }
    // append to list
    newItem.appendTo('.todo-list');
    // reset todo input
    $('.new-todo').val('');
    // update remaining
    app.updateRemaining();
  }, 
  newKeypress: function(ev) {
    // when keypress is enter
    if(ev.which === 13) {
      app.addNewItem($('.new-todo').val());
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

    app.storeList();
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
    
    app.storeList();
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
  },
  storeList: function() {
    var listItems = $('.todo-list .todo-item');
    var storeList = [];
    listItems.each(function() {
      var item = {
        label: $(this).find('label').text(),
        status: $(this).hasClass('complete') ? 'complete' : 'active'
      };
      storeList.push(item);
	});
    localStorage.setItem('todos', JSON.stringify(storeList));
  },
  loadList: function() {
    var todos = JSON.parse(localStorage.getItem('todos'));
    if(todos) {
      for(var index = 0; index < todos.length; index++) {
        var item = todos[index];
        app.addNewItem(item.label, item.status);
      }
    }
  }
}
