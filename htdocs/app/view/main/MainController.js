/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('StarterKit.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        'Ext.window.Toast'
    ],

    alias: 'controller.main',
    
    listen: {
        controller: {
            '*': {
                login_success: 'onLoginSuccess'
            }
        }
    },

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    
    onLoginSuccess: function(data) {
        var last_login = Ext.Date.parse(data.last_login, 'U');
        
        Ext.toast('Hi ' + data.email + '.<br />' +
                  'You last logged in at ' + Ext.Date.format(last_login, 'C'));
    }
});
