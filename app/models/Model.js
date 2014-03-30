define(
    [
        'vent',
        'backbone'
    ],
    function (vent, Backbone) {
        return Backbone.Model.extend({
            defaults: {
                rightText: '',
                leftText: ''
            },

            initialize: function () {
                var that = this;

                vent.on('right.text', function (text) {
                    that.set({'rightText': text});
                });

                vent.on('left.text', function (text) {
                    that.set({'leftText': text});
                });
            }
        });
    }
);

