// Toggle showing text input 
$('.toggleInputText').on('click', function(event) {
    $('.textInput').toggle();
    event.stopPropagation();
});

// Mark list item as completed
$('.thingsTodo').on('click', 'li', function(event) {
    $(this).toggleClass('done');
    event.stopPropagation();
});

// Delete list item
$('.thingsTodo').on('click', 'span', function(event) {
    $(this).parent().fadeOut(200, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Add new list item
$('.textInput').keypress(function(event) {
    // If 'enter' is clicked
    if (event.which === 13) {
        let toDoItem = $(this).val();
        $('.thingsTodo').append('<li class="todo"><span>X </span>' + toDoItem + '</li>');
    }
});
