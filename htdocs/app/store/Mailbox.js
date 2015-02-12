Ext.define('StarterKit.store.Mailbox', {
    extend: 'Ext.data.Store',
    alias:  'store.mailbox',
    
    model: 'StarterKit.model.Mailbox',
    
    proxy: {
        type: 'direct',
        api: {
            read: 'StarterKit.Mailbox.read',
            create: 'StarterKit.Mailbox.create',
            update: 'StarterKit.Mailbox.update',
            destroy: 'StarterKit.Mailbox.delete'
        }
    },
    
    autoLoad: true
});
