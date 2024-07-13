import {
  SignIn,
  SignInButton,
  SignUp,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

import React from "react";

export default function Auth() {
  return (
    <div>
      <SignedOut>
        <SignUpButton mode="modal" /> <SignInButton mode="modal" />
        {/* <SignUp /> <SignIn /> */}
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
