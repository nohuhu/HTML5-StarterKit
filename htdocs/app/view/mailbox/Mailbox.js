/**
 * This class is the mailbox view for the application.
 *
 * TODO - Extend the content of this view to suite the needs of your application.
 */
Ext.define('StarterKit.view.mailbox.Mailbox', {
    extend: 'StarterKit.view.CrudView',
    xtype: 'mailboxpanel',
    
    requires: [
        'StarterKit.view.mailbox.MailboxController',
        'StarterKit.view.mailbox.MailboxModel'
    ],
    
    controller: 'mailbox',
    
    viewModel: {
        type: 'mailbox'
    },
    
    layout: 'fit',
    
    items: [{
        // title: 'Mailboxes',
        xtype: 'grid',
        reference: 'grid',
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
            type: 'mailbox',
            pageSize: 10
        }
    }]
});
