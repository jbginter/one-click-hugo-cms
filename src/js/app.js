// JS Goes here - ES6 supported
const video = document.getElementsByClassName('video-holder')[0];
video.addEventListener('click', function(e) {
	var options01 = {
	  id: video.getAttribute('data-id'),
	  width: ($(window).width() < $(window).height() ? $(window).width() : $(window).height())
	};

	var video01Player = new Vimeo.Player('video-overlay', options01);

	video01Player.setVolume(1);
	video01Player.play();

	video01Player.on('play', function() {
		document.getElementById('video-overlay').classList.add('active');
	});

	destroyPlayer(video01Player);
});

$('.submit-button').on('click', function() {
	$('.review-form').removeClass('dn');
});

$(document).ready(function() {
	$('.slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="./img/Review-Arrow-Left.svg" /></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="./img/Review-Arrow-Right.svg" /></button>',
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

function destroyPlayer(player) {
	$('#close-video').on('click', function() {
		document.getElementById('video-overlay').classList.remove('active');
		player.destroy();
	});
}

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
