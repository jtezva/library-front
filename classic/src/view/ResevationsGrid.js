Ext.define('Lybrary.view.ReservationGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'resevationgrid',
    controller:'reservationgrid',
    title: 'Resevations',
    minHeight:200,
    maxHeight: 400,
    tbar:[{
        text:'Add',
        iconCls:'x-fa fa-plus',
        handler:'onAddClick'
    }],
    store:{
        autoLoad: true,
        model: "Lybrary.model.Reservation",
        proxy:{
            type: 'ajax',
            url: 'http://localhost/libraryapi/endpoint/reservation/getAll.php',
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
    },{
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
        flex:1,
        minWidth:100,
        dataIndex:'start'
    },{
        xtype:'datecolumn',
        format:'d/m/Y',
        text:'End',
        flex:1,
        minWidth:100,
        dataIndex:'end'
    },{
        text:'Status',
        flex:1,
        minWidth:100,
        dataIndex:'statusname'
    }]
});