const tinderApi = require("./dist/cjs").default;

const facebookAuth = {
  email: "your.email@gmail.com",
  password: "your.password",
};

async function init() {
  const login = await tinderApi.auth.withFacebook(facebookAuth);

  if (login) {
    const recommandations = await tinderApi.recommandation.getRecommandations();
    console.log(recommandations);
  }
}

init();
