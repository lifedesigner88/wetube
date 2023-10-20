import User from "../models/User";

// Global router

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

export const postJoin = async (req, res) => {
  const { email, username, password, password2, name, location } = req.body;
  let errorMessage = "";
  const passConfirm = password !== password2;
  const usernameExists = await User.exists({ username });
  const emailExists = await User.exists({ email });

  if (passConfirm || usernameExists || emailExists) {
    if (passConfirm) {
      errorMessage = "Password";
    }
    if (usernameExists) {
      errorMessage = errorMessage + " username";
    }
    if (emailExists) {
      errorMessage = errorMessage + " email";
    }
    return res.render("join", {
      pageTitle: "join",
      errorMessage: `Check ${errorMessage}`,
    });
  }

  await User.create({
    email,
    username,
    password,
    name,
    location,
  });
  return res.redirect("/login");
};
export const handleLogin = (req, res) => res.send("Login 👌");
export const handleSee = (req, res) => res.send("ID page 👌");

// User router
export const handleLogout = (req, res) => res.send("Logout(user) 😊");
export const handleEdit = (req, res) => res.send("Edit(user) 😊");
export const handleDelet = (req, res) => res.send("Delet(user) 😊");
