(function ($) {
    jQuery.fn.equalizer = function (settings) {

        settings = $.extend({
            timeout: 2000,
            width: 2
        }, settings);

        function animateColumn(span, timeout, height) {
            span.animate({height: Math.round(height * Math.random())}, timeout);
            span.animate({height: height / 2}, timeout);
            span.queue(function (next) {
                animateColumn(span, timeout, height);
                next();
            });
        }

        var applyEqualizer = function () {

            var that = $(this);

            function setEqualizer(selector, timeout, colWidth) {
                if (!colWidth) {
                    colWidth = 1;
                }
                $(selector).css({
                    verticalAlign: 'bottom',
                    lineHeight: $(selector).height() + 'px'
                });

                // Кол-во столбиков
                var colQuantity = Math.ceil($(selector).width() / colWidth);
                var cols = new Array(colQuantity);
                var height = $(selector).height();
                for (var i = 0; i < cols.length; i++) {
                    var span = $('<span/>').appendTo(selector);
                    span.css({
                        verticalAlign: 'bottom',
                        display: 'inline-block',

                        fontSize: 0,
                        lineHeight: 0,

                        width: colWidth,
                        background: 'pink',
                        borderTop: '2px solid red'
                    });
                    animateColumn(span, timeout, height);
                }
            }
            setEqualizer(that, settings.timeout, settings.width);
        };
        return this.each(applyEqualizer);
    };
})(jQuery);

