/*
 * This file contains the definition for our Domain store.
 */
Ext.define('StarterKit.store.Domain', {
    extend: 'Ext.data.Store',
    alias: 'store.domain',
    
    model: 'StarterKit.model.Domain',
    
    remoteSort: true,
    
    proxy: {
        type: 'direct',
        
        api: {
            read: 'StarterKit.Domain.read',
            create: 'StarterKit.Domain.create',
            update: 'StarterKit.Domain.update',
            destroy: 'StarterKit.Domain.delete'
        },
        
        reader: {
            type: 'json',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    }
});
