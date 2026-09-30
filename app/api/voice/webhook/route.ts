import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const secret = req.headers.get("x-kothaflow-secret");
  if (!process.env.VOICE_WEBHOOK_SECRET || secret !== process.env.VOICE_WEBHOOK_SECRET) {
    return NextResponse.json({error:"Unauthorized"},{status:401});
  }
  const body = await req.json();
  // Normalize the provider payload before storing it. Never trust client-provided org IDs.
  // Resolve tenant ownership from the server-side mapping of external agent/call IDs.
  return NextResponse.json({received:true,eventType:body?.type ?? "unknown"});
}
