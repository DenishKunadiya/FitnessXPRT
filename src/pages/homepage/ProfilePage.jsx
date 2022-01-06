import React from "react";
import Navbar from "../../components/header/Navbar.component";
import ProfileCard from "../../components/profile-card/profile-card.component";
import Profile from "../../components/profile/Profile";
import ProfileBlogNavbar from "../../components/profileblognavbar/ProfileBlogNavbar";

function ProfilePage() {
  return (
    <div>
      {/* <ProfileBlogNavbar /> */}
      <Navbar />
      <ProfileCard />
      <Profile />
    </div>
  );
}

export default ProfilePage;
