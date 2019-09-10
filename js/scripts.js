function detectDevice() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      // stylize padding based on device
      var dev = document.getElementById("mainpage");
      dev.style.paddingLeft = "5%";
      dev.style.paddingRight = "5%";
  }
}
// detect device when loading the website
window.onload = detectDevice();

// calculate the total
function calcTotal() {
  var bill = document.getElementById("bill");
  var tip = document.getElementById("percentage");
  var tipPercent = Number(tip.value) / 100;
  var tipTotal = (Number(bill.value) * tipPercent);
  var total = Number(bill.value) + tipTotal;
  return [tipTotal, total];
}

function addDiv() {
  var vals = calcTotal();
  tip = vals[0];
  tot = vals[1];
  var node = document.getElementById('calculateTotal');
  node.insertAdjacentHTML('afterend', '<div id="popDiv" class="animation1"><p>Tip: $'+tip.toFixed(2)+'</p><p>Total: $'+tot.toFixed(2)+'</p></div>');
  var popDiv = document.getElementById("popDiv");
  popDiv.addEventListener('animationend', function(e) {
    popDiv.remove();
    node.insertAdjacentHTML('afterend', '<div id="dropDiv" class="animation2"><p>Tip: $'+tip.toFixed(2)+'</p><p>Total: $'+tot.toFixed(2)+'</p></div>');
  });
  var dropDiv = document.getElementById("dropDiv");
  dropDiv.style.animationPlayState = "running";
  dropDiv.addEventListener('animationend', function(e) {
    dropDiv.remove();
  });
}
