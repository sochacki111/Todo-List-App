// Mark list item as completed
$('.list-group').on('click', '.list-group-item', function (event) {
    let todo_id = $(this).parent().data('todo_id');
    let task_id = $(this).data('task_id');
    // Create fetch patch
    fetch(`/todos/${todo_id}/tasks/${task_id}`, {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        method: 'PATCH',
    });

    $(this).toggleClass('done');
    event.stopPropagation();
});