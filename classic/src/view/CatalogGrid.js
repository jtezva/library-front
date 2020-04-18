Ext.define('Lybrary.view.CatalogGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'cataloggrid',
    controller:'cataloggrid',
    title: 'Catalog',
    minHeight:200,
    maxHeight: 400,
    tbar:[{
        text:'Add',
        inconCls:'x-fa fa-plus',
        handler:'onAddClick'
    }],
    store:{
        autoLoad: true,
        model: "Lybrary.model.Catalog",
        proxy:{
            type: 'ajax',
            url: 'http://localhost/library-api/endpoint/catalog/getAll.php',
            reader:{
                type:'json',
                rootProperty:'data'
            }
        }
    },
    columns:[{
        xtype:'actioncolumn',
        width:60,
        items:[{
            inconCls:'x-fa fa-edit',
            tooltip:'Edit',
            srtable:false,
            handler: 'onRowEditClick'
        },{
            inconCls:'x-fa fa-close',
            tooltip:'Delete',
            srtable:false,
            handler: 'onRowDeleteClick'
        }]
    },{
        text:'catalog',
        width:80,
        dataIndex:'catalog'
    },{
        text:'value',
        flex:1,
        minWidth:100,
        dataIndex:'value'
    },{
        text:'display',
        flex:1,
        minWidth:100,
        dataIndex:'display'
    }]
});