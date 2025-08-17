import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { getScheduleById, updateSchedule } from "../../services/operator/schedule";
import { getAllBuses } from "../../services/operator/bus";
import { toast } from "react-toastify";
import type { Bus } from "./Buses";

export function UpdateSchedule() {
  const location = useLocation();
  const { id } = location.state as { id: number };
  const scheduleId = id;


  console.log(scheduleId);
  const navigate = useNavigate();

  const [buses, setBuses] = useState<Bus[]>([]);
  const [busId, setBusId] = useState<number>(0);
  const [departureTime, setDepartureTime] = useState<string>("");
  const [reachingTime, setReachingTime] = useState<string>("");
  const [fare, setFare] = useState<number>(0);

  useEffect(() => {
    const loadData = async () => {
      const b = await getAllBuses();
      if (b) setBuses(b);

      const s = await getScheduleById(scheduleId);
      if (s) {
        setBusId(s.busId);
        setDepartureTime(s.departureTime);
        setReachingTime(s.reachingTime);
        setFare(s.fare);
      }
    };
    loadData();
  }, [scheduleId]);

  const updateHandler = async () => {
    const body = { busId, departureTime, reachingTime, fare };
    const result = await updateSchedule(scheduleId, body);
    if (result) {
      toast.success("Schedule updated successfully!");
      navigate("/operator/schedule");
    } else {
      toast.error("Failed to update schedule");
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <Link to="/operator/schedule" className="text-sm mb-4 text-indigo-700 inline-block">&larr; Back</Link>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Update Schedule</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm">Bus</label>
            <select value={busId} onChange={(e) => setBusId(Number(e.target.value))}>
              <option>Select bus</option>
              {buses.map(b => <option key={b.id} value={b.id}>{b.busName}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm">Fare</label>
            <input type="number" value={fare} onChange={(e) => setFare(Number(e.target.value))} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm">Departure Time</label>
            <input type="time" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm">Reaching Time</label>
            <input type="time" value={reachingTime} onChange={(e) => setReachingTime(e.target.value)} />
          </div>
        </div>

        <div className="flex justify-end">
          <button onClick={updateHandler} className="bg-black text-white px-4 py-2 rounded">Update</button>
        </div>
      </div>
    </div>
  );
}
