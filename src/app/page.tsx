
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen flex justify-center items-center text-xl md:text-4xl lg:text-7xl  ">
    <div className="shadow-blue-300 shadow-2xs   flex justify-center items-center gap-3 flex-col rounded-2xl w-[40%] py-3" >
     <h1>  خوش اومدی </h1>
       <Link className=" bg-red-300 text-white px-3 py-2 rounded-2xl hover:bg-blue-500" href={'/register'}>
          ثبت نام
       </Link>
    </div>
    </div>
  );
}
