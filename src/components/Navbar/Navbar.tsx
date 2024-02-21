import user from "../../assets/user.png";

function Navbar() {
  return (
    <div className="py-4 bg-slate-400 text-black flex px-5">
      <img src={user} alt="user" className="w-8 h-8" />

      <h1 className="text-xl pl-2">The dummy users</h1>
    </div>
  );
}

export default Navbar;
