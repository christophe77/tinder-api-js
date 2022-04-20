const tinderApi = require("./dist/cjs").default;

const facebookAuth = {
  token:
    "EAAGm0PX4ZCpsBADOYsqssNBjtHFqFSADsOpjbZAfNgl7JkIjFwPlgvL2nj3oUqcCtWce1cLSAJHgG4d6m5hEeMlvbdOPFItD1YBik7cZByptBC6ZC5ovCI2IpsI3ZCBXZC5YztZCRcaqRZB1qcj8xWdceDjzHQI66Lkfcn20OP4qNdDlNjVeUP7e",
  facebook_id: "10203657144023091",
};

async function init() {
  const login = await tinderApi.auth.withFacebook(facebookAuth);
  if (login) {
    const recommandations = await tinderApi.recommandation.getRecommandations();
    console.log(recommandations);
  }
}

init();
