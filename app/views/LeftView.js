define(
    [
        'vent',
        'marionette',
        'jquery'
    ],
    function (vent, Marionette, $) {
        return Marionette.ItemView.extend({
            template: '#view-template',

            events: {
                'keyup input': 'triggerEvent'
            },

            triggerEvent: function (e) {
                var value = $(e.currentTarget).val();
                vent.trigger('left.text', value)
            }
        });
    }
);
