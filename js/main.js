$(document).ready(function () {
    'use strict';
    
//// slider
    $("[data-slider-wrap]").each(function() {
        var _this = $(this),
            _slick = _this.find("[data-slider]");

        function typeInit(target, str, destroy) {
            var typedOptions = {
                    strings: [str],
                    typeSpeed: 10,
                    cursorChar: ""
                },
                _typedjs = new Typed(target, typedOptions);

            if (destroy === true) {
                _typedjs.destroy();
            }
        } //typeInit END

        _slick
            .on("init", function(event, slick) {
                var _current = _slick.find("[data-slick-index='0']"),
                    _input = _current.find("[data-typed]"),
                    _inputNative = _input[0],
                    _data = _input.data("typed");

                typeInit(_inputNative, _data);
            })
            .on("afterChange", function(event, slick, currentSlide) {
                var _getCurrent = _slick.find(
                        "[data-slick-index='" + currentSlide + "']"
                    ),
                    _getInput = _getCurrent.find("[data-typed]"),
                    _getInputNative = _getInput[0],
                    _getData = _getInput.data("typed"),

                    _getAll = $("[data-slick-index]"),
                    _getAllInput = _getAll.find("[data-typed]"),
                    _getAllInputNative = _getAllInput[0];

                //destroy
                typeInit(_getAllInputNative, _getData, true);
                _getAllInput
                    .html("")
                    .next().remove();

                //init
                typeInit(_getInputNative, _getData);
            });

        _slick.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3500,
            arrows: false,
            dots: true
        });
    });
    
// sidebar
    $('#sidebar-btn').click(function () {
        $('#sidebar, header, #bottom-bar').toggleClass('active');
    });
    
// Search Modal
    $('#search-btn').click(function () {
        $('#search-modal').addClass('active');
    });
    
    $('#search-modal .close-form').click(function () {
        $('#search-modal').removeClass('active');
    });
    
// quote
    $('.quote span').click(function () {
        $(this).parent('.quote').toggleClass('opened');
    });
    
});