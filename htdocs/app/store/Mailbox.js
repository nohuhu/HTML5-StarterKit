/*
 * This file contains the definition for our Mailbox store.
 */
Ext.define('StarterKit.store.Mailbox', {
    extend: 'Ext.data.Store',
    alias: 'store.mailbox',
    
    model: 'StarterKit.model.Mailbox',
    
    remoteSort: true,
    
    proxy: {
        type: 'direct',
        
        api: {
            read: 'StarterKit.Mailbox.read',
            create: 'StarterKit.Mailbox.create',
            update: 'StarterKit.Mailbox.update',
            destroy: 'StarterKit.Mailbox.delete'
        },
        
        reader: {
            type: 'json',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    }
});
