export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = Object.fromEntries(searchParams.entries())

  return Response.json({
    test: query
  })
}

export async function POST(request: Request) {
  const body = await request.json()

  return Response.json({
    test: body
  })
}
