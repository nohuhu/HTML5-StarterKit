/**
 * Abstract class for CRUD views.
 */
Ext.define('StarterKit.view.CrudView', {
    extend: 'Ext.panel.Panel',
    
    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging'
    ],
    
    tbar: [{
        text: 'Add',
        handler: 'onAdd'
    }, {
        text: 'Edit',
        handler: 'onEdit',
        bind: {
            disabled: '{!grid.selection}'
        }
    }, {
        text: 'Delete',
        handler: 'onDelete',
        bind: {
            disabled: '{!grid.selection}'
        }
    }, {
        text: 'Sync',
        handler: 'onSync'
    }],
    
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        reference: 'pagingToolbar'
    },
    
    initComponent: function() {
        var me = this,
            grid, store, paging;
        
        me.callParent();
        
        // This is a bit kludgy but so is Paging toolbar;
        // its store binding cannot be configured declaratively
        // because it requires a reference to the same store
        // instance as the grid it is supposed to be paging.
        // So we just configure the Paging toolbar with no store
        // and then bind it to the grid's store after it has been
        // created (but not yet loaded).
        grid   = me.lookupReference('grid');
        paging = me.lookupReference('pagingToolbar');
        store  = grid && grid.getStore();
        
        if (paging && store) {
            paging.bindStore(store);
        }
    }
});
