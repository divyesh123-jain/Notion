import { useState, useEffect } from 'react';

interface Row {
  id: string;
  name: string;
  description: string;
}

type RowsStructured = Row[];

async function fetchFromNotion(): Promise<RowsStructured> {
  const res = await fetch('http://localhost:3000/api/notion');
  const data = await res.json();
  return data;
}
const rows = [];


export default function Home(): JSX.Element {
  const [rows, setRows] = useState<RowsStructured>([]);
  

  useEffect(() => {
    async function getData() {
      try {
        const rowsData = await fetchFromNotion();
        setRows(rowsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, []);

  console.log('FRONTEND ------------', rows);

  return (<>
   
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
          {rowsData.map((row, i ) => (
            <tr key = {`row-${i}-${row.name}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {row.name}
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            ))}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

    </>);
}
