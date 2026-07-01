import { supabaseConfig } from "@/lib/supabase";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (code) {
    const cookieStore = await cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );

    const err = await supabase.auth.exchangeCodeForSession(code);

    console.log(err.error);

    const {
      data,
      error
    } = await supabase.auth.getUser();

    const { data: users } = await supabaseConfig
      .from("users")
      .select("id")
      .eq("id", data.user?.id)
      .maybeSingle();


    if (!users) {
      await supabaseConfig.from("users").insert({
        id: data?.user?.id,
        username: data?.user?.user_metadata.user_name,
        first_name: data?.user?.user_metadata.full_name,
      });
    }
  }

  return NextResponse.redirect(new URL("/admin", request.url));
}
