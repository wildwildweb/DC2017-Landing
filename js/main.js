jQuery(document).ready(function($) {

    $('#fullpage').fullpage(
        {
            css3: true,
            navigationPosition: 'right',
            navigation: true,
            responsiveWidth: 980,
            responsiveHeight: 750,
            afterRender: function(){
				setTimeout (
					function () {
                $('img.d').plaxify({"xRange": 40, "yRange": 40});
                $('img.r').plaxify({"xRange": 20, "yRange": 20});
                $('img.u').plaxify({"xRange": 10, "yRange": 10, "invert": true});
                $('img.p').plaxify({"xRange": 40, "yRange": 40, "invert": true});
                $('img.al').plaxify({"xRange": 30, "yRange": 30});
				$.plax.enable();
					},
					100
				);
                
            }
        }
    );

    $('.arrow.flash').css('cursor', 'pointer').bind(
        'click',
        function() {
            $.fn.fullpage.moveSectionDown();
        }
    );

});
