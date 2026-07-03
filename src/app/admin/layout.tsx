"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { supabaseConfig } from '@/lib/supabase-auth';
import { AdminSidebar } from "@/lib/admin-sidebar"
import SidebarHeader from "@/components/ui/sidebar-header";

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

  const username = "thekeylangtinapay"
  const roles = [
    "all",
  ]
  const role = "Tambay"

  return (
    <section
      className="flex flex-row relative h-screen w-full items-start justify-start overflow-hidden pt-22"
    >
      <div className="hidden md:flex flex-col bg-background w-[calc(30%-0.5rem)] h-full border-r border-white border-solid gap-3 overflow-hidden">
        <div className="flex relative w-full h-[calc(25%-0.5rem)] bg-[#0a0a0a]">
          {/* Header Part */}
          <SidebarHeader />
          <div className={`flex flex-col absolute w-full h-full ${username.length <= 30 ? "px-5 py-4" : "px-3 py-2"} wrap-anywhere`}>
            <span className={`text-lg`}>@{username.substring(0, 20)} {username.length > 20 ? "..." : ""}</span>
            <span className={`pl-5 ${role.length <= 10 ? "text-sm" : "text-xs"}`}>{role}</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col justify-between h-[calc(70%-0.5rem)] w-full select-none">
          <div
            className="flex flex-col overflow-hidden overflow-y-auto scrollbar-thin w-full scrollbar-track-transparent scrollbar-thumb-brand outline-none">
            {
              AdminSidebar.map((component) => {
                return (
                  roles.includes(component.href.toLowerCase()) || roles.includes("all") || component.all ?
                    <Link className="flex items-center px-2 py gap-2 outline-none hover:bg-[#0a0a0a] transition-all ease-in-out" href={`/admin/${component.href}`} key={component.href}>
                      <span className={`relative text-brand ${path === `/admin${component.href ? "/" : ""}${component.href}` ? "left-0 animate-pulse" : "-left-100"} transition-all ease-in-out delay-150`}>
                        &gt;_
                      </span>
                      <span>{component.label}</span>
                    </Link>
                    : null
                )
              })
            }
          </div>

          {/* Footer part */}
          <Link
            className="text-red-400 px-2 py-3 outline-none"
            href="">
            <span className="text-transparent">&gt;_ </span>
            <span>Logout</span>
          </Link>
        </div>
      </div>
      <div className="w-full h-full px-2 overflow-hidden">
        {
          roles.includes(path.substring(1).split("/")[1])
            || /\/admin$/.test(path)
            || roles.includes("all")
            ?
            children
            :
            <div className="flex items-center justify-center w-full h-full">
              <span className="text-lg">
                <strong>403</strong> | Unauthorized Access
              </span>
            </div>
        }
      </div>
    </section>
  )
}
