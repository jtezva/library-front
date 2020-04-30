Ext.define('Lybrary.view.BookFrom',{
    extend: 'Ext.window.Window',
    xtype:'bookform',

    controller:'bookForm',

    title:'Book',
    modal: true,
    scrollabal:true,
    config:{
        mode:null
    },
    constructor:function(config){
        config.maxHeigth=Ext.getBody().getHeight()-100;
        this.callParent(arguments);
    },
    items:[{
        xtype:'form',
        defaults:{
            xtype:'textfield',
            allowBlank:false,
            style:'margin: 5px'
        },
        items:[{
            fieldLabel: 'Id',
            name: 'id',
            readOnly: true,
            allowBlank: true
        }, {
            fieldLabel:'Name',
            name:'name'
        }, {
            fieldLabel:'Author',
            name:'author'
        }, {
            xtype:'combo',
            name:'editorid',
            fieldLabel:'Editor',
            valueField:'value',
            displayField:'display',
            allowBlank: false,
            queryMode: 'local',
            store:{
                autoLoad:true,
                fields: ['value', 'display'],
                proxy:{
                    type:'ajax',
                    url:'http://localhost/libraryapi/endpoint/catalog/findByCatalog.php?catalog=B_EDIT',
                    reader:{
                        type:'json',
                        rootProperty:'data'
                    }
                }
            }
        }, {
            xtype:'combo',
            name:'categoryid',
            fieldLabel:'Category',
            valueField:'value',
            displayField:'display',
            allowBlank: false,
            queryMode: 'local',
            store:{
                autoLoad:true,
                fields: ['value', 'display'],
                proxy:{
                    type:'ajax',
                    url:'http://localhost/libraryapi/endpoint/catalog/findByCatalog.php?catalog=B_CAT',
                    reader:{
                        type:'json',
                        rootProperty:'data'
                    }
                }
            }
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
                    url:'http://localhost/libraryapi/endpoint/catalog/findByCatalog.php?catalog=B_STAT',
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
            inconCls:'x-fa fa-save',
            handler:'onSaveClick'
        }]
    
});