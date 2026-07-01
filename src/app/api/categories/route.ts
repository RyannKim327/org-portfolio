// TODO: To setup dummy data for api call
import { supabaseConfig } from "@/lib/supabase";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = Object.fromEntries(searchParams.entries())

  // TODO: To filter and verify that the parameters must be in numerical value
  const digit = /\d/gi

  if (!digit.test(query.limit)) {
    query.limit = "3"
  }

  if (!digit.test(query.page)) {
    query.page = "0"
  }

  // TODO: Converting string to numbers through parseInt
  const limit: number = parseInt(query.limit ?? "10")
  const index: number = parseInt(query.page ?? "0")

  const { data, error } = await supabaseConfig
    .from("categories")
    .select("*")
    .range(index + limit, limit)

  return Response.json(data || error)
}

export async function POST(request: Request) {
  const body = await request.json()

  return Response.json({
    test: body
  })
}
