# 🏡 Real Estate Platform — Serene Living

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
  <img src="https://img.shields.io/badge/status-completed-success.svg" />
  <img src="https://img.shields.io/badge/made%20with-Node.js-green.svg" />
  <img src="https://img.shields.io/badge/database-MySQL-orange.svg" />
</p>

A **web-based Real Estate Platform** to simplify property browsing, listing, and communication between property seekers and owners. Includes a friendly UI, powerful search filters, Google Maps integration, and an inquiry system with email automation.

---

## 📖 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Future Enhancements](#-future-enhancements)
- [Contributor](#-contributor)
- [Acknowledgements](#-acknowledgements)

---

## 📌 Introduction

The **Real Estate Platform** bridges the gap between property seekers and owners by offering a **transparent, accessible, and efficient** solution for real estate needs. It enables:

- Property seekers to search, filter, and explore listings.
- Owners/agents to post properties.
- Direct communication via inquiries.

Developed as part of the **BCA Final Year Project (2024–25)** at **K.L.E. Society’s P.C. Jabin Science College, Hubballi**.

---

## ✨ Features

- 🔐 Secure **authentication** (login/signup with bcrypt)
- 🏠 **Search & filters**: location, price range, type, buy/rent
- 📝 **Property posting** for owners/agents
- 📍 **Property details** with **Google Maps** integration
- 📬 **Contact & inquiry** system (email automation)
- 📱 **Responsive UI** with sliders and sections
- 💾 **MySQL** for users, properties, and inquiries

---

## ⚙️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL (MySQL Workbench)
- **Version Control:** Git & GitHub

---

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/real-estate-platform.git
   cd real-estate-platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup database**

-   Create a MySQL database.
   - Import the schema from `/database/schema.sql`.
   - Create/update a `.env` file with database credentials and keys:

     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=changeme
     DB_NAME=realestate
     PORT=3000
     EMAIL_HOST=smtp.example.com
     EMAIL_USER=your@email.com
     EMAIL_PASS=password
     GOOGLE_MAPS_API_KEY=your_key
     ```

4. **Run the server**

   ```bash
   npm start
   ```

5. **Access the app**

   Open `http://localhost:3000` in your browser.

---

## 🎮 Usage

- **Register/Login** as a user
- **Browse and filter** properties
- **View details** with images & map
- **Owners/agents** can post listings
- **Contact owners** via inquiry form

---

## 🖼️ Screenshots

Add images to `docs/screenshots/` and reference them here.

- **🔐 Signup Page**  
  ![Login Page](docs/screenshots/login.png)

- **🏠 Home Page**  
  ![Home Page](docs/screenshots/homepage.png)

- **📋Featured properties section**  
  ![Featured properties section](docs/screenshots/propertylistings.png)

- **📋Property Listings** 
  ![Property Listings](docs/screenshots/haha.png)

- **📍 Property Details Page**  
  ![Property Details](docs/screenshots/details1.png)
  ![Property Details](screenshots/detailss.png)

- **Contact Form**  
  ![Contact Form](docs/screenshots/details3.png)

---

## 🔮 Future Enhancements

- User Dashboard for managing properties & inquiries
- Real-time chat system
- Payment gateway integration
- AI-based property recommendations
- Mobile App (Android & iOS)
- Virtual Property Tours (360° / VR)

---

## 👩‍💻 Contributor

- **Kirti Pawar** 

**Guided by**: Prof. Soniya Gudgunti  
**BCA Department**, KLE Society’s P.C. Jabin Science College, Hubballi


---

## 🙏 Acknowledgements

- **Prof. Sunil Vernekar**, HOD, BCA Department, for encouragement and support.
- **Prof. Soniya Gudgunti**, Project Guide, for valuable guidance.
- All teaching and non-teaching staff of KLE Society’s P.C. Jabin Science College.
