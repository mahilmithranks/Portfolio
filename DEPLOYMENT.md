# Deploying to Vercel

## Prerequisites
- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Your code pushed to a GitHub repository

## Step 1: Push to GitHub

If you haven't already, push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Add Environment Variable:
   - Click **"Environment Variables"**
   - Add: `VITE_WEB3FORMS_ACCESS_KEY` = `b3514c8e-41a7-405e-9274-8197fe8a4f25`

6. Click **"Deploy"**

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to frontend folder
cd frontend

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? mahil-portfolio (or your choice)
# - Directory? ./
# - Override settings? Yes
#   - Build Command: npm run build
#   - Output Directory: dist
#   - Development Command: npm run dev
```

## Step 3: Add Environment Variables (CLI Method)

```bash
# Add environment variable
vercel env add VITE_WEB3FORMS_ACCESS_KEY

# When prompted, enter: b3514c8e-41a7-405e-9274-8197fe8a4f25
# Select: Production, Preview, Development
```

## Step 4: Redeploy

```bash
vercel --prod
```

## Important Notes

### Environment Variables
Make sure the Web3Forms access key is set in Vercel:
- Variable name: `VITE_WEB3FORMS_ACCESS_KEY`
- Value: `b3514c8e-41a7-405e-9274-8197fe8a4f25`

### Build Configuration
Your `vercel.json` should be in the `frontend` folder (if needed):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install"
}
```

### Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `VITE_WEB3FORMS_ACCESS_KEY` is set
- Check build logs in Vercel dashboard

### Contact Form Not Working
- Verify environment variable is set correctly
- Check Web3Forms dashboard for API key status
- Test locally first with `npm run build && npm run preview`

### Images Not Loading
- Ensure all images are in the `public` folder
- Use absolute paths starting with `/` (e.g., `/logo.png`)

## Post-Deployment Checklist

✅ Site loads correctly  
✅ All sections visible (Hero, Skills, Projects, Contact, Footer)  
✅ Logo appears in top-left corner  
✅ Favicon shows in browser tab  
✅ Navbar navigation works  
✅ Contact form sends emails successfully  
✅ Toast notifications appear  
✅ Glassmorphism effects render properly  
✅ Responsive on mobile devices  

## Your Live URL

After deployment, Vercel will provide a URL like:
- `https://your-project-name.vercel.app`

You can also set up a custom domain in the Vercel dashboard.

---

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
