 $(document).ready(function () {
    

    $(function () {
        // Setup form validation on the #register-form element
        $("#sms-form-1").validate({
            // Specify the validation rules
            rules: {
                name: "required",
                phone: "required",
                message: "required"
            },

            // Specify the validation error messages
            messages: {
                name: "Введите, пожалуйста, имя",
                phone: "Введите, пожалуйста, номер телефона",
                message: "Введите сообщение"
            },

            submitHandler: function (form) {
                var data = $('#sms-form-1').serialize();
                $.ajax({
                    type: "POST",
                    url: 'form.php',
                    data: data,
                    success: function (result) {
                        $("<p class='sms-submit-result'>" + result + "</p>")
                            .insertAfter($("#sms-form-1 button"));
                             $("#sms-form-1")[0].reset();
                        setTimeout(removeSmsSubmitResult, 2000);
                        alert("Спасибо! Ваше сообщение отправлено.");
                    }
                });
            }
        });
    });
     
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.to_top').fadeIn();
        } else {
            $('.to_top').fadeOut();
        }
    });

    $('.to_top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 600);
    });
     
    });