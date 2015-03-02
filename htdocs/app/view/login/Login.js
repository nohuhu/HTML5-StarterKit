Ext.define('StarterKit.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype:  'app-login',
    
    requires: [
        'StarterKit.view.login.LoginController'
    ],
    
    controller: 'login',
    
    closable: false,
    modal: true,
    
    layout: 'fit',
    defaultFocus: 'textfield',
    
    items: [{
        xtype: 'form',
        reference: 'form',
        layout: 'form',
        
        items: [{
            xtype: 'textfield',
            reference: 'login',
            fieldLabel: 'User name',
            allowBlank: false,
            listeners: {
                specialkey: 'onSpecialKey'
            }
        }, {
            xtype: 'textfield',
            reference: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            listeners: {
                specialkey: 'onSpecialKey'
            }
        }],
        
        buttons: [{
            formBind: true,
            text: 'Login',
            listeners: {
                click: 'doLogin'
            }
        }]
    }]
});
