# 🌤️ SkyCast

A modern and responsive weather application built with **React.js** that provides real-time weather information, a 5-day forecast, recent search history, and temperature unit conversion (°C/°F) for cities worldwide. SkyCast features a clean glassmorphism-inspired interface and delivers live weather data using the OpenWeather API.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Live Demo

👉 **Try SkyCast here:** https://skycast-yash-weather.vercel.app/

---

## 📸 Preview

### Home Screen
![Home](./screenshots/home.png)

### Weather Dashboard
![Dashboard1](./screenshots/dashboard1.png)

![Dashboard2](./screenshots/dashboard2.png)

---

## ✨ Features

- 🌍 Search weather for any city worldwide
- 🌡️ View real-time weather conditions
- 📅 5-day weather forecast
- 🌤️ Weather icons based on current conditions
- 🌈 Dynamic backgrounds that change based on current weather conditions
- 🌡️ Toggle between Celsius (°C) and Fahrenheit (°F)
- 🕘 Recent search history with one-click search
- 💾 Recent searches are saved using Local Storage
- ⚡ Fast and responsive user interface
- 📱 Fully responsive design for desktop, tablet, and mobile
- ⏳ Loading spinner while fetching weather data
- ❌ User-friendly error handling for invalid cities or network issues
- 🎨 Modern UI built with reusable React components

---

## 🛠️ Built With

- React.js
- Vite
- CSS3
- JavaScript (ES6+)
- OpenWeather API
- Lucide React Icons

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── CurrentWeather.jsx
│   ├── ForecastWeather.jsx
│   ├── Logo.jsx
│   ├── SearchBar.jsx
│   ├── WeatherDashboard.jsx
│   └── WelcomeMessage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/codewithyashsoni/SkyCast.git
```

### Navigate to the project

```bash
cd SkyCast
```

### Install dependencies

```bash
npm install
```

### Create an environment file

Create a `.env` file in the project root and add:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

### Start the development server

```bash
npm run dev
```

---

## 🌐 Deployment

To create a production build:

```bash
npm run build
```

The application can be deployed on platforms such as:

- Vercel
- Netlify
- GitHub Pages

---

## 💡 Future Improvements

- 📍 Detect user's current location
- 🌙 Dark/Light mode
- 🕒 Hourly weather forecast
- ⭐ Save favorite cities
- 🌬️ Additional weather metrics (Air Quality Index, UV Index, Visibility)
- 🌐 Search suggestions with autocomplete

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

If you'd like to improve the project, feel free to fork the repository and submit a pull request.

---

## 👨‍💻 Author

**Yash Soni**

- GitHub: https://github.com/codewithyashsoni

---

## ⭐ Show Your Support

If you found this project helpful, consider giving it a ⭐ on GitHub!