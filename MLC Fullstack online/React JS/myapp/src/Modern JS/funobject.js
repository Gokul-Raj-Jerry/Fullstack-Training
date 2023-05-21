let user = {
  userName: "Tom",
  age: 23,
  location: "TN",
};

let getuData = function (udata) {

  return {
    emp: `${udata.userName} ${udata.age} ${udata.location}`,
  };

};

let employs = getuData(user);
console.log(employs.emp);
