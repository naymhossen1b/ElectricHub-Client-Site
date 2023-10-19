import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { useNavigate } from "react-router-dom";
import { GrGithub, GrGoogle } from "react-icons/gr";

const Sociallogin = () => {

    const {googleLogin, githubLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSocialLogin = (media) => {
        media()
        .then(res => {
            navigate('/')
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div>
             <div>
            <div className="lg:flex gap-3  w-9/12 mx-auto  justify-center md:items-center mt-5">
            <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline">
            <GrGoogle /> Login With Google
          </button>
            <button onClick={() => handleSocialLogin(githubLogin)} className="btn lg:mt-0 mt-2 btn-outline">
            <GrGithub /> Login With Github
          </button>
        </div>
        </div>
        </div>
    );
};

export default Sociallogin;