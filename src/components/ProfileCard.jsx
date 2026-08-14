import { useState } from "react";

const ProfileCard = ({ user, onDelete }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-cyan-950/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-cyan-500/10">
      
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-xl font-bold text-slate-950 shadow-lg shadow-cyan-950/30">
          {user.name.charAt(0)}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            {user.name}
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            {user.role}
          </p>
        </div>
      </div>

      <span className="mt-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
        {user.role.includes("Frontend")
          ? "Frontend"
          : user.role.includes("Backend")
          ? "Backend"
          : user.role.includes("UI/UX")
          ? "UI/UX"
          : "Developer"}
      </span>

      <p className="mt-3 text-sm font-medium text-cyan-300">
        {user.city}
      </p>

      <div className="mt-6 flex gap-3">
        <button
          className={
            isFollowing
              ? "flex-1 rounded-xl border border-cyan-500 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
              : "flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:from-cyan-400 hover:to-blue-500"
          }
          onClick={() => setIsFollowing((prev) => !prev)}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>

        <button
          className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition hover:border-red-400 hover:bg-red-500/20"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;