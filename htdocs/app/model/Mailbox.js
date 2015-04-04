/*
 * This file contains the definition for our Mailbox model.
 */
Ext.define('StarterKit.model.Mailbox', {
    extend: 'StarterKit.model.Base',

    requires: [
        'Ext.data.field.Boolean',
        'StarterKit.model.Base'
    ],

    uses: [
        'StarterKit.model.Domain'
    ],
    
    fields: [{
        name: 'domain_id',
        type: 'int',
        reference: 'StarterKit.model.Domain'
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
    }]
});
