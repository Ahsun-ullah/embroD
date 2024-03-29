"use client";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";

const RecentProductsSection = () => {
  return (
    <>
      <section className="bg-blue-50 text-black my-8 py-6">
        <div className="flex items-center justify-center">
          <h1 className="flex justify-center text-3xl font-bold">
            Recent Approved Products
          </h1>
        </div>

        <div className="flex items-center justify-center ">
          <h3 className="font-semibold">
            Design for every Budget & every Project.
          </h3>
        </div>
      </section>
      <section className=" text-black my-8 py-6">
        <div className="flex items-center justify-center">
          <div class="grid grid-cols-4 gap-10">
            <div className="bg-blue-50  border rounded-lg">
              <div className="p-4 flex items-center justify-center ">
                <Image
                  alt="Relaxing app background"
                  className="rounded-xl "
                  src="/logo.png"
                  height={200}
                  width={200}
                />
              </div>
              <Divider />
              <div className="flex-col border-default-600 dark:border-default-100 p-4">
                <div className="flex items-center justify-between gap-4 ">
                  <p className="text-black/90 font-medium text-sm">
                    Your checklist for better sleep
                  </p>

                  <Button
                    radius="full"
                    size="sm"
                    className="bg-black text-white"
                  >
                    Get App
                  </Button>
                </div>
                <div className="flex items-center justify-between ">
                  <p className="text-tiny text-black">
                    Get a good night sleep.
                  </p>
                  <i className="ri-heart-fill text-red-500"></i>
                </div>
              </div>
            </div>
            <div className="bg-blue-50  border">
              <div className="p-4 flex items-center justify-center">
                <Image
                  alt="Relaxing app background"
                  className="rounded-xl"
                  src="/logo.png"
                  height={200}
                  width={200}
                />
              </div>
              <Divider />
              <div className="flex-col border-default-600 dark:border-default-100 p-4">
                <div className="flex items-center justify-between gap-4 ">
                  <p className="text-black/90 font-medium text-sm">
                    Your checklist for better sleep
                  </p>

                  <Button radius="full" size="sm">
                    Get App
                  </Button>
                </div>
                <div className="flex items-center justify-between ">
                  <p className="text-tiny text-black/60">
                    Get a good night sleep.
                  </p>
                  <i className="ri-heart-fill text-red-500"></i>
                </div>
              </div>
            </div>
            <div className="bg-blue-50  border">
              <div className="p-4 flex items-center justify-center">
                <Image
                  alt="Relaxing app background"
                  className="rounded-xl"
                  src="/logo.png"
                  height={200}
                  width={200}
                />
              </div>
              <Divider />
              <div className="flex-col border-default-600 dark:border-default-100 p-4">
                <div className="flex items-center justify-between gap-4 ">
                  <p className="text-black/90 font-medium text-sm">
                    Your checklist for better sleep
                  </p>

                  <Button radius="full" size="sm">
                    Get App
                  </Button>
                </div>
                <div className="flex items-center justify-between ">
                  <p className="text-tiny text-black/60">
                    Get a good night sleep.
                  </p>
                  <i className="ri-heart-fill text-red-500"></i>
                </div>
              </div>
            </div>
            <div className="bg-blue-50  border">
              <div className="p-4 flex items-center justify-center">
                <Image
                  alt="Relaxing app background"
                  className="rounded-xl"
                  src="/logo.png"
                  height={200}
                  width={200}
                />
              </div>
              <Divider />
              <div className="flex-col border-default-600 dark:border-default-100 p-4">
                <div className="flex items-center justify-between gap-4 ">
                  <p className="text-black/90 font-medium text-sm">
                    Your checklist for better sleep
                  </p>

                  <Button radius="full" size="sm">
                    Get App
                  </Button>
                </div>
                <div className="flex items-center justify-between ">
                  <p className="text-tiny text-black/60">
                    Get a good night sleep.
                  </p>
                  <i className="ri-heart-fill text-red-500"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-14">
          <button className=" bg-black rounded-full hover:bg-blue-400 text-white font-medium px-6 p-2">
            View All
          </button>
        </div>
      </section>
    </>
  );
};

export default RecentProductsSection;
