export default function AboutPage() {
  return (
    <div className="self-center md:w-2/4">
      <h1 className="text-3xl font-bold">Why</h1>
      <hr className="my-2 md:my-4"/>
      <p>
        I made this website so I can gain more insight into my mood swings. <br />
        Maybe there is already a website for things like this, but I wanted to write my own because why not?
      </p>
      <br /><br />
      <h1 className="text-3xl font-bold">Components</h1>
      <hr className="my-2 md:my-4"/>
      <p>
        The <i>quote</i> section is updated to a quote(usually a part of a lyrics) that I think fits best my current mood. <br />
        The <i>mood index</i> is a score that ranges from -5 to 5 describes how I feel currently. <br />
        The <i>last seen</i> is a bare-bones version of <a className="underline" href="https://github.com/5HT2B/heartbeat" target="_blank">5HT2B/heartbeat</a>.
        It shows the last time that a device have sent a request(heartbeat) to the server. <br />
        <i>Last discord status</i> explains itself. It shows the last custom status of my discord. 
      </p>
    </div>
  )
}
