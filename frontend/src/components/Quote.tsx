import { useEffect, useState } from 'preact/hooks';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { InterfaceQuote } from '../types/quote';
import { backendUrl } from '../config.json';

dayjs.extend(relativeTime);

export default function Quote() {
  const [quoteData, setQuoteData] = useState<InterfaceQuote | Error | undefined>(undefined);

  useEffect(() => {
    fetch(`${backendUrl}/get/quote`)
      .then((res) => res.json())
      .then((data) => { setQuoteData(data); console.log(data) })
      .catch((error) => { setQuoteData(error); console.log(error) });
  }, [])

  if (!quoteData) return (<p>Loading...</p>)
  if (quoteData instanceof Error) return (<div>Error: <br /> <pre>{quoteData.toString()}</pre></div>)

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
