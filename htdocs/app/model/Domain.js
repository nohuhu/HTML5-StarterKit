Ext.define('StarterKit.model.Domain', {
    extend: 'Ext.data.Model',
    
    idProperty: 'id',
    clientIdProperty: 'clientId',
    
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'customer_id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'last_change',
        type: 'date',
        convert: function(value) {
            return Ext.Date.parse(value, 'Y-m-d H:i:s');
        }
    }]
});