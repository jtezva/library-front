Ext.define('Lybrary.model.Reservation',{
    extend: 'Ext.data.Model',
    fields:[{
        type:'int',
        name:'id'
    },{
        type:'string',
        name:'user'
    },{
        type:'int',
        name:'bookid'
    },{
        type:'date',
        name:'start',
        dateFormat:'d/m/Y'
    },{
        type:'string',
        name:'statusid'
    },
    //fields form join
    {
        type:'string',
        name:'bookname'
    },{
        type:'string',
        name:'statusname'
    }, {
        type:'date',
        name:'end',
        dateFormat:'d/m/Y'
    }]
});