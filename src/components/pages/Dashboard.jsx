import React, { useState, useEffect } from 'react';
import StatCard from '../../utils/StatCard';
import ActivityCard from '../../utils/ActivityCard';
import Announcement from '../../utils/Announcement';
import ScheduleItem from '../../utils/ScheduleItem';
import Modal from './Modal';  
import { fetchStatsData, fetchEmployeeData, fetchAnnouncements, fetchActivityData, fetchScheduleData } from '../DashboardData';
import './Dashboard.css';
import EmployeeStats from '../../utils/EmployeeStats';

const Dashboard = () => {
  const [statsData, setStatsData] = useState([]);
  const [employeeData, setEmployeeData] = useState({});
  const [announcements, setAnnouncements] = useState([]);
  const [activityData, setActivityData] = useState({});
  const [scheduleData, setScheduleData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

  useEffect(() => {
    setStatsData(fetchStatsData());
    setEmployeeData(fetchEmployeeData());
    setAnnouncements(fetchAnnouncements());
    setActivityData(fetchActivityData());
    setScheduleData(fetchScheduleData());
  }, []);

  const handleButtonClick = (title, message) => {
    setModalContent({ title, message });
    setModalOpen(true);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="content-container">
        <div className="left-content-container">
          <div className="stat-card-container">
            {statsData?.map((stat, index) => (
              <StatCard 
                key={index} 
                {...stat} 
                onClick={() => handleButtonClick(stat.title, `You clicked on ${stat.title}`)}
              />
            ))}
          </div>
          <EmployeeStats employeeData={employeeData}/>
          <div className="card announcement-card">
            <div className="announcement-header">
              <h2 className="card-title">Announcement</h2>
              <p className="announcement-date">Today, 13 Sep 2021</p>
            </div>
            {announcements?.map((announcement, index) => (
              <Announcement 
              key={index} {...announcement } 
              onClick={() => handleButtonClick('Announcements', 'You clicked to see all announcements')}
              />
            ))}
            <button 
              className="button"
              onClick={() => handleButtonClick('Announcements', 'You clicked to see all announcements')}
            >
              See All Announcements
            </button>
          </div>
        </div>
        <div className="right-content-container">
          <div
            onClick={() => handleButtonClick('Activity', 'You clicked on the activity action')}
            >
          <ActivityCard
            title={activityData?.title}
            date={activityData?.date}
            description={activityData?.description}
            actionText={activityData?.actionText}
            />
            </div>
          <div className="card">
            <h2 className="card-title">Upcoming Schedule</h2>
            <p className="card-text">Today, 13 Sep 2021</p>
            {scheduleData?.map((schedule, index) => (
              <ScheduleItem 
                key={index} 
                {...schedule} 
                onClick={() => handleButtonClick('Schedule Item', `You clicked on ${schedule.title}`)}
              />
            ))}
            <button 
              className="button"
              onClick={() => handleButtonClick('New Schedule', 'You clicked to create a new schedule')}
            >
              Create a New Schedule
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
      >
        <p>{modalContent.message}</p>
      </Modal>
    </div>
  );
};

export default Dashboard;