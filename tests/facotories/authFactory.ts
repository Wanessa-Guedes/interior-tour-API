function createUser() {
  const userInfo = {
    email: "teste@teste.com",
    password: "teste",
    confirmpassword: "teste",
    profilepicture:
      "https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-58249506.jpg",
    userName: "Testeh",
  };
  return userInfo;
}

export const authFactory = {
  createUser,
};
