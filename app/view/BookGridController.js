Ext.define('Lybrary.view.BookGridController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.bookgrid',

    onAddClick: function(b){
        let me = this;
        let view =me.getView();
        let form = Ext.create({
            xtype:'bookform',
            mode:'insert',
            listeners:{
                insertEvent: function(){
                    view.getStore().reload();
                }
            }
        });
        form.show();
    },
    onRowEditClick: function(grid, a, b, c, d, record){
        let me = this;
        let view = me.getView();
        let form=Ext.create({
            xtype: 'bookform',
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
    },
    onRowDeleteClick: function(grid, a, b, c, d, record){
        let me = this;
        let view = me.getView();
        if(confirm('Your record will be deleted, continue?')){
            let client = new Lybrary.view.LybraryClient();
            client.get({
                url:'http://localhost/libraryapi/endpoint/book/delete.php?id='+record.get('id'),
                success: function(){
                    Ext.toast('Book deleted');
                    view.getStore().reload();
                }
            });
        }
    }
});