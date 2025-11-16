# Test User Credentials

This document contains test user credentials for development and testing purposes.

## 🔐 Test Accounts

### Admin User

```
Email:    admin@example.com
Password: Admin123!
Role:     admin
```

### Regular Users

**User 1:**

```
Email:    user@example.com
Password: User123!
Role:     user
```

**User 2:**

```
Email:    john@example.com
Password: John123!
Role:     user
```

**User 3:**

```
Email:    jane@example.com
Password: Jane123!
Role:     user
```

## 🌱 Seeding the Database

To populate your MongoDB database with these test users, run:

```bash
cd apps/api
npm run seed
```

This will create all test users if they don't already exist.

## 🚨 Security Notice

**⚠️ IMPORTANT:** These credentials are for **development and testing only**.

- Never use these credentials in production
- Never commit real user credentials to version control
- Always use strong, unique passwords for production accounts
- Implement proper password reset and account recovery flows for production

## 📝 Notes

- All test passwords meet the password requirements:
  - At least 8 characters long
  - Contains uppercase letters (A-Z)
  - Contains lowercase letters (a-z)
  - Contains at least one number (0-9)
- Passwords are hashed using bcrypt before being stored in the database
- The seed script will skip creation if users already exist to preserve existing data
