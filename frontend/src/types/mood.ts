interface InterfaceMood {
  id: number,
  date: number,
  score: number
}

type MoodList = InterfaceMood[];

export type { InterfaceMood, MoodList };
