/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('StarterKit.Application', {
    extend: 'Ext.app.Application',
    
    requires: [
        'Ext.direct.Manager',
        'Ext.direct.RemotingProvider',
        'StarterKit.store.Customer',
		'StarterKit.store.Domain',
		'StarterKit.store.Mailbox'
    ],
    
    name: 'StarterKit',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        Ext.direct.Manager.addProvider(REMOTING_API);
    }
});
