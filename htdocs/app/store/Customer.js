/*
 * This file contains the definition for our Customer store.
 */
Ext.define('StarterKit.store.Customer', {
    extend: 'Ext.data.Store',
    alias: 'store.customer',
    
    model: 'StarterKit.model.Customer',
    
    remoteSort: true,
    
    proxy: {
        type: 'direct',
        
        api: {
            read: 'StarterKit.Customer.read',
            create: 'StarterKit.Customer.create',
            update: 'StarterKit.Customer.update',
            destroy: 'StarterKit.Customer.delete'
        },
        
        reader: {
            type: 'json',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    }
});
