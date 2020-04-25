Ext.define('Lybrary.view.CatalogGridController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.cataloggrid',

    onAddClick: function(b){
        let me = this;
        let view =me.getView();
        let form = Ext.create({
            xtype:'catalogform',
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
            xtype: 'catalogform',
            mode: 'update',
            listeners:{
                updateEvent: function(){
                    view.getStore().reload();
                }
            }
        });
        form.show();
        form.down('form').loadRecord(record);
    },
    onRowDeleteClick: function(grid, a, b, c, d, record){
        let me = this;
        let view = me.getView();
        if(confirm('Your record will be deleted, continue?')){
            let client = new Lybrary.view.LybraryClient();
            client.get({
                url:'http://localhost/library-api/endpoint/catalog/delete.php?value='+record.get('value'),
                success: function(){
                    Ext.toast('Catalog deleted');
                    view.getStore().reload();
                }
            });
        }
    }
});