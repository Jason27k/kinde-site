"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const signedIn = await isAuthenticated();
  if (!signedIn) {
    redirect("/login");
  }
  return <div>Profile</div>;
};

export default Profile;
