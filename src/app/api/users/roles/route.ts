const roles = {
  'administrator': '',
  'moderator': '',
  'contributor': '',
  'documentation': '',
  'maintainers': ''
}

export async function GET(request: Request) {
  return Response.json(roles)
}
