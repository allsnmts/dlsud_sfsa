import React from 'react';

export default function Table({ headerTitlesArr, children }) {
  return (
    <div className="overflow-auto w-full h-full rounded-xl">
      <table className="w-full text-sm text-left text-dark dark:text-light bg-light dark:bg-darkComponents">
        <thead className="bg-lightComponents dark:bg-darkComponents sticky top-0 text-xs uppercase border-b-2">
          <tr>
            {headerTitlesArr.map((h, i) => (
              <th
                key={i}
                scope="col"
                className="px-6 py-3 text-primary dark:text-primaryDark"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
