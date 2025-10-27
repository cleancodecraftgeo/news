# 📰 News Platform (Laravel + Inertia + React)

A modern, lightweight news-sharing application built with **Laravel**, **Inertia**, **React**, and **Tailwind CSS 4**.  
This project is currently in **active development** and serves as a foundation for a scalable social/news platform.

---

## 🚀 Overview

This project allows authenticated users to share posts, view others’ posts, and interact through comments.  
Each user receives a personalized experience with automatic greeting messages and welcome emails upon registration.

---

## ✨ Key Features

- 🔐 **Authentication System**
  - User registration, login, and logout powered by Laravel Breeze & Inertia.
  - Personalized greeting message displayed on the navbar.
  - Auth and Guest layouts separate visible content (guests see limited links).

- 📰 **Post Management**
  - Authenticated users can create posts with images.
  - Posts are stored with **ULID-based IDs** for uniqueness.
  - **Slug generation** from the post title for clean, SEO-friendly URLs.
  - Each post is connected to a user, and users can see posts from others.

- 💬 **Comment System**
  - Users can view comments related to each post.
  - Relationship chain: `User → Post → Comment`.

- 📧 **Email Notifications**
  - Automatic **Welcome Email** sent to each new user after registration.

- 🧩 **Clean Architecture**
  - Business logic separated into **Service Classes** for cleaner controllers.
  - Ready for future scalability and TypeScript migration.

- 🛠️ **Technology Stack**
  - **Backend:** Laravel (v12.x)
  - **Frontend:** React + Inertia.js
  - **Styling:** Tailwind CSS v4
  - **Database:** MySQL / MariaDB
  - **Dev Environment:** Laragon
  - **Future plan:** Add TypeScript for better scalability and maintainability.

---

## 🧠 Project Structure


