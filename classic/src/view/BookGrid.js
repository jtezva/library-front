Ext.define('Lybrary.view.BookGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'bookgrid',

    controller:'bookgrid',
    
    title: 'Books',
    minHeight:200,
    maxHeight: 400,
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
    tbar:[{
        text:'Add',
        iconCls:'x-fa fa-plus',
        handler:'onAddClick'
    }],
    columns:[{
        xtype:'actioncolumn',
        width:60,
        items:[{
            iconCls:'x-fa fa-edit',
            tooltip:'Edit',
            srtable:false,
            handler: 'onRowEditClick'
        },{
            iconCls:'x-fa fa-close',
            tooltip:'Delete',
            srtable:false,
            handler: 'onRowDeleteClick'
        }]
    }, {
        text:'ID',
        width:80,
        dataIndex:'id'
    },{
        text:'Name',
        flex:1,
        minWidth:100,
        dataIndex:'name'
    },{
        text:'Author',
        flex:1,
        minWidth:100,
        dataIndex:'author'
    },{
        text:'Editor',
        flex:1,
        minWidth:100,
        dataIndex:'editorname'
    },{
        text:'Category',
        flex:1,
        minWidth:100,
        dataIndex:'categoryname'
    },{
        text:'Status',
        flex:1,
        minWidth:100,
        dataIndex:'statusname'
    }]
});