import { IconX } from "@tabler/icons-react";
import { handleModalClose } from "../utils/handlers";
import {
  CHARACTERS_INPUT,
  EMAIL_VALIDATION,
  MAX_LENGTH150_INPUT,
  MAX_LENGTH25_INPUT,
  MIN_LENGTH_INPUT_PASSWORD,
  REQUIRED_INPUT,
} from "../constants/validations";

const UsersForm = ({
  isModalShow,
  setIsModalShow,
  handleSubmit,
  register,
  idUserToEdit,
  submit,
  errors,
}) => {
  return (
    <section>
      <form
        onSubmit={handleSubmit(submit)}
        className={`form absolute ${
          isModalShow
            ? "top-0 sm:left-0 "
            : "-top-[100rem] sm:top-0 sm:-left-[100rem] "
        } bg-[#3C3C3D] grid place-items-center  gap-4 py-5 md:gap-1 pb-20 text-[#E5E5E5] text-sm shadow-2xl sm:fixed 
      sm:w-[300px] md:w-[480px] sm:h-full sm:rounded-r-[30px]  transition-all sm:rounded-bl-none sm:drop-shadow-2xl z-50 md:text-lg`}
      >
        <button
          onClick={() => handleModalClose(setIsModalShow)}
          type="button"
          className="absolute bg-red-500 hover:bg-red-600 sm:top-6 sm:right-6
    rounded-full p-1 top-4 right-4"
        >
          <IconX />
        </button>
        <h3 className="pt-6  text-xl font-medium pb-4">
          {idUserToEdit ? "Update User" : "Create New User"}
        </h3>
        <div className="flex flex-col gap-2">
          <label className="text-[#5465FF]" htmlFor="name">
            Name
          </label>
          <input
            className=" placeholder:text-[#ababab] bg-transparent border-[1px] border-[#E5E5E5] rounded-sm  w-[270px] outline-none px-4 py-2 font-medium md:w-[345px]"
            type="text"
            placeholder="Enter name"
            {...register("first_name", {
              required: REQUIRED_INPUT,
              maxLength: MAX_LENGTH25_INPUT,
              pattern: CHARACTERS_INPUT,
            })}
            id="name"
          />
          {errors.first_name && (
            <span className=" a  text-sm text-red-500 ">
              {errors.first_name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#5465FF]" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="placeholder:text-[#ababab] bg-transparent border-[1px] border-[#E5E5E5] rounded-sm  w-[270px] outline-none px-4 py-2 font-medium md:w-[345px]"
            type="text"
            placeholder="Enter last name"
            {...register("last_name", {
              required: REQUIRED_INPUT,
              maxLength: MAX_LENGTH25_INPUT,
              pattern: CHARACTERS_INPUT,
            })}
            id="lastName"
          />

          {errors.last_name && (
            <span className="text-sm text-red-500 ">
              {errors.last_name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#5465FF]" htmlFor="email">
            Email adress
          </label>
          <input
            className="placeholder:text-[#ababab] bg-transparent border-[1px] border-[#E5E5E5] rounded-sm  w-[270px] outline-none px-4 py-2 font-medium md:w-[345px]"
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: REQUIRED_INPUT,
              maxLength: MAX_LENGTH150_INPUT,
              pattern: EMAIL_VALIDATION,
            })}
            id="email"
          />
          {errors.email && (
            <span className="text-sm text-red-500 ">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#5465FF]" htmlFor="password">
            Password
          </label>
          <input
            className="placeholder:text-[#ababab] bg-transparent border-[1px] border-[#E5E5E5] rounded-sm w-[270px] outline-none px-4 py-2 font-medium md:w-[345px]"
            type="password"
            placeholder="Enter password"
            {...register("password", {
              required: REQUIRED_INPUT,
              maxLength: MAX_LENGTH25_INPUT,
              minLength: MIN_LENGTH_INPUT_PASSWORD,
            })}
            id="password"
          />
          {errors.password && (
            <span className="text-sm text-red-500 ">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#5465FF]" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="bg-transparent border-[1px] border-[#E5E5E5] rounded-sm w-[270px] outline-none px-4 py-2 font-medium md:w-[345px]"
            type="date"
            {...register("birthday", {
              required: REQUIRED_INPUT,
            })}
            id="birthday"
          />
          {errors.birthday && (
            <span className="text-sm text-red-500 ">
              {errors.birthday.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#5465FF]" htmlFor="imageUrl">
            Image Url
          </label>
          <input
            className="placeholder:text-[#ababab] bg-transparent border-[1px] border-[#E5E5E5] rounded-sm w-[270px] outline-none px-4 py-2 font-medium md:w-[345px]"
            type="text"
            placeholder="not required"
            {...register("image_url")}
            id="imageUrl"
          />
        </div>
        <button
          type="submit"
          className="btn-submit py-2 bg-[#5465FF] hover:bg-[#4b59db]  w-[270px] rounded-sm md:w-[345px] mt-6"
        >
          {idUserToEdit ? "Save changes" : "Upload"}
        </button>
      </form>
      <div
        className={`bg-black/30 dark:bg-black/30 fixed w-screen left-0 top-0 z-20 bottom-0 transition-colors ${
          isModalShow ? "visible" : "hidden"
        }`}
      ></div>
    </section>
  );
};
export default UsersForm;
