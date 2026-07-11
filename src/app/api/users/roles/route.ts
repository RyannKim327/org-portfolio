import { supabaseConfig } from "@/lib/supabase"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = Object.fromEntries(searchParams.entries())

  const role = query.roleId

  // TODO: To filter and verify that the parameters must be in numerical value
  const digit = /\d/gi

  if (!digit.test(query.limit)) {
    query.limit = "3"
  }

  if (!digit.test(query.page)) {
    query.page = "0"
  }

  // TODO: Converting string to numbers through parseInt
  const limit: number = parseInt(query.limit ?? "3")
  const index: number = parseInt(query.page ?? "0")

  if (role) {
    const { data, error } = await supabaseConfig
      .from("roles")
      .select("*")
      .eq("id", role)
      .single()
    return Response.json(data || error)
  }

  const { data, error } = await supabaseConfig
    .from("roles")
    .select("*")

  return Response.json(data || error)
}
