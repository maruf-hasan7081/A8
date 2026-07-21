# দ্রুত রান করার নিয়ম

## ১. ফোল্ডার ওপেন করুন

PowerShell বা CMD-তে:

```powershell
cd "আপনার-ফোল্ডার-পাথ\leaf-and-lore"
```

## ২. প্যাকেজ ইনস্টল করুন

```powershell
npm install
```

## ৩. Environment file বানান

```powershell
Copy-Item .env.example .env.local
```

তারপর `.env.local` ফাইলে MongoDB Atlas URI, Better Auth secret, Google Client ID এবং Client Secret বসান।

## ৪. Google callback URL

Local callback:

```text
http://localhost:3000/api/auth/callback/google
```

Vercel callback:

```text
https://আপনার-ডোমেইন.vercel.app/api/auth/callback/google
```

## ৫. Run করুন

```powershell
npm run dev
```

Browser-এ খুলুন:

```text
http://localhost:3000
```

## ৬. Final check

```powershell
npm run typecheck
npm run lint
npm run build
```

`run-dev.bat` ডাবল-ক্লিক করেও install ও run করা যাবে। তবে authentication কাজ করার জন্য `.env.local` ঠিকভাবে পূরণ করতে হবে।
