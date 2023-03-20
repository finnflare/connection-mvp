import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { Slot, useRouter } from "expo-router";
import { getDoc, doc } from "firebase/firestore";

// This layout only allows authenticated users to access the staff-in folder

// This is listening for authentication
// If user is authenticated, user is allowed to proceed in this directory
// If user is unauthenticated, user is pushed back to index.js
export default function staffIn() {
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
  // staffV function to determine if user is a staff
  const staffV = async () => {
    getDocument("staff", auth.currentUser.uid).catch((error) => {
      signOut(auth)
        .then(() => {})
        .catch((error) => {});
      route.push("");
    });
  };
  // Returns a promise if user is a staff, rejection else
  async function getDocument(coll, id) {
    const snap = await getDoc(doc(db, coll, id));
    if (snap.exists()) {
      return snap.data();
    } else {
      return Promise.reject();
    }
  }
  // Calling the staffV function, which checks verification of a staff user
  staffV();
  // If user is authenticated, give access to the directory
  return <Slot />;
}
