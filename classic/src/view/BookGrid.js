Ext.define('Lybrary.view.BookGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'bookgrid',
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
    columns:[{
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
        dataIndex:'authorname'
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