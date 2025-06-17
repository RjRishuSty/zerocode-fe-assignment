import React, { createContext, useState } from "react";

export const profileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(false);

  const handleProfileOpen = () => setProfile(true);
  const handleProfileClose = () => setProfile(false);
  return (
    <profileContext.Provider value={{ profile, handleProfileOpen, handleProfileClose }}>
      {children}
    </profileContext.Provider>
  );
};

export default ProfileProvider;
