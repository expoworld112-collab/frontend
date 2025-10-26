
// config.js

export const FRONTEND = process.env.FRONTEND || 'https://frontend-omega-eight-80.vercel.app/';
export const API = process.env.NEXT_PUBLIC_API || 'http://localhost:8000/api';
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const CALLBACK_URL = process.env.CALLBACK_URL || `${FRONTEND}/auth/google/callback`;

// 👇 Add these missing ones
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Coding4U';
export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || FRONTEND;
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Learn coding through interactive projects';
export const BACKEND = process.env.NEXT_PUBLIC_BACKEND || API;
