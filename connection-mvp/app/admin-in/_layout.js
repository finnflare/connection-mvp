import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { Slot, useRouter } from "expo-router";
import { getDoc, doc } from "firebase/firestore";

// This layout only allows authenticated users to access the admin-in folder

// This is listening for authentication
// If user is authenticated, user is allowed to proceed in this directory
// If user is unauthenticated, user is pushed back to index.js
export default function adminIn() {
  const route = useRouter();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        signOut(auth)
          .then(() => {})
          .catch((error) => {});
        route.push("");
      }
    });
    return unsubscribe;
  }, []);
  // adminV function to determine if user is a staff
  const adminV = async () => {
    getDocument("admin", auth.currentUser.uid).catch((error) => {
      signOut(auth)
        .then(() => {})
        .catch((error) => {});
      route.push("");
    });
  };
  // Returns a promise if user is a admin, rejection else
  async function getDocument(coll, id) {
    const snap = await getDoc(doc(db, coll, id));
    if (snap.exists()) {
      return snap.data();
    } else {
      return Promise.reject();
    }
  }
  // Calling the adminV function, which checks verification of a admin user
  adminV();
  // If user is authenticated, give access to the directory
  return <Slot />;
}
