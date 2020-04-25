Ext.define('Lybrary.view.BookFormController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.bookForm',
    
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
            let url='http://localhost/library-api/endpoint/book/insert.php'
            if(view.getMode()==='update'){
                url='http://localhost/library-api/endpoint/book/update.php?id='+values.id;
            }
            client.post({
                url:url,
                body:values,
                success:function(){
                    if(view.getMode()==='insert'){
                        Ext.toast('Book inserted');
                    }else{
                        Ext.toast('Book updated');
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