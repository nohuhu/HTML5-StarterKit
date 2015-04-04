/*
 * This file contains the definition for our Domain model.
 */
Ext.define('StarterKit.model.Domain', {
    extend: 'StarterKit.model.Base',

    requires: [
        'StarterKit.model.Base'
    ],

    uses: [
        'StarterKit.model.Customer'
    ],
    
    fields: [{
        name: 'customer_id',
        type: 'int',
        reference: 'StarterKit.model.Customer'
    }]
});
