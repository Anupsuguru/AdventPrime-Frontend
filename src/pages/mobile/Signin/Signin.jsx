import {useMsal} from "@azure/msal-react";
import {loginRequest} from "../../../auth/authConfig.jsx";

export function Signin() {
    const {instance} = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch((e) => {
                console.log(e);
            });
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).catch((e) => {
                console.log(e);
            });
        }
    };

    return (
        <>

            <button onClick={() => handleLogin("redirect")}>
                Signin
            </button>
        </>
    );
}