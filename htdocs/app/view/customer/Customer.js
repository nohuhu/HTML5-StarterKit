/**
 * This class is the customer view for the application.
 *
 * TODO - Extend the content of this view to suite the needs of your application.
 */
Ext.define('StarterKit.view.customer.Customer', {
    extend: 'StarterKit.view.CrudView',
    xtype: 'customerpanel',
    
    requires: [
        'StarterKit.view.customer.CustomerController',
        'StarterKit.view.customer.CustomerModel'
    ],
    
    controller: 'customer',
    
    viewModel: {
        type: 'customer'
    },
    
    layout: 'fit',
    
    items: [{
        // title: 'Customers',
        xtype: 'grid',
        reference: 'grid',
        
        columns: [{
            xtype: 'numbercolumn',
            text: 'Customer ID',
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
        
        selModel: {
            type: 'rowmodel',
            mode: 'SINGLE',
            allowDeselect: true
        },
        
        plugins: [{
            ptype: 'rowediting',
            pluginId: 'editor'
        }],
        
        store: {
            type: 'customer',
            pageSize: 10
        }
    }]
});
