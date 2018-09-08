var defaultImage = "../img/background.jpeg";

if (!localStorage['compte2']) //le compte n'existe pas (première utilisation ou réinstallation)
{
  localStorage['compte2'] = 1;
}

if (!localStorage["username2"]) {
  localStorage.setItem("username2", "username");
}

if (!localStorage['background2']) {
  localStorage.setItem('background2', defaultImage)
}

if (!localStorage['color']) {
  localStorage.setItem('color', "white")
}


$('#say_hello').val(localStorage.getItem('username2'))
$('body').css("background","url(" + localStorage.getItem('background2') + ")")
$('*').css("color", localStorage.getItem('color'))
$('*').css("borderColor", localStorage.getItem('color'))

$('.open_links, #openTodo').click(function () {
  $('*').css('color', localStorage.getItem('color'))
})

$('#defaultImage').click(function () {
  localStorage.setItem('background2', defaultImage)
  $('body').css("background","url(" + localStorage.getItem('background2') + ")")
})

$('button').mouseover(function () {
  $(this).css("color", 'black')
})

$('button').mouseout(function () {
  $(this).css("color", localStorage.getItem('color'))
})

$('#color_list').mouseover(function () {
  $(this).css("color", 'black')
  $(this).css("backgroundColor", 'white')
})

$('#color_list').mouseout(function () {
  $(this).css("color", localStorage.getItem('color'))
  $(this).css("backgroundColor", "black")
})
