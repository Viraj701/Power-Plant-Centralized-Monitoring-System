# 🚀 MAHAGENCO Dashboard - Setup & Run Guide

Complete instructions to run the MAHAGENCO Integrated Analytics Platform

---

## 📋 Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (v8 or higher) - Comes with Node.js
- **Git** (optional) - For version control

Check versions:
```bash
node --version
npm --version
```

---

## 🎯 Quick Start (5 minutes)

### Step 1: Create Project Directory
```bash
mkdir mahagenco-dashboard
cd mahagenco-dashboard
```

### Step 2: Copy Project Files
Copy all files from `outputs` folder to your project directory:
- `package.json`
- `index.js`
- `index.css`
- `App.js`
- `MAHAGENCO-Master-Dashboard.jsx`
- `tailwind.config.js`
- `postcss.config.js`
- `public/index.html`

### Step 3: Install Dependencies
```bash
npm install
```

This will install:
- React (18.2.0)
- React DOM (18.2.0)
- Recharts (2.10.3) - For charts
- Lucide React (0.294.0) - For icons
- Tailwind CSS (3.3.6) - For styling
- React Scripts (5.0.1) - Build tools

### Step 4: Start Development Server
```bash
npm start
```

Your browser will automatically open to: **http://localhost:3000**

---

## 📁 Project Structure

```
mahagenco-dashboard/
├── public/
│   └── index.html              # Main HTML file
├── node_modules/               # Dependencies (auto-created)
├── App.js                       # Main App component
├── index.js                     # React entry point
├── index.css                    # Global styles
├── package.json                 # Project config
├── tailwind.config.js           # Tailwind config
├── postcss.config.js            # PostCSS config
├── MAHAGENCO-Master-Dashboard.jsx  # Main dashboard
└── README.md                    # Documentation
```

---

## 🎮 Using the Dashboard

### Main Navigation Tabs (Top)
Click to switch between 6 dashboards:
- **Generation** - Fleet generation overview
- **Power Plant** - Unit performance analysis
- **Outage** - Outage management
- **Cost Recovery** - Financial metrics
- **MOD & Prediction** - Merit Order Dispatch
- **Profitability** - P&L analysis

### Sub-Navigation (Second Level)
Additional tabs within each dashboard for detailed views.

### Interactive Features
- 📊 **Click charts** - Interactive tooltips appear
- 📈 **Hover elements** - See detailed information
- 🎯 **KPI Cards** - Key metrics with color coding
- 📋 **Tables** - Sortable and filterable data

---

## 🔧 Available Commands

### Development
```bash
npm start
```
Runs the app in development mode at http://localhost:3000

### Production Build
```bash
npm run build
```
Creates an optimized production build in `build/` folder

### Testing
```bash
npm test
```
Launches test runner (if tests are configured)

### Eject Configuration
```bash
npm run eject
```
⚠️ **WARNING**: Irreversible operation. Only use if you need custom configuration.

---

## 📱 Responsive Design

The dashboard works on all screen sizes:

| Device | Resolution | Status |
|--------|-----------|--------|
| Mobile | 360px+ | ✅ Optimized |
| Tablet | 768px+ | ✅ Optimized |
| Laptop | 1440px+ | ✅ Optimized |
| Desktop | 1920px+ | ✅ Optimized |

Test responsiveness:
1. Open DevTools: `F12` or `Cmd+Option+I`
2. Click Device Toggle: `Ctrl+Shift+M`
3. Select different devices

---

## 🔌 Live Data Integration

Replace sample data with real APIs:

### Example: Fetch Generation Data
```javascript
// In MAHAGENCO-Master-Dashboard.jsx
useEffect(() => {
  fetch('/api/generation')
    .then(res => res.json())
    .then(data => setGenerationData(data))
    .catch(err => console.error('Error:', err));
}, []);
```

### Data Sources to Connect
- **SAP**: `/api/sap/financial`
- **CWS**: `/api/cws/dispatch`
- **SCADA**: `/api/scada/real-time`
- **Coal Mines**: `/api/coal/gcv`
- **Outages**: `/api/outages/active`

---

## 🐛 Troubleshooting

### Issue: Port 3000 already in use
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use different port
PORT=3001 npm start
```

### Issue: Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue: Tailwind CSS not applying styles
```bash
# Rebuild Tailwind
npm run build

