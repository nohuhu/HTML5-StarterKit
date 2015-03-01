/**
 * This class is the mailbox view for the application.
 *
 * TODO - Extend the content of this view to suite the needs of your application.
 */
Ext.define('StarterKit.view.mailbox.Mailbox', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.grid.Panel',
        'StarterKit.view.mailbox.MailboxController',
        'StarterKit.view.mailbox.MailboxModel',
        'Ext.toolbar.Paging'
    ],
    xtype: 'mailboxpanel',
    controller: 'mailbox',
    viewModel: {
        type: 'mailbox'
    },
    layout: {
        type: 'fit'
    },
    items: [{
            // title: 'Mailboxes',
            xtype: 'grid',
            reference: 'mailboxes',
            columns: [{
                    xtype: 'numbercolumn',
                    text: 'Mailbox ID',
                    dataIndex: 'id',
                    format: '0',
                    flex: 2
                }, {
                    xtype: 'numbercolumn',
                    text: 'Domain ID',
                    dataIndex: 'domain_id',
                    format: '0',
                    flex: 2
                }, {
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 5,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                }, {
                    text: 'Localpart',
                    dataIndex: 'localpart',
                    flex: 5,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                }, {
                    text: 'Username',
                    dataIndex: 'username',
                    flex: 5,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                }, {
                    text: 'Password',
                    dataIndex: 'password',
                    flex: 5,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                }, {
                    xtype: 'datecolumn',
                    text: 'Last change date',
                    dataIndex: 'last_change',
                    format: 'm/d/Y H:i:s',
                    flex: 2
                }],
            dockedItems: [{
                    xtype: 'pagingtoolbar',
                    store: {
                        type: 'mailbox'
                    },
                    dock: 'bottom',
                    displayInfo: true
                }],
            selModel: {
                type: 'rowmodel',
                mode: 'SINGLE',
                allowDeselect: true
            },
            plugins: {
                ptype: 'rowediting',
                pluginId: 'editor'
            },
            store: {
                type: 'mailbox'
            },
            tbar: {
                defaults: {
                    gridReference: 'mailboxes'
                },
                items: [{
                        text: 'Add',
                        reference: 'addButton',
                        handler: 'onAdd'
                    }, {
                        text: 'Edit',
                        reference: 'editButton',
                        handler: 'onEdit',
                        bind: {
                            hidden: '{!mailboxes.selection}'
                        }
                    }, {
                        text: 'Delete',
                        reference: 'deleteButton',
                        handler: 'onDelete',
                        bind: {
                            hidden: '{!mailboxes.selection}'
                        }
                    }, {
                        text: 'Sync',
                        handler: function (btn) {
                            var grid = btn.up('gridpanel');

                            grid.getStore().sync();
                        }
                    }]
            }
        }]
});
