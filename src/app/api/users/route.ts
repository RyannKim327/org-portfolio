import { supabaseConfig } from "@/lib/supabase"


const users = [
  {
    id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    username: "dev_architect",
    first_name: "John",
    last_name: "Doe",
    created_at: "Jul 01, 2026",
    role: "Admin",
  },
  {
    id: "b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e",
    username: "design_guru",
    first_name: "Sarah",
    last_name: "Smith",
    created_at: "Jul 02, 2026",
    role: "Moderator",
  },
  {
    id: "c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f",
    username: "code_ninja",
    first_name: "Alex",
    last_name: "Jones",
    created_at: "Jul 03, 2026",
    role: "Contributor",
  },
  {
    id: "d4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a",
    username: "cyber_sentinel",
    first_name: "Elena",
    last_name: "Rostova",
    created_at: "Jul 04, 2026",
    role: "Security Specialist",
  },
  {
    id: "e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b",
    username: "outsider_one",
    first_name: "Mike",
    last_name: "Brown",
    created_at: "Jul 05, 2026",
    role: "Outsider",
  },
];

export async function PUT(request: Request) {
  const body = await request.json()

  // TODO: To add an update for user information

  const { data, error } = await supabaseConfig
    .from("users")
    .update({
      first_name: body.first_name,
      last_name: body.last_name,
      bio: body.bio
    })

  return Response.json(data || error)
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = Object.fromEntries(searchParams.entries())

  return Response.json(users)

  const { data, error } = await supabaseConfig
    .from("users").select("username, first_name, last_name, created_at, roles(role)")

  return Response.json(data || error)
}

// export async function POST(request: Request) {
//   const body = await request.json()
//
//   return Response.json(body)
// }
