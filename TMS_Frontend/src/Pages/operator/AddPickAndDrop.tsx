export function AddPickAndDrop(){
  return (
  <div className="h-screen w-screen flex flex-col items-center p-4 bg-gray-100">
    {/* Header */}
    

    {/* Main Section */}
    <div className="mt-8 p-6 rounded-lg shadow-2xl w-11/12 max-w-3xl bg-white">
      <h2 className="text-xl font-semibold mb-4">Add Points</h2>

      {/* Input Row */}
      <div className="flex justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Select route"
          className="flex-1 px-3 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Add PickUp/Drop"
          className="flex-1 px-3 py-2 border rounded"
        />
         <select className="flex-1 px-3 py-2 border rounded">
          <option value="">Select type</option>
          <option value="Pick">Pick</option>
          <option value="Drop">Drop</option>
        </select>
      </div>

      {/* Add Points Button */}
      <div className="flex justify-center mb-8">
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          Add Point
        </button>
      </div>

      {/* Points Table */}
      <div className="mx-auto w-full max-w-md rounded p-4">
        <h3 className="text-center font-medium mb-4">PickUp/Drop points</h3>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left">
              
              <th className="p-2 border-b">Point Name</th>
              <th className="p-2 border-b">Point Type</th>
              <th className="p-2 border-b text-center" colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td className="p-2">Karad Bus Stand, Karad</td>
              <td className="p-2">Pick</td>
              <td className="p-2 text-center">
                <button className="px-3 py-1 rounded border text-sm">Delete</button>
              </td>
              
            </tr>
            <tr>
              
              <td className="p-2">Kolapur Naka, Karad</td>
              <td className="p-2">Drop</td>
              <td className="p-2 text-center">
                <button className="px-3 py-1 rounded border text-sm">Delete</button>
              </td>
              
            </tr>
            <tr>
              
              <td className="p-2">Shirol</td>
              <td className="p-2">Pick</td>
              <td className="p-2 text-center">
                <button className="px-3 py-1 rounded border text-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

}