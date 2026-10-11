# KrishiCare – Smart Crop Treatment (Client Demo V1)

Static, dependency-free demo. No install or build step.

## Run
Open `index.html` in any browser, or serve the folder: `python3 -m http.server 8000`

## Structure
- `index.html`: page shell
- `css/style.css`: styling, theme tokens, dark mode
- `js/data.js`: DEMO crops, diseases, products (edit here)
- `js/app.js`: screens, navigation, weather strip, counters

## Demo flow
Landing, Demo Farmer Login, Dashboard, Disease & Treatment, Category, Crop, Disease, Details, Products, Product details, Application Guide, Appointment.

## Notes
- All crop, disease and product content is sample data, marked DEMO.
- Home-page stats (5 days, 25%) are illustrative and must be validated with client data.
- Weather values in `app.js` (`WX`) are a snapshot from 9 Oct 2026, not live. Production needs a weather API.
- No dosage, price, cart, payment, admin panel or AI detection in V1.
- Login and appointment form are mock; nothing is saved.

## Next steps
Real product catalog and images, Node.js + PostgreSQL backend, live weather API, admin panel, AI disease detection.
