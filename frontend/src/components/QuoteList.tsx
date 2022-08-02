import { useEffect, useState } from "preact/hooks";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function QuoteList() {
  const [quotesData, setQuotesData] = useState<{ id: number, quote: string, citation: string, date: number }[] | undefined>(undefined);

  useEffect(() => {
    fetch('https://api.idk.i-sp.in/get/quote')
    .then((res) => res.json())
    .then((data) => {
      let d = 20;
      if (data.id - 20 < 0) d = data.id;
      fetch(`https://api.idk.i-sp.in/get/quote/${data.id}-${data.id - d}`)
        .then((res) => res.json())
        .then((data) => { setQuotesData(data); console.log(data) })
    })
  }, [])

  if (!quotesData) return (<p>Loading...</p>)

  return (
    <table className="table-auto h-min w-full">
      <tr className='border-b-2 border-b-zinc-500'>
        <th>id</th>
        <th>quote</th>
        <th>citation</th>
        <th>date</th>
      </tr>
      {quotesData.map((q) => (
        <tr className='text-center border-b-2 border-b-zinc-700'>
          <td>{q.id}</td>
          <td>{q.quote}</td>
          <td>{q.citation}</td>
          <td>{dayjs.unix(q.date / 1000).fromNow()}<sub className='text-xs text-zinc-400'>{dayjs.unix(q.date / 1000).format('H:mm M/D/YYYY')}</sub></td>
        </tr>
      ))}
    </table>
  )
}