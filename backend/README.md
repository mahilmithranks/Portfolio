# Email Service Setup - Nodemailer

## Backend Server Created ✓

The backend server is now set up with Nodemailer!

## Next Steps (Required)

### 1. Configure Email Credentials

Create a `.env` file in the `backend/` directory:

```bash
cd backend
cp .env.example .env
```

Then edit `.env` with your Gmail credentials:

```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=mahilmithranks@gmail.com
```

### 2. Get Gmail App Password

**Important**: Don't use your regular Gmail password!

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to **App Passwords**
4. Select **Mail** and generate a password
5. Copy the 16-character password to `.env` as `EMAIL_PASS`

### 3. Start the Backend Server

Open a new terminal and run:

```bash
cd backend
npm run dev
```

The server will start on `http://localhost:5000`

### 4. Test the Contact Form

1. Make sure both servers are running:
   - Frontend: `http://localhost:5173` (already running)
   - Backend: `http://localhost:5000` (start this)
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email!

## Troubleshooting

**"Failed to send message"**
- Make sure backend server is running
- Check `.env` credentials are correct
- Verify Gmail App Password is valid

**CORS errors**
- Backend already configured to accept requests from frontend

**Port already in use**
- Change `PORT` in backend `.env` file
- Update API URL in `Contact.jsx` if needed

## Files Created

- `backend/server.js` - Express server with Nodemailer
- `backend/.env.example` - Environment template
- Updated `frontend/src/components/Contact.jsx` - API integration
