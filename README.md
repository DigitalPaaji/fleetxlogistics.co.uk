# FleetX Logistics Website

This repository contains the FleetX Logistics website frontend built with Next.js and the Sendmail backend built with Node.js and Express.

## 📁 Project Structure


fleetxlogistics.co.uk/
├── frontend/     # Next.js frontend
└── sendmail/     # Node.js email backend


## 🛠️ Prerequisites

Make sure the following are installed on your system:

- Node.js
- npm
- Git (optional)

## 🚀 1. Frontend Setup (Next.js)

### Step 1: Open the frontend folder

```bash
cd frontend
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Start the development server

```bash
npm run dev
```

The frontend will usually run at:

http://localhost:3000

Keep this terminal running while using the website locally.

## 📧 2. Backend Setup (Sendmail)

The Sendmail backend handles email submissions from the website.

### Step 1: Open a separate terminal

Navigate to the Sendmail folder from the project root:

```bash
cd sendmail
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Create the environment file

Inside the `sendmail` folder, create a file named `.env`.

Add the following configuration:

```env
PORT=8002
EMAIL=example@gmail.com
PASSKEY=your-email-app-password
```

**Environment variable details:**

| Variable | Description |
|---|---|
| `PORT` | Port on which the backend server runs |
| `EMAIL` | Email account used to send emails |
| `PASSKEY` | Email account's app password, if required by the provider |

Replace `example@gmail.com` with the email account you want to use and `your-email-app-password` with the appropriate app password.

**Important:** If you use Gmail, generate an App Password through your Google Account after enabling two-step verification. Do not use your regular Gmail password.

Never commit your actual `.env` file or email credentials to GitHub.

### Step 4: Start the backend server

```bash
npm start
```

The backend is configured to use port `8002`, provided the server code reads the `PORT` environment variable.

The `sendmail/package.json` file must contain the following start script:

```json
"scripts": {
  "start": "node server.js"
}
```

If a `scripts` section already exists, add the `start` entry without removing the existing scripts.

## 🔗 3. Running Both Services

Run the frontend and backend in **two separate terminals**.

**Terminal 1 — Frontend**

```bash
cd frontend
npm install
npm run dev
```

**Terminal 2 — Sendmail Backend**

```bash
cd sendmail
npm install
npm start
```

The frontend will usually be available at:

http://localhost:3000

The backend will use:

http://localhost:8002

## ⚙️ 4. Frontend and Backend Connection

The frontend sends email requests to the Sendmail backend.

Make sure the API URL configured in the frontend points to the correct backend address.

For local development, the backend URL may be:

```text
http://localhost:8002/sendmail
```

If the API URL is configured directly in the frontend code, update it there as required. If the project uses an environment variable, configure the variable name expected by the existing code.

For production deployment, use the appropriate live backend URL instead of `localhost`.

## 🔒 5. Environment Variables and Security

- Keep the `.env` file inside the `sendmail` folder.
- Never upload `.env` files containing credentials to GitHub.
- Do not share email passwords or app passwords publicly.
- Keep `.gitignore` configured to exclude environment files.
- Use a separate `.env` file on each development or production environment.

## 📝 Notes

- Run `npm install` separately inside `frontend` and `sendmail`.
- Keep both terminal sessions running during local development.
- The frontend uses `npm run dev`.
- The Sendmail backend uses `npm start`.
- Production deployment requires the appropriate server, domain, environment variables, and backend configuration.

---

**FleetX Logistics**  
Website frontend and email backend.
