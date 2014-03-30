define(
    [
        'marionette',
        'views/MainView',
        'views/RightView',
        'views/LeftView'
    ],
    function (Marionette, MainView, RightView, LeftView) {
        var Application = new Marionette.Application();

        Application.addRegions({
            right: '#right',
            left: '#left',
            main: '#main'
        });

        Application.right.show(new RightView());
        Application.left.show(new LeftView());
        Application.main.show(new MainView());

        return Application;
    }
);
