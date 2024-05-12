"use client";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Pagination from "../../../../components/Common/Pagination";
import Footer from "../../../../components/HomePage/Footer";
import Header from "../../../../components/HomePage/Header";

const CategoryProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPageData, setPerPageData] = useState(1);

  let objectsArray = [
    { name: "Chair", color: "Brown", material: "Wood" },
    { name: "Laptop", brand: "Dell", model: "XPS 13" },
    { fruit: "Apple", color: "Red", origin: "Washington" },
    { city: "Paris", country: "France", population: 2141000 },
    { name: "Book", genre: "Fantasy", author: "J.K. Rowling" },
  ];

  return (
    <>
      <Header />

      <div className="h-screen ">
        <section className=" text-black my-8 py-6 border-b-2 ">
          <div className="flex items-center justify-center ">
            <div class="grid grid-cols-4 gap-10 ">
              <div className="bg-white  border rounded-lg shadow-xl">
                <div className="p-6 flex items-center justify-center ">
                  <Link href={"/user/productDetails/jsf"}>
                    <Image
                      alt="Relaxing app background"
                      className="rounded-xl "
                      src="/logo.png"
                      height={200}
                      width={280}
                    />
                  </Link>
                </div>
                <Divider />
                <div className="flex-col border-default-600 dark:border-default-100 p-4">
                  <div className="flex items-center justify-between gap-4 ">
                    <p className="text-black/90 font-medium text-sm">
                      Your checklist for better sleep Your checklist
                    </p>

                    <Button
                      radius="full"
                      size="sm"
                      className="bg-black text-white text-lg"
                    >
                      Free
                    </Button>
                  </div>
                  <div className="flex items-center justify-between ">
                    <i className="ri-heart-fill text-red-500"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Pagination
              style={{
                position: "absolute",
                bottom: 0,
                right: 20,
              }}
              data={objectsArray}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              perPageData={perPageData}
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CategoryProducts;
