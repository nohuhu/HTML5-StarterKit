/*
 * This file contains the definition for our Domain model.
 */
Ext.define('StarterKit.model.Domain', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.field.Number',
        'Ext.data.field.String',
        'Ext.data.field.Date'
    ],
    uses: [
        'StarterKit.model.Customer'
    ],
    idProperty: 'id',
    clientIdProperty: 'clientId',
    fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'customer_id',
            type: 'int',
            reference: 'StarterKit.model.Customer'
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