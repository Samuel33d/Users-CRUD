import CustomizedSwitches from "./Switch";

const HandleMode = ({ handleChangeTheme }) => {
  return (
    <button className="mt-7  switch " onClick={handleChangeTheme}>
      <CustomizedSwitches />
    </button>
  );
};
export default HandleMode;
