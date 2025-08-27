import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const initFirebaseAdmin = () => {
  const apps = getApps();
  if (!apps.length) {
    const rawKey = process.env.FIREBASE_PRIVATE_KEY || "";
    const privateKey = rawKey.replace(/\\n/g, "\n").trim();

    console.log("DEBUG first line:", privateKey.split("\n")[0]);
    console.log("DEBUG last line:", privateKey.split("\n").slice(-1)[0]);

    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey,
      }),
    });
  }
  return {
    auth: getAuth(),
    db: getFirestore(),
  };
};

export const { auth, db } = initFirebaseAdmin();
