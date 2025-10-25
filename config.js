

export const FRONTEND = process.env.FRONTEND || 'https://coding4u-frontend.vercel.app';
export const API = process.env.NEXT_PUBLIC_API || 'http://localhost:8000/api';
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const CALLBACK_URL = process.env.CALLBACK_URL || `${FRONTEND}/auth/google/callback`;
