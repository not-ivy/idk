import HeartbeatList from "../components/HeartbeatList";
import MoodList from "../components/MoodList";

export default function DataPage() {
  return (
    <div className="self-center md:w-2/4">
      <div className="flex flex-row">
        <MoodList />
        <HeartbeatList />
      </div>
    </div>
  )
}
