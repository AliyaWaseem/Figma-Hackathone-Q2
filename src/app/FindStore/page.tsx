import { Button } from "@/components/ui/button";
import { SlMagnifier } from "react-icons/sl";
import { IoFilterSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const stores = [
  {
    name: "Nike NYC - House of Innovation 000",
    address1: "650 5th Ave.",
    address2: "New York, NY, 10019, US",
    status: "Closed",
    openingTime: "11:00 am",
  },
  {
    name: "Nike By Upper East Side",
    address1: "1131 3rd Ave.",
    address2: "New York, NY, 10065, US",
    status: "Closed",
    openingTime: "11:00 am",
  },
  {
    name: "Nike By Flatiron",
    address1: "156 Fifth Ave.",
    address2: "New York, NY, 10010, US",
    status: "Closed",
    openingTime: "11:00 am",
  },
];

export default function Location() {
  return (
    <main>
      <section className="flex flex-col lg:flex-row w-full h-full items-center p-5">
        {/* Left Sidebar */}
        <div className="bg-white w-full lg:w-[40%] xl:w-[40%] p-10 overflow-y-auto">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Find a Nike store</h2>

            {/* Search Input */}
            <div className="flex w-full p-2 gap-3 items-center border rounded">
              <SlMagnifier />
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Search Location"
                className="outline-none w-full"
              />
            </div>

            {/* Filter and Store Count */}
            <div className="flex items-center justify-between w-full">
              <p className="text-sm text-gray-700">
                {stores.length} stores near you
              </p>
              <Button
                variant="outline"
                className="rounded-full flex items-center gap-2"
              >
                <span>Filter</span>
                <IoFilterSharp />
              </Button>
            </div>

            {/* Store List */}
            {stores.map((store, index) => (
              <div key={index} className="flex flex-col gap-1 py-5 border-t">
                <h2 className="text-sm font-bold">{store.name}</h2>
                <p className="text-xs text-gray-600">{store.address1}</p>
                <p className="text-xs text-gray-600">{store.address2}</p>
                <p className="text-xs text-gray-600">
                  <span className="text-sm text-red-600">{store.status}</span> •
                  Opens at {store.openingTime}
                </p>
              </div>
            ))}

            {/* View All Stores Link */}
            <Link className="underline font-bold" href={"#"}>
              View all stores
            </Link>
          </div>
        </div>

        {/* Map Section */}

        <div className="container pl-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-full h-[100vh] md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48364.2728791736!2d-74.03047539229773!3d40.745151004000896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25850f765d139%3A0x14116d184569a3ef!2sNew%20York%2C%20NY%2010019%2C%20USA!5e0!3m2!1sen!2s!4v1735303310841!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.6)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">650 5th Ave, New York, NY, 10019, US.</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


