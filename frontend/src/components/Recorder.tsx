export default function Recorder() {
  const values = [-5, -4, -3, -2, -1];

  return (
    <div className="flex flex-row ">
      {
        values.map((v) => {
          <button>{v}</button>
        })
      }
    </div>
  )
}
