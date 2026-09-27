Ext.define('ModernAdmin.model.KPI', {
    extend: 'ModernAdmin.model.Base',

    fields: [
        { name: 'id', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'value', type: 'string' },
        { name: 'change', type: 'string' },
        { name: 'isPositive', type: 'boolean' },
        { name: 'icon', type: 'string' },
        { name: 'color', type: 'string' }
    ]
});
