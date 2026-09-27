Ext.define('ModernAdmin.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    controller: 'main',
    viewModel: 'main',

    layout: 'hbox',

    items: [
        // 1. Collapsible Sidebar Navigation
        {
            xtype: 'container',
            reference: 'appSidebar',
            cls: 'app-sidebar',
            width: 250,
            layout: 'vbox',
            scrollable: 'y',

            items: [
                // Brand Header
                {
                    xtype: 'component',
                    cls: 'sidebar-header',
                    html: `
                        <div class="sidebar-logo">A</div>
                        <div class="sidebar-title">Acme Workspace</div>
                    `
                },
                // Navigation Items
                {
                    xtype: 'container',
                    reference: 'navContainer',
                    layout: 'vbox',
                    padding: '12 0',
                    defaults: {
                        xtype: 'button',
                        cls: 'nav-item',
                        textAlign: 'left',
                        ui: 'plain',
                        handler: 'onNavClick'
                    },
                    items: [
                        {
                            text: 'Dashboard',
                            iconCls: 'fa-solid fa-chart-pie',
                            route: 'dashboard'
                        },
                        {
                            text: 'Team & Directory',
                            iconCls: 'fa-solid fa-users-gear',
                            route: 'users'
                        },
                        {
                            text: 'Telemetry & Health',
                            iconCls: 'fa-solid fa-server',
                            route: 'analytics'
                        },
                        {
                            text: 'Security & Settings',
                            iconCls: 'fa-solid fa-sliders',
                            route: 'settings'
                        }
                    ]
                },
                // Bottom Workspace Tag
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'component',
                    padding: 16,
                    html: `
                        <div style="background:rgba(255,255,255,0.05);padding:10px;border-radius:6px;font-size:11px;color:#94a3b8;">
                            <div style="font-weight:600;color:#fff;margin-bottom:2px;">ExtJS Modern Toolkit</div>
                            <div>Version 7.x &bull; Static Ready</div>
                        </div>
                    `
                }
            ]
        },

        // 2. Right Workspace Area (Header + Card Content)
        {
            xtype: 'container',
            flex: 1,
            layout: 'vbox',

            items: [
                // Top App Header
                {
                    xtype: 'toolbar',
                    cls: 'app-header',
                    docked: 'top',
                    height: 56,
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'fa-solid fa-bars',
                            ui: 'plain',
                            handler: 'onToggleSidebar'
                        },
                        {
                            xtype: 'component',
                            cls: 'header-title',
                            bind: {
                                html: '{currentTitle}'
                            }
                        },
                        '->',
                        // Theme Toggle
                        {
                            xtype: 'button',
                            iconCls: 'fa-solid fa-circle-half-stroke',
                            ui: 'plain',
                            tooltip: 'Toggle Dark / Light Theme',
                            handler: 'onToggleTheme'
                        },
                        // Notification Button with badge
                        {
                            xtype: 'button',
                            iconCls: 'fa-solid fa-bell',
                            ui: 'plain',
                            badgeText: '3',
                            tooltip: 'Notifications',
                            handler: 'onNotificationClick'
                        },
                        // User Profile avatar
                        {
                            xtype: 'button',
                            ui: 'plain',
                            handler: 'onUserProfileClick',
                            html: `
                                <div style="display:flex;align-items:center;gap:8px;">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face" style="width:30px;height:30px;border-radius:50%;border:1px solid #cbd5e1;"/>
                                    <span style="font-size:13px;font-weight:600;color:var(--app-text);">Carlos A.</span>
                                </div>
                            `
                        }
                    ]
                },

                // Card Layout for Views
                {
                    xtype: 'container',
                    reference: 'mainContentContainer',
                    flex: 1,
                    layout: 'card',

                    items: [
                        { xtype: 'dashboard-view' },
                        { xtype: 'users-view' },
                        { xtype: 'analytics-view' },
                        { xtype: 'settings-view' }
                    ]
                }
            ]
        }
    ]
});
