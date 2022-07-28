import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label, ResponsiveContainer } from 'recharts';

interface MoodData {
  time: number,
  moodScore: number,
}

interface GraphProps {
  data: MoodData[],
}

export default function MoodGraph(props: GraphProps) {
  const { data } = props;
  return (
    <div className='flex flex-col justify-center items-center bg-slate-300 drop-shadow-lg col-span-3 row-span-1'>
      <h3 class='font-bold text-xl'>Mood Graph</h3>
      <ResponsiveContainer width="90%" height="80%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="moodScore" stroke="#8B5CF6" strokeWidth={3} />
          <CartesianGrid stroke="#94A3B8" strokeDasharray="3 9" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip formatter={(value) => [value, "Score"]} labelFormatter={(label) => `Time : ${label}`} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
