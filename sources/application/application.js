RAD.application(function (core) {
    var APP_CONTAINER = '.l-content';

    this.MAP_KEY = 'AIzaSyBYcbHxzcf1vCz5yeq7NxZkmycaW8rJSMI';

    this.start = function () {
        var initBackButton = function () {
                var initHistoryBack = (document.getElementById('overlay').className.indexOf('show') < 0),
                    initAppClose;
                if (initHistoryBack) {
                    initAppClose = !!(document.querySelector("[view='view.start_page']"));
                    if (initAppClose) {
                        navigator.app.exitApp();
                    } else {
                        history.back();
                    }
                }
            };
        core.publish('navigation.show', {
            container_id: '.l-header',
            content: 'view.header_widget',
            animation: 'none'
        });
        core.publish('navigation.show', {
            container_id: APP_CONTAINER,
            content: 'view.start_page',
            animation: 'none',
            backstack: true
        });
        core.publish('service.service_loader.load', {
            name: 'RecentList'
        });
        core.publish('service.service_loader.load', {
            name: 'Favorites'
        });
        document.addEventListener('backbutton', initBackButton, false);
    };

    this.showResultsList = function () {
        core.publish('navigation.show', {
            container_id: APP_CONTAINER,
            content: 'view.list_rad_scrollview',
            backstack: true
        });
    };

    this.showDetails = function (modelId) {
        core.publish('navigation.show', {
            container_id: APP_CONTAINER,
            content: 'view.details_screen',
            extras : {
                collection : 'PropertyList',
                guid : modelId
            },
            backstack: true
        });
    };

    this.showDetailsFromFav = function (modelId) {
        core.publish('navigation.show', {
            container_id: APP_CONTAINER,
            content: 'view.details_screen',
            extras : {
                collection : 'Favorites',
                guid : modelId
            },
            backstack: true
        });
    };

    this.showFavorites = function (data) {
        core.publish('navigation.show', {
            container_id: APP_CONTAINER,
            content: 'view.favorites_rad_scrollview',
            extras: data,
            backstack: true
        });
    };

    this.showMap = function (data) {
        core.publish('navigation.show', {
            container_id: APP_CONTAINER,
            autocreate: true,
            content: 'view.map',
            extras: data,
            backstack: true
        });
    };

    this.mapInitialize = function () {
        this.mapScriptLoaded = true;
        core.publish('view.map.initialize', { autocreate: true });
    };

}, true);