import User from "../models/User";
import bcrypt from "bcrypt";

// Global router

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

//
// Join
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
    return res.status(400).render("join", {
      pageTitle: "join",
      errorMessage: `Check ${errorMessage}`,
    });
  }

  try {
    await User.create({
      email,
      username,
      password,
      name,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle: "join",
      errorMessage: `something ${errorMessage}`,
    });
  }
};

//
// Login
export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login Page" });
};

export const postLogin = async (req, res) => {
  const pageTitle = "Login Page";
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.render("login", {
      pageTitle,
      errorMessage: "ID dose not exists",
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Password dose not Match",
    });
  }
  return res.status(200).redirect("/");
};

// User router
export const handleSee = (req, res) => res.send("ID page 👌");
export const handleLogout = (req, res) => res.send("Logout(user) 😊");
export const handleEdit = (req, res) => res.send("Edit(user) 😊");
export const handleDelet = (req, res) => res.send("Delet(user) 😊");
