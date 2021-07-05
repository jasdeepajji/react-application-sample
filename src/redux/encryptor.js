import { encryptTransform } from "redux-persist-transform-encrypt";

export default encryptTransform({
    secretKey: "react-secret-key",
});