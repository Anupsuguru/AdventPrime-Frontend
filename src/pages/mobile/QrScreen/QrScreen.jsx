import {Scanner} from "@yudiel/react-qr-scanner";
import {useEffect, useState} from "react";
import {useMsal} from "@azure/msal-react";
import {loginRequest} from "../../../auth/authConfig.jsx";
import axios from "axios";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {Button} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import {useNavigate} from "react-router-dom";

export default function QrScreen() {
    // const[qr]
    const { instance, accounts } = useMsal();
    const [accessToken, setAccessToken] = useState("");
    const [open, setOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
        navigate('/'); // Navigate to the homepage
    };
    useEffect(() => {
        const getAccessToken = async () => {
            try {
                const response = await instance.acquireTokenSilent({
                    ...loginRequest,
                    account: accounts[0],
                });
                axios.defaults.headers.common['Authorization'] = 'Bearer '+response.accessToken;
                setAccessToken(response.accessToken);
                // console.log(response.accessToken)
                // accessToken = await response.accessToken
            } catch (error) {
                console.error(error);
            }
        };

        getAccessToken();
    }, [instance, accounts]);
    const [qrValue, setQrValue] = useState("");

    useEffect(()=>{
        if(accessToken !=="" && qrValue !== "") {
            console.log(qrValue);
        axios.post(import.meta.env.VITE_API_URL+"attendance",{
            "qrvalue":qrValue
        }).then(
            (response) => {
                if (response.status === 200) {
                    setDialogMessage(response.data.message);
                } else {
                    setDialogMessage(response.data.message);
                }
                setOpen(true);
            }
        ).catch(error => {
                    console.error("An error occurred. Please try again.", error);
                });
        }

    },[qrValue])
    return(
        <>
            <div className="w-[90%] h-content mt-1/2 ml-1/20" >
                <Scanner  onScan={(result) => setQrValue(result[0].rawValue)} />
            </div>
            <Dialog open={open} onClose={handleClose} sx={{
                '& .MuiPaper-root': {
                    backgroundColor: '#000000', // Set background color to black
                    color: '#ffffff', // Set text color to white
                },
            }}>
                <DialogTitle sx={{color:"#ffffff"}}>Status</DialogTitle>
                <DialogContent sx={{color:"#ffffff"}}>
                    {dialogMessage}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

        </>

    )

}