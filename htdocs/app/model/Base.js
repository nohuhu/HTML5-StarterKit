Ext.define('StarterKit.model.Base', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.field.Number',
        'Ext.data.field.String',
        'Ext.data.field.Date',
        'StarterKit.model.Schema'
    ],
    schema: 'starterkit',
    idProperty: 'id',
    clientIdProperty: 'clientId',
    fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'name',
            type: 'string'
        }, {
            name: 'last_change',
            type: 'date',
            convert: function (value) {
                return Ext.Date.parse(value, 'Y-m-d H:i:s');
            }
        }]
});