# Clear cache
npx tailwindcss purge
```

### Issue: Charts not rendering
Ensure Recharts is installed:
```bash
npm install recharts
```

---

## 📦 Building for Production

### Step 1: Create Production Build
```bash
npm run build
```

This generates optimized files in `build/` folder:
- Minified JavaScript
- Compressed CSS
- Optimized images
- Source maps

### Step 2: Deploy
```bash
# Deploy build folder to your server
# Example: AWS S3, Netlify, Vercel, etc.
```

### Step 3: Verify Deployment
Visit your deployed URL and test all features.

---

## 🔐 Security Checklist

- [ ] Remove hardcoded sensitive data
- [ ] Use environment variables for API keys
- [ ] Implement authentication/authorization
- [ ] Use HTTPS for all API calls
- [ ] Validate all user inputs
- [ ] Sanitize data before display
- [ ] Implement CORS properly
- [ ] Add security headers

---

## 🌐 Environment Variables

Create `.env` file in root directory:
```
REACT_APP_API_BASE_URL=https://api.example.com
REACT_APP_SAP_ENDPOINT=https://sap.example.com
REACT_APP_CWS_ENDPOINT=https://cws.example.com
REACT_APP_AUTH_TOKEN=your_token_here
```

Access in code:
```javascript
const apiUrl = process.env.REACT_APP_API_BASE_URL;
```

---

## 📊 Dashboard Metrics

Each dashboard tracks specific metrics:

### Generation
- Total generation (MW)
- Capacity utilization
- Renewable energy %
- System availability

### Profitability
- Revenue (₹ Cr)
- Expenditure (₹ Cr)
- Net profit/loss
- Profit margin %

### Cost Recovery
- Total cost (₹ Cr)
- Recovery rate (%)
- Disallowance (%)
- Component-wise breakdown

### MOD & Prediction
- Daily generation
- Coal GCV (cal/g)
- Coal stock (days)
- 7-day forecast

---

## 🎓 Learning Resources

- **React**: https://react.dev/
- **Recharts**: https://recharts.org/
- **Tailwind CSS**: https://tailwindcss.com/
- **Lucide Icons**: https://lucide.dev/

---

## 📞 Support

For issues or questions:
- Check `README.md` for detailed documentation
- Review inline code comments
- Check browser console for errors (F12)
- Verify all dependencies are installed

---

## 📝 Development Tips

### Hot Reload
Changes are automatically reloaded in browser without manual refresh.

### DevTools Integration
- React Developer Tools browser extension recommended
- Chrome DevTools: F12
- Console logs visible in terminal

### Performance
- Dashboard is optimized for large datasets
- Charts handle 1000+ data points efficiently
- Responsive layouts use CSS Grid & Flexbox

---

## 🚀 Next Steps

1. **Run Dashboard**: `npm start`
2. **Explore Features**: Click through all tabs
3. **Connect Live Data**: Replace sample data with APIs
4. **Customize Theme**: Edit color schemes in JSX
5. **Deploy**: Build and upload to your server

---

## 📄 File Descriptions

| File | Purpose |
|------|---------|
| `MAHAGENCO-Master-Dashboard.jsx` | Main dashboard component (all 6 dashboards) |
| `App.js` | Entry point component |
| `index.js` | React DOM render |
| `index.css` | Global styles |
| `package.json` | Dependencies & scripts |
| `tailwind.config.js` | Tailwind CSS configuration |
| `public/index.html` | HTML template |

---

## ✅ Verification Checklist

- [ ] Node.js v16+ installed
- [ ] npm v8+ installed
- [ ] All files copied to project directory
- [ ] `npm install` completed successfully
- [ ] `npm start` runs without errors
- [ ] Browser opens to http://localhost:3000
- [ ] Dashboard displays with 6 main tabs
- [ ] All charts and tables render correctly
- [ ] Navigation between tabs works smoothly
- [ ] No console errors in DevTools

---

## 🎉 Success!

If all checks pass, your MAHAGENCO Dashboard is ready to use!

**Enjoy exploring the analytics platform!**

---

**Version**: 1.0  
**Last Updated**: 27-Feb-2026  
**Status**: Production Ready
