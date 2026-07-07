import { supabaseConfig } from "@/lib/supabase"

// TODO: This is just a temporary data to handle
const projects = [
  {
    name: "Sample",
    type: "Web",
    contributors: ["tinapay", "RyannKim327", "Mra1ko"],
    created_at: "Jan 1, 2026",
    last_update: "Jul 7, 2026"
  },
  {
    name: "iNotify",
    type: "Mobile",
    contributors: ["mjason", "RyannKim327", "Mra1ko"],
    created_at: "Jan 1, 2026",
    last_update: "Jul 7, 2026"
  },
  {
    name: "Pentest",
    type: "Cyber Security",
    contributors: ["tinapay", "RyannKim327", "jampol"],
    created_at: "Jan 1, 2026",
    last_update: "Jul 7, 2026"
  },
  {
    name: "Start to Contrib",
    type: "Utilities",
    contributors: ["tinapay", "RyannKim327", "Mra1ko", "hellolord"],
    created_at: "Jan 1, 2026",
    last_update: "Jul 7, 2026"
  }
]


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = Object.fromEntries(searchParams.entries())

  // TODO: To filter and verify that the parameters must be in numerical value
  const digit = /\d/gi

  if (!digit.test(query.limit)) {
    query.limit = "6"
  }

  if (!digit.test(query.page)) {
    query.page = "0"
  }

  // TODO: Converting string to numbers through parseInt
  const limit: number = parseInt(query.limit ?? "6")
  const index: number = parseInt(query.page ?? "0")

  return Response.json(projects)

  const { data, error } = await supabaseConfig
    .from("projects")
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
