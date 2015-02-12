/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('StarterKit.view.customer.Customer', {
	extend: 'Ext.container.Container',

	requires: [
		'Ext.grid.Panel',
		'StarterKit.view.customer.CustomerController',
		'StarterKit.view.customer.CustomerModel',
		'Ext.toolbar.Paging'
	],

	xtype: 'customerpanel',

	controller: 'customer',
	viewModel: {
		type: 'customer'
	},

	layout: {
		type: 'fit'
	},

	items: [{
		// title: 'Customers',
		xtype: 'grid',
		reference: 'customers',

		columns: [{
			text: 'Name',
			dataIndex: 'name',
			flex: 10,
			editor: {
				xtype: 'textfield',
				allowBlank: false
			}
		}, {
			text: 'External ID',
			dataIndex: 'external_id',
			flex: 2,
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
				type: 'customer'
			},
			dock: 'bottom',
			displayInfo: true
		}],

		selModel: {
			type: 'rowmodel',
			mode: 'MULTI'
		},

		plugins: {
			ptype: 'rowediting',
			pluginId: 'editor'
		},

		store: {
			type: 'customer'
		},

		tbar: {
			defaults: {
				gridReference: 'customers'
			},

			items: [{
				text: 'Add',
				reference: 'addButton',
				handler: 'onAdd'
			}, {
				text: 'Edit',
				reference: 'editButton',
				handler: 'onEdit'
			}, {
				text: 'Delete',
				reference: 'deleteButton',
				handler: 'onDelete'
			}, {
				text: 'Sync',
				handler: function(btn) {
					var grid = btn.up('gridpanel');
					grid.getStore().sync();
				}
			}]
		}
	}]
});
