// TODO: To setup dummy data for api call
import { supabaseConfig } from "@/lib/supabase";

// INFO: This is just a dummy data to use for this endpoint

const events = [
  {
    title: "Weekly Code Jam #42",
    description: "Bring your projects, collaborate with peers, ask questions, and build together in real time.",
    date: "Jul 04, 2026",
    time: "7:00 PM - 9:00 PM PST",
    location: "Discord Voice Channels",
    status: "registration open",
    type: "Virtual",
    actionText: "RSVP on Discord",
    href: "https://discord.gg/4H2v6UwjmY",
  },
  {
    title: "Introduction to System Design",
    description: "Learn how to design scalable architectures, microservices, databases, and caching layers.",
    date: "Jul 11, 2026",
    time: "6:00 PM - 7:30 PM PST",
    location: "Discord Stage Channel",
    status: "upcoming",
    type: "Workshop",
    actionText: "Set Reminder",
    href: "https://discord.gg/4H2v6UwjmY",
  },
  {
    title: "ZeroToHero hackathon 2026",
    description: "A 48-hour challenge to design and build open-source products that solve real-world problems.",
    date: "Jul 24 - 26, 2026",
    time: "Weekend Event",
    location: "Hybrid (Discord & Local Hubs)",
    status: "upcoming",
    type: "Hackathon",
    actionText: "Register Team",
    href: "https://discord.gg/4H2v6UwjmY",
  },
  {
    title: "Goodnight with GZ in DC",
    description: "A night session with us in development",
    date: "July 1, 2026 to July 30, 2026 5pm to 5am",
    location: "Discord Server",
    status: "ongoing",
    type: "Bonding Session",
    actionText: "Join with us",
    href: "https://discord.gg/4H2v6UwjmY",
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
