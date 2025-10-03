# 🎯 Project 1: FreshBite Café Digital Menu System 

## Group Instruction  
Before writing any code, each group should have a **discussion session** to plan:  
- How to divide the project into parts  
- What data structures to use (arrays, objects, localStorage)  
- How pages will connect (login → staff dashboard → customer menu)  
- Each member’s role and responsibilities  

Only after planning should the team begin building.  


## The Story  
FreshBite Café owner Maria says:  
> FreshBite Café owner Maria says:  
> "My paper menus get dirty and torn. I want a simple digital menu system where customers can see the menu on their phones and place orders. I also need my staff to update the menu easily without reprinting papers." 

---

## What You Will Build  
Two Main Parts:  
1. **Staff Login** – For café employees to manage the menu  
2. **Customer Menu** – For customers to browse and order  

---

## Part 1: Staff Login System  

### Login Page Requirements  
- Username and password fields  
- Simple validation (check if fields are filled)  
- Fake authentication (hardcoded staff credentials)  
- Redirect to staff dashboard after login  


### Staff Dashboard  
- Add new menu items (name, price, description)  
- Remove existing menu items  
- View all current menu items  
- Simple form to edit prices  

**Suggested Staff Credentials:**  
- Username: `admin`  
- Password: `cafe123`  

---

## Part 2: Customer Menu System  

### Menu Display  
- Show all menu items in cards/boxes  
- Each item shows: name, price, description  
- Simple categories: Drinks, Food, Desserts  
- Basic search by item name  

### Ordering System  
- Click to add items to cart  
- Show cart with item count and total  
- Simple checkout form (name, table number)  
- Order confirmation message  

## Simplified Technical Requirements  

### Data Storage  
- Use arrays of objects to store menu items  
- Use `localStorage` to save data between page visits  
- No real database needed  

### Essential Features Only  
- Login/logout functionality  
- Add/remove menu items (staff)  
- Browse and order items (customers)  
- Calculate order total  
- Basic form validation  


## Pages to Build

- **login.html** – Staff login form  
- **staff-dashboard.html** – Menu management (after login)  
- **customer-menu.html** – Public menu for customers  

---

## Success Criteria

### Must Work
- Staff can log in and manage menu items  
- Customers can view menu and place orders  
- Basic calculations work correctly  
- Data persists when page refreshes  

### Should Look Good
- Clean, mobile-friendly design  
- Easy to read menu items  
- Clear buttons and forms  
- Professional appearance  


## Team Roles (4 students)

- **Login Developer** – Build authentication system  
- **Staff Dashboard Developer** – Menu management features  
- **Customer Interface Developer** – Public menu and ordering  
- **Designer** – Styling, layout, and user experience  

---

## Presentation Format

### Demo Flow (10 minutes)
1. Explain the code structure briefly  
2. Show staff logging in and adding a menu item  
3. Switch to customer view and place an order
4. Discuss challenges and solutions  