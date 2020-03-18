// Toggle showing text input 
$('.toggleInputText').on('click', function() {
    $('.textInput').toggle();
});

// Mark list item as completed
$('.thingsTodo').on('click', 'li', function() {
    $(this).toggleClass('done');
});

// Delete list item
$('.thingsTodo').on('click', 'span', function() {
    $(this).parent().remove();
});

// Add new list item
$('.textInput').keypress(function(event) {
    // If 'enter' is clicked
    if (event.which === 13) {
        let toDoItem = $(this).val();
        $('.thingsTodo').append('<li class="todo"><span>X </span>' + toDoItem + '</li>');
    }
});
