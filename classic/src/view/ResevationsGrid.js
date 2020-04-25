Ext.define('Lybrary.view.ReservationGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'resevationgrid',
    controller:'reservationgrid',
    title: 'Resevations',
    minHeight:200,
    maxHeight: 400,
    tbar:[{
        text:'Add',
        inconCsl:'x-fa fa-plus',
        handler:'onAddClick'
    }],
    store:{
        autoLoad: true,
        model: "Lybrary.model.Reservation",
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
        text:'User',
        flex:1,
        minWidth:100,
        dataIndex:'user'
    },{
        text:'Book',
        flex:1,
        minWidth:100,
        dataIndex:'bookname'
    },{
        xtype:'datecolumn',
        format:'d/m/Y',
        text:'Start',
        width:100,
        dataIndex:'start'
    },{
        xtype:'datecolumn',
        format:'d/m/Y',
        text:'end',
        width:100,
        dataIndex:'end'
    },{
        text:'Statusname',
        width:80,
        dataIndex:'statusname'
    }]
});