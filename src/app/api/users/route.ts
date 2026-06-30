import { supabaseConfig } from "@/lib/supabase"


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = Object.fromEntries(searchParams.entries())

  const { data, error } = await supabaseConfig
    .from("users").select("*")

  return Response.json(data || error)
}

export async function POST(request: Request) {
  const body = await request.json()

  return Response.json(body)
}
