import React from 'react';

const ProfileHeader = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mb-12">
      {/* Banner Background */}
      <div className="h-48 md:h-64 rounded-t-3xl relative overflow-hidden">
        <img 
          src="/profile-banner.jpeg"
          alt="Profile Banner"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Profile Picture */}
      <div className="absolute -bottom-20 md:-bottom-24 left-1/2 transform -translate-x-1/2">
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white">
          <img 
            src="/profile-picture.jpg"
            alt="Siddharth Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
