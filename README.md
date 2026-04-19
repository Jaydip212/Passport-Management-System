<div align="center">
  <img src="https://img.icons8.com/color/100/000000/passport.png" alt="Passport Icon" width="80" />
  <h1>🛂 Global Passport Management System</h1>
  <p>A seamless, fully digital, and highly secure platform to apply, track, and manage passport applications.</p>

  <p>
    <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
    <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
    <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
    <img alt="Supabase" src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
    <img alt="Vite" src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  </p>
</div>

---

## 🌟 Overview

The **Passport Management System (GPMS)** is a comprehensive web application designed for students and professionals. Built with an extremely elegant and **glassmorphic** UI utilizing Vanilla CSS, the project avoids complex frameworks while offering a premium look. It includes complete **Role-Based Access Control (RBAC)**, document uploads, appointment booking, and realistic application tracking.

Ideal as a **college final-year project** or a SaaS case study.

## ✨ Key Features

### 👤 User Portal
- **Authentication**: Secure Login/Signup utilizing Supabase Auth logic.
- **Application Forms**: Complete multi-step passport form with standard format validations (Aadhaar, PAN, Phone).
- **Document Management**: Highly secure document upload to cloud storage.
- **Appointment Booking**: Intelligent slot selection algorithm rejecting double bookings. 
- **Real-Time Tracking**: Interactive 6-stage application tracking timeline.
- **Receipt Generation**: Directly print and download application receipts cleanly integrated as PDFs.

### 🛡️ Admin Portal
- **Dashboard Overview**: Access live real-time metrics across applications and users.
- **Manage Applications**: Filter applications, verify documents securely, approve/reject requests.
- **Notification Engine**: Issue status transitions and rejection reasons that automatically alert applicants.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES9), Vanilla CSS (Custom Properties, Flexbox, Glassmorphism)
- **Backend / DB / Auth**: [Supabase](https://supabase.com/) (PostgreSQL backend)
- **File Storage**: Supabase Storage Buckets
- **Bundler**: Vite

---

## 💻 Local Setup & Installation

Get up and running in a few simple steps.

### 1. Prerequisites
Ensure you have Node.js and NPM installed on your machine.
- Node.js (v16+)

### 2. Clone the Repository
```bash
git clone https://github.com/Jaydip212/Passport-Management-System.git
cd Passport-Management-System
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Supabase Configuration
Create a free project on [Supabase](https://supabase.com).
1. Go to the **SQL Editor**, paste and run the contents of the `supabase_schema.sql` file located in the root directory. This securely creates your tables, Row Level Security (RLS) policies, and triggers.
2. In the Supabase **Storage** section, create a new public bucket named `documents`.
3. Create a `.env` file in the root folder using `.env.example` as a reference:
   
```bash
VITE_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

### 5. Run the Application
```bash
npm run dev
```

The app will now be running on `http://localhost:5173/`. 

---

## 📸 Screenshots & UI Previews

*(Add your beautiful screenshots here later showing the dashboard, track timeline, form, and admin screens!)*

## 🤝 Contribution Guidelines
Contributions, issues, and feature requests are always welcome! Feel free to check the [issues page](https://github.com/Jaydip212/Passport-Management-System/issues).

---
<div align="center">
  <sub>Built with ❤️ for top-class college presentations.</sub>
</div>
