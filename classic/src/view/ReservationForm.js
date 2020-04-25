Ext.define('Lybrary.view.ReservationForm',{
    extend:"Ext.window.Window",
    xtype:'reservationform',

    controller:'reservationform',

    title: 'Reservation',
    modal:true,
    scrollabel:true,

    config: {
        mode: null
    },
    
    constructor: function (config) {
        config.maxWidth=Ext.getBody().getWidth()-100;
        config.maxHeigth=Ext.getBody().getHeight()-100;
        this.callParent(arguments);
    },

    defaults: {
        style: 'margin: 5px;'
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
            minLength:3,
            maxLength:10
        }, {
            xtype:'combo',
            name:'bookid',
            fieldLabel:'Book',
            valueField:'id',
            displayField:'name',
            allowBlank: false,
            queryMode: 'local',
            store:{
                autoLoad:true,
                proxy:{
                    type:'ajax',
                    url:'http://localhost/libraryapi/endpoint/book/getAll.php',
                    reader:{
                        type:'json',
                        rootProperty:'data'
                    }
                }
            }
        }, {
            xtype:'datefield',
            name:'start',
            fieldLabel:'Start',
            allowBlank:true,
            format:'d/m/Y'
        },{
            xtype:'datefield',
            name:'end',
            fieldLabel:'End',
            allowBlank:true,
            format:'d/m/Y'
        }, {
            xtype:'combo',
            name:'statusid',
            fieldLabel:'Status',
            valueField:'value',
            displayField:'display',
            allowBlank: false,
            queryMode: 'local',
            store:{
                autoLoad:true,
                fields: ['value', 'display'],
                proxy:{
                    type:'ajax',
                    url:'http://localhost/libraryapi/endpoint/catalog/findByCatalog.php?catalog=R_STAT',
                    reader:{
                        type:'json',
                        rootProperty:'data'
                    }
                }
            }
        }]
    }],
    buttons:[{
        text:'Save',
        iconCls:'x-fa fa-save',
        handler:'onSaveClick'
    }]
})