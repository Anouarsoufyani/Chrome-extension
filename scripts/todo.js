$('.content_todo').append(localStorage.getItem('todo'));

$('#todo_input').keydown(
  function(e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 13:
        var todo_name = $('#todo_input').val();
        var todo_elemt = "<div class='supertodo'><h3> " + todo_name + " </h3><button class='supprime'>&times;</button></div>"

        if (todo_name != "") {
        if (!localStorage['todo']) {
          localStorage.setItem('todo', todo_elemt);

            $('.content_todo').append(localStorage.getItem('todo'));
            $('#todo_input').val("");


        } else {
          localStorage.setItem('todo', localStorage.getItem('todo') + todo_elemt)
          $('.content_todo').append(todo_elemt);
          $('#todo_input').val("");
        }
        $('.supprime').click(function() {
          $(this).parent().remove();
          localStorage.setItem('todo', $('.content_todo').html());
        })
        }
        $('*').css('color', localStorage.getItem('color'))
        break;
    default:
        break;
    }
});

$(document).ready(function () {
  $('.supprime').click(function() {
    $(this).parent().remove();
    localStorage.setItem('todo', $('.content_todo').html());
  })
})


$('#openTodo').click(function() {
  $('.todo').fadeToggle('fast')
})
