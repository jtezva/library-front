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
            url: 'resources/json/catalogs.json',
            reader:{
                type:'json',
                rootProperty:'data'
            }
        }
    },
    columns:[{
        text:'Table',
        width:80,
        dataIndex:'table'
    },{
        text:'Key',
        flex:1,
        minWidth:100,
        dataIndex:'key'
    },{
        text:'Value',
        flex:1,
        minWidth:100,
        dataIndex:'value'
    }]
});