(function (document, window) {
    var scripts = [
        'sources/application/application.js',
        'sources/models/models.js',
        'sources/views/start_page/start_page.js',
        'sources/views/login_page.js',
        'sources/views/main_page.js'
    ];

    function onEndLoad() {

        var core = window.RAD.core,
            application = window.RAD.application,
            coreOptions = {
                defaultBackstack: true,
                defaultAnimation: 'slide',
                animationTimeout: 3000,
                debug: false
            };

        //initialize core by new application object
        core.initialize(application, coreOptions);

        //start
        application.startApp();
    }

    window.RAD.scriptLoader.loadScripts(scripts, onEndLoad);
}(document, window));
