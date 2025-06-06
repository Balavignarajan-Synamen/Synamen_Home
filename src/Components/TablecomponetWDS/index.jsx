// import React from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   flexRender,
// } from "@tanstack/react-table";

// const ReusableTable = ({ columns, data,selectedRows }) => {
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <div className="max-h-full overflow-y-auto pb-16">
//       <table className="min-w-full text-sm text-left">
//       <thead className="bg-primary text-white">
//   {table.getHeaderGroups().map((headerGroup) => (
//     <tr key={headerGroup.id}>
//       {headerGroup.headers.map((header) => (
//         <th
//           key={header.id}
//           className="px-4 py-3 font-normal bg-primary text-white sticky top-0 z-10"
//         >
//           {header.isPlaceholder
//             ? null
//             : flexRender(header.column.columnDef.header, header.getContext())}
//         </th>
//       ))}
//     </tr>
//   ))}
// </thead>

//         <tbody>
//           {table.getRowModel().rows.map((row) => (
//              <tr
//               key={row.id}
//               className={`border-b hover:bg-gray-200 transition-all duration-200 ${
//                 selectedRows.includes(row.original.id)
//                   ? "bg-blue-300"
//                   : "even:bg-gray-100 odd:bg-white"
//               }`}
//             >
//               {row.getVisibleCells().map((cell) => (
//                 <td key={cell.id} className="px-4 py-3">
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ReusableTable;
