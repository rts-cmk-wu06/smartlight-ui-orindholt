import icon from '../assets/profile.jpg'

const ProfileIcon = () => {
  return (
    <div className= "inline-block profileIcon">
      <img 
        src={icon} 
        alt="profile" 
        className="w-[50px] h-[50px] object-cover rounded-full border-2 border-white"
      />
    </div>
  );
}
 
export default ProfileIcon;