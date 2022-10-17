import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  const items = useSelector(selectItems);

  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center bg-blue-300 p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://www.citypng.com/public/uploads/small/11641478088tagdpoq6zwaxesese5terwvl9htvcstt5lfnif1ms5usrqgxrtd861nygtiaunjf4uwqtrs5o9pfaezbqoi9chloed3xsvkhjexp.png"
            width={120}
            height={60}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div onClick={() => router.push("/orders")} className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm ">
              Basket
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-3 p-2 pl-6 items-center text-white bg-cyan-500 text-sm">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Two</p>
        <p className="link">Three</p>
        <p className="link">Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link">Food & Grocery</p>
        <p className="link">Buy Again</p>
        <p className="link">EHH</p>
        <p className="link">MEHHHH</p>
      </div>
    </header>
  );
}

export default Header;
