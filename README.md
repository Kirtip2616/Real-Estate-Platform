# 🏡 Real Estate Platform — Serene Living

<p align="center">
   <img src="https://img.shields.io/badge/license-proprietary-red.svg" />
  <img src="https://img.shields.io/badge/status-completed-success.svg" />
  <img src="https://img.shields.io/badge/made%20with-Node.js-green.svg" />
  <img src="https://img.shields.io/badge/database-MySQL-orange.svg" />
</p>

A **web-based Real Estate Platform** to simplify property browsing, listing, and communication between property seekers and owners. Includes a friendly UI, powerful search filters, Google Maps integration, and an inquiry system with email automation.

---

## 📖 Table of Contents

- Introduction
- Features
- Tech Stack
- Installation
- License
- Contributions 
- Usage
- User Interface Design and Outputs
- Future Enhancements
- Author


---

## 📌 Introduction

The **Real Estate Platform** bridges the gap between property seekers and owners by offering a **transparent, accessible, and efficient** solution for real estate needs. It enables:

- Property seekers to search, filter, and explore listings.
- Owners/agents to post properties.
- Direct communication via inquiries.


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

## 📜License

- **This project is licensed under a Proprietary License.**
- Commercial or personal use without permission is prohibited.
See the full [LICENSE](LICENSE.md) file for details. 
---
## 🤝Contributions
  
Contributions are possible, but only with my prior approval.  

If you have suggestions or would like to collaborate, please open an Issue to discuss your idea before submitting any changes.  

---

## 🎮 Usage

- **Register/Login** as a user
- **Browse and filter** properties
- **View details** with images & map
- **Owners/agents** can post listings
- **Contact owners** via inquiry form

---

## 🖼️User Interface Design and Outputs

- **🔐 Login Page**  
  <img width="1920" height="979" alt="Image" src="https://github.com/user-attachments/assets/02390932-bb74-4b12-80a8-355271cb70c3" />

- **🏠 Home Page**  
<img width="1903" height="958" alt="Image" src="https://github.com/user-attachments/assets/3a2b0f91-aaf5-42d4-9d9f-d3566e6a60f8" />

- **📋Featured properties section**  
<img width="1901" height="840" alt="Image" src="https://github.com/user-attachments/assets/fac8aaa2-0ead-4d5e-9ede-c6dd6a0a6bcc" />

- **📋Property Listings** 
 <img width="1911" height="964" alt="Image" src="https://github.com/user-attachments/assets/bb272e12-e8f4-4092-a461-02d44cea1e40" />

- **📍 Property Details Page**  
<img width="1897" height="969" alt="Image" src="https://github.com/user-attachments/assets/4106faa9-e993-4ab1-8294-9283b8598169" />

- **📍 Property Details Page**  
<img width="1894" height="912" alt="Image" src="https://github.com/user-attachments/assets/7e1459a4-82f2-4aa7-bfa9-19ea3eff8853" />


- **Contact Form**  
<img width="1896" height="979" alt="Image" src="https://github.com/user-attachments/assets/a5d28b08-bda5-4d64-bd59-015f3a5c93d1" />

---

## 🔮 Future Enhancements

- User Dashboard for managing properties & inquiries
- Real-time chat system
- Payment gateway integration
- AI-based property recommendations
- Mobile App (Android & iOS)
- Virtual Property Tours (360° / VR)

---

## 👩‍💻Author

- **Kirti Pawar**
- **EMAIL**:kirtivpawar26@gmail.com



---


