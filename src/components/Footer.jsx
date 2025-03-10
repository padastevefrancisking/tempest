import "./Components.css";

function Footer() {
    return (
        <footer className="text-black text-center p-2 w-full h-6 flex items-center justify-center">
            <p className="text-sm mx-3">© 2025 Tempest | Powered by <a href= "https://openweathermap.org/">OpenWeatherMap</a> and <a href="https://leafletjs.com/">Leaflet</a></p>
        </footer>
    );
}

export default Footer;