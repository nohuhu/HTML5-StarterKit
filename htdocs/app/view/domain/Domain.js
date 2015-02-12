/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
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
			mode: 'MULTI'
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
