# Leaf & Lore — Online Book Borrowing Platform

Leaf & Lore is a responsive online library built for the **Category A8 (Mango)** assignment. It lets readers browse a curated collection, search by title, filter by category, open protected book-details pages, borrow a book with confirmation feedback, authenticate with Better Auth, and update their profile.

## Project links

- **Live URL:** `https://your-project-name.vercel.app` *(replace after deployment)*
- **GitHub repository:** `https://github.com/your-username/leaf-and-lore` *(replace after pushing)*

## Key features

- Responsive header with Home, All Books, and My Profile navigation
- Conditional Login / user name / Logout controls
- Custom footer with social links and Contact Us information
- Home banner with **Find Your Next Read** and Browse Now CTA
- Animated new-arrivals marquee
- Four featured books loaded from local server data
- Two+ custom home sections: category discovery, Swiper testimonials, and borrowing steps
- 12 books using the required JSON fields
- Email/password registration and login with Better Auth
- Google social login
- No email verification or forgot-password flow
- Search books by title
- Functional Story / Tech / Science category sidebar
- Private single-book details route
- Borrow confirmation toast
- Private profile page showing available user information
- Profile update route for name and image using `authClient.updateUser()`
- Optimistic route protection through Next.js 16 `proxy.js`, plus full server-session validation
- Error, loading, and not-found states
- Mobile, tablet, and desktop layouts

## Tech stack

- Next.js 16 (App Router)
- React 19 + JavaScript
- JavaScript-only source (`.js` and `.jsx`); no TypeScript configuration
- Tailwind CSS 4
- daisyUI 5
- Better Auth
- MongoDB
- Swiper.js
- React Hot Toast
- Lucide React

## npm packages used

| Package | Purpose |
|---|---|
| `next`, `react`, `react-dom` | Application framework and UI |
| `better-auth` | Authentication, sessions, user update |
| `@better-auth/mongo-adapter` | Better Auth MongoDB support |
| `mongodb` | MongoDB driver |
| `tailwindcss`, `@tailwindcss/postcss` | Utility-first styling |
| `daisyui` | UI component classes |
| `swiper` | Responsive testimonial slider |
| `react-hot-toast` | Success and error notifications |
| `lucide-react` | Interface icons |

## Run locally

### 1. Requirements

- Node.js 20.9 or newer
- npm
- MongoDB Atlas database or a local MongoDB server
- Google OAuth credentials for Google login

### 2. Install

```bash
npm install
```

Windows users can double-click `run-dev.bat`; it installs dependencies and creates `.env.local` when missing.

### 3. Configure environment variables

Copy the example file:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Fill in `.env.local`:

```env
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/leaf-and-lore
MONGODB_DB_NAME=leaf_and_lore
BETTER_AUTH_SECRET=your-long-random-secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

Generate a Better Auth secret:

```bash
npx auth@latest secret
```

### 4. Configure Google OAuth

Create an OAuth 2.0 **Web application** in Google Cloud Console and add these Authorized redirect URIs:

```text
http://localhost:3000/api/auth/callback/google
https://your-project-name.vercel.app/api/auth/callback/google
```

### 5. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Validation commands

```bash
npm run verify:data
npm run lint
npm run build
npm audit --omit=dev
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. Add all values from `.env.local` to **Vercel → Project Settings → Environment Variables**.
4. Change `BETTER_AUTH_URL` to the production URL.
5. Add the production Google callback URL.
6. Redeploy.

Next.js App Router handles direct route reloads, so protected and dynamic routes do not require SPA rewrite rules.

## Data structure

Every book follows the assignment structure:

```json
{
  "id": "book-id",
  "title": "Book title",
  "author": "Author name",
  "description": "Book description",
  "category": "Story",
  "available_quantity": 5,
  "image_url": "https://example.com/cover.jpg"
}
```

## Meaningful commit history

The included Git repository contains more than 10 descriptive commits. Verify with:

```bash
git log --oneline
```

## Important notes

- Replace the placeholder GitHub and live URLs before submission.
- MongoDB and Google OAuth credentials are intentionally excluded from source control.
- Do not commit `.env.local`.
- Before submission, replace the placeholder GitHub and live URLs and test email login, Google login, profile update, and logout against the deployed MongoDB-backed application.
