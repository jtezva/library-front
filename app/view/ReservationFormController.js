Ext.define('Lybrary.view.ReservationFormController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.reservationForm',
    
    onSaveClick:function(b){
        let me=this;
        let view=me.getView();
        let from=view.down('form');
        let values=from.getValues();
        try{
            if(!from.isValid()){
                Ext.toast('Pleas reviewd your information');
                return;
            }
            if(values.start){
                let dateObj=Ext.Date.parse(values.start,'d/m/Y');
                let dateStr=Ext.Date.format(dateObj,'Y-m-d');
                values.start=dateStr;
            }else{
                values.start=null;
            }
            if(values.end){
                let dateObj=Ext.Date.parse(values.end,'d/m/Y');
                let dateStr=Ext.Date.format(dateObj,'Y-m-d');
                values.end=dateStr;
            }else{
                values.end=null;
            }
            let client=new Lybrary.view.LybraryClient();
            let url='http://localhost/libraryapi/endpoint/reservation/insert.php'
            if(view.getMode()==='update'){
                url='http://localhost/libraryapi/endpoint/reservation/update.php?id='+values.id;
            }
            client.post({
                url:url,
                body:values,
                success:function(){
                    if(view.getMode()==='insert'){
                        Ext.toast('Reservation inserted');
                    }else{
                        Ext.toast('Reservation updated');
                    }
                    view.fireEvent(view.getMode()+'Event',view);
                    view.close();
                }
            })
        }catch(e){
            alert(e);
        }
    }
});