// import { useState } from "react";

// export const useTableWithSelection = (data, idKey = "id") => {
//   const [selectedRows, setSelectedRows] = useState([]);

//   const handleRowSelect = (id) => {
//     setSelectedRows((prev) =>
//       prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
//     );
//   };

//   const handleSelectAll = (e) => {
//     setSelectedRows(e.target.checked ? data.map((row) => row[idKey]) : []);
//   };

//   const isAllSelected = selectedRows.length === data.length;

//   return { selectedRows, handleRowSelect, handleSelectAll, isAllSelected };
// };
