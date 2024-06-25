import { useState,useEffect } from "react";

const PaymentManagement = () => {
    const [payments, setPayments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
  
    // useEffect(() => {
    //   // Fetch payment data from your backend or API
    //   fetch('/api/payments')
    //     .then((response) => response.json())
    //     .then((data) => setPayments(data));
    // }, []);
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleFilterChange = (event) => {
      setFilterType(event.target.value);
    };
  
    const filteredPayments = () => {
      if (filterType === 'all') {
        return payments;
      } else if (filterType === 'completed') {
        return payments.filter((payment) => payment.status === 'completed');
      } else if (filterType === 'pending') {
        return payments.filter((payment) => payment.status === 'pending');
      }
      return [];
    };
  
    const searchedPayments = () => {
      const normalizedSearchTerm = searchTerm.toLowerCase();
      return filteredPayments().filter((payment) => {
        const senderName = payment.senderName.toLowerCase();
        const recipientName = payment.recipientName.toLowerCase();
        const amount = payment.amount.toString().toLowerCase();
  
        return (
          senderName.includes(normalizedSearchTerm) ||
          recipientName.includes(normalizedSearchTerm) ||
          amount.includes(normalizedSearchTerm)
        );
      });
    };
  
    return (
      <div className="container">
        <h1>إدارة المدفوعات</h1>
  
        <div className="search-bar">
          <input
            type="text"
            placeholder="بحث"
            value={searchTerm}
            onChange={handleSearchChange}
          />
  
          <select value={filterType} onChange={handleFilterChange}>
            <option value="all">الكل</option>
            <option value="completed">مكتمل</option>
            <option value="pending">معلق</option>
          </select>
        </div>
  
        <table>
          <thead>
            <tr>
              <th>معرف الدفع</th>
              <th>المرسل</th>
              <th>المستلم</th>
              <th>المبلغ</th>
              <th>التاريخ</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            {searchedPayments().map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.senderName}</td>
                <td>{payment.recipientName}</td>
                <td>{payment.amount}</td>
                <td>{payment.date}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PaymentManagement;
  