import React, { useState } from 'react';

const UserProfile = () => {
  // ข้อมูลผู้ใช้
  const user = {
    fullname: 'John Doe',
    profileImage: '',
  };
  // ข้อมูลกิจกรรม
  const [activities, setActivities] = useState([
    {
      id: 1,
      description: 'Play tennis with Friends',
      date: '1/01/2023',
      time: '10:00 AM',
      location: 'Courts 1',
    },
  ]);
  const [editActivity, setEditActivity] = useState();
  // แก้ไขกิจกรรม
  const handleEditActivity = (activity) => {
    setEditActivity(activity);
  };
  // ยกเลิกการแก้ไขกิจกรรม
  const handleCancelEdit = () => {
    setEditActivity();
  };
  // บันทึกการแก้ไขกิจกรรม
  const handleSaveEdit = (updatedActivity) => {
    // ปรับปรุงข้อมูลกิจกรรม
    const updatedActivities = activities.map((activity) =>
      activity.id === updatedActivity.id ? updatedActivity : activity
    );
    setActivities(updatedActivities);
    setEditActivity(); // เคลียร์สถานะการแก้ไข
  };
  return (
    <div>
      {/* ข้อมูลUser */}
      <div className="user-profile">
        <img src={user.profileImage} alt="" />
        <h1>{user.fullname}</h1>
      </div>
       {/* รายละเอียดกิจกรรม */}
      <div className="activity-list">
        {activities.map((activity) => (
          <div className="activity-card" key={activity.id}>
            {editActivity === activity ? (
              // ฟอร์มแก้ไข
              <div>
                <input
                  type="text"
                  value={activity.description}
                  onChange={(e) => handleSaveEdit({ activity, description: e.target.value,})}/>
                <input
                  type="text"
                  value={activity.date}
                  onChange={(e) => handleSaveEdit({activity, date: e.target.value })}/>
                <input
                  type="number"
                  value={activity.time}
                  onChange={(e) => handleSaveEdit({activity, time: e.target.value })}/>
                <input
                  type="text"
                  value={activity.location}
                  onChange={(e) => handleSaveEdit({activity, location: e.target.value })}
/>              <button onClick={handleSaveEdit} className="rounded-full bg-white hover:bg-gray-100 text-blue-900 hover:text-blue-950 text-base">Save </button>
                <button onClick={handleCancelEdit} className="rounded-full bg-white hover:bg-gray-100 text-blue-900 hover:text-blue-950 text-base">Cancel </button>
    </div>
            ) : (
              // แสดงข้อมูลกิจกรรม
              <div >
                <img src={user.profileImage} alt="" />
                <p>Description: {activity.description}</p>
                <p>Date/Time: {activity.date} {activity.time}</p>
                <p>Location: {activity.location}</p>
                <button onClick={() => handleEditActivity(activity)} className="rounded-full bg-white hover:bg-gray-100 text-blue-900 hover:text-blue-950 text-base">Edit</button>
                <button onClick={() => handleDeleteActivity(activity)} className="rounded-full bg-white hover:bg-gray-100 text-blue-900 hover:text-blue-950 text-base">Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default UserProfile