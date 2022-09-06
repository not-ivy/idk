import SpotifyStatus from "../components/SpotifyStatus"
import LastSeen from "../components/LastSeen"
import MoodIndex from "../components/MoodIndex"
import Quote from "../components/Quote"

export default function HomePage() {
  return (
    <div className="self-center md:w-2/4">
      <Quote />
      <hr className="my-10 md:my-20"/>
      <div className="flex flex-col md:flex-row items-center justify-around w-full">
        <MoodIndex />
        <LastSeen />
        <SpotifyStatus /> 
      </div>
    </div>
  )
}
