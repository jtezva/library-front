Ext.define('Lybrary.view.BookGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'bookgrid',
    controller:'bookgrid',  
    title: 'Books',
    minHeight:200,
    maxHeight: 400,
    tbar:[{
        text:'Add',
        iconCls:'x-fa fa-plus',
        handler:'onAddClick'
    }],//agrega un libro
    store:{
        autoLoad: true,
        model: "Lybrary.model.Book",
        proxy:{
            type: 'ajax',
            url: 'http://localhost/libraryapi/endpoint/book/getAll.php',
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
            iconCls:'x-fa fa-pencil-square',
            tooltip:'Edit',
            srtable:false,
            handler: 'onRowEditClick'
        },{
            iconCls:'x-fa fa-times',
            tooltip:'Delete',
            srtable:false,
            handler: 'onRowDeleteClick'
        }]
    },{
        text:'ID',
        width:80,
        dataIndex:'id'
    },{
        text:'Name',
        flex:1,
        minWidth:100,
        dataIndex:'name'
    },{
        text:'Editor',
        flex:1,
        minWidth:100,
        dataIndex:'editorname'
    },{
        text:'Category',
        width:80,
        dataIndex:'categoryname'
    },{
        text:'status',
        width:80,
        dataIndex:'statusname'
    }]
});