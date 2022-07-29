import useSWR from "swr";

export default function MoodIndex() {
  const { data, error } = useSWR('https://api.idk.i-sp.in/mood')

  if (error) return <p>Failed to load<br /><pre>{error.toString()}</pre></p>
  if (!data) return <p>Loading</p>

  return (
    <p>Mood Index: <span>{data.score}</span><br />Updated:<span>{new Date(data.date* 1000).toLocaleString()}</span></p>
  )
}
