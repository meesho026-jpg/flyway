# FlywaysGo setup — आसान हिंदी में

1. Supabase.com पर नया project बनाएं।
2. SQL Editor खोलकर `supabase/schema.sql` पूरा run करें।
3. Storage में `tickets` नाम का private bucket बनाएं (schema भी bucket बनाने की कोशिश करता है)।
4. Authentication > Users में अपना admin email/password बनाएं। उस user की UUID कॉपी करें।
5. `supabase/create-admin.sql` में UUID और email बदलकर SQL Editor में run करें।
6. `server/.env.example` की copy बनाकर उसका नाम `.env` रखें। Supabase URL, Service Role Key और Razorpay test keys भरें।
7. `client/.env.example` की copy बनाकर `.env` रखें। Supabase URL और anon key भरें।
8. Server चलाएं: `cd server`, `npm install`, `npm run dev`.
9. Client चलाएं: `cd client`, `npm install`, `npm run dev`.
10. Customer website `http://localhost:5173` पर खुलेगी। API `http://localhost:4000` पर चलेगी।

**ध्यान दें:** यह पूरा शुरुआती full-stack codebase है, लेकिन इसे बिना credentials, supplier inventory, policies, testing और production security review के live customers से पैसे लेने के लिए deploy न करें। पहले Razorpay test mode में end-to-end test करें। Demo flights असली flight inventory नहीं हैं।
