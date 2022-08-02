interface InterfaceHeartbeat {
  id: number,
  device: string,
  time: number
}

type HeartbeatList = InterfaceHeartbeat[];

export type { InterfaceHeartbeat, HeartbeatList };
