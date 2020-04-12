Ext.define('Lybrary.view.CatalogFromController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.catalogForm',
    
    onSaveClick:function(b){
        let me=this;
        let view=me.getView();
        let from=view.down('form');
        let values=from.getValues();
        try{
            if(!from.isValid()){
                Ext.toast('Pleas reviewd your information');
                return;
            }
            let client=new Lybrary.view.LybraryClient();
            let url='http://localhost/LibraryAPI/endpoint/catalog/insert.php'
            if(view.getMode()==='update'){
                url='http://localhost/LibraryAPI/endpoint/catalog/update.php?value='+values.value;
            }
            client.post({
                url:url,
                body:values,
                success:function(){
                    if(view.getMode==='insert'){
                        Ext.toast('catalog inserte');
                    }else{
                        Ext.toast('catalog update');
                    }
                    view.fireEvent(view.getMode()+'Event',view);
                    view.close();
                }
            })
        }catch(e){
            alert(e);
        }
    }
});