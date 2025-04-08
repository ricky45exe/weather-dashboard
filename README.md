# 🌦️ Weather Dashboard App

A modern, responsive weather dashboard built with **React**, **TailwindCSS**, and **OpenWeatherMap API**.  
It allows users to search for any city and get real-time weather information, a 5-day forecast, and more — all with a clean UI and smooth animations.

---

## 🚀 Features

- 🌤️ Real-time Weather Display  
- 🕓 5-Day/3-Hour Forecast (OpenWeatherMap)  
- 🕹️ Recent Search History (last 5 cities)  
- 💡 Dark/Light Theme Toggle  
- 🔁 Refresh Button to Re-fetch Current City  
- ⏳ Loader animation while fetching data  
- 🎬 Framer Motion animations & transitions  

---

## 🛠 Tech Stack

- **Frontend**: React.js (CRA)  
- **Styling**: Tailwind CSS  
- **Animations**: Framer Motion  
- **Weather Data**: [OpenWeatherMap API](https://openweathermap.org/api)  
- **Deployment**: Vercel  

---

## 📦 Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/ricky45exe/weather-dashboard.git
cd weather-dashboard
```

2. **Install Dependencies**

```bash
npm install
```

3. **Add Your API Key**

- Create a `.env` file at the root level
- Add the following:

```ini
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

4. **Start the App**

```bash
npm start
```

5. **Build for Production**

```bash
npm run build
```

---

## 🌐 API Integration: OpenWeatherMap

**Base URL**: `https://api.openweathermap.org/data/2.5/`

### Endpoints Used:
- `/weather` – Current weather data  
- `/forecast` – 5-day / 3-hour forecast  

### Parameters:
- `q` – City name  
- `appid` – Your API key  
- `units=metric` – Celsius output  

### 🔐 API Key & Rate Limits

- **Free Tier** includes:
  - 60 API calls/minute
  - Daily limit: 1,000,000 calls
- Sign up here for your key: https://home.openweathermap.org/api_keys

---

## 📸 Preview

<!-- Add preview image link or drag a screenshot here -->

---

## ✅ Live Demo

🔗 [Click here to view the live app](https://weather-dashboard-navy-rho.vercel.app)

---

## 🤝 Contributions

Pull requests are welcome! If you'd like to improve something, feel free to fork and submit a PR.

---

## 🧑‍💻 Author

**Supratim Biswas**  
🚀 Final Year MCA | 📍 India  
[GitHub](https://github.com/ricky45exe) | [LinkedIn](https://linkedin.com/in/supratim-biswas)
