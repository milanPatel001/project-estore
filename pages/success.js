import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

function Success() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto text-center">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5 mx-auto">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you. Your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We will send a confirmation once
            your item has shipped. If you would like to check the status of your
            order, please press the button below.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
