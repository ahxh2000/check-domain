  export async function POST(req) {
    const { domain,suffix } = await req.json()
    if (!domain ||!suffix) {
      return Response.status(400).json({ error: 'Missing required parameters' })
    }
    const res = await fetch(`https://whois.freeaiapi.xyz/?name=${domain}&suffix=${suffix}`)

   
    const data = await res.json();

    return Response.json(data);
  }