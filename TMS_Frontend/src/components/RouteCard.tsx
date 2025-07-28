import type { RouteResponse } from "../services/operator/route";

type Props = {
  route : RouteResponse
}
export default function RouteCard({route}:Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <div>
          <p className="text-sm text-gray-500">Origin City</p>
          <p className="text-base font-medium text-gray-900">{route.source}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Destination City</p>
          <p className="text-base font-medium text-gray-900">{route.destination}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Distance</p>
          <p className="text-base font-medium text-gray-900">{route.distance}</p>
        </div>
      </div>
    </div>
  );
}
