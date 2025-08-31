'use client';

export default function ResponsiveTable() {
  const headers = ["Service", "Description", "Availability",  "Cost Range"];
  const rows = [
    {
      name: "Film Production",
      desc: "Full Movie Production from script to screen",
      avaliability: "All Year",
      cost : "₦2M -- ₦20M"
    },
    {
      name: "Content Development",
      desc: "Scriptwriting, storyboarding & concept design",
      avaliability: "Limited Slots",
      cost : "₦100,000 -- ₦5,000,000"
    },
    {
      name: "Talent Management",
      desc: "Scouting, training & managing actors and crew",
      avaliability: "One Request",
      cost : "₦100,000 -- ₦1,000,000."
    },
    {
      name: "Content Licensing",
      desc: "Using copyrighted materials (music, footage, etc.) in a film with permission from the rights holder.",
      avaliability: "All Year",
      cost : "₦100,000 -- ₦1,000,000."
    },
  ];

  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-2xl shadow-lg hidden md:block">
        <table className="min-w-full divide-y divide-gray-200 bg-white/5 text-sm">
          <thead className="dark:bg-[#121313] bg-zinc-300">
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className="px-6  text-left text-xs font-semibold uppercase tracking-wider dark:text-white py-4"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-800 hover:text-white">
                <td className="px-6 py-4 font-medium dark:text-white">{row.name}</td>
                <td className="px-6 py-4 dark:text-white">{row.desc}</td>
                <td>
                <span
                    className={`px-3 py-1 text-xs rounded-full font-semibold ${
                      row.avaliability === "All Year"
                        ? "bg-green-100 text-green-700"
                        : row.avaliability === "Limited Slots"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {row.avaliability}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-lg  px-3  shadow-md dark:text-white py-4">
                    {row.cost}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked view */}
      <div className="mt-6 grid gap-4 sm:hidden">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 bg-[#121313] p-4 shadow-md"
          >
            <p className="font-semibold dark:text-white">{row.name}</p>
            <p className="dark:text-white text-sm">{row.desc}</p>
            <p className="mt-2 text-sm">
              <span className="font-medium">Role:</span> {row.avaliability}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`px-2 py-0.5 text-xs rounded-full font-semibold ${
                  row.avaliability === "All Year"
                    ? "bg-green-100 text-green-700"
                    : row.avaliability === "Limited Sloys"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {row.avaliability}
              </span>
            </p> <br />
            <span className="mt-3 rounded-md bg-zinc-200/5 px-3 py-1 text-white">
              {row.cost}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
