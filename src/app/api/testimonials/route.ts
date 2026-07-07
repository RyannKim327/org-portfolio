import { supabaseConfig } from "@/lib/supabase"

const testimonials = [
  {
    name: "Alex Rivera",
    roles: { role: "Frontend Developer" },
    quote: "Ground Zero gave me the space to collaborate on real production-grade code. The feedback loops here helped me advance my framework knowledge faster than any self-study course.",
    initials: "AR",
  },
  {
    name: "Mia Santos",
    roles: { role: "UI/UX Designer" },
    quote: "The interactive design reviews at Ground Zero are incredibly valuable. It's refreshing to work side-by-side with engineers who are eager to bring design prototypes to life.",
    initials: "MS",
  },
  {
    name: "Jordan Kim",
    roles: { role: "Security Engineer" },
    quote: "Participating in community CTFs and security walkthroughs kept me motivated. GZ is a fantastic place to share knowledge and discuss real-world infrastructure vulnerabilities.",
    initials: "JK",
  },
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
