import DiscordStatus from "../components/DiscordStatus"
import LastSeen from "../components/LastSeen"
import MoodIndex from "../components/MoodIndex"

export default function HomePage() {
  return (
    <div className="self-center">
      <blockquote className="italic text-center">
        The other one is, of course, outing yourself<br />
        I think, be the first to out yourself, I always think<br />
        Because you know, there's no end to the hypocrisy of the human heart<br />
      </blockquote>
      <p className="text-right">- Honest, The Chainsmokers</p>
      <hr className="my-20"/>
      <div className="flex flex-row justify-around w-full">
        <MoodIndex />
        <LastSeen />
        <DiscordStatus /> 
      </div>
    </div>
  )
}
