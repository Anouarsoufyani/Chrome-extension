if (!localStorage['ads']) {
  localStorage.setItem('ads', "<div class='superlink superjdesign'><a id='jdesign' href='https://www.jdesign.fr/' target='_blank'><p>Partner: Jdesign</p></a>");
}
$('.jdesign').append(localStorage.getItem('ads'))
$('.content_links').append(localStorage.getItem('link2'));

$('#name_link, #url_link').keydown(
  function(e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 13:
        var name = $('#name_link').val();
        var url = $('#url_link').val();
        var link_elemt = "<div class='superlink'><a href='" + url + "' target='_blank'>" + name + "</a><button class='supprime'>&times;</button></div>"

        if (name != "" && url != "") {
        if (!localStorage['link2']) {
          localStorage.setItem('link2', link_elemt);

            $('.content_links').append(localStorage.getItem('link2'));
            $('#name_link').val("");
            $('#url_link').val("");


        } else {
          localStorage.setItem('link2', localStorage.getItem('link2') + link_elemt)
          $('.content_links').append(link_elemt);
          $('#name_link').val("");
          $('#url_link').val("");
        }
        $('.supprime').click(function() {
          $(this).parent().remove();
          localStorage.setItem('link2', $('.content_links').html());
        })
        $('*').css('color', localStorage.getItem('color'))
        }
        break;
    default:
        break;
    }
});

$(document).ready(function () {
  $('.supprime').click(function() {
    $(this).parent().remove();
    localStorage.setItem('link2', $('.content_links').html());
  })
})



// function removeLinks() {
//   localStorage.removeItem('link2')
//   $('.links').append(localStorage.getItem('link2'));
//   $('#name_link').val("");
//   $('#url_link').val("");
// }

$('.open_links').click(function() {
  $('.links').fadeToggle('fast')
})
