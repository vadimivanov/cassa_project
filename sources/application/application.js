RAD.application(function (core) {
        var app = this;
        app.startApp = function(){
            core.publish('navigation.show', {
                container_id: '.l-content',
                content: "view.start_page",
                animation: "none"
            });
        };
        return app;

}, true);