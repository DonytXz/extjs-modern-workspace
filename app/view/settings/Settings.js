Ext.define('ModernAdmin.view.settings.Settings', {
    extend: 'Ext.form.Panel',
    xtype: 'settings-view',

    scrollable: 'y',
    padding: 20,

    title: 'Workspace Configuration & Security Policies',
    shadow: true,
    margin: 20,

    items: [
        {
            xtype: 'fieldset',
            title: 'Organization Profile',
            defaults: {
                labelAlign: 'top',
                margin: '0 0 16 0'
            },
            items: [
                {
                    xtype: 'textfield',
                    label: 'Organization Legal Name',
                    value: 'Acme Cloud Technologies, Inc.'
                },
                {
                    xtype: 'emailfield',
                    label: 'Primary Security & Compliance Contact',
                    value: 'security@acme-corp.io'
                },
                {
                    xtype: 'selectfield',
                    label: 'Primary Region Residency (Data Governance)',
                    options: [
                        { text: 'United States (US East / West)', value: 'us' },
                        { text: 'European Union (GDPR Compliant)', value: 'eu' },
                        { text: 'Asia-Pacific (Singapore / Tokyo)', value: 'apac' }
                    ],
                    value: 'us'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Security & Access Controls',
            items: [
                {
                    xtype: 'togglefield',
                    label: 'Enforce Hardware Multi-Factor Authentication (FIDO2 / WebAuthn)',
                    value: true,
                    margin: '0 0 12 0'
                },
                {
                    xtype: 'togglefield',
                    label: 'Automated Audit Trail Streaming to SIEM',
                    value: true,
                    margin: '0 0 12 0'
                },
                {
                    xtype: 'sliderfield',
                    label: 'Session Inactivity Timeout (Minutes)',
                    minValue: 5,
                    maxValue: 60,
                    value: 15,
                    margin: '0 0 16 0'
                }
            ]
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                '->',
                {
                    xtype: 'button',
                    text: 'Discard Changes',
                    handler: function() {
                        Ext.Msg.alert('Reset', 'Form values reset to current active profile.');
                    }
                },
                {
                    xtype: 'button',
                    text: 'Save Security Configuration',
                    ui: 'action',
                    handler: function() {
                        Ext.Msg.alert('Success', 'Workspace security policies updated and propagated across all edge clusters.');
                    }
                }
            ]
        }
    ]
});
