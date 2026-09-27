Ext.define('ModernAdmin.view.analytics.Analytics', {
    extend: 'Ext.Container',
    xtype: 'analytics-view',

    scrollable: 'y',
    padding: 20,

    items: [
        {
            xtype: 'component',
            html: `
                <div style="margin-bottom: 20px;">
                    <h2 style="font-size: 20px; font-weight: 700; color: var(--app-text); margin-bottom: 4px;">Infrastructure & Telemetry Health</h2>
                    <p style="font-size: 13px; color: var(--app-text-muted);">Real-time monitoring across distributed multi-region Kubernetes clusters.</p>
                </div>
            `
        },
        // Cluster Metrics
        {
            xtype: 'container',
            layout: 'hbox',
            responsiveConfig: {
                'width < 800': {
                    layout: 'vbox'
                },
                'width >= 800': {
                    layout: 'hbox'
                }
            },
            defaults: {
                flex: 1,
                margin: '0 8 16 8'
            },
            items: [
                {
                    xtype: 'component',
                    cls: 'chart-card',
                    html: `
                        <div class="kpi-header">
                            <span class="kpi-title">Cluster CPU Utilization</span>
                            <span class="trend-badge trend-positive">Nominal</span>
                        </div>
                        <div class="kpi-value" style="color:#2563eb;">42.8%</div>
                        <div style="background:#e2e8f0;height:8px;border-radius:4px;overflow:hidden;margin:10px 0;">
                            <div style="background:#2563eb;width:42.8%;height:100%;"></div>
                        </div>
                        <div style="font-size:11px;color:var(--app-text-muted);">Allocated: 128 / 300 vCPUs across 16 nodes</div>
                    `
                },
                {
                    xtype: 'component',
                    cls: 'chart-card',
                    html: `
                        <div class="kpi-header">
                            <span class="kpi-title">Memory Allocation (RAM)</span>
                            <span class="trend-badge trend-positive">Healthy</span>
                        </div>
                        <div class="kpi-value" style="color:#10b981;">58.4%</div>
                        <div style="background:#e2e8f0;height:8px;border-radius:4px;overflow:hidden;margin:10px 0;">
                            <div style="background:#10b981;width:58.4%;height:100%;"></div>
                        </div>
                        <div style="font-size:11px;color:var(--app-text-muted);">In-use: 374 GB / 640 GB ECC Memory</div>
                    `
                },
                {
                    xtype: 'component',
                    cls: 'chart-card',
                    html: `
                        <div class="kpi-header">
                            <span class="kpi-title">P99 API Gateway Latency</span>
                            <span class="trend-badge trend-positive">Fast</span>
                        </div>
                        <div class="kpi-value" style="color:#8b5cf6;">18.2 ms</div>
                        <div style="background:#e2e8f0;height:8px;border-radius:4px;overflow:hidden;margin:10px 0;">
                            <div style="background:#8b5cf6;width:22%;height:100%;"></div>
                        </div>
                        <div style="font-size:11px;color:var(--app-text-muted);">SLA threshold: &lt; 150 ms</div>
                    `
                }
            ]
        },
        // Service Nodes Table
        {
            xtype: 'component',
            cls: 'chart-card',
            margin: '0 8 16 8',
            html: `
                <div class="chart-header">
                    <h3 class="chart-title">Global Edge Node Registry</h3>
                    <span style="font-size:12px;color:var(--app-text-muted);">Auto-synchronized every 30s</span>
                </div>
                <table style="width:100%;border-collapse:collapse;font-size:13px;text-align:left;">
                    <thead>
                        <tr style="border-bottom:2px solid var(--app-border);color:var(--app-text-muted);">
                            <th style="padding:10px 8px;">Region</th>
                            <th style="padding:10px 8px;">Node Pool</th>
                            <th style="padding:10px 8px;">Status</th>
                            <th style="padding:10px 8px;">Replicas</th>
                            <th style="padding:10px 8px;">Avg Latency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid var(--app-border);">
                            <td style="padding:12px 8px;font-weight:600;"><i class="fa-solid fa-server" style="color:#3b82f6;margin-right:6px;"></i> us-east-1 (N. Virginia)</td>
                            <td style="padding:12px 8px;">pool-production-core</td>
                            <td style="padding:12px 8px;"><span class="status-pill status-active">Online</span></td>
                            <td style="padding:12px 8px;">32 / 32</td>
                            <td style="padding:12px 8px;font-weight:600;">12 ms</td>
                        </tr>
                        <tr style="border-bottom:1px solid var(--app-border);">
                            <td style="padding:12px 8px;font-weight:600;"><i class="fa-solid fa-server" style="color:#3b82f6;margin-right:6px;"></i> eu-west-1 (Ireland)</td>
                            <td style="padding:12px 8px;">pool-eu-gdpr-compliant</td>
                            <td style="padding:12px 8px;"><span class="status-pill status-active">Online</span></td>
                            <td style="padding:12px 8px;">24 / 24</td>
                            <td style="padding:12px 8px;font-weight:600;">22 ms</td>
                        </tr>
                        <tr style="border-bottom:1px solid var(--app-border);">
                            <td style="padding:12px 8px;font-weight:600;"><i class="fa-solid fa-server" style="color:#3b82f6;margin-right:6px;"></i> ap-southeast-1 (Singapore)</td>
                            <td style="padding:12px 8px;">pool-apac-edge</td>
                            <td style="padding:12px 8px;"><span class="status-pill status-active">Online</span></td>
                            <td style="padding:12px 8px;">16 / 16</td>
                            <td style="padding:12px 8px;font-weight:600;">38 ms</td>
                        </tr>
                        <tr>
                            <td style="padding:12px 8px;font-weight:600;"><i class="fa-solid fa-server" style="color:#f59e0b;margin-right:6px;"></i> sa-east-1 (São Paulo)</td>
                            <td style="padding:12px 8px;">pool-latam-expansion</td>
                            <td style="padding:12px 8px;"><span class="status-pill status-pending">Provisioning</span></td>
                            <td style="padding:12px 8px;">6 / 8</td>
                            <td style="padding:12px 8px;font-weight:600;">45 ms</td>
                        </tr>
                    </tbody>
                </table>
            `
        }
    ]
});
