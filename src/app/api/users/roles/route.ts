import { supabaseConfig } from "@/lib/supabase"

import { rolesProperties } from "@/interfaces"

const roles: rolesProperties[] = [
  {
    id: "admin123",
    role: "Administrator",
    permissions: ["all"]
  },
  {
    id: "mod",
    role: "Moderator",
    permissions: [
      "users",
      "events",
      "projects",
      "testimonials"
    ]
  },
  {
    id: "outsider",
    role: "Outsider",
    permissions: [
      "projects",
      "testimonials"
    ]
  },
  {
    id: "sekyu",
    role: "Security Analyst",
    permissions: [
      "projects",
      "testimonials"
    ]
  },
  {
    id: "event",
    role: "Event Manager",
    permissions: [
      "events",
      "testimonials"
    ]
  },
  {
    id: "proj",
    role: "Project Manager",
    permissions: [
      "events",
      "projects",
      "testimonials"
    ]
  },
  {
    id: "docu",
    role: "Documentation",
    permissions: [
      "documents",
      "testimonials"
    ]
  },
  {
    id: "maintain",
    role: "Maintainer",
    permissions: [
      "projects",
      "testimonials"
    ]
  },
  {
    id: "qa",
    role: "QA Tester",
    permissions: [
      "projects",
      "testimonials"
    ]
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = Object.fromEntries(searchParams.entries())

  const role = query.id

  return Response.json(roles.find(item => item.id === role))

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
