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
        dateFormat:'Y-m-d'
    }, {
        type:'date',
        name:'end',
        dateFormat:'Y-m-d'
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
    }]
});