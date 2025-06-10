import axios from "axios"
import { NextRequest, NextResponse } from "next/server"
import { getBodyQuery } from "utils/getBodyQuery"
import sharp from "sharp"
import ico from "icojs"

type RequestData = {
  body: any
  query: {
    imageUrl: string
    size: string
  }
}

export async function GET(req: NextRequest) {
  const { query } = await getBodyQuery<RequestData>(req)
  if (!query?.imageUrl) {
    return NextResponse.json({ error: "Missing URL" }, { status: 400 })
  }
  if (Number(query.size) > 512) {
    return NextResponse.json({ error: "Invalid size" }, { status: 400 })
  }

  try {
    const icoBuffer = await axios
      .get(query.imageUrl, { responseType: "arraybuffer" })
      .then((res) => res.data)
    const images = await ico.parseICO(icoBuffer as ArrayBuffer, "image/png")
    if (images.length === 0) throw new Error("Nenhuma imagem extraída do .ico")
    const pngBuffer = Buffer.from(images[0].buffer)
    const resized = await sharp(pngBuffer)
      .resize(Number(query.size), Number(query.size))
      .png()
      .toBuffer()
    return new Response(resized, {
      status: 200,
      headers: {
        "Content-Type": `image/png`,
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
