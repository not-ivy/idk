import { useEffect, useState } from "preact/hooks";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { TypeQuoteList } from "../types/quote";
import { backendUrl } from '../config.json';

dayjs.extend(relativeTime);

export default function QuoteList() {
  const [quotesData, setQuotesData] = useState<TypeQuoteList | Error | undefined>(undefined);

  useEffect(() => {
    fetch(`${backendUrl}/get/quote`)
    .then((res) => res.json())
    .then((data) => {
      let d = 6;
      if (data.id - d < 0) d = data.id;
      fetch(`${backendUrl}/quote/${data.id}-${data.id - d}`)
        .then((res) => res.json())
        .then((data) => { setQuotesData(data); console.log(data) })
        .catch((error) => { setQuotesData(error); console.log(error) });
      })
  }, [])

  if (!quotesData) return (<p>Loading...</p>)
  if (quotesData instanceof Error) return (<div>Error: <br /> <pre>{quotesData.toString()}</pre></div>)

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
          <td className="whitespace-pre-wrap">{q.quote}</td>
          <td>{q.citation}</td>
          <td>{dayjs.unix(q.date / 1000).fromNow()}<sub className='text-xs text-zinc-400'>{dayjs.unix(q.date / 1000).format('H:mm M/D/YYYY')}</sub></td>
        </tr>
      ))}
    </table>
  )
}
