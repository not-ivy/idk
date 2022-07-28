import DiscordStatus from "../components/DiscordStatus"
import LastSeen from "../components/LastSeen"
import MoodIndex from "../components/MoodIndex"

export default function HomePage() {
  return (
    <div className="w-full h-full flex justify-around items-center flex-col">
      <h3 className="dark:text-white text-2xl">Home Page</h3>
      <div className="flex flex-row justify-around w-full">
        <MoodIndex />
        <LastSeen />
        <DiscordStatus /> 
      </div>
    </div>
  )
}
