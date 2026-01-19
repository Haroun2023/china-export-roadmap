# KSA Import Roadmap

A comprehensive guide to importing electrical and plumbing materials from China to Saudi Arabia.

## Features
- **Compliance Roadmap**: Step-by-step guide to commercial registration, ZATCA, and SABER certification.
- **Verified Suppliers**: Curated list of Chinese manufacturers with Saudi export experience.
- **Market Analysis**: Insights into city-specific opportunities and logistics.
- **Budget Calculator**: Plan your import costs effectively.

## Deployment to GitHub Pages

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Steps to Deploy:

1. **Create a new repository** on GitHub.
2. **Push the code** to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site.

## Local Development

```bash
npm install
npm run dev
```

## Tech Stack
- React 19
- Vite
- Tailwind CSS
- Lucide React
- React Router
