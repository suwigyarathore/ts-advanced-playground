interface Admin {
  id: string;
  role: string;
}
interface User {
  email: string;
}

function redirect(usr: Admin | User) {
  if('role' in usr) /*isAdmin(user)*/ {
     console.log(usr); //Automatic inferred as Admin
  } else {
     console.log(usr);
  }
}

function isAdmin(usr: Admin | User): usr is Admin {
  return (<Admin>usr).role !== undefined;
}

