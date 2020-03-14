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
            readOnly: true,
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
                    url:'resources/json/books.json',
                    reader:{
                        type:'json',
                        rootPropety:'data'
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
            name:'satusid',
            fieldLabel:'Status',
            valueField:'id',
            displayField:'name',
            allowBlank: false,
            store:{
                autoLoad:true,
                model:'Lybrary.model.Catalog',
                proxy:{
                    type:'ajax',
                    url:'resources/json/catalogs.json',
                    reader:{
                        type:'json',
                        rootPropety:'data'
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