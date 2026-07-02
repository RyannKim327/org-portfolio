"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { supabaseConfig } from '@/lib/supabase-auth';
import { motion } from "framer-motion";
import SidebarHeader from "@/components/ui/sidebar-header";


const sidebar = [
  {
    label: "Home",
    href: ""
  },
  {
    label: "Events",
    href: "events"
  }
]

export default function Admin(
  { children }: { children: React.ReactNode }
) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = async () => {
    await supabaseConfig.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback"
      }
    })
  }

  // useEffect(() => {
  //   (async () => {
  //     const { data: { user } } = await supabaseConfig.auth.getUser()
  //     if (user?.aud === "authenticated") {
  //       setIsAuthenticated(true)
  //     }
  //   })()
  // }, [])

  if (!isAuthenticated) {
    return (
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        <Button
          variant="outline"
          size="md"
          className="w-full max-w-xs mt-6"
          onClick={login}
        >
          Login using Github
        </Button>
      </section>
    );
  }

  const path = usePathname().toLowerCase()

  const username = "0x3ef8"
  const role = "Administrator"

  return (
    <section
      className="flex flex-row relative h-screen w-full gap-2 items-start justify-start overflow-hidden pt-22"
    >
      <div className="flex flex-col w-[calc(25%-0.5rem)] h-full border-r border-white border-solid gap-3">
        <div className="flex relative w-full h-[calc(25%-0.5rem)] bg-[#0a0a0a]">
          {/* Header Part */}
          <SidebarHeader />
          <div className="flex flex-col absolute w-full h-full px-5 py-4">
            <span className={`${username.length <= 25 ? "text-lg" : ""} text-wrap`}>{username}</span>
            <span className={`${role.length <= 10 ? "text-sm" : "text-xs"}`}>{role}</span>
          </div>
        </div>
        <div
          className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-900 outline-none">
          {
            sidebar.map((component) => {
              return (
                <Link className="flex px-2 py gap-2 outline-none hover:bg-[#0a0a0a] transition-all ease-in-out" href={`/admin/${component.href}`} key={component.href}>
                  <span className={`${path === `/admin${component.href ? "/" : ""}${component.href}` ? "opacity-100" : "opacity-0"} transition-all ease-in-out`}>
                    *
                  </span>
                  <span>{component.label}</span>
                </Link>
              )
            })
          }
        </div>
      </div>
      <div className="w-full h-full">
        {children}
      </div>
    </section >
  )
}
