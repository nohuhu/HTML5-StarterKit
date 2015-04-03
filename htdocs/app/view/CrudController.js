/**
 * Abstract ViewController for CRUD views.
 */
Ext.define('StarterKit.view.CrudController', {
    extend: 'Ext.app.ViewController',
    
    requires: [
        'Ext.window.MessageBox'
    ],
    
    listen: {
        controller: {
            '*': {
                login_success: 'onLogin'
            }
        }
    },
    
    onLogin: function() {
        this.lookupReference('grid').getStore().load();
    },
    
    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    
    onConfirm: Ext.emptyFn,
    
    onAdd: function(button) {
        var grid, store, Model, plugin, record;
        
        grid = this.lookupReference('grid');
        store = grid.getStore();
        Model = store.getModel();
        plugin = grid.getPlugin('editor');
        
        record = new Model();
        store.add(record);
        plugin.startEdit(record);
    },
    
    onDelete: function(button) {
        var grid, store, selection, i, len;
        
        grid = this.lookupReference('grid');
        store = grid.getStore();
        selection = grid.getSelectionModel().getSelection();
        
        for (i = 0, len = selection.length; i < len; i++) {
            store.remove(selection[i]);
        }
    }
});
