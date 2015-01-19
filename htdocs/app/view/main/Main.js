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
        'StarterKit.view.main.MainModel'
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
            title: 'Customers',
            xtype: 'grid',
            
            columns: [{
                text: 'Name',
                dataIndex: 'name',
                flex: 10
            }, {
                xtype: 'datecolumn',
                text: 'Last change date',
                dataIndex: 'last_change',
                format: 'm/d/Y H:i:s',
                flex: 2
            }, {
                text: 'External ID',
                dataIndex: 'external_id',
                flex: 2
            }],
            
            store: {
                type: 'customer'
            }
        }]
    }]
});
