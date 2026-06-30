import { supabaseConfig } from "@/lib/supabase"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = Object.fromEntries(searchParams.entries())

  const { data, error } = await supabaseConfig.from("users").select("roles(role)").eq("id", query.id)

  return Response.json(data?.[0].roles || error)
}
