Ext.define('ModernAdmin.view.users.UsersGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'users-view',

    controller: 'users',
    cls: 'users-grid',

    store: {
        type: 'users'
    },

    title: 'Enterprise Team Directory & Resource Allocation',
    shadow: true,
    margin: 20,

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'searchfield',
                    placeholder: 'Search by name, email, or title...',
                    width: 320,
                    listeners: {
                        change: 'onSearchChange'
                    }
                },
                '->',
                {
                    xtype: 'selectfield',
                    label: 'Department',
                    value: 'All',
                    options: [
                        { text: 'All Departments', value: 'All' },
                        { text: 'Engineering', value: 'Engineering' },
                        { text: 'Product', value: 'Product' },
                        { text: 'Sales', value: 'Sales' },
                        { text: 'Marketing', value: 'Marketing' },
                        { text: 'Finance', value: 'Finance' },
                        { text: 'HR', value: 'HR' }
                    ],
                    listeners: {
                        change: 'onDepartmentFilter'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Export CSV',
                    iconCls: 'fa-solid fa-file-csv',
                    handler: 'onExportCSV'
                },
                {
                    xtype: 'button',
                    text: 'Add Member',
                    ui: 'action',
                    iconCls: 'fa-solid fa-user-plus',
                    handler: 'onAddUser'
                }
            ]
        }
    ],

    columns: [
        {
            text: 'Member',
            dataIndex: 'name',
            width: 260,
            renderer: function(value, record) {
                const avatar = record.get('avatar');
                const email = record.get('email');
                return `
                    <div class="user-cell">
                        <img class="user-avatar" src="${avatar}" alt="${value}"/>
                        <div class="user-info">
                            <span class="user-name">${value}</span>
                            <span class="user-email">${email}</span>
                        </div>
                    </div>
                `;
            }
        },
        {
            text: 'Role / Designation',
            dataIndex: 'role',
            width: 220
        },
        {
            text: 'Department',
            dataIndex: 'department',
            width: 140
        },
        {
            text: 'Status',
            dataIndex: 'status',
            width: 120,
            renderer: function(value) {
                let cls = 'status-active';
                if (value === 'Pending') cls = 'status-pending';
                if (value === 'Suspended') cls = 'status-suspended';
                return `<span class="status-pill ${cls}">${value}</span>`;
            }
        },
        {
            text: 'Revenue Impact',
            dataIndex: 'revenueGenerated',
            width: 150,
            align: 'right',
            renderer: function(val) {
                return `<strong style="color:var(--app-primary);">$${(val || 0).toLocaleString()}</strong>`;
            }
        },
        {
            text: 'Last Active',
            dataIndex: 'lastLogin',
            width: 150,
            renderer: function(val) {
                return `<span style="color:var(--app-text-muted);font-size:12px;">${val}</span>`;
            }
        },
        {
            text: 'Action',
            width: 100,
            align: 'center',
            cell: {
                tools: {
                    gear: {
                        iconCls: 'fa-solid fa-ellipsis-vertical',
                        handler: 'onRowAction'
                    }
                }
            }
        }
    ]
});
