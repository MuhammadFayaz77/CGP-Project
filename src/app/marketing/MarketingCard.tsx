import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
const CustomerExperienceCard = ({
  image,

  name,
 
  comment,
}: {
  image: any;

  name: string;
 
  comment: string;
}) => {
    const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
     
      <div className="flex flex-col  lg:flex-row md:flex-col bg-[#FFFFFF]  rounded-lg  border   ">
  <div className="w-full  md:w-auto ">
    <Image
      src={image}
      width={100}
      height={100}
      alt="Picture of the author"
      className="w-full md:h-full object-cover rounded-t-lg md:rounded-l-lg  md:rounded-tr-none"
    />
  </div>
  <div className="p-4 flex-1">
    <a href="#" className="text-xs text-black dark:text-gray-400">{formattedDate}</a>
    <a href="#">
      <h5 className="mb-2 text-lg font-bold tracking-tight text-black ">
        {name}
      </h5>
    </a>
    <p className=" lg:text-[11px] text-[10px] text-black dark:text-gray-400">
        {comment}
    </p>
  </div>
</div>

    </>
  );
};

export default CustomerExperienceCard;
