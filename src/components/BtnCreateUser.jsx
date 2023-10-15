import { IconArrowBadgeUpFilled } from "@tabler/icons-react";
import HandleMode from "./HandleMode";

const BtnCreateUser = ({
  isModalShow,
  setIsModalShow,
  idUserToEdit,
  users,
  handleChangeTheme,
}) => {
  const handleModalOpen = () => {
    setIsModalShow(true);
  };
  return (
    <div
      className={`flex  gap-2 sm:gap-5 justify-center sm:justify-end px-10 max-w-[1024px] mx-auto ${
        isModalShow ? "opacity-0" : "opacity-100"
      } transition-opacity relative`}
    >
      <HandleMode handleChangeTheme={handleChangeTheme} />
      <button
        onClick={handleModalOpen}
        className=" btn-submit btn-submit py-2 bg-[#5465FF] hover:bg-[#4b59db] text-white  w-[270px] rounded-md sm:w-[250px] mt-6 self-end flex flex-col justify-center items-center"
      >
        {idUserToEdit ? "Edit User" : "Create New User"}
        <IconArrowBadgeUpFilled
          size={58}
          className={`cursor arrow absolute top-28 sm:top-10 text-[#5465FF] drop-shadow-lg ${
            users.length > 0 ? "opacity-0" : "opacity-100"
          } hidden sm:block`}
        />
      </button>
    </div>
  );
};
export default BtnCreateUser;
