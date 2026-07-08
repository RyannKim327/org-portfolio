// TODO: To setup dummy data for api call
import { eventsProperties } from "@/interfaces";
import { supabaseConfig } from "@/lib/supabase";

// INFO: This is just a dummy data to use for this endpoint

const events: eventsProperties[] = [
  {
    id: 1,
    title: "Weekly Code Jam #42",
    description: "Bring your projects, collaborate with peers, ask questions, and build together in real time.",
    categories: [
      {
        id: 1,
        title: "Software Engineering",
        shortLabel: "SWE",
        description: "Building scalable applications, microservices, and frontend interfaces.",
        icon: "code",
        tools: ["React", "Next.js", "TypeScript", "TailwindCSS"],
        activities: ["Weekly Code Jams", "Project collaborations", "Open source contributions"]
      }
    ],
    started: "2026-07-04T17:00:00Z",
    end: "2026-07-04T20:00:00Z",
    location: "Discord Voice Channels",
    status: "registration open",
    type: "Virtual",
    action: "RSVP on Discord",
    href: "https://discord.gg/4H2v6UwjmY",
    created_at: "2026-06-29T12:00:00Z"
  },
  {
    id: 2,
    title: "Introduction to System Design",
    description: "Learn how to design scalable architectures, microservices, databases, and caching layers.",
    categories: [
      {
        id: 2,
        title: "System Design & Architecture",
        shortLabel: "SysDesign",
        description: "Learning and designing distributed systems, databases, and network architectures.",
        icon: "server",
        tools: ["Supabase", "Docker", "AWS", "Redis"],
        activities: ["Architectural reviews", "Tech talks", "Design diagrams"]
      }
    ],
    started: "2026-07-11T13:00:00Z",
    end: "2026-07-12T15:00:00Z",
    location: "Discord Stage Channel",
    status: "upcoming",
    type: "Workshop",
    action: "Set Reminder",
    href: "https://discord.gg/4H2v6UwjmY",
    created_at: "2026-06-20T10:00:00Z"
  },
  {
    id: 3,
    title: "ZeroToHero hackathon 2026",
    description: "A 48-hour challenge to design and build open-source products that solve real-world problems.",
    categories: [
      {
        id: 1,
        title: "Software Engineering",
        shortLabel: "SWE",
        description: "Building scalable applications, microservices, and frontend interfaces.",
        icon: "code",
        tools: ["React", "Next.js", "TypeScript", "TailwindCSS"],
        activities: ["Weekly Code Jams", "Project collaborations", "Open source contributions"]
      }
    ],
    started: "2026-07-24T18:00:00Z",
    end: "2026-07-26T18:00:00Z",
    location: "Hybrid (Discord & Local Hubs)",
    status: "upcoming",
    type: "Hackathon",
    action: "Register Team",
    href: "https://discord.gg/4H2v6UwjmY",
    created_at: "2026-07-01T09:00:00Z"
  },
  {
    id: 4,
    title: "Goodnight with GZ in DC",
    description: "A night session with us in development",
    categories: [
      {
        id: 1,
        title: "Software Engineering",
        shortLabel: "SWE",
        description: "Building scalable applications, microservices, and frontend interfaces.",
        icon: "code",
        tools: ["React", "Next.js", "TypeScript", "TailwindCSS"],
        activities: ["Weekly Code Jams", "Project collaborations", "Open source contributions"]
      }
    ],
    started: "2026-07-01T17:00:00Z",
    end: "2026-07-30T05:00:00Z",
    location: "Discord Server",
    status: "ongoing",
    type: "Bonding Session",
    action: "Join with us",
    href: "https://discord.gg/4H2v6UwjmY",
    created_at: "2026-06-01T08:00:00Z"
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

  // TODO: Converting string to numbers through parseInt
  const limit: number = parseInt(query.limit ?? "3")
  const index: number = parseInt(query.page ?? "0")

  return Response.json(events)

  const { data, error } = await supabaseConfig
    .from("events")
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
