// Toggle showing text input 
$('.toggleInputText').on('click', function() {
    $('.textInput').toggle();
});

// Mark list item as completed
$('.thingsToDo').on('click', 'li', function() {
    $(this).toggleClass('done');
});

// Delete list item
$('.thingsToDo').on('click', 'span', function() {
    $(this).css('color', 'red');
});

// Add new list item
$('.textInput').keypress(function(event) {
    // If 'enter' is clicked
    if (event.which === 13) {
        let toDoItem = $(this).val();
        $('.thingsToDo').append('<li class="todo"><span>X </span>' + toDoItem + '</li>');
    }
});
