// SparkleClean Services - main.js
// Just the basics, the way we did it back in '04.

// Simple form handler - pops up a "thank you" alert
function submitQuote() {
  var f = document.forms['quoteform'];
  if (f.name.value == '' || f.phone.value == '' || f.email.value == '') {
    alert('Please fill in your Name, Phone and E-mail so we can contact you!');
    return false;
  }
  alert('Thank you, ' + f.name.value + '!\n\nYour request has been received. A member of our team will contact you within 24 hours.\n\n- SparkleClean Services');
  f.reset();
  return false;
}

// Cheesy "live" hit counter that ticks up while you visit
window.onload = function () {
  var el = document.getElementById('hitcounter');
  if (!el) return;
  var count = parseInt(el.innerHTML, 10);
  setInterval(function () {
    count = count + 1;
    var s = '' + count;
    while (s.length < 8) { s = '0' + s; }
    el.innerHTML = s;
  }, 9000);
};
