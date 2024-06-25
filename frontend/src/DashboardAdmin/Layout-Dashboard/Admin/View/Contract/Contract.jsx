import React from 'react';

const Contract = () => {
  const contracts = [
    {
      id: 1,
      client: 'Client A',
      freelancer: 'Freelancer X',
      status: 'Active',
      project: 'Web Development',
      startDate: '2024-04-01',
      endDate: '2024-05-01',
      totalAmount: 5000,
      description: 'تطوير موقع ويب لشركة العميل',
    },
    {
      id: 2,
      client: 'Client B',
      freelancer: 'Freelancer Y',
      status: 'Pending',
      project: 'Graphic Design',
      startDate: '2024-04-15',
      endDate: '2024-05-15',
      totalAmount: 3000,
      description: 'تصميم شعار ومواد تسويقية للعميل',
    },
    {
      id: 3,
      client: 'Client C',
      freelancer: 'Freelancer Z',
      status: 'Completed',
      project: 'Mobile App Development',
      startDate: '2024-05-01',
      endDate: '2024-06-01',
      totalAmount: 8000,
      description: 'تطوير تطبيق محمول للعميل',
    },
  ];

  return (
    <div className=' overflow-x-auto'>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">عقود العمل</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="bg-gray-100 p-2 border-b">رقم العقد</th>
            <th className="bg-gray-100 p-2 border-b">العميل</th>
            <th className="bg-gray-100 p-2 border-b">المستقل</th>
            <th className="bg-gray-100 p-2 border-b">الحالة</th>
            <th className="bg-gray-100 p-2 border-b">المشروع</th>
            <th className="bg-gray-100 p-2 border-b">تاريخ البدء</th>
            <th className="bg-gray-100 p-2 border-b">تاريخ الانتهاء</th>
            <th className="bg-gray-100 p-2 border-b">المبلغ الإجمالي</th>
            <th className="bg-gray-100 p-2 border-b">الوصف</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td className="p-2 border-b">{contract.id}</td>
              <td className="p-2 border-b">{contract.client}</td>
              <td className="p-2 border-b">{contract.freelancer}</td>
              <td className="p-2 border-b">
                <span
                  className={`px-2 py-1 rounded-full text-white ${
                    contract.status === 'Active'
                      ? 'bg-green-500'
                      : contract.status === 'Pending'
                      ? 'bg-yellow-500'
                      : contract.status === 'Completed'
                      ? 'bg-blue-500'
                      : ''
                  }`}
                >
                  {contract.status}
                </span>
              </td>
              <td className="p-2 border-b">{contract.project}</td>
              <td className="p-2 border-b">{contract.startDate}</td>
              <td className="p-2 border-b">{contract.endDate}</td>
              <td className="p-2 border-b">{contract.totalAmount}</td>
              <td className="p-2 border-b">{contract.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
  );
};

export default Contract;