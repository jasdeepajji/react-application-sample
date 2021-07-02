import createEncryptor from "redux-persist-transform-encrypt";

const encryptor = createEncryptor({
  secretKey: "sample-app"
});

export default encryptor;
