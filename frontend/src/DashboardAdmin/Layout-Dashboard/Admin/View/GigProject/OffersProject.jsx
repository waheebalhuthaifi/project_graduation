
import React from 'react';
// import { TailwindProvider } from 'tailwindcss-react';
export default function OffersProject (){



  // بيانات المشاريع والعروض
  const projectsData = [
    {
      id: 1,
      title: 'تصميم موقع إلكتروني',
      category: 'تصميم وتطوير',
      budget: 1000,
      currency: 'USD',
      description: 'أحتاج إلى تصميم موقع إلكتروني احترافي لمتجري الإلكتروني.',
      offers: [
        {
          id: 11,
          freelancerName: 'John Doe',
          offerDate: '2024-04-23',
          proposedPrice: 800,
          proposedDeliveryTime: '2 weeks',
          offerMessage: 'I can create a stunning website for your online store.',
          currency: 'USD',
          offerStatus: 'Pending',
        },
        {
            id: 11,
            freelancerName: 'محمد بندر ',
            offerDate: '2024-05-23',
            proposedPrice: 300,
            proposedDeliveryTime: '1 weeks',
            offerMessage: 'I can create a stunning website for your online store.',
            currency: 'إُ’',
            offerStatus: 'Approved',
          },
        // ... المزيد من العروض
      ],
    },

    {
        id: 1,
        title: 'تصميم موقع إلكتروني',
        category: 'تصميم وتطوير',
        budget: 1000,
        currency: 'USD',
        description: 'أحتاج إلى تصميم موقع إلكتروني احترافي لمتجري الإلكتروني.',
        offers: [
          {
            id: 11,
            freelancerName: 'John Doe',
            offerDate: '2024-04-23',
            proposedPrice: 800,
            proposedDeliveryTime: '2 weeks',
            offerMessage: 'I can create a stunning website for your online store.',
            currency: 'USD',
            offerStatus: 'Pending',
          },
          {
              id: 11,
              freelancerName: 'محمد بندر ',
              offerDate: '2024-05-23',
              proposedPrice: 300,
              proposedDeliveryTime: '1 weeks',
              offerMessage: 'I can create a stunning website for your online store.',
              currency: 'إُ’',
              offerStatus: 'Rejected',
            },
          // ... المزيد من العروض
        ],
      },
    // ... المزيد من المشاريع
  ];

  // عرض بطاقة مشروع
  const ProjectCard = ({ project }) => (
    <div className="mb-4 border border-gray-200 border-3 border-black  rounded-md p-4">
      <h4 className="font-bold">{project.title}</h4>
      <p className="text-gray-600">
        {project.category} - {project.budget} {project.currency}
      </p>
      <p className="mt-2">{project.description}</p>
    </div>
  );

  // عرض بطاقة عرض خدمة
  const OfferCard = ({ offer }) => (
    <div className="mb-4 border border-b-2 border-gray-200 bg-gray-100 mr-12 rounded-md p-4">
      <div className="flex justify-between">
        <div>
          <h5 className="font-bold">{offer.freelancerName}</h5>
          <p className="text-gray-600">عرض بتاريخ {offer.offerDate}</p>
        </div>
        <div>
          {offer.offerStatus === 'Pending' && (
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-md">قيد الانتظار</span>
          )}
          {offer.offerStatus === 'Approved' && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-md">مقبول</span>
          )}
          {offer.offerStatus === 'Rejected' && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-md">مرفوض</span>
          )}
        </div>
      </div>
      <div className="mt-2">
        <p>السعر المقترح: {offer.proposedPrice} {offer.currency}</p>
        <p>مدة التسليم المقترحة: {offer.proposedDeliveryTime}</p>
      </div>
      <div className="mt-2">
        <p>رسالة العرض: {offer.offerMessage}</p>
      </div>
    </div>
  );

  // عرض قائمة عروض الخدمات لمشروع
  const ProjectOffers = ({ projectId, offers }) => (
    <div className="mt-2">
      <h5 className="font-bold">عروض الخدمات:</h5>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>
            <OfferCard offer={offer} />
          </li>
        ))}
      </ul>
    </div>
  );

  // عرض قائمة المشاريع
  const Projects = () => (
    <div>
      {projectsData.map((project) => (
        <div key={project.id} className="mb-4">
          <ProjectCard project={project} />
          <ProjectOffers projectId={project.id} offers={project.offers} />
        </div>
      ))}
    </div>
  );

  return (
    <>
     <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">قائمة المشاريع</h1>
      <Projects />  {/* استدعاء مكون Projects */}
    </div>
    
    </>
   
  );
}