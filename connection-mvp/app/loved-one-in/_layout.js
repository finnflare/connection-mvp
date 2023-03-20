import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { Tabs, useRouter } from "expo-router";
import { getDoc, doc } from "firebase/firestore";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

// This layout only allows authenticated users to access the loved-one-in folder

// This is listening for authentication
// If user is authenticated, user is allowed to proceed in this directory
// If user is unauthenticated, user is pushed back to index.js
export default function lovedOneIn() {
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
  // loveV function to determine if user is a loved one
  const loveV = async () => {
    getDocument("loved-one", auth.currentUser.uid).catch((error) => {
      signOut(auth)
        .then(() => {})
        .catch((error) => {});
      route.push("");
    });
  };
  // Returns a promise if user is a loved one, rejection else
  async function getDocument(coll, id) {
    const snap = await getDoc(doc(db, coll, id));
    if (snap.exists()) {
      return snap.data();
    } else {
      return Promise.reject();
    }
  }
  // Calling the loveV function, which checks verification of a loved one user
  loveV();
  // If user is authenticated, give access to the directory
  // Also organize the directory with a tab navigator and exit button on initial page
  return (
    <Tabs
      initialRouteName="loved-one-home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#cc5500",
      }}
    >
      <Tabs.Screen
        name="loved-one-home"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
          title: "Home",
          headerLeft: () => (
            <Ionicons
              name="exit"
              size={24}
              color="black"
              left={15}
              onPress={() => {
                signOut(auth)
                  .then(() => {})
                  .catch((error) => {});
                route.push("");
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
