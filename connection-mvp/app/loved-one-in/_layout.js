import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Slot, useRouter } from "expo-router";

// This layout only allows authenticated users to access the lovedOneIn folder

// This is listening for authentication
// If user is authenticated, user is allowed to proceed in this directory
// If user is unauthenticated, user is pushed back to ikndex.js
export default function loveOneIn() {
  route = useRouter();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        route.push("");
      }
    });
    return unsubscribe;
  }, []);
  return <Slot />;
}
