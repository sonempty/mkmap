const users = [
  { user: "editor", pass: "112368", role: "editor" },
  { user: "sale", pass: "MekongNet", role: "read" },
];

export const signIn = (user, pass) => {
  let u = users.find((p) => p.user == user && p.pass == pass);
  if (u) {
    localStorage.setItem("mkn", JSON.stringify({ user: user, role: u.role }));
    return true;
  } else {
    localStorage.removeItem("mkn");
    return false;
  }
};

export const signOut = () => {
  localStorage.removeItem("mkn");
  return true;
};

export const checkAuth = () => {
  let userText = localStorage.getItem("mkn");
  let userInfor = JSON.parse(userText);
  if (
    userInfor &&
    users.find((u) => u.user == userInfor.user && u.role == userInfor.role)
  )
    return userInfor.role;
  else return false;
};
