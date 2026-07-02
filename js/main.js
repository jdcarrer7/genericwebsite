// SparkleClean Services - main.js

// Show / hide the little search box in the nav
(function () {
  var btn = document.getElementById('searchBtn');
  var box = document.getElementById('searchBox');
  if (btn && box) {
    btn.addEventListener('click', function () {
      box.classList.toggle('open');
      if (box.classList.contains('open')) {
        var inp = box.querySelector('input');
        if (inp) inp.focus();
      }
    });
  }
})();

// Simple form handler - pops up a "thank you" alert
function submitQuote() {
  var f = document.forms['quoteform'];
  if (f.name.value === '' || f.phone.value === '' || f.email.value === '') {
    alert('Please fill in your Name, Phone and Email so we can contact you!');
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

// Highlight the active nav link while scrolling
(function () {
  var sections = document.querySelectorAll('section[id]');
  var links = document.querySelectorAll('.mainnav a');
  if (!sections.length || !links.length) return;
  window.addEventListener('scroll', function () {
    var y = window.pageYOffset;
    sections.forEach(function (sec) {
      var top = sec.offsetTop - 90;
      if (y >= top && y < top + sec.offsetHeight) {
        var id = sec.getAttribute('id');
        links.forEach(function (l) {
          l.classList.toggle('active', l.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { passive: true });
})();
