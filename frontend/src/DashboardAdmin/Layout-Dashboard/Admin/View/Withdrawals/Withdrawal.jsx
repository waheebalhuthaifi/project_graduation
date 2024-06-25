import React from 'react';
import { FaMonero } from 'react-icons/fa';
import { useState } from 'react';
export default function WithdrawalsHistory () {
    const [expandedWithdrawalId, setExpandedWithdrawalId] = useState(null);
    
   

    const getStatusColor = (status) => {
        switch (status) {
          case 'Completed':
            return 'text-green-500';
          case 'Pending':
            return 'text-yellow-500';
          case 'Failed':
            return 'text-red-500';
          default:
            return 'text-gray-500';
        }
      };
    const withdrawals = [
        {
          id: 1,
          user: {
            name: "John Doe",
            avatar: "avatar.jpg",
          },
          date: "2022-10-15",
          amount: 100,
          method: "Bank Transfer",
          status: "قيد الانتظار",
        },
        {
          id: 2,
          user: {
            name: "Jane Smith",
            avatar: "avatar.jpg",
          },
          date: "2022-11-02",
          amount: 50,
          method: "PayPal",
          status: "قيد الانتظار",
        },
        // ... أضف المزيد من سجلات السحب هنا
      ];
      const [updatedWithdrawals, setUpdatedWithdrawals] = useState(withdrawals);

      const handleExpandWithdrawal = (withdrawalId) => {
        if (expandedWithdrawalId === withdrawalId) {
          setExpandedWithdrawalId(null);
        } else {
          setExpandedWithdrawalId(withdrawalId);
        }
      };
    
 
      const handleAcceptWithdrawal = (withdrawalId) => {
        // تحديث حالة السحب إلى مقبول
        const updatedWithdrawalsList = updatedWithdrawals.map((withdrawal) => {
          if (withdrawal.id === withdrawalId) {
            return { ...withdrawal, status: 'مقبول' };
          }
          return withdrawal;
        });
    
        setUpdatedWithdrawals(updatedWithdrawalsList);
    
        // إجراءات إضافية (مثل إشعار المستخدم) يمكن إضافتها هنا
      };
    
      const handleRejectWithdrawal = (withdrawalId) => {
        // تحديث حالة السحب إلى مرفوض
        const updatedWithdrawalsList = updatedWithdrawals.map((withdrawal) => {
          if (withdrawal.id === withdrawalId) {
            return { ...withdrawal, status: 'مرفوض' };
          }
          return withdrawal;
        });
    
        setUpdatedWithdrawals(updatedWithdrawalsList);
    
        // إجراءات إضافية (مثل إشعار المستخدم) يمكن إضافتها هنا
      };
    
      return (
        <div className=' overflow-x-auto'>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4"> عمليات السحب الاموال </h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">User</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Method</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {updatedWithdrawals.map((withdrawal) => (
                <tr key={withdrawal.id}>
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center">
                      <img
                        src={withdrawal.user.avatar}
                        alt={withdrawal.user.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span>{withdrawal.user.name}</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">{withdrawal.date}</td>
                  <td className="py-2 px-4 border-b">{withdrawal.amount}</td>
                  <td className="py-2 px-4 border-b">{withdrawal.method}</td>
                  <td className={`py-2 px-4 border-b ${getStatusColor(withdrawal.status)}`}>
                    {withdrawal.status}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {withdrawal.status === 'قيد الانتظار' && (
                      <>
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => handleAcceptWithdrawal(withdrawal.id)}
                        >
                          Accept
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleRejectWithdrawal(withdrawal.id)}
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>

      );
}