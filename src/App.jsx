import { useEffect, useState } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import BtnCreateUser from "./components/BtnCreateUser";
import UserList from "./components/UserList";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { BASE_URL, INPUTS_EMPTY_VALUES } from "./constants/users";
import { toast } from "sonner";
import { handleModalClose } from "./utils/handlers";
import Overlay from "./components/Overlay";

function App() {
  const [users, setUsers] = useState([]);
  const [isModalShow, setIsModalShow] = useState(false);
  const [idUserToEdit, setIdUserToEdit] = useState(null);
  const [isLightMode, setIsLightMode] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ? Efecto para traer los usuarios apenas se abra la aplicación
  useEffect(() => {
    getAllUsers();
  }, []);

  // ? Función del boton Crear/Actualizar
  const submit = (data) => {
    if (data.image_url === "") data.image_url = "noImage";

    if (idUserToEdit) {
      updateUser(data);
    } else {
      createUser(data);
    }
  };

  // ? Obtener usuarios
  const getAllUsers = () => {
    axios
      .get(BASE_URL + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  // ? Crear usuario
  const createUser = (data) => {
    console.log(data);
    axios
      .post(BASE_URL + "/users/", data)
      .then(() => {
        getAllUsers();
        handleModalClose(setIsModalShow);
        reset(INPUTS_EMPTY_VALUES);
        toast.success("User has been created");
      })
      .catch((err) => console.log(err));
  };

  // ! Eliminar usuario
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5465FF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(BASE_URL + `/users/${id}`)
          .then(() => getAllUsers())
          .catch((err) => console.log(err));
        Swal.fire("Deleted!", "The user has been deleted.", "success");
      }
    });
  };

  // ! Función manejadora del btn update
  const handleClickEdit = (userToEdit) => {
    setIsModalShow(true);
    reset({
      first_name: userToEdit.first_name,
      last_name: userToEdit.last_name,
      email: userToEdit.email,
      password: userToEdit.password,
      birthday: userToEdit.birthday,
      image_url: userToEdit.image_url,
    });
    setIdUserToEdit(userToEdit.id);
  };

  // ! Actualizar usuario
  const updateUser = (data) => {
    axios
      .put(BASE_URL + `/users/${idUserToEdit}/`, data)
      .then(() => {
        getAllUsers();
        handleModalClose(setIsModalShow);
        reset(INPUTS_EMPTY_VALUES);
        setIdUserToEdit(null);
      })
      .catch((err) => console.log(err));
  };

  const handleChangeTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <main
      className={`bg-[url('/bg.avif')] bg-fixed bg-cover bg min-h-screen ${
        isLightMode ? "" : "dark"
      }  relative`}
    >
      {isLightMode ? "" : <Overlay />}
      <BtnCreateUser
        isModalShow={isModalShow}
        setIsModalShow={setIsModalShow}
        idUserToEdit={idUserToEdit}
        users={users}
        handleChangeTheme={handleChangeTheme}
      />
      <UsersForm
        getAllUsers={getAllUsers}
        isModalShow={isModalShow}
        setIsModalShow={setIsModalShow}
        setUsers={setUsers}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        idUserToEdit={idUserToEdit}
        submit={submit}
        errors={errors}
      />

      <UserList
        users={users}
        setUsers={setUsers}
        deleteUser={deleteUser}
        handleClickEdit={handleClickEdit}
        isModalShow={isModalShow}
      />
    </main>
  );
}

export default App;
