Ext.define('ModernAdmin.view.dashboard.Dashboard', {
    extend: 'Ext.Container',
    xtype: 'dashboard-view',

    scrollable: 'y',
    padding: 20,

    items: [
        // 1. KPI Cards Row
        {
            xtype: 'container',
            layout: {
                type: 'box',
                pack: 'space-between'
            },
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
                    cls: 'kpi-card',
                    html: `
                        <div class="kpi-header">
                            <span class="kpi-title">Gross Revenue</span>
                            <div class="kpi-icon-box" style="background:#ecfdf5;color:#10b981;">
                                <i class="fa-solid fa-dollar-sign"></i>
                            </div>
                        </div>
                        <div class="kpi-value">$2,480,500</div>
                        <div class="kpi-footer">
                            <span class="trend-badge trend-positive">+14.2%</span>
                            <span style="color:var(--app-text-muted);">vs previous quarter</span>
                        </div>
                    `
                },
                {
                    xtype: 'component',
                    cls: 'kpi-card',
                    html: `
                        <div class="kpi-header">
                            <span class="kpi-title">Active Workspaces</span>
                            <div class="kpi-icon-box" style="background:#eff6ff;color:#3b82f6;">
                                <i class="fa-solid fa-cubes"></i>
                            </div>
                        </div>
                        <div class="kpi-value">14,290</div>
                        <div class="kpi-footer">
                            <span class="trend-badge trend-positive">+8.7%</span>
                            <span style="color:var(--app-text-muted);">new corporate tenants</span>
                        </div>
                    `
                },
                {
                    xtype: 'component',
                    cls: 'kpi-card',
                    html: `
                        <div class="kpi-header">
                            <span class="kpi-title">Net Retention</span>
                            <div class="kpi-icon-box" style="background:#f5f3ff;color:#8b5cf6;">
                                <i class="fa-solid fa-chart-line"></i>
                            </div>
                        </div>
                        <div class="kpi-value">118.4%</div>
                        <div class="kpi-footer">
                            <span class="trend-badge trend-positive">+3.1%</span>
                            <span style="color:var(--app-text-muted);">expansion revenue</span>
                        </div>
                    `
                },
                {
                    xtype: 'component',
                    cls: 'kpi-card',
                    html: `
                        <div class="kpi-header">
                            <span class="kpi-title">Platform SLA</span>
                            <div class="kpi-icon-box" style="background:#fef3c7;color:#f59e0b;">
                                <i class="fa-solid fa-shield-halved"></i>
                            </div>
                        </div>
                        <div class="kpi-value">99.98%</div>
                        <div class="kpi-footer">
                            <span class="trend-badge trend-positive">Optimal</span>
                            <span style="color:var(--app-text-muted);">zero downtime this month</span>
                        </div>
                    `
                }
            ]
        },

        // 2. Middle Row: Chart & Activity Feed
        {
            xtype: 'container',
            layout: 'hbox',
            responsiveConfig: {
                'width < 900': {
                    layout: 'vbox'
                },
                'width >= 900': {
                    layout: 'hbox'
                }
            },
            defaults: {
                margin: '0 8 16 8'
            },
            items: [
                // Revenue vs Operating Cost Analytics Chart
                {
                    xtype: 'component',
                    cls: 'chart-card',
                    flex: 2,
                    minHeight: 340,
                    html: `
                        <div class="chart-header">
                            <div>
                                <h3 class="chart-title">Quarterly Financial Performance & Operating Margin</h3>
                                <p style="font-size:12px;color:var(--app-text-muted);margin-top:2px;">Comparing Revenue Target vs Actuals ($ Millions)</p>
                            </div>
                            <div style="display:flex;gap:12px;font-size:12px;font-weight:600;">
                                <span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;border-radius:2px;background:#2563eb;"></span> Revenue</span>
                                <span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;border-radius:2px;background:#10b981;"></span> Gross Margin</span>
                            </div>
                        </div>
                        <svg viewBox="0 0 600 240" style="width:100%;height:240px;overflow:visible;">
                            <defs>
                                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="#2563eb" stop-opacity="0.25"/>
                                    <stop offset="100%" stop-color="#2563eb" stop-opacity="0.0"/>
                                </linearGradient>
                            </defs>
                            <!-- Grid Lines -->
                            <line x1="40" y1="30" x2="580" y2="30" stroke="#e2e8f0" stroke-dasharray="3 3"/>
                            <line x1="40" y1="80" x2="580" y2="80" stroke="#e2e8f0" stroke-dasharray="3 3"/>
                            <line x1="40" y1="130" x2="580" y2="130" stroke="#e2e8f0" stroke-dasharray="3 3"/>
                            <line x1="40" y1="180" x2="580" y2="180" stroke="#e2e8f0" stroke-dasharray="3 3"/>

                            <!-- Y Axis Labels -->
                            <text x="30" y="34" font-size="10" fill="#94a3b8" text-anchor="end">$3.0M</text>
                            <text x="30" y="84" font-size="10" fill="#94a3b8" text-anchor="end">$2.0M</text>
                            <text x="30" y="134" font-size="10" fill="#94a3b8" text-anchor="end">$1.0M</text>
                            <text x="30" y="184" font-size="10" fill="#94a3b8" text-anchor="end">$0</text>

                            <!-- Area & Line 1: Revenue -->
                            <polygon points="60,150 150,120 240,135 330,90 420,70 510,40 510,180 60,180" fill="url(#revGrad)"/>
                            <polyline points="60,150 150,120 240,135 330,90 420,70 510,40" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            
                            <!-- Dots -->
                            <circle cx="60" cy="150" r="4" fill="#2563eb" stroke="#fff" stroke-width="2"/>
                            <circle cx="150" cy="120" r="4" fill="#2563eb" stroke="#fff" stroke-width="2"/>
                            <circle cx="240" cy="135" r="4" fill="#2563eb" stroke="#fff" stroke-width="2"/>
                            <circle cx="330" cy="90" r="4" fill="#2563eb" stroke="#fff" stroke-width="2"/>
                            <circle cx="420" cy="70" r="4" fill="#2563eb" stroke="#fff" stroke-width="2"/>
                            <circle cx="510" cy="40" r="4" fill="#2563eb" stroke="#fff" stroke-width="2"/>

                            <!-- Line 2: Gross Margin -->
                            <polyline points="60,165 150,145 240,150 330,125 420,110 510,85" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4 2" stroke-linecap="round"/>

                            <!-- X Axis Labels -->
                            <text x="60" y="205" font-size="11" fill="#64748b" text-anchor="middle">Q1 2025</text>
                            <text x="150" y="205" font-size="11" fill="#64748b" text-anchor="middle">Q2 2025</text>
                            <text x="240" y="205" font-size="11" fill="#64748b" text-anchor="middle">Q3 2025</text>
                            <text x="330" y="205" font-size="11" fill="#64748b" text-anchor="middle">Q4 2025</text>
                            <text x="420" y="205" font-size="11" fill="#64748b" text-anchor="middle">Q1 2026</text>
                            <text x="510" y="205" font-size="11" fill="#64748b" text-anchor="middle">Q2 2026 (Est)</text>
                        </svg>
                    `
                },

                // Live Team Activity Stream
                {
                    xtype: 'component',
                    cls: 'chart-card',
                    flex: 1,
                    minHeight: 340,
                    html: `
                        <div class="chart-header">
                            <h3 class="chart-title">Real-time Activity Stream</h3>
                            <span class="trend-badge trend-positive">Live</span>
                        </div>
                        <div class="activity-item">
                            <img class="activity-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face">
                            <div class="activity-content">
                                <div><span class="activity-user">Elena Rostova</span> provisioned a new Kubernetes cluster in <code>us-east-1</code></div>
                                <div class="activity-time">5 mins ago &bull; Infrastructure</div>
                            </div>
                        </div>
                        <div class="activity-item">
                            <img class="activity-avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face">
                            <div class="activity-content">
                                <div><span class="activity-user">Marcus Vance</span> merged PR #402: Automated CI/CD pipeline cache</div>
                                <div class="activity-time">22 mins ago &bull; DevOps</div>
                            </div>
                        </div>
                        <div class="activity-item">
                            <img class="activity-avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face">
                            <div class="activity-content">
                                <div><span class="activity-user">David Alverez</span> closed enterprise tier renewal with Fintech Global ($140K)</div>
                                <div class="activity-time">1 hr ago &bull; Sales</div>
                            </div>
                        </div>
                        <div class="activity-item">
                            <img class="activity-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face">
                            <div class="activity-content">
                                <div><span class="activity-user">Sophia Chen</span> published Q3 Product Strategy Roadmap</div>
                                <div class="activity-time">2 hrs ago &bull; Strategy</div>
                            </div>
                        </div>
                    `
                }
            ]
        }
    ]
});
