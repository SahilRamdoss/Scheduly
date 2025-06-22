import { useState, useEffect } from "react";


export default function Login() {

    const [newAccount, setNewAccount] = useState(true);

    const loginAccount = ()=>{
        setNewAccount(false);
    }

    const createAccount = ()=>{
        setNewAccount(true);
    }


    return (
        <>
            <div className="w-full h-full flex justify-center items-center p-4 bg-(--color-darkBackground)">
                <form className="p-4 flex flex-col justify-start items-center rounded-lg bg-linear-to-b from-(--color-highlight) from-0% to-(--color-cardPrimary) to-10% w-[100%] max-w-[420px] aspect-4/5">
                    <div className='font-bold text-2xl mb-[15%]'>
                        Scheduly
                    </div>
                    {newAccount ?
                        <div className="w-full">
                            <div className="group w-full mb-4 flex flex-col justify-start items-start">
                                <label htmlFor="project" className="duration-500 w-full font-mono text-xs group-has-[input:focus]:text-(--color-highlight)">Username</label>
                                <input type="text"
                                    name="username"
                                    id="username"
                                    className="duration-500 w-full text-sm focus:outline-0 border-b-2 focus:border-(--color-highlight)"
                                />
                            </div>
                            <div className="group w-full mb-4 flex flex-col justify-start items-start">
                                <label htmlFor="project" className="duration-500 w-full font-mono text-xs group-has-[input:focus]:text-(--color-highlight)">Email</label>
                                <input type="email"
                                    name="email"
                                    id="email"
                                    className="duration-500 w-full text-sm focus:outline-0 border-b-2 focus:border-(--color-highlight)"
                                />
                            </div>
                        </div>
                        :
                        <div className="group w-full mb-4 flex flex-col justify-start items-start">
                            <label htmlFor="project" className="duration-500 w-full font-mono text-xs group-has-[input:focus]:text-(--color-highlight)">Username/Email</label>
                            <input type="text"
                                name="usernameemail"
                                id="usernameemail"
                                className="duration-500 w-full text-sm focus:outline-0 border-b-2 focus:border-(--color-highlight)"
                            />
                        </div>
                    }

                    <div className="group w-full mb-[15%] flex flex-col justify-start items-start">
                        <label htmlFor="project" className="duration-500 w-full font-mono text-xs group-has-[input:focus]:text-(--color-highlight)">Password</label>
                        <input type="password"
                            name="password"
                            id="password"
                            className="duration-500 w-full text-sm focus:outline-0 border-b-2 focus:border-(--color-highlight)"
                        />
                    </div>
                    <div className="w-full grow-1 flex flex-col items-center justify-end">
                        <button id="Login_Button" className="hover:-translate-y-0.5 duration-300 font-semibold rounded-lg hover:cursor-pointer w-full bg-(--color-highlight)">
                            {newAccount? "Sign in" : "Log in"}
                        </button>
                        {newAccount?
                        <div className="text-xs mt-1 text-(--color-disabled)">or <u className="hover:cursor-pointer" onClick={()=>{loginAccount()}}>login</u> to your account</div>
                        :
                        <div className="text-xs mt-1 text-(--color-disabled)">or <u className="hover:cursor-pointer" onClick={()=>{createAccount()}}>create</u> a new account</div>}
                    </div>
                </form>
            </div>
        </>
    )
}