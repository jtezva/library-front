Ext.define('Lybrary.view.CatalogGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'cataloggrid',
    title: 'Catalog',
    minHeight:200,
    maxHeight: 400,
    store:{
        autoLoad: true,
        model: "Lybrary.model.Catalog",
        proxy:{
            type: 'ajax',
            url: 'http://localhost/libraryapi/endpoint/catalog/getAll.php',
            reader:{
                type:'json',
                rootProperty:'data'
            }
        }
    },
    columns:[{
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