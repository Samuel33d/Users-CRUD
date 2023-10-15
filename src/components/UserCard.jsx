import { IconTrash, IconEdit } from "@tabler/icons-react";

const UserCard = ({ user, deleteUser, handleClickEdit }) => {
  return (
    <article className=" border-2 relative rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col gap-2 mb-5 md:mb-10 border-[#5465FF] font-bold bg-white dark:bg-black/50 dark:text-white transition-colors">
      <img
        className="object-cover w-[80px] md:w-[100px] h-[80px] md:h-[100px] md:-top-14 sm absolute rounded-[100%] left-1/2 -translate-x-1/2 -top-10 border-4 border-[#5465FF] "
        src={user.image_url === "noImage" ? "/userIcon.png" : user.image_url}
        alt=""
      />
      <h3 className="text-[24px] md:text-[29px] pb-2 pt-8 border-b font-medium">
        {user.first_name} {user.last_name}
      </h3>
      <div className="flex flex-col pt-2">
        <span className="text-sm md:text-lg text-[#cbcbcb] dark:text-white/70 transition-colors">
          Email:
        </span>
        <span className="text-sm md:text-lg">{user.email}</span>
      </div>
      <div className="flex flex-col pb-6 border-b-[1px]">
        <span className="text-sm md:text-lg text-[#cbcbcb] dark:text-white/70 transition-colors">
          Birthday
        </span>
        <span className="text-sm md:text-lg">{user.birthday}</span>
      </div>
      <div className="flex gap-2 self-end py-2">
        <button
          onClick={() => deleteUser(user.id)}
          className="p-2 bg-red-500 hover:bg-red-700 rounded-md text-white transition-colors"
        >
          <IconTrash size={19} />
        </button>
        <button
          onClick={() => handleClickEdit(user)}
          className="p-2 bg-[#BDBDBD] hover:bg-[#ababab] text-white rounded-md transition-colors"
        >
          <IconEdit size={19} />
        </button>
      </div>
    </article>
  );
};
export default UserCard;
