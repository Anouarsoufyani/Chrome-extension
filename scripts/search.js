$('#search_bar').keydown(
  function(e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 13:
        if ($('#search_bar').val() != "") {
          window.open("https://www.google.fr/search?q="+ $('#search_bar').val() +"+&oq="+ $('#search_bar').val() +"&aqs=chrome..69i57j69i60l3j0l2.643j0j1&sourceid=chrome&ie=UTF-8", '_blank')
          $('#search_bar').val("")
        }
        break;
    default:
        break;
    }
});
