"use client"

import { useEffect, useState } from 'react';
import Admin from "@/components/admin/hero";
import { Button } from "@/components/ui/button";
import { supabaseConfig } from '@/lib/supabase-auth';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async () => {
    await supabaseConfig.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback"
      }
    })
  }

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabaseConfig.auth.getUser()
      if (user?.aud === "authenticated") {
        setIsAuthenticated(true)
      }
    })()
  }, [])

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
      </section >
    );
  }

  return (
    <>
      <Admin />
    </>
  );
}
