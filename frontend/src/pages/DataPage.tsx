import HeartbeatList from "../components/HeartbeatList";
import MoodList from "../components/MoodList";

export default function DataPage() {
  return (
    <div className="self-center w-full grid grid-cols-4 grid-flow-row gap-4">
      <div className="col-start-2 col-end-3"><MoodList /></div>
      <div className="col-start-3 col-end-4"><HeartbeatList /></div>
    </div>
  )
}
