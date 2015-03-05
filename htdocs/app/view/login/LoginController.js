/**
 * This class is the controller for the login view.
 *
 * TODO - Extend the content of this controller to suite the needs of your application.
 */
Ext.define('StarterKit.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    onSpecialKey: function (field, e) {
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },
    doLogin: function () {
        var me = this,
                login, password;

        login = me.lookupReference('login').getSubmitValue();
        password = me.lookupReference('password').getSubmitValue();

        StarterKit.Auth.login({
            username: login,
            password: password
        }, me.onLogin, me);
    },
    onLogin: function (result) {
        var me = this,
                success, error;

        // That shouldn't happen but being defensive never hurts
        result = result || {};
        success = result.success;

        if (success) {
            me.fireEvent('login_success', result);
            me.getView().close();
        }
        else {
            error = result.error;

            // This error handling is somewhat trivial
            if (/user/i.test(error)) {
                me.lookupReference('login').markInvalid(error);
            }
            else if (/password/i.test(error)) {
                me.lookupReference('password').markInvalid(error);
            }
            else {
                Ext.Msg.alert('Fatal error' + error + '!');
            }
        }
    }
});
