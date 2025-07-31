import { Link } from "react-router-dom";
import { PickAndDrop } from "../../components/PickAndDrop";

export function PickupAndDropPoints() {
    return (
        <div className="p-6 space-y-4 bg-gray-100  min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center bg-gray-100">
                <div>
                    <h1 className="text-2xl font-semibold">Pickup & Drop Points</h1>
                    <p className="text-gray-600">Manage pickup and drop-off locations</p>
                </div>
                <Link to="/operator/add-pick-drop" className="bg-black text-white px-4 py-2 rounded hover:opacity-90">
                    + Add New Point
                </Link>
            </div>
            {/* Cards Grid */}
            {/* <PickAndDrop/> */}
        </div>
    );


}