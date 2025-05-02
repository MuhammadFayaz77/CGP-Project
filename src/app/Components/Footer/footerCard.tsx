import Link from "next/link";
import Image from "next/image";
const FooterCard = ({
  heading,
  icon,

}: {
  heading: any;
  icon?: string;

}) => {
  return (
    <>
      <div className=" py-1 text-[#0000008C] ">
        <Link href="/dashboard">{heading}</Link>

       
      </div>
      
    </>
  );
};

export default FooterCard;
