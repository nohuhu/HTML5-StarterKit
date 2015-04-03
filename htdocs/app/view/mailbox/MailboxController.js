/**
 * This class is the controller for the mailbox view.
 *
 * TODO - Extend the content of this controller to suite the needs of your application.
 */
Ext.define('StarterKit.view.mailbox.MailboxController', {
    extend: 'StarterKit.view.CrudController',
    alias: 'controller.mailbox',
    
    onConfirm: function (choice) {
        if (choice === 'yes') {
            // Insert Mailbox specific logic here
        }
    }
});
