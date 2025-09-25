# Juxt Rx Website - Local Setup

## Backend (PHP + MySQL via phpMyAdmin)

1) Create database and tables
- Open phpMyAdmin → Import → select `public/api/setup.sql`.
- This creates DB `juxtrx_portal` and table `contacts`.
  - Also creates `communications` for inbound SMS/calls/WhatsApp/email logs.

2) Configure backend
- Edit `public/api/config.php` if needed:
  - `DB_HOST` (default 127.0.0.1)
  - `DB_NAME` (default juxtrx_portal)
  - `DB_USER` (default root)
  - `DB_PASS` (set your password if any)
  - `SITE_TO_EMAIL` (recipient of notifications)

3) Serve the site with PHP
```
php -S localhost:8088 -t public
```
The contact form posts to `/api/contact.php` and will:
- Insert into `juxtrx_portal.contacts`
- Send an email to `SITE_TO_EMAIL`

### SMS/WhatsApp/Calls (Optional Logging)
- Quick actions:
  - SMS: `sms:0777795985`
  - WhatsApp: `https://wa.me/254777795985`
- Provider webhook (optional): point your provider webhook URL to `/api/webhook.php` to log inbound messages/calls into `communications`.

## Frontend
- Vite dev: `npm run dev -- --port 5177`
- Build: `npm run build` then serve `public/` with PHP for backend endpoints.
- Netlify: set build to `npm run build` and publish dir to `dist`. Add env var `VITE_API_BASE` to the origin of your PHP API, e.g. `https://api.yourdomain.com`.

## Environment
- PHP 8+, extensions: pdo_mysql, mbstring
- MySQL/MariaDB accessible via phpMyAdmin

## Links wired
- Map open: Google Maps
- Instagram, Facebook: open in new tabs
- Phone/email: clickable via `tel:` and `mailto:`

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/69cae9d5-98d1-4618-be58-68d8ad3470ea

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/69cae9d5-98d1-4618-be58-68d8ad3470ea) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/69cae9d5-98d1-4618-be58-68d8ad3470ea) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
