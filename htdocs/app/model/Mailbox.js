/*
 * This file contains the definition for our Mailbox model.
 */
Ext.define('StarterKit.model.Mailbox', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    clientIdProperty: 'clientId',
    fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'domain_id',
            type: 'int'
        }, {
            name: 'name',
            type: 'string'
        }, {
            name: 'localpart',
            type: 'string'
        }, {
            name: 'username',
            type: 'string'
        }, {
            name: 'password',
            type: 'string'
        }, {
            name: 'is_ooo',
            type: 'boolean',
            defaultValue: false
        }, {
            name: 'ooo_message',
            type: 'string'
        }, {
            name: 'last_change',
            type: 'date',
            convert: function (value) {
                return Ext.Date.parse(value, 'Y-m-d H:i:s');
            }
        }]
});
