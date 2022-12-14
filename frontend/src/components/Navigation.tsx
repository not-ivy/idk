import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="self-center">
      <Link to="/">Home</Link>
      <span>&nbsp;-&nbsp;</span>
      <Link to="/about">About</Link>
      <span>&nbsp;-&nbsp;</span>
      <Link to="/data">Data</Link>
      <span>&nbsp;-&nbsp;</span>
      <Link to="/charts">Charts</Link>
      <span>&nbsp;-&nbsp;</span>
      <a href="https://github.com/not-ivy/idk" target="_blank">Source</a>
    </div>
  )
}
