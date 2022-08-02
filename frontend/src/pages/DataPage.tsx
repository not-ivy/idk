import HeartbeatList from "../components/HeartbeatList";
import MoodList from "../components/MoodList";
import QuoteList from "../components/QuoteList";

export default function DataPage() {
  return (
    <div className="self-center md:w-2/4">
      <div className="flex flex-row">
        <MoodList />
        <HeartbeatList />
        <QuoteList />
      </div>
    </div>
  )
}
