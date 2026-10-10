import express from 'express';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import dotenv from 'dotenv';

const root = fileURLToPath(new URL('./', import.meta.url));
dotenv.config({ path: path.join(root, '.env') });
const app = express();
app.disable('x-powered-by');
app.use((req, res, next) => {
  if (/^\/(api|admin|private|server)(\/|$)/i.test(req.path) || req.path.split('/').some(part => part.startsWith('.'))) return res.sendStatus(404);
  next();
});
app.use(express.static(path.join(root, 'dist'), { dotfiles: 'deny' }));
app.get('*', (_req, res) => res.sendFile(path.join(root, 'dist', 'index.html')));
const server = app.listen(Number(process.env.PORT || 3002), '0.0.0.0', () => console.log(`RetiBazaar server listening on port ${server.address().port}`));
