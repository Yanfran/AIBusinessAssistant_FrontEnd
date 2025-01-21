// import CardBox from '@/app/components/shared/CardBox'
// import React from 'react'

// const page = () => {
//   return (
//     <>
//       <CardBox>
//         <h5 className="card-title">Sample page 2</h5>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s
//         </p>
//       </CardBox>
//     </>
//   )
// }

// export default page


import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header con Botones Principales */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Ventas */}
        <div className="p-6 cursor-pointer hover:shadow-lg transition-all bg-white rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
            <div>
              <h3 className="font-semibold">Ventas</h3>
              <p className="text-sm text-gray-500">3 plantillas disponibles</p>
            </div>
          </div>
        </div>

        {/* Marketing */}
        <div className="p-6 cursor-pointer hover:shadow-lg transition-all bg-white rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <div>
              <h3 className="font-semibold">Marketing</h3>
              <p className="text-sm text-gray-500">5 plantillas disponibles</p>
            </div>
          </div>
        </div>

        {/* Finanzas */}
        <div className="p-6 cursor-pointer hover:shadow-lg transition-all bg-white rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <div>
              <h3 className="font-semibold">Finanzas</h3>
              <p className="text-sm text-gray-500">2 plantillas disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;