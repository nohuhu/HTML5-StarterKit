Ext.define('StarterKit.store.Customer', {
    extend: 'Ext.data.Store',
    alias:  'store.customer',
    
    model: 'StarterKit.model.Customer',
    
    proxy: {
        type: 'direct',
        api: {
            read: 'StarterKit.Customer.read',
            create: 'StarterKit.Customer.create',
            update: 'StarterKit.Customer.update',
            destroy: 'StarterKit.Customer.delete'
        }
    },
    
    autoLoad: true
});
