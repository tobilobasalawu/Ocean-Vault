# Ocean Vault - Full Stack Banking Application

## Overview
Ocean Vault is a full-stack banking application that provides users with secure banking services. The application is built using modern web technologies and aims to provide a seamless and intuitive user experience.

## Important Notice
Currently, Appwrite is experiencing technical difficulties, which may affect the sign-in/sign-up functionality of the application. If you encounter issues with authentication, please try again later.

## Features
- User authentication (sign-in/sign-up)
- Account management (create, view, and manage bank accounts)
- Transactions (transfer funds)
- Real-time balance updates
- Transaction history
- Secure data storage and encryption

## Technologies Used
- **Front-end**: React.js, Tailwind CSS
- **Back-end**: Node.js, Express.js
- **Database**: Appwrite
- **Authentication**: Appwrite

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- Appwrite (for authentication)

### Installation
1. Clone the repository:
```
git clone https://github.com/your-username/ocean-vault.git
```
2. Install dependencies:
```
cd ocean-vault
npm install
```
3. Set up the environment variables:
   - Create a `.env` file in the root directory of the project.
   - Add the following variables:
     ```
      #NEXT
      NEXT_PUBLIC_SITE_URL=http://localhost:3000
      
      #APPWRITE
      NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
      
      NEXT_PUBLIC_APPWRITE_PROJECT=672a68d8001d445b65b6
      APPWRITE_DATABASE_ID= 672a6c3e0021dcb0fa8a
      APPWRITE_USER_COLLECTION_ID= 672a6c68000f41d092ac
      APPWRITE_BANK_COLLECTION_ID= 672a6d220038bd075b87
      APPWRITE_TRANSACTION_COLLECTION_ID= 672a6cff0011c79497d0
      NEXT_APPWRITE_KEY= standard_4a6d27bb23eece02d338317393ca0eae20bc9cedf75420043e0c514a3af1d15e8cce63a30f6e18bf570822d6ea3a7f4f0cd079625ab47f8f6824e9884792b09a470c1015ec0c2c65b6e2e14c0ccb94180c5ad823985f0088c26c8640537247e1628441c3c9c2e71823e0c4c7d9175a1a8f1000b2f89d72713c8862b3bd26e403
      
      #PLAID
      PLAID_CLIENT_ID= 6730f93cfda72b001a35389d
      PLAID_SECRET=2d1f82a5679dfd252b23077af96b7d
      PLAID_ENV= sandbox
      PLAID_PRODUCTS= auth,transactions,identity
      PLAID_COUNTRY_CODES= US, GB
      
      #DWOLLA
      DWOLLA_KEY=nIRQ6z5MJKDn6TgAhTKOiXucrnTjoNRqHXbHlTvNgAwkAUipFV
      DWOLLA_SECRET=QOR8dylYme6PU0KLPOwOs9xCOjlsyOKmrgiNCYhxz1K4YUBMBM
      DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
      DWOLLA_ENV=sandbox

     ```
4. Start the development server:
```
npm start
```

## Deployment
To deploy the application, you can use a hosting service like Vercel. Make sure to configure the environment variables on the hosting platform according to the steps above.


## Contributing
We welcome contributions to the Ocean Vault project. If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.
