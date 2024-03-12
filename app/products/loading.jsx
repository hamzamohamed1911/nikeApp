import Image from "next/image";
import { loaderIcon } from "../assets/icons";

export default function Loading() {

    return (
        <main className=" flex justify-center items-center text-2xl">
           <p >
                 <Image className='animate-spin h-5 w-5 mr-3' src={loaderIcon} alt='loaderIcon' />
                Loading  <span className="animate-ping"> . </span>  <span className="animate-ping"> . </span> <span className="animate-ping"> . </span>
                </p>
           
        </main>
    )
  }