## **Project requirement analysis:**

We need a digital agency website. Customer can buy their favorite service. There are many services such as web design and development, SEO………..etc. Admin can see services list which service are buy with the customer. Customers can give reviews on services. 

Admin can add any service and manage customer orders, services, user information, etc.

**Authentication:**

- Authentication will be implemented using Firebase and API security will be ensured with JWT Token.
- Admin and students can register themselves.
- They can log in with their credentials and log out.
- Authenticated users can update their profile information.

### **Models:**

**User:**

- Name
- Email
- Password
- Role: [” user”, “admin”]
- Account Status

**Service:**

- Title
- Description
- Image
- Creator ID (user ID)
- CreatedAt
- Review [userId, userId]

**Order:**

- Service ID (service which customer selects)
- User ID (customer who ordered the service)
- Order Status
- Order Date

Once the order is placed, the user can track the status of their order. The admin can update the status of the order and mark it as completed once it is finished. The completed orders will be stored for future reference.

**Payment Gateway Integration:**

- Integrate a payment gateway for customers to pay for the services they purchase on the website.
- Ensure that the payment gateway is secure and reliable.
- Implement a refund policy for customers if they are unsatisfied with the service.

Payment:

- Service Id
- 

**Responsive Design:**

- Implement a responsive design that works well on all devices including desktops, tablets, and mobile phones.
- The website should be fast and optimized for performance.

**SEO Optimization:**

- Optimize the website for search engines to increase visibility and attract more customers.
- Implement relevant keywords, meta descriptions, and headings on each website page.

**Review on service:**

- Text (User review)
- User Id
- Service Id
- Date

---

**Chat features: (Not implemented)**

Implement a chat feature for users to communicate with the admin in case they have any questions or concerns regarding the services or orders.

The website should have a clean and modern design that reflects the creativity and professionalism of the agency.

---

**Team members:**

- Member Id (User Id)
- Profile pic

### API Endpoints:

**Users:**

**GET**: /api/users [private]

**GET:** /api/users/:userId [private]

**POST**: /api/users/register [public]

**POST:** /api/users/login [public]

**PATCH:** /api/users/edit-user [private]

**PATCH:** /api/users/change-avatar [private]

**Services:**

**GET:** /api/services

**GET:** /api/comments