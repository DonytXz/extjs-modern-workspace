Ext.define('ModernAdmin.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    routes: {
        'dashboard': 'onRouteDashboard',
        'users': 'onRouteUsers',
        'analytics': 'onRouteAnalytics',
        'settings': 'onRouteSettings'
    },

    init: function() {
        const hash = window.location.hash.replace('#', '') || 'dashboard';
        this.navigateTo(hash);
    },

    onNavClick: function(button) {
        const route = button.route || 'dashboard';
        window.location.hash = route;
        this.navigateTo(route);
    },

    navigateTo: function(route) {
        const vm = this.getViewModel();
        const mainContent = this.lookup('mainContentContainer');
        const viewMap = {
            'dashboard': { index: 0, title: 'Executive KPI Dashboard' },
            'users': { index: 1, title: 'Team Directory & Resource Grid' },
            'analytics': { index: 2, title: 'Infrastructure & Telemetry Health' },
            'settings': { index: 3, title: 'Workspace Configuration & Policies' }
        };

        const target = viewMap[route] || viewMap['dashboard'];
        if (mainContent) {
            mainContent.setActiveItem(target.index);
        }

        if (vm) {
            vm.set('currentTitle', target.title);
            vm.set('activeRoute', route);
        }

        // Highlight active nav item
        const navContainer = this.lookup('navContainer');
        if (navContainer) {
            navContainer.getItems().each(item => {
                if (item.route === route) {
                    item.addCls('active');
                } else {
                    item.removeCls('active');
                }
            });
        }
    },

    onRouteDashboard: function() { this.navigateTo('dashboard'); },
    onRouteUsers: function() { this.navigateTo('users'); },
    onRouteAnalytics: function() { this.navigateTo('analytics'); },
    onRouteSettings: function() { this.navigateTo('settings'); },

    onToggleSidebar: function() {
        const sidebar = this.lookup('appSidebar');
        if (!sidebar) return;

        const isCollapsed = sidebar.getWidth() === 64;
        sidebar.setWidth(isCollapsed ? 260 : 64);

        const titleEl = sidebar.el.down('.sidebar-title');
        if (titleEl) {
            titleEl.setStyle('display', isCollapsed ? 'block' : 'none');
        }

        const navContainer = this.lookup('navContainer');
        if (navContainer) {
            navContainer.getItems().each(item => {
                if (isCollapsed) {
                    item.setText(item.originalText);
                } else {
                    item.originalText = item.getText();
                    item.setText('');
                }
            });
        }
    },

    onToggleTheme: function() {
        const body = document.body;
        const isDark = body.classList.toggle('dark-theme');
        const vm = this.getViewModel();
        if (vm) {
            vm.set('isDarkMode', isDark);
        }
    },

    onNotificationClick: function() {
        Ext.Msg.alert('Notifications', '1. Production cluster auto-scaled (+4 pods)<br>2. Q3 Compliance report ready for download<br>3. Security vulnerability patched in base container image.');
    },

    onUserProfileClick: function() {
        const user = this.getViewModel().get('currentUser');
        Ext.Msg.alert('Signed in as', `<strong>${user.name}</strong><br>Role: ${user.role}<br>Tenant: Acme Cloud Enterprise`);
    }
});
