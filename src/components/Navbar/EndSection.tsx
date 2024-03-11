import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "../ui/button";

const EndSection = () => {
  return (
    <div className="flex justify-center gap-2">
      <Button asChild variant="ghost">
        <LoginLink postLoginRedirectURL="/home">Log In</LoginLink>
      </Button>
      <Button asChild>
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  );
};

export default EndSection;
