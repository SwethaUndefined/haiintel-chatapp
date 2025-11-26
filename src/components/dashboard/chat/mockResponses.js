export const mockResponses = {
  responses: [
    {
      triggers: ["hello", "hi", "hey", "start"],
      response: "Welcome to HaiIntel. I'm your AI-powered intelligence assistant. I can help you analyze anomalies, review dashboard insights, generate threat summaries, and navigate complex data patterns. What would you like to explore?",
      suggestions: ["Show anomaly summary", "Dashboard overview", "Recent alerts"]
    },
    {
      triggers: ["anomaly", "anomalies", "detection", "detect"],
      response: "I've detected 23 anomalies in the last 24 hours across your monitored endpoints. Critical severity: 3 | High: 7 | Medium: 13. The most significant pattern involves unusual outbound traffic from your EU-West cluster, correlating with a 340% spike in API requests.",
      suggestions: ["Drill into EU-West", "View threat timeline", "Export report"]
    },
    {
      triggers: ["dashboard", "overview", "summary", "status"],
      response: "Your HaiIntel Dashboard shows:\n\n• System Health: 98.7% uptime\n• Active Monitors: 1,247 endpoints\n• Threat Score: 34/100 (Low-Medium)\n• Data Processed: 2.4TB today\n\nAll machine learning models are operational with 99.2% prediction accuracy.",
      suggestions: ["View detailed metrics", "Configure alerts", "Optimize monitors"]
    },
    {
      triggers: ["alert", "alerts", "notification", "recent"],
      response: "Recent Alert Summary:\n\n🔴 CRITICAL: Unauthorized access attempt blocked (2 min ago)\n🟠 HIGH: Memory threshold exceeded on Node-7 (18 min ago)\n🟡 MEDIUM: SSL certificate expiring in 7 days\n🟢 INFO: Scheduled backup completed successfully",
      suggestions: ["Investigate critical alert", "Alert settings", "View all alerts"]
    },
    {
      triggers: ["threat", "security", "risk"],
      response: "Threat Intelligence Report:\n\nYour organization's risk posture has improved 12% this week. Key findings:\n\n• 847 blocked intrusion attempts\n• 3 zero-day vulnerabilities patched\n• Network segmentation score: A+\n• Compliance status: SOC2 Ready",
      suggestions: ["View threat map", "Security recommendations", "Compliance details"]
    },
    {
      triggers: ["help", "what can you do", "capabilities"],
      response: "I'm HaiIntel's AI assistant, designed to help you:\n\n• Monitor real-time anomalies and threats\n• Generate intelligent summaries from complex data\n• Provide actionable security insights\n• Navigate dashboards and reports\n• Answer questions about your infrastructure",
      suggestions: ["Show anomaly summary", "Dashboard overview", "Recent alerts"]
    },
    {
      triggers: ["eu-west", "cluster", "traffic", "drill"],
      response: "EU-West Cluster Analysis:\n\nAnomaly Source: 3 containerized services\nTraffic Pattern: Burst transmission every 47 seconds\nDestination: External IP (flagged)\nRisk Assessment: Potential data exfiltration\n\nRecommendation: Implement immediate traffic throttling and initiate forensic capture.",
      suggestions: ["Apply throttling", "Start forensics", "Whitelist IP"]
    },
    {
      triggers: ["metrics", "detailed", "performance"],
      response: "Detailed Performance Metrics:\n\n• CPU Utilization: 67% (optimal)\n• Memory Usage: 12.4GB / 32GB\n• Network I/O: 2.1 Gbps\n• Query Latency: 23ms avg\n• Model Inference: 8ms p99\n\nAll systems performing within expected parameters.",
      suggestions: ["Set custom thresholds", "Historical comparison", "Export metrics"]
    }
  ],
  defaultResponse: {
    response: "I understand you're asking about that topic. Let me analyze the available data... Based on HaiIntel's intelligence engine, I recommend checking the relevant dashboard section or refining your query for more specific insights.",
    suggestions: ["Dashboard overview", "Show anomaly summary", "Help"]
  }
};

export default mockResponses;