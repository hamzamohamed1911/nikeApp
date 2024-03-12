import Image from "next/image";
import { loaderIcon } from "../assets/icons";

export default function Loading() {

    return (
        <main className=" flex justify-center items-center">
           <p >
                 <Image className='animate-spin h-5 w-5 mr-3' src={loaderIcon} alt='loaderIcon' />
                Loading ...
                </p>
           
        </main>
    )
  }