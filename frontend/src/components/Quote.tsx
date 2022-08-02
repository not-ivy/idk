import { useEffect, useState } from 'preact/hooks';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { InterfaceQuote } from '../types/quote';

dayjs.extend(relativeTime);

export default function Quote() {
  const [quoteData, setQuoteData] = useState<InterfaceQuote | undefined>(undefined);

  useEffect(() => {
    fetch('https://api.idk.i-sp.in/get/quote')
      .then((res) => res.json())
      .then((data) => { setQuoteData(data); console.log(data) })
  }, [])

  if (!quoteData) return (<p>Loading...</p>)

  return (
    <div>
      <blockquote className="italic text-center whitespace-pre-wrap">{quoteData.quote}</blockquote>
      <div className="text-right">
        <p>{quoteData.citation}</p>
        <sub>Updated {dayjs.unix(quoteData.date / 1000).fromNow()}</sub>
      </div>
    </div>
  )
}
