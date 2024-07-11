import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import icon from "../../../images/cover.jpg";

export const Signup = () => {
    const [formData,setFormData]= useState({});
    const [loading, setLoading]=useState(false);
    const navigate=useNavigate();

    const handleChange=(e: { target: { id: any; value: any; }; }) =>{
        setFormData({
            ...formData, //spread operator
            [e.target.id]:e.target.value,
        });
    }

    const handleAuth=async (e: { preventDefault: () => void; })=>{
        e.preventDefault();

    };

    return (
        <div className="h-[100vh] w-[100vw] overflow-y-hidden overflow-x-hidden">
            <div className="h-[100vh] w-[130vw] transition-transform duration-1000 -translate-x-[30vw]">
                <div className="w-[100vw] h-[100%] inline-block">
                    <img src={icon} alt="" className="w-[100%] h-[100%]"/>
                </div>
                <div className="w-[30vw] h-[100%] relative inline-block border-black border-[1px]">
                    <div className="w-[100%] h-[30vh] mt-4 mb-4 pl-9 pr-9 absolute bottom-0 top-[20vh] right-0 mx-auto ">
                        <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
                        <form onSubmit={handleAuth} className="flex flex-col gap-4">
                            <input type="text" placeholder="username" className="border p-3 rounded-lg" id='username'
                                   onChange={handleChange}/>
                            <input type="email" placeholder="email" className="border p-3 rounded-lg" id='email'
                                   onChange={handleChange}/>
                            <input type="password" placeholder="password" className="border p-3 rounded-lg"
                                   id='password' onChange={handleChange}/>
                            <button disabled={loading}
                                    className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                                {loading ? 'loading...' : 'SIGN UP'}
                            </button>
                        </form>
                        <div className="flex gap-2 mt-5">
                            <p>Have an account?</p>
                            <Link to={"/login"}>
                                <span className="text-blue-700">Sign in</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};