import Image from "next/image";
import { loaderIcon } from "./assets/icons";

export default function Loading() {
  return (
    <main className="h-screen flex items-center justify-center">
  
        <Image
          src={loaderIcon}
          alt="Loader Icon"
          width={40}
          height={40}
          className="animate-spin"
        />

    </main>
  );
}
