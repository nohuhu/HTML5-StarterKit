/**
 * This class is the domain view for the application.
 *
 * TODO - Extend the content of this view to suite the needs of your application.
 */
Ext.define('StarterKit.view.domain.Domain', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.grid.Panel',
        'StarterKit.view.domain.DomainController',
        'StarterKit.view.domain.DomainModel',
        'Ext.toolbar.Paging'
    ],
    xtype: 'domainpanel',
    controller: 'domain',
    viewModel: {
        type: 'domain'
    },
    layout: {
        type: 'fit'
    },
    items: [{
            // title: 'Domains',
            xtype: 'grid',
            reference: 'domains',
            columns: [{
                    xtype: 'numbercolumn',
                    text: 'Domain ID',
                    dataIndex: 'id',
                    format: '0',
                    flex: 2
                }, {
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 10,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                }, {
                    xtype: 'numbercolumn',
                    text: 'Customer ID',
                    dataIndex: 'customer_id',
                    format: '0',
                    flex: 2
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
                        type: 'domain'
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
                type: 'domain'
            },
            tbar: {
                defaults: {
                    gridReference: 'domains'
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
                            hidden: '{!domains.selection}'
                        }
                    }, {
                        text: 'Delete',
                        reference: 'deleteButton',
                        handler: 'onDelete',
                        bind: {
                            hidden: '{!domains.selection}'
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
