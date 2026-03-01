# ⚡ Quick Start - Run Dashboard in 3 Steps

## 🚀 Run the Dashboard NOW

### Step 1: Install Node.js (if not already installed)
Download from: https://nodejs.org/ (v16 or higher)

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Download & Setup Project
```bash
# Download the project files from outputs folder
# Create project directory
mkdir mahagenco-dashboard
cd mahagenco-dashboard

# Copy these files into the directory:
# - MAHAGENCO-Master-Dashboard.jsx
# - package.json
# - index.js
# - App.js
# - index.css
# - tailwind.config.js
# - postcss.config.js
# - public/index.html

# Install dependencies
npm install
```

**Time: ~2-3 minutes** (depends on internet speed)

### Step 3: Start the Dashboard
```bash
npm start
```

✅ **Dashboard opens automatically at http://localhost:3000**

---

## 🎮 Using the Dashboard

Once loaded, you'll see:

### 6 Main Tabs (Top Navigation)
1. **Generation** - Fleet generation overview
2. **Power Plant** - Unit performance  
3. **Outage** - Outage tracking
4. **Cost Recovery** - Financial metrics
5. **MOD & Prediction** - Merit Order Dispatch
6. **Profitability** - Income/Expense analysis

### Features
- 📊 Interactive charts
- 📈 Real-time KPIs
- 📋 Data tables
- 🎯 Drill-down analytics

---

## 🔧 Available Commands

### Run Development Server
```bash
npm start
```
Open http://localhost:3000 (auto-opens in browser)

### Build for Production
```bash
npm run build
```
Creates optimized `build/` folder for deployment

### Test (if tests configured)
```bash
npm test
```

---

## 🛑 Stop the Server
Press `Ctrl+C` in terminal

---

## ❓ Troubleshooting

### "npm: command not found"
→ Install Node.js from https://nodejs.org/

### "Port 3000 already in use"
```bash
# Use different port
PORT=3001 npm start
```

### "Module not found" error
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Charts not showing
- Check browser console (F12)
- Ensure recharts is installed: `npm install recharts`

---

## 📂 Project Files Explained

| File | Purpose |
|------|---------|
| `MAHAGENCO-Master-Dashboard.jsx` | **Main dashboard (all 6 dashboards)** |
| `package.json` | Project dependencies |
| `App.js` | React entry component |
| `index.js` | React initialization |
| `public/index.html` | HTML template |
| `tailwind.config.js` | Styling configuration |

---

## 📊 Dashboard Includes

✅ **6 Complete Dashboards**
- Generation Monitoring
- Power Plant Analytics
- Outage Management
- Cost Recovery Analysis
- MOD & Prediction System
- Profitability Reporting

✅ **30+ KPI Metrics**
✅ **Interactive Charts & Tables**
✅ **Real-time Data Ready**
✅ **Fully Responsive**
✅ **Production Ready Code**

---

## 🎓 Next Steps

1. ✅ Run: `npm start`
2. 📊 Explore all 6 dashboards
3. 🔌 Connect to live data (SAP, CWS, SCADA)
4. 🎨 Customize colors/theme
5. 🚀 Deploy to production

---

## 📚 Full Documentation

For detailed information, see:
- `SETUP-AND-RUN.md` - Complete setup guide
- `README.md` - Project overview
- Code comments - Implementation details

---

## 🎉 You're All Set!

**Run `npm start` and enjoy the dashboard!**

Questions? Check the console (F12) for error messages.

---

**Version**: 1.0  
**Status**: ✅ Ready to Run  
**Last Updated**: 27-Feb-2026
