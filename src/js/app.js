// JS Goes here - ES6 supported
const video = document.getElementsByClassName('video-holder')[0];
video.addEventListener('click', function(e) {
	var options01 = {
	  id: video.getAttribute('data-id'),
	  width: video.clientWidth
	};

	var video01Player = new Vimeo.Player('video-overlay', options01);

	video01Player.setVolume(0);

	video01Player.on('play', function() {
		document.getElementById('video-overlay').classList.add('active');
	  	console.log('Played the first video');
	});
});

$(document).ready(function() {
	$('.slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev">&lt;</button>',
		nextArrow: '<button type="button" class="slick-next">&gt;</button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 737,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});
})

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
