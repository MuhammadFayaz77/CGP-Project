import Link from "next/link";

const FooterCard = ({
  heading,

  ref
}: {
  heading: string;

  ref:string;

}) => {
  return (
    <>
      <div className=" py-1 text-[#0000008C] ">
        <Link href={ref}>{heading}</Link>

       
      </div>
      
    </>
  );
};

export default FooterCard;
