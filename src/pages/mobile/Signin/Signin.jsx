import {useMsal} from "@azure/msal-react";
import {loginRequest} from "../../../auth/authConfig.jsx";
import AdventPrime_2removebg from "../../../assets/AdventPrime_2-removebg.svg";
import "./Signin.css"


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
            <div className="flex flex-col items-center justify-center min-h-dvh dark:bg-black">
                {/*<div className="spotlight relative overflow-hidden">*/}
                <div className="relative overflow-hidden">
                    <img src={AdventPrime_2removebg} alt="AdventPrime Sign In" className="h-64 w-auto"/>
                </div>
                <div className="mt-8">
                    {/*<button className="px-4 py-2 bg-blue-600 text-white rounded-md">Sign In</button>*/}
                    <button className="px-4 py-2  sarala-regular text-white rounded-md ml-4 dark:bg-[#282828]" onClick={() => handleLogin("redirect")}>
                        Sign In
                    </button>
                </div>
            </div>

            {/*<button onClick={() => handleLogin("redirect")}>*/}
            {/*    Signin*/}
            {/*</button>*/}
        </>
    );
}