Ext.define('ModernAdmin.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',

    model: 'ModernAdmin.model.User',

    autoLoad: true,
    pageSize: 10,

    proxy: {
        type: 'ajax',
        url: './resources/data/users.json',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    },

    sorters: [{
        property: 'revenueGenerated',
        direction: 'DESC'
    }]
});
