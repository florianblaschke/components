import { cn } from "../lib/utils";
import * as React from "react";
import { buttonVariants } from "./Button";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXing } from "react-icons/fa";

type SocialPlatform = "facebook" | "twitter" | "youtube" | "xing" | "linkedin";

type SocialIcon = Record<SocialPlatform, JSX.Element>;

const icons: { default: SocialIcon; invert: SocialIcon } = {
  default: {
    facebook: <FaFacebookF color="#4267B2" size={30} />,
    twitter: <BsTwitterX color="black" size={25} />,
    linkedin: <FaLinkedinIn color="#0077b5" size={25} />,
    xing: <FaXing color="#126567" size={30} />,
    youtube: <FaYoutube color="#FF0000" size={30} />,
  },
  invert: {
    facebook: <FaFacebookF color="white" size={30} />,
    twitter: <BsTwitterX color="white" size={25} />,
    linkedin: <FaLinkedinIn color="white" size={25} />,
    xing: <FaXing color="white" size={30} />,
    youtube: <FaYoutube color="white" size={30} />,
  },
};

export const SocialLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    social?: SocialPlatform;
    invert?: boolean;
  }
>(({ className, target = "_blank", social, invert, href, ...props }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      rel="noreferrer"
      className={cn(
        buttonVariants({
          variant: "social",
          size: "social",
          backgroundColor: social && invert ? social : "default",
        }),
        className,
      )}
      target={target}
      {...props}
    >
      {social && invert && icons.invert[social]}
      {social && !invert && icons.default[social]}
      {props.children}
    </a>
  );
});

SocialLink.displayName = "SocialLink";
