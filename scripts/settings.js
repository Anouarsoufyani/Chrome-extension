$('#changeUsernameInput, #changeBackgroundImageInput, #changeFontColorInput').keydown(
  function(e) {
  var key = e.keyCode || e.which;
  switch (key) {
      case 13:
      var usernameInput = $('#changeUsernameInput').val();
      var backgroundImageInput = $('#changeBackgroundImageInput').val();
      var fontColorInput = $('#changeFontColorInput').val();

      if (usernameInput != '') {
        localStorage.setItem('username2', usernameInput);
        $('#changeUsernameInput').val("");
        actualiser();
      };
      if (backgroundImageInput != '') {
        localStorage.setItem('background2', backgroundImageInput);
        $('body').css("background","url(" + localStorage.getItem('background2') + ")")
        $('#changeBackgroundImageInput').val("");
      };
      if (fontColorInput != '') {
        localStorage.setItem('color', fontColorInput);
        $('*').css("color", localStorage.getItem('color'))
        $('*').css("borderColor", localStorage.getItem('color'))
        $('#changeFontColorInput').val("");
      };
      break;
  default:
      break;
  }
})
