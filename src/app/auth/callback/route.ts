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

    const {
      data,
    } = await supabase.auth.getUser();

    const { data: users } = await supabaseConfig
      .from("users")
      .select("id")
      .eq("id", data.user?.id)
      .maybeSingle();

    console.log("user")
    console.log(data)

    if (!users) {
      await supabaseConfig.from("users").insert({
        id: user?.id,
        username: user?.user_metadata.user_name,
        first_name: user?.user_metadata.full_name,
      });
    }
  }

  return NextResponse.redirect(new URL("/admin", request.url));
}
