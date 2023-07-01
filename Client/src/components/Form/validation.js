// userData = {email: "",
//             password: "",
//          }
const validation = (userData, errors, setErrors, name) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (name === "email") {
    if (!userData.email) {
      setErrors({ ...errors, email: "Falta completar este campo" });
    } else if (userData.email.length > 35) {
      setErrors({
        ...errors,
        email: "No está permitido emails de más de 35 caracteres.",
      });
    } else if (!emailRegex.test(userData.email)) {
      setErrors({ ...errors, email: "Este no es un email valido" });
    } else {
      setErrors({ ...errors, email: "" });
    }
  }
  if (name === "password") {
    if (!/^.{6,10}$/.test(userData.password)) {
      setErrors({
        ...errors,
        password: "La contraseña debe contener entre 6 y 10 caracteres",
      });
    } else if (!/\d/.test(userData.password)) {
      setErrors({
        ...errors,
        password: "La contraseña debe contener al menos un numero",
      });
    } else {
      setErrors({ ...errors, password: "" });
    }
  }
};

export default validation;
