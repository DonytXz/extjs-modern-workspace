Ext.define('ModernAdmin.model.User', {
    extend: 'ModernAdmin.model.Base',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'role', type: 'string' },
        { name: 'department', type: 'string' },
        { name: 'status', type: 'string' },
        { name: 'avatar', type: 'string' },
        { name: 'lastLogin', type: 'string' },
        { name: 'revenueGenerated', type: 'number' }
    ]
});
