import { get } from "@/lib/api"

const test = async () => {
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
  return
  const api = await get("testimonials", {
    limit: "hello",
    start: 1
  })
  console.log(api)
}

test()
