Ext.define('Lybrary.view.ReservationGridController',{
    extend:'Ext.app.ViewController',
    alias:'controller.reservationgrid',

    onAddClick:function(){
        let me=this,
            view=me.getView();
        let form= Ext.create({
            xtype:'reservationform',
            listeners:{
                close:function(){
                    view.getStore().reload();
                    console.log('store reloaded by event listening at saved')
                }
            }
        });
        form.show();
    }
})