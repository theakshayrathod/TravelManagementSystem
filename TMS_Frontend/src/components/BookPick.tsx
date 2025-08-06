import type { SchedulePointInfo } from "../services/operator/schedulePoint";
type Prop = {
  p: SchedulePointInfo
  setPoint: () => void

}

export function BookPick({ p, setPoint }: Prop) {


  return (
    <div className="flex items-start border rounded-2xl p-4 ">
      <input onChange={setPoint} type="radio" className="mt-1 mr-3" name="pick" value={p.pointId} />
      <div className="w-full">
        <div className="flex justify-between">
          <h3 className="font-medium">{p.pointName}</h3>
          <div className="flex gap-2 text-xs text-gray-600">
            <span className="text-2xl font-bold">{p.arrivalTime.substring(0, 5)}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500"> {p.pointAddress}</p>
      </div>
    </div>
  )
}