import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopNavBtn() {
    const navigate = useNavigate();
    const login = () => {
        navigate('/login')
    }
    return (
        <>
            <div style={{position:"fixed", bottom: "10px"}}>
                <div style={{animation:" bounce 1s infinite", background: "linear-gradient(to right, #6b78b1, #1a202c)",fontWeight: "bold", borderRadius: "50%", padding:" 10px"}} onClick={login}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className=" w-6 h-6 "
                        style={{zIndex:"2"}}
                    >
                        <AddIcon />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default TopNavBtn;
