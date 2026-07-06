import { supabaseConfig } from "@/lib/supabase"

export async function PUT(request: Request) {
  const body = await request.json()

  // TODO: To add an update for user information

  return Response.json({
    message: "Test"
  })
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = Object.fromEntries(searchParams.entries())

  const { data, error } = await supabaseConfig
    .from("users").select("username, first_name, last_name, created_at, roles(role)")

  return Response.json(data || error)
}

// export async function POST(request: Request) {
//   const body = await request.json()
//
//   return Response.json(body)
// }
