RAD.view("view.main_page", RAD.Blanks.View.extend({
    url: 'sources/views/main_page.html',
     events:{
          'tap .item1':'counter'
     },
    onInitialize: function(){
        this.model = RAD.models.MenuList;
    },
    counter: function(){
        var modelItem1 = {};
        modelItem1.res += 1;
        modelItem1.name = 'espresso';
        this.model.push(modelItem1);
        this.render();

    }

}));