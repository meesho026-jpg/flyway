# FLYWAYSGO — Manual Flight Booking Platform

A full-stack starter for a manual ticket-issuing business. Customers submit flight requests and pay; an administrator independently arranges and issues the ticket by uploading the confirmed PDF.

## Stack
- Customer/admin UI: React + Vite
- API: Node.js + Express
- Database/auth/storage: Supabase
- Payments: Razorpay Orders + server-side signature verification + webhook

## Important operating rules
- This project does **not** connect to an airline/GDS inventory feed. Admin-managed flights are demo/manual listings unless you connect an authorized supplier.
- Sample flights are explicitly marked `DEMO`. Never advertise demo schedules/fares as live inventory.
- A selected seat is a preference only, not an airline seat reservation.
- Payment success does not mean a ticket is issued. Only an admin-uploaded ticket changes the booking to `TICKET_ISSUED`.
- Configure genuine reference fares and selling prices. The API calculates coupon discounts from the configured fare; it does not invent savings.
- Before taking real payments, complete Razorpay business/KYC setup, privacy/terms/refund policies, supplier arrangements, security review, and production deployment.

## Setup
1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase/schema.sql`.
3. Create a private Storage bucket named `tickets`.
4. Copy `.env.example` to `server/.env` and fill in Supabase URL, service role key, Razorpay keys, webhook secret, and frontend URL.
5. Create the first admin using Supabase Auth (Dashboard > Authentication > Users), then run the SQL in `supabase/create-admin.sql` with that user's UUID and your email.
6. Install and run:
   ```bash
   cd server && npm install && npm run dev
   ```
   In another terminal:
   ```bash
   cd client && npm install && npm run dev
   ```
7. Open `http://localhost:5173`.

## Razorpay webhook
Set the webhook URL to `https://YOUR_API_DOMAIN/api/payments/webhook`, subscribe to `payment.captured` and `payment.failed`, and configure the exact webhook secret in `RAZORPAY_WEBHOOK_SECRET`. The webhook verifies the raw request body signature.

## Production notes
- Serve API over HTTPS.
- Keep `SUPABASE_SERVICE_ROLE_KEY`, Razorpay secret and webhook secret only on the server.
- Set restrictive CORS, rate limits, logging/monitoring, database backups and retention rules.
- Configure Supabase Auth email confirmation and strong admin MFA.
- Review and test RLS policies with separate customer/admin accounts.
- Add a real supplier feed or maintain only verified listings.
- Configure email/WhatsApp provider before promising notifications.
- Refunds are initiated through the Razorpay dashboard in this starter; record reconciled refunds in the admin UI/database. Do not treat a refund request as completed until gateway confirmation.
