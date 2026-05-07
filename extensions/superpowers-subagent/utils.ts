/**
 * Shared utilities used across agent-runner, index, and render modules.
 */

import type { Message } from "@mariozechner/pi-ai";

/**
 * Get the final text output from the last assistant message.
 */
export function getFinalOutput(messages: Message[]): string {
  for (let i = messages.length - 1; i >= 0; i--) {
    const msg = messages[i];
    if (msg.role === "assistant") {
      for (const part of msg.content) {
        if (part.type === "text") return part.text;
      }
    }
  }
  return "";
}
