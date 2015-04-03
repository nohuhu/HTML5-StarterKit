/**
 * This class is the controller for the customer view.
 *
 * TODO - Extend the content of this controller to suite the needs of your application.
 */
Ext.define('StarterKit.view.customer.CustomerController', {
    extend: 'StarterKit.view.CrudController',
    alias: 'controller.customer',
    
    onConfirm: function (choice) {
        if (choice === 'yes') {
            // Insert Customer specific logic here
        }
    }
});
