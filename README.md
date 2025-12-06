# 🎟️ **ResolveOS – Support Ticket Management System**
### **A Role-Based Smart Ticketing Platform (Admin • Support • User)**

**ResolveOS** is a highly scalable, secure, and role-based ticket management system with a **React.js frontend** and **Node.js + Express backend**, connected to **MongoDB** and secured with **JWT Authentication**.  
The platform supports **Admin**, **Support Engineer**, and **User** workflows with a clean permission-driven architecture. 🚀

---

## ⭐ **Key Highlights**

### 🔐 **Authentication & Authorization**
- Secure login & registration using JWT  
- Role-based access (**user**, **support**, **admin**)  
- Protected routes using middleware  
- Admin-only actions like user management & ticket assignment  

---

## 🧑‍💻 **Admin Features**
- View all registered users (excluding passwords)  
- View all tickets with assigned user/support details  
- Assign tickets to support engineers  
- Delete user/support safely  
  - Prevents deleting admins  
  - Prevents deleting yourself  
  - Automatically resets assigned tickets when a support engineer is deleted  

---

## 🎧 **Support Engineer Features**
- View tickets assigned to them  
- Update ticket status (`open`, `in-progress`, `resolved`, `closed`)  
- Add comments to tickets  
- Collaborate with users via comment threads  

---

## 🙋 **User Features**
- Create new support tickets  
- Choose priority & category  
- View their own ticket history  
- Check ticket status in real time  
- Add comments for clarifications  
- View complete ticket details with populated user/support/comment info  

---

## 🏗️ **Tech Stack**
| Layer | Technology |
|-------|------------|
| **Frontend / UI** | React.js (dynamic & responsive interface) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB + Mongoose |
| **Auth** | JWT (JSON Web Tokens) |
| **Security** | bcryptjs for hashing passwords |
| **Architecture** | MVC Pattern |

---

## 🔥 **Core Modules**

### 📌 **Authentication Module**
Handles login, registration, token generation & role-based permissions.

### 📌 **Admin Module**
Manages system-level tasks such as assigning tickets & managing users.

### 📌 **Support Module**
Allows support engineers to resolve tickets, update statuses, and communicate.

### 📌 **Ticket Module**
Handles ticket creation, updates, comments, and retrieval.

---

## 🧠 **Middleware System**

### ✔️ `protect`
Validates JWT and attaches authenticated user to `req.user`.

### ✔️ `authorizeRoles`
Ensures only permitted roles access specific routes.

### 🔒 **Role-wise Access Control**
- **Admin** → manage users, assign tickets  
- **Support** → update statuses, add comments  
- **User** → create & view their own tickets  

---

## 🗂️ **Database Models**

### 🧍 **User Model**
- `name`  
- `email`  
- `password` (hashed)  
- `role` → `user` | `support` | `admin`  

### 🎫 **Ticket Model**
- `title`, `description`  
- `priority` → low | medium | high  
- `status` → open | in-progress | resolved | closed  
- `category`  
- `user` (creator)  
- `assignedTo` (support engineer)  
- `comments[]` with text, sender, timestamp  

---

## 🧑‍🤝‍🧑 **Team & Contributors**

| Role | GitHub Username | Name |
|------|-----------------|------|
| ⭐ **Team Leader** | **@Shruti627** | **Shruti P. Sangvikar** |
| 👨‍💻 Collaborator | **@Atharv342** | Atharv |
| 👨‍💻 Collaborator | **@NinadUbale** | Ninad Ubale |
| 👨‍💻 Collaborator | **@Sham1718** | Sham |

✨ Special thanks to all contributors who helped make ResolveOS robust and scalable!

---

## 🚀 **Features Summary (Quick Peek)**
- 🔒 JWT Auth  
- 👥 Three roles with strict permission layers  
- 🎫 Ticket lifecycle management  
- 💬 Commenting system  
- 🛠 Auto-cleanup when deleting users  
- 📡 Fully API-driven backend  
- ⚙️ Clean & modular MVC architecture  
- 💻 React.js frontend for responsive UI  

---

# 📄 **License**

This project is created for academic purposes by the ResolveOS team.  
It can be used for learning, research, and non-commercial use only.  
© 2025 ResolveOS Team
