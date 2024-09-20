export const fetchStatsData = () => {
  return [
    { title: "Available Position", value: 24, subtext: "4 Urgently needed", bgColor: "#fee2e2", textColor: "#b91c1c" }, 
    { title: "Job Open", value: 10, subtext: "4 Active hiring", bgColor: "#dbeafe", textColor: "#1d4ed8" }, 
    { title: "New Employees", value: 24, subtext: "4 Department", bgColor: "#e9d5ff", textColor: "#6b21a8" } 
  ];
};


export const fetchEmployeeData = () => {
  return {
    totalEmployees: {
      count: 216,
      growth: "+2%",
      men: 120,
      women: 96,
      lastMonthGrowth: "+2%"
    },
    talentRequest: {
      count: 16,
      growth: "+5%",
      men: 6,
      women: 10,
      lastMonthGrowth: "+5%"
    }
  };
};

export const fetchAnnouncements = () => {
  return [
    { title: "Outing schedule for every department", date: "3 Minutes ago", isPinned: true },
    { title: "Meeting HR Department", date: "Yesterday, 12:30 PM", isPinned: true },
    { title: "IT Department needs two more talents for UX/UI Designer position", date: "Yesterday, 09:15 AM" }
  ];
};

export const fetchActivityData = () => {
  return {
    title: "You Posted a New Job",
    date: "10:45 AM, Fri 13 Sep 2021",
    description: "Kindly check the requirements and terms of work and make sure everything is right.",
    actionText: "See All Activity"
  };
};

export const fetchScheduleData = () => {
  return [
    { title: "Review candidate applications", time: "Today, 11:30 AM", isPriority: true },
    { title: "Interview with candidates", time: "Today, 10:30 AM" },
    { title: "Short meeting with product designer from IT Department", time: "Today, 09:15 AM" }
  ];
};
