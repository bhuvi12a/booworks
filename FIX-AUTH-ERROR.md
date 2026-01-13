# 🔧 Fix NextAuth Configuration Error

## ✅ Your Generated AUTH_SECRET:
```
lSrXp667feB9iSqeLuG0Rp9JoWLJckzuZYvHaDpkeeU=
```

## 📝 Steps to Fix:

### 1. Open your `.env.local` file
Located at: `c:\Users\bhuva\OneDrive\Desktop\booworks\booworks\.env.local`

### 2. Add these lines to your `.env.local`:

```env
# NextAuth Configuration
AUTH_SECRET=lSrXp667feB9iSqeLuG0Rp9JoWLJckzuZYvHaDpkeeU=
NEXTAUTH_URL=http://localhost:3000
```

### 3. Your complete `.env.local` should look like:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/booworks

# NextAuth Configuration
AUTH_SECRET=lSrXp667feB9iSqeLuG0Rp9JoWLJckzuZYvHaDpkeeU=
NEXTAUTH_URL=http://localhost:3000

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Restart your dev server:
- Press `Ctrl+C` to stop the current server
- Run: `npm run dev`

---

## 🎯 What This Fixes:

The error `MissingSecret: Please define a 'secret'` occurs because NextAuth needs a secret key to:
- Encrypt session tokens
- Sign JWT tokens
- Secure authentication cookies

The `AUTH_SECRET` we generated is a cryptographically secure random string that NextAuth will use for encryption.

---

## 📌 Important Notes:

1. **Keep this secret safe!** Never commit it to Git or share it publicly.
2. **For production**, generate a new secret using the same command.
3. **MongoDB**: Make sure your `MONGODB_URI` is correct (currently set to local MongoDB).

---

## 🔐 Admin Login Credentials (Hardcoded for Development):

- Email: `admin@booworks.com`
- Password: `admin123`

These are hardcoded in `src/auth.ts` for development purposes.

---

## ✅ After Adding the Secret:

Your application should start without errors and you'll be able to:
- Access the admin panel at `/admin`
- Login with the credentials above
- Manage bookings, contacts, and newsletter subscribers

---

**Need help?** If you still see errors after adding the secret, let me know!
