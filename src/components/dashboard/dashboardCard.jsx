import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  AlertTriangle,
  Server,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function DashboardCard() {
  const stats = [
    {
      label: "System Health",
      value: "98.7%",
      icon: Activity,
      color: "from-emerald-500 to-green-600",
      change: "+0.3%",
    },
    {
      label: "Active Monitors",
      value: "1,247",
      icon: Server,
      color: "from-blue-500 to-cyan-600",
      change: "+12",
    },
    {
      label: "Threat Score",
      value: "34/100",
      icon: Shield,
      color: "from-amber-500 to-orange-600",
      change: "-8",
    },
    {
      label: "Anomalies (24h)",
      value: "23",
      icon: AlertTriangle,
      color: "from-red-500 to-pink-600",
      change: "+5",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 mt-6"
        style={{marginTop:"20px"}}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            HaiIntel <span className="text-cyan-400">Dashboard</span>
          </h1>
        </div>
<p className="text-slate-400 text-sm sm:text-base ml-12" style={{marginTop:'5px'}}>
          Real-time intelligence monitoring and anomaly detection
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 mt-8" style={{marginTop:'16px',marginBottom:'8px'}}>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative group"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
            />
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300" style={{padding:'24px'}}>
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    stat.change.startsWith("+") &&
                    stat.label !== "Anomalies (24h)"
                      ? "text-emerald-400 bg-emerald-500/10"
                      : stat.change.startsWith("-") &&
                        stat.label === "Threat Score"
                      ? "text-emerald-400 bg-emerald-500/10"
                      : "text-red-400 bg-red-500/10"
                  }`}
                  style={{paddingLeft:'10px',paddingRight:'10px'}}
                >
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
        style={{padding:'24px'}}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Activity Overview
            </h2>
            <p className="text-slate-400 text-sm">
              Real-time threat detection metrics
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Threats Blocked
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              Anomalies
            </span>
          </div>
        </div>

        <div className="h-48 flex items-end justify-between gap-2 px-4">
          {[65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50, 88].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{
                delay: 0.6 + i * 0.05,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500/80 to-cyan-400/40 relative group cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-700 text-white text-xs rounded whitespace-nowrap"
              >
                {height} events
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between mt-4 px-4 text-xs text-slate-500">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </motion.div>

       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
                style={{padding:'24px',marginTop:'8px',marginBottom:'10px'}}

      >
        <h2 className="text-lg font-semibold text-white mb-4">Recent Alerts</h2>
        <div className="space-y-3">
          {[
            {
              severity: "critical",
              message: "Unauthorized access attempt blocked",
              time: "2 min ago",
            },
            {
              severity: "high",
              message: "Memory threshold exceeded on Node-7",
              time: "18 min ago",
            },
            {
              severity: "medium",
              message: "SSL certificate expiring in 7 days",
              time: "1 hour ago",
            },
          ].map((alert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800/80 transition-colors cursor-pointer group"
              style={{padding:'12px',marginBottom:'8px'}}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  alert.severity === "critical"
                    ? "bg-red-500"
                    : alert.severity === "high"
                    ? "bg-orange-500"
                    : "bg-yellow-500"
                }`}
              />
              <div className="flex-1">
                <p className="text-sm text-white group-hover:text-cyan-300 transition-colors">
                  {alert.message}
                </p>
                <p className="text-xs text-slate-500">{alert.time}</p>
              </div>
              <TrendingUp className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
            </motion.div>
          ))}
        </div>
      </motion.div> 
    </div>
  );
}
