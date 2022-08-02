interface InterfaceHeartbeat {
  id: number,
  device: string,
  time: number
}

type TypeHeartBeatList = InterfaceHeartbeat[];

export type { InterfaceHeartbeat, TypeHeartBeatList };
