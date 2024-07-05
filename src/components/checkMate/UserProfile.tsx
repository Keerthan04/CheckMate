'use client'
import { auth } from "@/auth";
import { useSession } from "next-auth/react";//is a client side
import Image from "next/image";
import React from "react";

export default function UserProfile() {
  const session = useSession();
  return (
    <div>
      <Image
        src={session?.data?.user?.image!}
        width={24}
        height={24}
        alt="User Profile Picture"
        className="rounded-full"
      />
    </div>
  );
}
