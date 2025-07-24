export function PickAndDrop(){
    return(
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-100 ">
                {/* Example Card */}
                {[
                    {
                        title: "Times Square Terminal",
                        id: "PP-001",
                        city: "New York",
                        type: "Terminal",
                        status: "Active",
                        address: "1844 Broadway, New York, NY 10036",
                        hours: "24/7",
                    },

                ].map((point, idx) => (
                    <div key={idx} className=" rounded-lg p-4 bg-white shadow-sm space-y-2">
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold">{point.title}</h3>
                            <span
                                className={`text-xs px-2 py-0.5 rounded-full ${point.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-gray-200 text-gray-700"
                                    }`}
                            >
                                {point.status}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500">ID: {point.id}</p>
                        <p className="text-sm text-gray-500">City: {point.city}</p>
                        <p className="text-sm text-gray-500">Type: {point.type}</p>
                        <p className="text-sm text-gray-500">{point.address}</p>
                        <p className="text-sm text-gray-500">{point.hours}</p>
                    </div>
                ))}
            </div>
    )
}