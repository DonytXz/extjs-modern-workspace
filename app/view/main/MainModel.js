Ext.define('ModernAdmin.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {
        appName: 'Acme Enterprise Workspace',
        currentTitle: 'Executive KPI Dashboard',
        activeRoute: 'dashboard',
        unreadNotifications: 3,
        isDarkMode: false,
        currentUser: {
            name: 'Carlos Alvarez',
            role: 'Enterprise Platform Lead',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face'
        }
    }
});
