Ext.define('ModernAdmin.store.KPIs', {
    extend: 'Ext.data.Store',
    alias: 'store.kpis',

    model: 'ModernAdmin.model.KPI',

    data: [
        {
            id: 'kpi-rev',
            title: 'Quarterly Revenue',
            value: '$2,480,500',
            change: '+14.2%',
            isPositive: true,
            icon: 'fa-dollar-sign',
            color: '#10b981'
        },
        {
            id: 'kpi-subs',
            title: 'Active Workspaces',
            value: '14,290',
            change: '+8.7%',
            isPositive: true,
            icon: 'fa-cubes',
            color: '#3b82f6'
        },
        {
            id: 'kpi-growth',
            title: 'Net Retention Rate',
            value: '118.4%',
            change: '+3.1%',
            isPositive: true,
            icon: 'fa-chart-line',
            color: '#8b5cf6'
        },
        {
            id: 'kpi-tickets',
            title: 'SLA Fulfillment',
            value: '99.82%',
            change: '-0.12%',
            isPositive: false,
            icon: 'fa-shield-halved',
            color: '#f59e0b'
        }
    ]
});
