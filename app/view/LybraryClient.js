Ext.define('Lybrary.view.LybraryClient',{
    extend:'Ext.app.ViewController',
    post:function(params){
        try {
            Ext.Ajax.request({
                url:params.url,
                method:'POST',
                jsonData:params.body,
                success: function (response) {
                    let jsonBody=Ext.JSON.decode(response.responseText);
                    if(jsonBody.success===true){
                        if(params.success){
                            params.success();
                        }else{
                            Ext.toast('Data saverd!');
                        }
                    }else{
                        Ext.toast(jsonBody.message);
                    }
                }
            });
        } catch (e) {
            console.error('Post',e);
            Ext.toast(e);
        }
    },
    get:function(params){
        try {
            Ext.Ajax.request({
                url:params.url,
                method:'GET',
                success: function (response) {
                    let jsonBody=Ext.JSON.decode(response.responseText);
                    if(jsonBody.success===true){
                        if(params.success){
                            params.success();
                        }else{
                            Ext.toast('Data loaded!');
                        }
                    }else{
                        Ext.toast(jsonBody.message);
                    }
                }
            });
        } catch (e) {
            console.error('Get',e);
            Ext.toast(e);
        }
    }

});