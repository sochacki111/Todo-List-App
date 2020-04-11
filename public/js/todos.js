// // Toggle showing text input
// $('.toggleInputText').on('click', function (event) {
//     $('.textInput').slideToggle('fast');
//     event.stopPropagation();
// });

// Mark list item as completed
$('.list-group').on('click', '.list-group-item', function (event) {
    // Create fetch patch
    fetch('/todos/tasks', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PATCH',
        body: JSON.stringify({
            isDone: true,
        })
    });

    $(this).toggleClass('done');
    event.stopPropagation();
});

// // Delete list item
// $('.thingsTodo').on('click', '.trashCan', function (event) {
//     $(this)
//         .parent()
//         .fadeOut(200, function () {
//             $(this).remove();
//         });
//     event.stopPropagation();
// });

// // Add new list item
// $('.textInput').keypress(function(event) {
//     let toDoItem = $(this).val();
//     // If 'enter' is clicked
//     if (event.which === 13 && toDoItem !== '') {
//         $('.thingsTodo').append(
//             '<li class="todo"><span class="trashCan"><i class="fa fa-trash"></i></span>' +
//                 toDoItem +
//                 '</li>'
//         );
//         $(this).val('');
//     }
// });

// Add new list item
// $('.textInput').keypress(function(event) {
//     let toDoItem = $(this).val();
//     // If 'enter' is clicked
//     if (event.which === 13 && toDoItem !== '') {
//         fetch('/todos/addTask')
//         .then
//         $('.list-group').append(
//             '<li class="list-group-item">Vestibulum at eros</li>'
//         );
//         $(this).val('');
//     }
// });

// $('.listEntry').on('keypress', '.textInput', e => {
//     let entry = $(this).val();
//     if (event.which === 13 && entry !== '') {
//         // $('.list-group').append(
//         //     '<li class="list-group-item">Vestibulum at eros</li>'
//         // );
//         alert(1);
//         console.log($(this));
//         console.log($(this).parent());
//         // $(this).submit();
//         $(this).val('');
//     }
// });