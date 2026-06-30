import { get } from "@/app/lib/api"

const test = async () => {
  const api = await get("testimonials", {
    limit: "hello",
    start: 1
  })
  console.log(api)
}

test()
