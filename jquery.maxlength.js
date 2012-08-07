(function($) {

    $.fn.maxlength = function(settings) {

        var options = $.extend({
            max: 10,
            statusClass: 'status',
            statusText: 'characters left'
        }, settings);

        return this.each(function() {

            var $el = $(this);
            var len = $el.val().length;

            function update() {
                var left = options.max - len;
                if (left < 0) {
                    left = 0;
                }
                $el.siblings('div.' + options.statusClass).html(left + ' ' + options.statusText);
            }

            function check() {
                if (len >= options.max) {
                    $el.val($el.val().substr(0, options.max));
                }
                update();
            }

            $el.after('<div class="' + options.statusClass + '"></div>');
            update();

            $el.keyup(function() {
                len = $el.val().length;
                check();
            });
        });

    }

})(jQuery);
