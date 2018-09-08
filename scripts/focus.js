if (!localStorage['focus']) {

}else {
  $('#focus_input').css('display', 'none')
}

$('#focus_container').append(localStorage.getItem('focus'));

$('#focus_input').keydown(
  function(e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 13:
        var value = $('#focus_input').val();
        var focus_elemt = "<div class='superfocus'><h1 id='focus_show'>" + value + "</h1><button id='close_focus'>&times;</button></div>"

        if (value != "") {
        if (!localStorage['focus']) {
            localStorage.setItem('focus', focus_elemt);
            $('#focus_input').fadeOut();
            $('#focus_container').append(localStorage.getItem('focus'));
            $('#focus_input').val("");
            $('#focus_input').css('display', 'none')
            $('#close_focus').click(function() {
              $(this).parent().remove();
              localStorage.removeItem('focus');
              $('#focus_input').fadeIn();
            })
        }

        }
        break;
    default:
        break;
    }
});

$(document).ready(function () {
  $('#close_focus').click(function() {
    $(this).parent().remove();
    localStorage.removeItem('focus');
    $('#focus_input').fadeIn();
  })
})
