if (module.hot) {
  module.hot.accept();
}

function makeImageBleu(img) {
  img.src = img.dataset.src_bleu;
}

function makeImageNormal(img) {
  img.src = img.dataset.src_normal;
}
  
var swapImages = document.getElementsByClassName('swapImage');
for (var i = 0; i < swapImages.length; i++) {
  (function () {
    var swapImage = swapImages[i];
    swapImage.addEventListener('mouseenter', function() { makeImageNormal(swapImage.getElementsByTagName("img")[0]); }, false);
    swapImage.addEventListener('touchstart', function() { makeImageNormal(swapImage.getElementsByTagName("img")[0]); }, false);
    swapImage.addEventListener('mouseleave', function() { makeImageBleu(swapImage.getElementsByTagName("img")[0]); }, false);
    swapImage.addEventListener('touchend', function() { makeImageBleu(swapImage.getElementsByTagName("img")[0]); }, false);
  }());
}
