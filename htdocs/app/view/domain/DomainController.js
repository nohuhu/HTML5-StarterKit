/**
 * This class is the controller for the domain view.
 *
 * TODO - Extend the content of this controller to suite the needs of your application.
 */
Ext.define('StarterKit.view.domain.DomainController', {
    extend: 'StarterKit.view.CrudController',
    alias: 'controller.domain',
    
    onConfirm: function (choice) {
        if (choice === 'yes') {
            // Insert Domain specific logic here
        }
    }
});
