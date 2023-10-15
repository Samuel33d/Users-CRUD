import UserCard from "./UserCard";
import { Toaster } from "sonner";

const UserList = ({ users, deleteUser, handleClickEdit }) => {
  return (
    <section className=" flex flex-col h-[100%] px-3 md:px-10 gap-4 max-w-[1024px] mx-auto">
      <h2 className="z-40 drop-shadow-2xl text-center text-xl md:text-2xl font-bold text-[#5465FF]  pt-10 pb-8 dark:text-white transition-colors">
        List of users
      </h2>
      {users.length > 0 ? (
        <>
          <ul
            className="w-[100%] grid 
      sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,450px)] gap-10 py-10"
          >
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                handleClickEdit={handleClickEdit}
              />
            ))}
          </ul>
          <Toaster richColors />
        </>
      ) : (
        <>
          <div className="grid place-items-center min-h-[50vh]">
            <span className="text-2xl md:text-[1.5rem] text-center dark:text-white z-40 transition-colors">
              You dont have any users on your list. Create a new user
            </span>
          </div>
        </>
      )}
    </section>
  );
};
export default UserList;
