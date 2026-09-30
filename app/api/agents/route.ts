import { NextResponse } from "next/server";
import { z } from "zod";

const AgentInput = z.object({
  name: z.string().min(2).max(80),
  role: z.enum(["reception","support","sales","booking","custom"]),
  primaryLanguage: z.string().default("bn-BD"),
  provider: z.enum(["livekit","vapi","retell","bolna","elevenlabs"]).default("livekit"),
});

export async function POST(req: Request) {
  const parsed = AgentInput.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({error:"Invalid agent configuration",details:parsed.error.flatten()},{status:400});
  // TODO: persist with authenticated org scope once Supabase project is connected.
  return NextResponse.json({ok:true,agent:{id:crypto.randomUUID(),...parsed.data,status:"draft"}},{status:201});
}
