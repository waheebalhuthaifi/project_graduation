import React from 'react';
import { useState } from 'react';

const Dispute = () => {
    const [selectedDispute, setSelectedDispute] = useState(null);

    const disputes = [
      {
        id: 1,
        title: 'نزاع 1',
        messages: [
          { id: 1, sender: 'العميل', text: 'لم يتم تسليم المشروع وفقًا للمواصفات.', timestamp: '10:00 ص' },
          { id: 2, sender: 'المستقل', text: 'أنا أعتذر عن التأخير، سأعمل على حل المشكلة.', timestamp: '10:05 ص' },
          { id: 3, sender: 'العميل', text: 'أريد استرداد المبلغ المدفوع.', timestamp: '10:10 ص' },
        ],
      },
      // إضافة النزاعات الأخرى هنا...
    ];
  
    const handleSelectDispute = (disputeId) => {
      setSelectedDispute(disputeId);
    };
  
    const handleResolveDispute = (disputeId, resolution) => {
        // تنفيذ الخطوات اللازمة لحل النزاع هنا
        console.log(`تم حل النزاع ${disputeId} بالقرار: ${resolution}`);
      
        // إجراءات لحل النزاع بين العميل والمستقل
        const clientActions = [
          `قم بإرسال بريد إلكتروني إلى العميل بالقرار والتفاصيل الخاصة بحل النزاع.`,
          `تأكد من تنفيذ الإجراءات المتفق عليها في حل النزاع.`,
          `تواصل مع العميل للتأكد من رضاه عن الحل النهائي.`,
        ];
      
        const freelancerActions = [
          `قم بإرسال بريد إلكتروني إلى المستقل بالقرار والتفاصيل الخاصة بحل النزاع.`,
          `بناءً على القرار، قم بتنفيذ الإجراءات المتفق عليها واستكمال المشروع بشكل صحيح.`,
          `تواصل مع العميل للتأكد من رضاه عن الحل النهائي.`,
        ];
      
        console.log('إجراءات العميل:');
        console.log(clientActions);
      
        console.log('إجراءات المستقل:');
        console.log(freelancerActions);
      };
  
    return (
      <div className="flex">
        <div className="w-1/4">
          <DisputeList disputes={disputes} onSelectDispute={handleSelectDispute} />
        </div>
        <div className="w-3/4">
          {selectedDispute ? (
            <DisputeDetails dispute={disputes.find((d) => d.id === selectedDispute)} onResolveDispute={handleResolveDispute} />
          ) : (
            <p className="text-center mt-4">حدد نزاعًا لعرض التفاصيل</p>
          )}
        </div>
      </div>
    );
};


const DisputeList = ({ disputes, onSelectDispute }) => {
    return (
      <div className="bg-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-2">قائمة النزاعات</h2>
        <ul>
          {disputes.map((dispute) => (
            <li
              key={dispute.id}
              className="p-2 cursor-pointer hover:bg-gray-300"
              onClick={() => onSelectDispute(dispute.id)}
            >
              {dispute.title}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const DisputeDetails = ({ dispute, onResolveDispute }) => {
    const [resolution, setResolution] = useState('');
  
    const handleResolveDispute = () => {
      onResolveDispute(dispute.id, resolution);
    };
  
    return (
      <div className="bg-white p-4">
        <h2 className="text-lg font-semibold mb-2">{dispute.title}</h2>
        <div className="border-t border-gray-300 pt-4">
          {dispute.messages.map((message) => (
            <div key={message.id} className="mb-2">
              <p className="font-semibold">{message.sender}</p>
              <p>{message.text}</p>
              <p className="text-sm text-gray-500">{message.timestamp}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <label htmlFor="resolution" className="block font-semibold mb-2">
            قم بتقديم حل للنزاع:
          </label>
          <textarea
            id="resolution"
            className="w-full p-2 border border-gray-300"
            rows="4"
            value={resolution}
            onChange={(e) => setResolution(e.target.value)}
          ></textarea>
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded" onClick={handleResolveDispute}>
            حل النزاع
          </button>
        </div>
      </div>
    );
  };

export default Dispute;
