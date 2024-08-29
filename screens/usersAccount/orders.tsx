"use client"


import Button from "@/components/button/button";
import ProfileLayout from "@/components/layout/profileLayout";
import Image from "next/image";




export default function OrdersPage() {



  return (
    <ProfileLayout>
      <div>
        <div className="pb-6 font-benz font-[700] text-[24px] lg:text-[32px]">Orders</div>
        <div className=" font-quicksand  lg:px-12 lg:pt-16 flex flex-col gap-8 lg:gap-0 items-center text-center" >
          <Image src="/menu/paws.svg" alt="paws" width={130} height={130} className=" lg:w-[130px] lg:h-[130px] w-[60px] h-[60px] " />
          <div className="font-[400] lg:text-[20px] text-[16px] lg:mt-8">
            <div className=" mb-6">Your cart is lonely! </div>
            <div>
              Your furry friend is waiting! Explore our collection and find something special for your pup.
            </div>
          </div>
          <div className=" flex justify-center  lg:mt-24 w-full">
            <div className="  w-[190px]">
              <Button  text="Start Shopping" />
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}
