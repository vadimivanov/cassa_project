RAD.view("view.start_page", RAD.Blanks.View.extend({
    url: 'sources/views/start_page/start_page.html',
    children: [

        {
            container_id: '#content',
            content: 'view.main_page',
            extras: {display: 'recent'}
        }
    ]

}));