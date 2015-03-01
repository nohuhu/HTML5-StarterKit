/**
 * This class is the controller for the mailbox view.
 *
 * TODO - Extend the content of this controller to suite the needs of your application.
 */
Ext.define('StarterKit.view.mailbox.MailboxController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Ext.window.MessageBox'
    ],
    alias: 'controller.mailbox',
    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onAdd: function (button) {
        var grid, store, Model, plugin, record;

        grid = this.lookupReference(button.gridReference);
        store = grid.getStore();
        Model = store.getModel();
        plugin = grid.getPlugin('editor');

        record = new Model();
        store.add(record);
        plugin.startEdit(record);
    },
    onDelete: function (button) {
        var grid, selection, i, len;

        grid = this.lookupReference(button.gridReference);
        selection = grid.getSelectionModel().getSelection();

        for (i = 0, len = selection.length; i < len; i++) {
            grid.getStore().remove(selection[i]);
        }
    }
});
