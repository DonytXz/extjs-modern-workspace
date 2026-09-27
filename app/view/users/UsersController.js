Ext.define('ModernAdmin.view.users.UsersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users',

    onSearchChange: function(field, newValue) {
        const store = this.getView().getStore();
        if (!store) return;

        store.clearFilter();
        if (newValue && newValue.trim() !== '') {
            const query = newValue.toLowerCase().trim();
            store.filterBy(record => {
                const name = (record.get('name') || '').toLowerCase();
                const email = (record.get('email') || '').toLowerCase();
                const role = (record.get('role') || '').toLowerCase();
                return name.includes(query) || email.includes(query) || role.includes(query);
            });
        }
    },

    onDepartmentFilter: function(field, newValue) {
        const store = this.getView().getStore();
        if (!store) return;

        store.clearFilter();
        if (newValue && newValue !== 'All') {
            store.filter('department', newValue);
        }
    },

    onAddUser: function() {
        Ext.Msg.alert('Add Member', 'This triggers the modal user invitation wizard bound to the enterprise identity provider.');
    },

    onExportCSV: function() {
        const store = this.getView().getStore();
        if (!store) return;

        let csv = 'ID,Name,Email,Role,Department,Status,Revenue Generated\n';
        store.each(rec => {
            csv += `"${rec.get('id')}","${rec.get('name')}","${rec.get('email')}","${rec.get('role')}","${rec.get('department')}","${rec.get('status')}","${rec.get('revenueGenerated')}"\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'enterprise_members_export.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },

    onRowAction: function(grid, location) {
        const record = location.record;
        if (!record) return;
        Ext.Msg.alert('Member Profile', `Selected: ${record.get('name')} (${record.get('role')}) - Revenue Impact: $${record.get('revenueGenerated').toLocaleString()}`);
    }
});
