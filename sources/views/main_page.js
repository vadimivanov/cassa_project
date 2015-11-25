RAD.view("view.main_page", RAD.Blanks.View.extend({
    url: 'sources/views/main_page.html',
    className: 'main-page',
     events:{
          'tap .list span':'counter'
     },
    count : 0,
    onInitialize: function(){
        var self=this;
        this.model = RAD.models.MenuList;
        $.getJSON('sources/list/list.json', function(data){
            self.model.reset(data);
        });
//        this.itemList(this.count);
    },
    counter: function(e){
        var modelId=e.currentTarget.getAttribute('data-model-id'),
            modelRes=RAD.models.MenuList.at(modelId).get('res'),
            modelPrice=RAD.models.MenuList.at(modelId).get('price');
        modelRes+=1;
        console.log('MODEL', modelRes);
        this.itemList(modelRes, modelId, modelPrice);
    },
    itemList: function(count, name, modelPrice){
        var modelItem1 = this.model.at(name),
            newRes = modelItem1.set({res:count}),
            summa = count*modelPrice;
        modelItem1.set({sum: summa});
        this.model.add(modelItem1);
        console.log('------LIST',summa,modelPrice);
        this.render();
        console.log('===New Model',this.model);
    }

}));