export type VoiceProvider = "livekit" | "vapi" | "retell" | "bolna" | "elevenlabs";

export interface VoiceProviderConfig {
  provider: VoiceProvider;
  agentExternalId?: string;
  model?: string;
  voice?: string;
  language?: string;
}

export interface NormalizedCallEvent {
  provider: VoiceProvider;
  externalCallId: string;
  eventType: "started" | "transcript" | "tool" | "transferred" | "ended" | "error";
  from?: string;
  to?: string;
  transcript?: string;
  durationSeconds?: number;
  providerCostUsd?: number;
  payload: unknown;
}

/**
 * Keep provider-specific code behind adapters. The SaaS data model should not care
 * whether a call ran through LiveKit, Vapi, Retell, Bolna, or ElevenLabs.
 */
export const providerCapabilities: Record<VoiceProvider, string[]> = {
  livekit: ["realtime", "sip", "custom-models", "self-host-path", "tool-calling"],
  vapi: ["managed-orchestration", "sip", "provider-choice", "webhooks"],
  retell: ["managed-orchestration", "sip", "analytics", "webhooks"],
  bolna: ["managed-orchestration", "regional-languages", "sip", "webhooks"],
  elevenlabs: ["managed-agent", "natural-tts", "sip", "webhooks"],
};
