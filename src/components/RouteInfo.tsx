interface Props {
  distance: number;
  duration: number;
}

export const RouteInfo = ({ distance = 0, duration = 0 }: Props) => {
  return (
    <div className="card bg-light mb-3 custom-card">
      <div className="card-header">Información</div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">Distancia: {distance} km</li>
          <li className="list-group-item">Tiempo: {duration} min</li>
        </ul>
      </div>
    </div>
  );
};
