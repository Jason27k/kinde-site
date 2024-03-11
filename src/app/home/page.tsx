"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
const HomeSignedIn = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const signedIn = await isAuthenticated();
  if (!signedIn) {
    redirect("/login");
  }

  return <div className="">HI THERE</div>;
};

export default HomeSignedIn;
