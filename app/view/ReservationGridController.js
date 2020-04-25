Ext.define('Lybrary.view.ReservationGridController',{
    extend:'Ext.app.ViewController',
    alias:'controller.reservationgrid',

    onAddClick:function(){
        let me=this,
            view=me.getView();
        let form= Ext.create({
            xtype:'reservationform',
            mode:'insert',
            listeners:{
                insertEvent: function(){
                    view.getStore().reload();
                }
            }
        });
        form.show();
    },
    onRowDeleteClick: function(grid, a, b, c, d, record){
        let me = this;
        let view = me.getView();
        if(confirm('Your record will be deleted, continue?')){
            let client = new Lybrary.view.LybraryClient();
            client.get({
                url:'http://localhost/libraryapi/endpoint/reservation/delete.php?id='+record.get('id'),
                success: function(){
                    Ext.toast('Book deleted');
                    view.getStore().reload();
                }
            });
        }
    },onRowEditClick: function(grid, a, b, c, d, record){
        let me = this;
        let view = me.getView();
        let form=Ext.create({
            xtype: 'reservationform',
            mode: 'update',
            listeners:{
                updateEvent: function(){
                    view.getStore().reload();
                }
            }
        });
        form.show();
        form.down('form').loadRecord(record);
        console.log(record.data);
    }
})