// Mark list item as completed
$('li').click(function() {
    $(this).css('color', 'green');
});

// Delete list item
$('span').click(function() {
    $(this).css('color', 'red');
});

// Add new list item
$('input').keypress(function(event) {
    // If 'enter' is clicked
    if(event.which === 13) {
        alert('You hit enter!');
    }
});