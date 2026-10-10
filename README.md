# RetiBazaar Website

Static Vercel package for the standalone RetiBazaar public website.

## Push To Remote

After the empty remote repository is created, run:

```bash
git remote add origin <RETIBAZAAR_REPOSITORY_URL>
git push -u origin main
```

## Vercel

Import this repository into its own Vercel project. The included `vercel.json`
uses `npm run build`, outputs `dist`, and rewrites all routes to `index.html`.
