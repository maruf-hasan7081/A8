# দ্রুত রান করার নিয়ম

## ১. ফোল্ডার ওপেন করুন

PowerShell বা CMD-তে:

```powershell
cd "আপনার-ফোল্ডার-পাথ\leaf-and-lore"
```

## ২. প্যাকেজ ইনস্টল করুন

CMD বা PowerShell—দুই জায়গাতেই নিচের standard command ব্যবহার করুন:

```cmd
npm install
```

`npm ci` দেওয়ার প্রয়োজন নেই।

## ৩. Environment file বানান

CMD-তে:

```cmd
copy .env.example .env.local
```

PowerShell-এ:

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

## ৬. Production build ও final check

```cmd
npm run lint
npm run build
```

Build সফল হলে শেষে route list দেখাবে। Production build চালাতে `npm run build`-ই যথেষ্ট।

`run-dev.bat` ডাবল-ক্লিক করেও install ও run করা যাবে। তবে authentication কাজ করার জন্য `.env.local` ঠিকভাবে পূরণ করতে হবে।
