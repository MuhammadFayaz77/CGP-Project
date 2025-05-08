import Link from "next/link";

const FooterCard = ({
  heading,

  href
}: {
  heading: string;

  href?:string;

}) => {
  return (
    <>
      <div className=" py-1 text-[#0000008C] ">
        <Link href={href}>{heading}</Link>

       
      </div>
      
    </>
  );
};

export default FooterCard;
