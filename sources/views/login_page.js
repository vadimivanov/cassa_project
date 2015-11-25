RAD.view("view.login_page", RAD.Blanks.View.extend({
    url: 'sources/views/login_page.html',
     events: {
         'tap .checkLogin':'checkLogin'
     },

    checkLogin: function(){
        RAD.core.publish('navigation.show', {
            container_id: '#content',
            content: "view.main_page",
            animation: "slide"
        });
    }

}));