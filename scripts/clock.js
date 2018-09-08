window.onload = function() {
  horloge('clock');
};

function horloge(el) {

  if (typeof el == "string") {
    el = document.getElementById(el);
  }

  function actualiser() {

    var date = new Date();
    var str = date.getHours();

    if (str < 24 && str >= 18) {
      document.getElementById('say_hello').innerHTML = "Good evening, " + localStorage.getItem("username2") + ".";
    } else if (str <= 12 && str >= 6) {
      document.getElementById('say_hello').innerHTML = "Good morning, " + localStorage.getItem("username2") + ".";
    } else if (str < 18 && str >= 12) {
      document.getElementById('say_hello').innerHTML = "Good afternoon, " + localStorage.getItem("username2") + ".";
    } else if (str < 6 || str >= 24) {
      document.getElementById('say_hello').innerHTML = "Good night, " + localStorage.getItem("username2") + ".";
    }


    str += ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    el.innerHTML = str;

  }

  actualiser();
  setInterval(actualiser, 6000);

}
