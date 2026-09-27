Ext.define('ModernAdmin.Application', {
    extend: 'Ext.app.Application',

    name: 'ModernAdmin',

    requires: [
        'ModernAdmin.model.Base',
        'ModernAdmin.model.User',
        'ModernAdmin.model.KPI',
        'ModernAdmin.store.Users',
        'ModernAdmin.store.KPIs',
        'ModernAdmin.view.main.MainModel',
        'ModernAdmin.view.main.MainController',
        'ModernAdmin.view.dashboard.Dashboard',
        'ModernAdmin.view.users.UsersController',
        'ModernAdmin.view.users.UsersGrid',
        'ModernAdmin.view.analytics.Analytics',
        'ModernAdmin.view.settings.Settings',
        'ModernAdmin.view.main.Main'
    ],

    mainView: 'ModernAdmin.view.main.Main',

    launch: function() {
        console.log('ModernAdmin ExtJS Application launched successfully.');
    },

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
