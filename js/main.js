(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();



   // testimonial carousel
   $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    dots: true,
    dotsData: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

//
$(document).ready(function() {
			$('#send').on('click', function() {
				let nameInput=$('#name').val();
				let mail=$('#email').val();
				let subject=$('#subject').val();
				let message=$('#message').val();
				console.log(message,nameInput,mail,subject);
				let mailVerify = /^\S+@\S+\.\S+$/.test(mail);
				if(!mailVerify || mail==''){
				return	alert('Mail not Valid')
				}
				else if(nameInput==''){
				return	alert('Name Input not Valid')
				}else if(subject==''){
				return	alert('Subject Input not Valid')
				}else if(message==''){
				return	alert('Message Input not Valid')
				}
				Email.send({
					Host : "smtp.elasticemail.com",
					Username : "adam.dev.ai7@gmail.com",
					Password : "C78CAA2526F818EB407F780F40572F41DF60",
					To : 'maniasn3535@gmail.com',
					From : "maniasn3535@gmail.com",
					Subject : `${subject }-${mail}`||'test txt',
					Body :message||'working'
				}).then(
				  message => alert("Mail Sent Successfully !")
				);
			});
		}); 

// wow

// $('send').
