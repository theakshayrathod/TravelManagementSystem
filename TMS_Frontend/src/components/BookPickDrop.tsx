export function BookPickDrop(){
  return (
    <div className="flex items-start border rounded-2xl p-4 ">
      <input type="radio" className="mt-1 mr-3" />
      <div className="w-full">
        <div className="flex justify-between">
          <h3 className="font-medium">Times Square Terminal</h3>
          <div className="flex gap-2 text-xs text-gray-600">
            <span className="text-2xl font-bold">08:00 AM</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">1564 Broadway, New York, NY 10036</p>
      </div>
    </div>
  )
}