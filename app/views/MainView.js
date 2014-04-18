define(
    [
        'marionette',
        'models/Model'
    ],
    function (Marionette, Model) {
        return Marionette.ItemView.extend({
            template: '#main-template',

            model: new Model,

            initialize: function () {
                this.model.on('change', this.render, this);
            }
        });
    }
);
