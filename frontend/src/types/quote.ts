interface InterfaceQuote {
  id: number,
  quote: string,
  citation: string,
  date: number
}

type QuotesList = InterfaceQuote[];

export { InterfaceQuote, QuotesList }
