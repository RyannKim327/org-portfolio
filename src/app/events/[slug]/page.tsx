// import { useParams, useSearchParams } from "next/navigation"

export default async function EventsDiscussion({ params, searchParams }) {
  const param = await params
  const query = await searchParams

  return (
    <div>
      "{param.slug}"
      test
      "{query.tab}"
    </div>
  )
}
