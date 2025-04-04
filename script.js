  $(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});
function toggleLinks() {
    var box = document.getElementById('linkBox');
    box.style.display = (box.style.display === 'none' || box.style.display === '') ? 'block' : 'none';
};


