(function($) {

    $.fn.maxlength = function(settings) {

        var options = $.extend({
            max: 10,
            status: null,
            statusClass: 'status',
            statusText: 'characters left'
        }, settings);

        return this.each(function() {

            var $el = $(this);
            var len = $el.val().length;
            var $status = options.status;

            if ($status === null) {
                $status = $('<div class="' + options.statusClass + '"></div>');
                $el.after($status);
            } else {
                $status.addClass(options.statusClass);
            }

            function update() {
                var left = options.max - len;
                if (left < 0) {
                    left = 0;
                }
                $status.html(left + ' ' + options.statusText);
            }

            function check() {
                if (len >= options.max) {
                    $el.val($el.val().substr(0, options.max));
                }
                update();
            }

            update();

            var changed = function() {
                len = $el.val().length;
                check();
            }
            $el.keyup(changed).change(changed);
        });

    }

})(jQuery);
