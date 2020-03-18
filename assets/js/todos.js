// Mark list item as completed
$('ul').on('click', 'li', function() {
    $(this).css('color', 'green');
});

// Delete list item
$('ul').on('click', 'span', function() {
    $(this).css('color', 'red');
});

// Add new list item
$('input').keypress(function(event) {
    // If 'enter' is clicked
    if (event.which === 13) {
        let inputValue = $(this).val();
        $('ul').append('<li><span>X </span>' + inputValue + '</li>');
    }
});
