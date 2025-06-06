// export const merchantColumns = [
//   {
//     id: 'select',
//     header: ({ table }) => (
//       <input
//         type="checkbox"
//         checked={table.getIsAllPageRowsSelected()}
//         onChange={table.getToggleAllPageRowsSelectedHandler()}
//       />
//     ),
//     cell: ({ row }) => (
//       <input
//         type="checkbox"
//         checked={row.getIsSelected()}
//         onChange={row.getToggleSelectedHandler()}
//       />
//     ),
//     enableSorting: false,
//     enableColumnFilter: false,
//     size: 20,
//   },
//   {
//     header: 'Logo',
//     accessorKey: 'MerchantLogo',
//     cell: ({ row }) => (
//       <img
//         src={row.original.MerchantLogo}
//         alt={row.original.MerchantName}
//         className="w-14 h-14 object-contain"
//       />
//     ),
//   },
//   {
//     header: 'Name',
//     accessorKey: 'MerchantName',
//   },
//   {
//     header: 'Code',
//     accessorKey: 'MerchantCode',
//   },
//   {
//     header: 'Website',
//     accessorKey: 'MerchantWebAddress',
//     cell: ({ row }) => (
//       <a
//         href={row.original.MerchantWebAddress}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-600 hover:underline"
//       >
//         {row.original.MerchantWebAddress}
//       </a>
//     ),
//   },
//   {
//     header: 'Address',
//     accessorKey: 'MerchantAddress',
//   },
//   {
//     header: 'Actions',
//     accessorKey: 'actions',
//     cell: ({ row }) => (
//       <div className="flex justify-center space-x-2">
//         <button
//           onClick={() => handleEdit(row.original)}
//           className="text-blue-600 hover:text-red-500"
//         >
//           Edit
//         </button>
//         <button
//           onClick={() => handleDelete(row.original)}
//           className="text-blue-600 hover:text-red-500"
//         >
//           Delete
//         </button>
//       </div>
//     ),
//   },
// ];

// //-----------------------------
// import React, { useState, useEffect } from "react";
// import Icon from "../../components/Icon";
// import AppLayout from "../../layouts/app";
// import CreateMerchantModal from "../../MerchantModals/create-merchant";
// import MerchantEditPopup from "../../MerchantModals/merchanteditpopup";
// import MerchantMoreOptionPopup from "../../MerchantModals/merchant-moreoption";
// import ReusableTable from "../../components/Table/index";
// import { useTableWithSelection } from "../../components/Table/useTableWithSelection";
// import { apiGetMerchant, apiUpdateMerchantById } from "../../api";

// const MerchantList = () => {
//   const [isCreateMerchantOpen, setIsCreateMerchantOpen] = useState(false);
//   const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false);
//   const [selectedMerchant, setSelectedMerchant] = useState(null);
//   const [activePopup, setActivePopup] = useState(null);
//   const [merchants, setMerchants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const {
//     selectedRows,
//     handleRowSelect,
//     handleSelectAll,
//     isAllSelected,
//   } = useTableWithSelection(merchants);

//   useEffect(() => {
//     getMerchants();
//   }, []);

//   const getMerchants = async () => {
//     try {
//       const res = await apiGetMerchant();
//       setMerchants(res.data);
//     } catch (err) {
//       console.error("Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const refreshMerchants = () => {
//     getMerchants();
//   };

//   const handleUpdateClick = (merchant) => {
//     setSelectedMerchant(merchant);
//     setIsUpdatePopupOpen(true);
//   };

//   const handleUpdateMerchant = async (updatedMerchant) => {
//     try {
//       const response = await apiUpdateMerchantById(updatedMerchant.id, updatedMerchant);
//       setMerchants((prev) =>
//         prev.map((merchant) =>
//           merchant.id === updatedMerchant.id ? response.data : merchant
//         )
//       );
//       setIsUpdatePopupOpen(false);
//     } catch (error) {
//       console.error("Update failed:", error);
//     }
//   };

//   const columns = [
//     {
//       id: "select",
//       header: () => (
//         <input type="checkbox" checked={isAllSelected} onChange={handleSelectAll} />
//       ),
//       cell: ({ row }) => (
//         <input
//           type="checkbox"
//           checked={selectedRows.includes(row.original.id)}
//           onChange={() => handleRowSelect(row.original.id)}
//         />
//       ),
//     },
//    {
//   header: "Logo",
//   accessorKey: "MerchantLogo",
//   cell: ({ getValue, row }) => (
//     <img
//       src={getValue()}
//       alt={row.original.MerchantName}
//       className="w-14 h-14 object-contain"
//     />
//   ),
// },
//     {
//       header: "Name",
//       accessorKey: "MerchantName",
//     },
//     {
//       header: "Code",
//       accessorKey: "MerchantCode",
//     },
//     {
//       header: "Website",
//       accessorKey: "MerchantWebAddress",
//       cell: ({ getValue }) => (
//         <a
//           href={getValue()}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 hover:underline"
//         >
//           {getValue()}
//         </a>
//       ),
//     },
//     {
//       header: "Address",
//       accessorKey: "MerchantAddress",
//     },
//     {
//       header: "Actions",
//       cell: ({ row }) => (
//         <div className="flex gap-2 relative">
//           <button onClick={() => handleUpdateClick(row.original)} className="text-blue-600 hover:text-red-500">
//             <Icon name="pencil" className="w-6 h-6 text-blue-800" />
//           </button>
//           <button onClick={() => setActivePopup(row.original.id)} className="text-blue-600 hover:text-red-500">
//             <Icon name="option" className="w-6 h-6 text-blue-800" />
//           </button>
//           {activePopup === row.original.id && (
//             <div className="absolute top-8 right-0 z-10">
//               <MerchantMoreOptionPopup
//                 merchant={row.original}
//                 merchantCode={row.original.MerchantCode}
//                 refreshMerchants={refreshMerchants}
//                 onClose={() => setActivePopup(null)}
//               />
//             </div>
//           )}
//         </div>
//       ),
//     },
//   ];

//   return (
//     <AppLayout>
//       <header className="sticky top-0 z-10 flex items-center w-full min-h-[72px] px-6 bg-white border-b border-gray-300 shadow-sm">
//         <h4 className="font-semibold text-xl">Merchant</h4>
//       </header>

//       <main className="p-6 pb-10 overflow-hidden">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold">Merchant List</h2>
//           <button
//             className="bg-white border border-primary font-bold text-primary px-4 py-2 rounded-lg"
//             onClick={() => setIsCreateMerchantOpen(true)}
//           >
//             + Create Merchant
//           </button>
//         </div>

//         <ReusableTable data={merchants} columns={columns} selectedRows={selectedRows} />

//         <CreateMerchantModal
//           isOpen={isCreateMerchantOpen}
//           onClose={() => setIsCreateMerchantOpen(false)}
//           refreshMerchants={refreshMerchants}
//         />

//         {isUpdatePopupOpen && selectedMerchant && (
//           <MerchantEditPopup
//             merchant={selectedMerchant}
//             onSave={handleUpdateMerchant}
//             onClose={() => setIsUpdatePopupOpen(false)}
//             refreshMerchants={refreshMerchants}
//           />
//         )}
//       </main>
//     </AppLayout>
//   );
// };

// export default MerchantList;
// 