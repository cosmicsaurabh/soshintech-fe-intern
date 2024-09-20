import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const EmployeeStats = ({ employeeData }) => {
  const generateDummyData = (count) => [
    { month: 'Jan', value: count * 0.3 },
    { month: 'Feb', value: count * 0.53 },
    { month: 'Mar', value: count * 0.66 },
    { month: 'Apr', value: count * 0.93 },
    { month: 'May', value: count },
  ];

  const cardStyle = {
    display: 'flex',
    padding: '16px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  };

  const contentStyle = {
    flex: 1,
  };

  const graphStyle = {
    width: '100px',
    marginLeft: '16px',
  };

  return (
    <div className="employee-stats-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      <div className="card" style={cardStyle}>
        <div style={contentStyle}>
          <h2 className="card-title">Total Employees</h2>
          <p className="card-value">
            {employeeData?.totalEmployees?.count}
            <span className="card-growth">{employeeData?.totalEmployees?.growth}</span>
          </p>
          <p className="card-text">{employeeData?.totalEmployees?.men} Men</p>
          <p className="card-text">{employeeData?.totalEmployees?.women} Women</p>
          <p className="card-small-text">{employeeData?.totalEmployees?.lastMonthGrowth} Past month</p>
        </div>
        <div style={graphStyle}>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={generateDummyData(employeeData?.totalEmployees?.count)}>
              <Line type="monotone" dataKey="value" stroke="#EF4444" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="card" style={cardStyle}>
        <div style={contentStyle}>
          <h2 className="card-title">Talent Request</h2>
          <p className="card-value">
            {employeeData?.talentRequest?.count}
            <span className="card-growth">{employeeData?.talentRequest?.growth}</span>
          </p>
          <p className="card-text">{employeeData?.talentRequest?.men} Men</p>
          <p className="card-text">{employeeData?.talentRequest?.women} Women</p>
          <p className="card-small-text">{employeeData?.talentRequest?.lastMonthGrowth} Past month</p>
        </div>
        <div style={graphStyle}>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={generateDummyData(employeeData?.talentRequest?.count)}>
              <Line type="monotone" dataKey="value" stroke="#EF4444" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStats;