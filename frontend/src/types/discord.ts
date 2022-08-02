// are these actually necessary???
interface Activity {
  name: string | null,
  emoji: string | null,
  state: string | null,
  created: number | null,
}

type DiscordState = {
  status: string,
  activities: Activity[] | undefined
}

export type { Activity, DiscordState };
