import { testimonialsProperties } from "@/interfaces"
import { supabaseConfig } from "@/lib/supabase"

const testimonials: testimonialsProperties[] = [
  {
    id: 1,
    name: "Alex Rivera",
    roles: {
      id: "role-frontend-dev",
      role: "Frontend Developer",
      permission: ["read", "write"]
    },
    quote: "Ground Zero gave me the space to collaborate on real production-grade code. The feedback loops here helped me advance my framework knowledge faster than any self-study course.",
    created_at: "2026-06-29T12:00:00Z"
  },
  {
    id: 2,
    name: "Mia Santos",
    roles: {
      id: "role-uiux-designer",
      role: "UI/UX Designer",
      permission: ["read", "write"]
    },
    quote: "The interactive design reviews at Ground Zero are incredibly valuable. It's refreshing to work side-by-side with engineers who are eager to bring design prototypes to life.",
    created_at: "2026-06-30T12:00:00Z"
  },
  {
    id: 3,
    name: "Jordan Kim",
    roles: {
      id: "role-security-engineer",
      role: "Security Engineer",
      permission: ["read", "write"]
    },
    quote: "Participating in community CTFs and security walkthroughs kept me motivated. GZ is a fantastic place to share knowledge and discuss real-world infrastructure vulnerabilities.",
    created_at: "2026-07-01T12:00:00Z"
  }
];


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

  return Response.json(testimonials)

  // TODO: Converting string to numbers through parseInt
  const limit: number = parseInt(query.limit ?? "3")
  const index: number = parseInt(query.page ?? "0")

  const { data, error } = await supabaseConfig
    .from("testimonials")
    .select("name, quote, created_at, roles(role)")
    .range(index + limit, limit)
    .order("id", { ascending: false })

  return Response.json(data || error)
}

export async function POST(request: Request) {
  const body = await request.json()

  return Response.json({
    test: body
  })
}
