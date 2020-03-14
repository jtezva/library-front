Ext.define('Lybrary.model.Catalog',{
    extend: 'Ext.data.Model',
    fields:[{
        type:'string',
        name:'table'
    },{
        type:'string',
        name:'key'
    },{
        type:'string',
        name:'value'
    }]
});