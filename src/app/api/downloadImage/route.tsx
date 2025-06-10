import axios from "axios"
import { NextRequest, NextResponse } from "next/server"
import { getBodyQuery } from "utils/getBodyQuery"

type RequestData = {
  query: any
  body: {
    url: string
    type: string
  }
}

export async function POST(req: NextRequest) {
  const { body } = await getBodyQuery<RequestData>(req)

  if (!body?.url) {
    return NextResponse.json({ error: "Missing URL" }, { status: 400 })
  }

  try {
    const res = await axios.get(body.url, { responseType: "arraybuffer" })
    return new Response(res.data, {
      status: 200,
      headers: {
        "Content-Type": `image/${body.type}`,
        "Access-Control-Allow-Origin": "*",
      },
    })
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 },
    )
  }
}
