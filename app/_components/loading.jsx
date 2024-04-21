import Image from "next/image";
import { loaderIcon } from "../assets/icons";

const Loader = () => {
  return (
    <main className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="font-bold text-4xl mb-4 text-black">Welcome</h1>
        <div className="w-24 h-24 mx-auto mb-6">
          <Image
            src={loaderIcon}
            alt="Loader Icon"
            width={70}
            height={70}
            className="animate-spin"
          />
        </div>
        <p className="text-gray-700 text-lg">Loading...</p>
        <p className="text-gray-700 text-lg mt-2">Please wait while we prepare something amazing for you.</p>
      </div>
    </main>
  );
}

export default Loader;
