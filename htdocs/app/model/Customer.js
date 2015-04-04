/*
 * This file contains the definition for our Customer model.
 */
Ext.define('StarterKit.model.Customer', {
    extend: 'StarterKit.model.Base',
    
    requires: [
        'StarterKit.model.Base'
    ],
    
    fields: [{
        name: 'external_id',
        type: 'string'
    }]
});
