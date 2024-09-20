//links
import Link from "next/link";

//icons
import {
  RiLinkedinBoxFill,
  RiInstagramLine,
  RiGithubFill,
  RiPinterestLine,
} from "react-icons/ri";

import { IoLogoVercel, IoMail, IoLogoWhatsapp } from "react-icons/io5";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/prathamjain340"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://github.com/prathamjain340"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.instagram.com/_prattham_/  "}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://vercel.com/prathams-projects-0d9acc06"}
        className="hover:text-accent transition-all duration-300"
      >
        <IoLogoVercel />
      </Link>
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <IoMail />
      </Link> */}
      <Link
        href={"https://wa.me/9968486018"}
        className="hover:text-accent transition-all duration-300"
      >
        <IoLogoWhatsapp />
      </Link>
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link> */}
    </div>
  );
};

export default Socials;
