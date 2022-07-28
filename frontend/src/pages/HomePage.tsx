import DiscordStatus from "../components/DiscordStatus"
import LastSeen from "../components/LastSeen"
import MoodIndex from "../components/MoodIndex"

export default function HomePage() {
  return (
    <div className="row-span-3 flex justify-around items-center flex-col">
      <p>The UI design is totally not stolen from l1v's heartbeat website</p>
      <div className="flex flex-row justify-around w-full">
        <MoodIndex />
        <LastSeen />
        <DiscordStatus /> 
      </div>
    </div>
  )
}
