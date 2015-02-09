/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('StarterKit.view.main.Main', {
	extend: 'Ext.container.Container',

	requires: [
		'Ext.grid.Panel',
		'StarterKit.view.main.MainController',
		'StarterKit.view.main.MainModel',
		'StarterKit.view.customer.Customer',
		'StarterKit.view.domain.Domain',
		'StarterKit.view.mailbox.Mailbox'
	],

	xtype: 'app-main',

	controller: 'main',
	viewModel: {
		type: 'main'
	},

	layout: {
		type: 'border'
	},

	items: [{
		xtype: 'panel',
		bind: {
			title: '{name}'
		},
		region: 'west',
		html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
		width: 250,
		split: true,
		tbar: [{
			text: 'Button',
			handler: 'onClickButton'
		}]
	}, {
		region: 'center',
		xtype: 'tabpanel',
		items: [{
			xtype: 'customerpanel',
			itemId: 'customers',
			title: 'Customers'
		}, {
			xtype: 'domainpanel',
			itemId: 'domains',
			title: 'Domains'
		}, {
			xtype: 'mailboxpanel',
			itemId: 'mailboxes',
			title: 'Mailboxes'
		}]
	}]
});
