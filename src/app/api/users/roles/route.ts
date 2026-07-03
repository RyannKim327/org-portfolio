import { supabaseConfig } from "@/lib/supabase"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = Object.fromEntries(searchParams.entries())

  const { data, error } = await supabaseConfig.from("users").select("roles(role)").eq("id", query.id)


  // TODO: To filter and verify that the parameters must be in numerical value
  const digit = /\d/gi

  if (!digit.test(query.limit)) {
    query.limit = "3"
  }

  if (!digit.test(query.start)) {
    query.start = "0"
  }

  // TODO: Converting string to numbers through parseInt
  const limit: number = parseInt(query.limit ?? "3")
  const index: number = parseInt(query.start ?? "0")

  return Response.json(data?.[0].roles || error)
}
