// RouteCard.tsx
export default function RouteCard() {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <div>
          <p className="text-sm text-gray-500">Origin City</p>
          <p className="text-base font-medium text-gray-900">Mumbai</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Destination City</p>
          <p className="text-base font-medium text-gray-900">Pune</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Estimated Duration</p>
          <p className="text-base font-medium text-gray-900">3h 45m</p>
        </div>
      </div>
    </div>
  );
}
