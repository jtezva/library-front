Ext.define('Lybrary.view.CatalogFrom',{
    extend: 'Ext.window.Window',
    xtype:'catalogform',
    controller:'catalogForm',
    title:'Catalog',
    modal: true,
    scrollabal:true,
    config:{
        mode:null
    },
    constructor:function(config){
        config.maxHeigth=Ext.getBody().getHeight()-100;
        this.callParent(arguments);
        if(this.getMode()==='update'){
            this.down('[name=value]').hide();
        }
    },
    items:[{
        xtype:'form',
        defaults:{
            xtype:'textfield',
            allowBlank:false,
            style:'margin: 5px'
        },
        items:[{
            fieldLabel:'Catalog',
            name:'catalog'
        },{
            fieldLabel:'Value',
            name:'value'
        },{
            fieldLabel:'Display',
            name:'display'
        }]
    }],
    buttons:[{
            text:'save',
            inconCls:'x-fa fa-save',
            handler:'onSaveClick'
        }]
    
});