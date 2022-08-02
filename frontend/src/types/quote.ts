interface InterfaceQuote {
  id: number,
  quote: string,
  citation: string,
  date: number
}

type TypeQuoteList = InterfaceQuote[];

export type { InterfaceQuote, TypeQuoteList };
