# 🎯 Project 2: Library Management System  

## The Story: Digital Tool for School Libraries  

A secondary school in Lagos wants to replace their manual library book log with a simple browser-based system. The goal is to allow **librarians** to record, search, and manage books easily, while **students** can check if a book is available.  

---

## What You Will Build  

A responsive web application using:  
- **HTML** for structure  
- **CSS** for styling  
- **JavaScript** for interactivity and logic  

The system will have **two access levels**:  
- **Students (No Login):** Can view and search books only  
- **Librarians (Login Required):** Can add, update, and delete books  

## Core Features & Requirements  

- **Login System (Librarians only)**  
  - Simple authentication with hardcoded credentials (e.g., `username: admin`, `password: library123`)  
  - Redirect to dashboard on success  
  - Logout button to end session  

- **Add Book (Librarian only)**  
  - Collect Title, Author, Year, and Availability (Available/Checked Out)  

- **View All Books**  
  - Display records in a table or grid view  
  - Highlight unavailable books in a different color  

- **Search by Title/Author**  
  - Filter results dynamically as the user types  

- **Update Book Status (Librarian only)**  
  - Mark a book as “Checked Out” or “Available”  

- **Delete Book (Librarian only)**  
  - Remove a book record with a button click  

  - **Save to Local Storage**  
  - All book data should persist between page reloads  

---

## Pages to Build  

- **login.html** → Librarian login form  
- **dashboard.html** → Librarian book management  
- **student-view.html** → Public student page (search & view only)  

---

## Suggested Steps  

**Step 1: Plan HTML Structure**  
- Create `login.html`, `dashboard.html`, and `student-view.html`  
- Use a `<form>` to collect book details  
- Use a `<table>` or `<div>` to show all books 

**Step 2: Apply CSS Styling**  
- Clean, mobile-friendly layout (responsive design)  
- Different colors for available vs. checked-out books  

**Step 3: Add JavaScript Functionality**  
- Arrays/objects to store books  
- Event listeners for form submissions and button actions  
- Use `localStorage` for persistence  
- Add login validation for librarians  
- Add logout functionality  

**Step 4: Testing**  
- Add at least 5 sample books  
- Test searching, updating status, deleting, and reloading the page  
- Test student view (read-only) vs librarian dashboard (full control)  
- Test logging in and logging out  

## Learning Goals  

- Practice working with forms and DOM manipulation  
- Apply conditionals to handle book availability  
- Use arrays and objects for structured data  
- Save and retrieve persistent data with `localStorage`  
- Build a clean, responsive interface  
- Implement a simple authentication flow  
- Differentiate user roles (student vs. librarian)  

---

## Bonus Features (Optional)  

- Sort books alphabetically or by year  
- Add categories/genres for books  
- Show total number of available vs. checked-out books  
- Add a “Dark Mode” toggle  
- Export book list to CSV or JSON  