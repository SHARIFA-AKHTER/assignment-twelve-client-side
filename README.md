# Asset Management System (Client-Side)

## 🌟 Objective  
The **Asset Management System** is a web application designed to help businesses manage their assets and track how employees use them. With features tailored for both HR managers and employees, the app distinguishes between **Returnable** (e.g., laptops, keyboards) and **Non-returnable** (e.g., pens, tissues) assets, providing a seamless solution for asset tracking. 

---

## 🔑 Admin Credentials
- **Admin Username**: 
- **Admin Password**:

---

## 🌐 Live Site  
[Asset Management System Live]

---

## 📋 Key Features  
1. **User Roles & Dashboards**:  
   - Separate dashboards for **HR Managers** and **Employees** with customized navigation and features.  
   - HR Managers manage assets, approve requests, and add/remove employees.  
   - Employees can request assets, view pending requests, and interact with their team.  

2. **Dynamic & Responsive Design**:  
   - Fully responsive interface for **mobile**, **tablet**, and **desktop** views.  

3. **Authentication System**:  
   - Email-password login and social login options (e.g., Google).  
   - JWT-based authentication ensures secure sessions without redirection on page reload.  

4. **HR Manager Functionalities**:  
   - Add, update, delete, and filter assets.  
   - Manage employee teams and handle asset requests.  
   - Approve/reject asset requests with notifications.  

5. **Employee Functionalities**:  
   - Request assets with additional notes.  
   - Filter and sort requests by status and type.  
   - View team members and cancel/return requests.  

6. **Payment Integration**:  
   - Subscription plans to increase team limits (e.g., $5 for 5 employees).  
   - Seamless payment page for HR Managers.  

7. **Interactive Visualizations**:  
   - HR dashboards include **pie charts** to display asset usage trends.  

8. **TanStack Query for Data Fetching**:  
   - Efficient server-side data fetching for all GET requests.  

9. **Sweet Alerts & Toast Notifications**:  
   - User-friendly alerts for CRUD operations, login, sign-up, and more.  

10. **Secure Environment Variables**:  
    - Firebase configuration and MongoDB credentials are securely managed using `.env`.  

---

## 📌 Pages and Functionalities  

### Public Pages  
1. **Home Page**  
   - Banner Section: Buttons for HR Manager and Employee registration.  
   - About Section: Static content about the system.  
   - Packages Section: Pricing details for subscription plans.

2. **Join as Employee**  
   - Registration form with fields like Full Name, Email, Password, and Date of Birth.  
   - Social login integration.  

3. **Join as HR Manager**  
   - Registration form with additional fields like Company Name and Logo.  
   - Subscription plan selection and payment integration.  

4. **Login Page**  
   - Email-password login and social login options.  

---

### Private Pages  

#### For Employees  
- **Home**: Displays pending requests, monthly requests, calendar, and events.  
- **My Assets**: Search, filter, and view requested assets. Includes cancel and return options.  
- **Request Asset**: Search, filter, and request assets with a modal for additional notes.  
- **My Team**: List of team members with profile details.  

#### For HR Managers  
- **Home**: Shows pending requests, top requested items, limited stock, and a pie chart.  
- **Asset List**: Search, filter, and sort assets. Options to add, update, or delete assets.  
- **Add Asset**: Form to add new assets to the system.  
- **All Requests**: View, approve, or reject asset requests.  
- **My Employee List**: Manage team members with options to remove or add new ones.  
- **Add Employee**: Bulk addition of employees with package upgrades.  

---

## 🛠️ Technologies Used  
- **React.js**: Frontend library for building the user interface.  
- **React Router**: For navigation and route management.  
- **TanStack Query**: Efficient data fetching for GET requests.  
- **React Helmet**: For managing metadata and SEO.  
- **Firebase**: Authentication and hosting.  
- **Sweet Alert & React Toastify**: User-friendly notifications.  
- **JWT (JSON Web Token)**: Secure authentication.  

---

## 📈 Deployment  
- **Frontend**: Deployed on Vercel/Netlify.  
- **Backend**: Deployed on Render/Heroku.  

---

## 🚀 Instructions to Run Locally  

1. Clone the repository:  
   ```bash
   git clone https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-SHARIFA-AKHTER
   cd asset-management-system