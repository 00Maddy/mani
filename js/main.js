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
        nav: true,
        navText: [
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
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

//
$(document).ready(function () {
    $('#send').on('click', function () {
        event.preventDefault();
        let nameInput = $('#name').val();
        let mail = $('#email').val();
        let phone = $('#phone').val(); // Assuming there's an input field with id 'phone'
        let subject = $('#subject').val();
        let message = $('#message').val();
        console.log(message, nameInput, mail, phone, subject);

        let mailVerify = /^\S+@\S+\.\S+$/.test(mail);
        if (!mailVerify || mail == '') {
            alert('Mail not Valid');
            return;
        } else if (nameInput == '') {
            alert('Name Input not Valid');
            return;
        } else if (phone == '') {
            alert('Phone Input not Valid');
            return;
        } else if (subject == '') {
            alert('Subject Input not Valid');
            return;
        } else if (message == '') {
            alert('Message Input not Valid');
            return;
        }
        let emailBody = `
            Name: ${nameInput}<br>
            Email: ${mail}<br>
            Phone: ${phone}<br>
            Subject: ${subject}<br>
            Message: ${message}
        `;
        Email.send({
            Host: "smtp.elasticemail.com", ///smtp.elasticemail.com
            Username: "maniasn3535@gmail.com",
            Password: "C9E80E978A3ADAE1429E5DA6F17C0A2DE0ED",
            To: 'maniasn3535@gmail.com',
            From: "maniasn3535@gmail.com",
            Subject: `${subject}-${nameInput}` || 'test txt',
            Body: emailBody || 'working'
        }).then(
            message => alert("Mail Sent Successfully!"),
            error => alert("Mail Sending Failed: " + error)
        );
    });
});

// wow

// $('send').
