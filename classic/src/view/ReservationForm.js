Ext.define('Lybrary.view.ReservationForm',{
    extend:"Ext.window.Window",
    xtype:'reservationform',
   // controller:'reservationform',
    title: 'Reservation',
    modal:true,
    scrollabel:true,
    
    constructor: function (config) {
        config.maxWidth=Ext.getBody().getWidth()-100;
        config.maxHeigth=Ext.getBody().getHeight()-100;
        this.callParent(arguments);
    },
    items:[{
        xtype:'form',
        defaults:{
            styele: 'margin: 10px'
        },
        items:[{
            xtype:"numberfield",
            name:'id',
            fieldLabel:'ID',
            readOnly: true
        },{
            xtype:"textfield",
            name:'user',
            fieldLabel:'User',
            readOnly: false,
            minLength:3,
            maxLength:10
        },{
            xtype:'combo',
            name:'bookid',
            fieldLabel:'Book',
            valueField:'id',
            displayField:'name',
            allowBlank: false,
            store:{
                autoLoad:true,
                model:'Lybrary.model.Book',
                proxy:{
                    type:'ajax',
                    url:'http://localhost/library-api/endpoint/book/getAll.php',
                    reader:{
                        type:'json',
                        rootProperty:'data'
                    }
                }
            }
        },{
            xtype:'datefield',
            name:'strat',
            fieldLabel:'Start',
            allowBlank:true,
            format:'d/m/Y'
        },{
            xtype:'datefield',
            name:'end',
            fieldLabel:'End',
            allowBlank:true,
            format:'d/m/Y'
        },{
            xtype:'combo',
            name:'statusid',
            fieldLabel:'Status',
            valueField:'catalog',
            displayField:'display',
            allowBlank: false,
            store:{
                autoLoad:true,
                model:'Lybrary.model.Catalog',
                proxy:{
                    type:'ajax',
                    url:'http://localhost/library-api/endpoint/catalog/findByCatalog.php?catalog=B_STAT',
                    reader:{
                        type:'json',
                        rootProperty:'data'
                    }
                }
            }
        }]
    }],
    buttons:[{
        text:'save',
        iconCls:'x-fa fa-save',
        handler:'onSaveClick'
    }]
})