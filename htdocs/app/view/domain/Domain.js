/**
 * This class is the domain view for the application.
 *
 * TODO - Extend the content of this view to suite the needs of your application.
 */
Ext.define('StarterKit.view.domain.Domain', {
    extend: 'StarterKit.view.CrudView',
    xtype: 'domainpanel',
    
    requires: [
        'StarterKit.view.domain.DomainController',
        'StarterKit.view.domain.DomainModel'
    ],
    
    controller: 'domain',
    
    viewModel: {
        type: 'domain'
    },
    
    layout: 'fit',
    
    items: [{
        // title: 'Domains',
        xtype: 'grid',
        reference: 'grid',
        
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
            type: 'domain',
            pageSize: 10
        }
    }]
});
