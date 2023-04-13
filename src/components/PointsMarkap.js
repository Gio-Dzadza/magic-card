

export default function PointsMarkap({ points }) {
  return (
    <div className="li-style">
        {points.map( (point, index) =>(
        <li key={index}>
            <h3>{point.name} : {point.point}</h3>
            </li>))
        }
    </div>
  )
}
