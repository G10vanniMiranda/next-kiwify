import Link from "next/link";

export default function Cadastro() {
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="w-1/5 h-1/2 flex flex-col items-center gap-4">
                <img src="./image/logo2.svg" alt="Logo Kiwify" className="w-40" />

                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-extrabold">Criar nova conta</h2>

                    <div className="flex gap-1">

                        <h1>Ou</h1>
                        <a href="http://">  </a>
                        <p className="text-blue-700 font-semibold cursor-pointer">entrar na sua conta existente</p>

                    </div>
                </div>

                <div className="bg-white rounded-md h-[1000px] w-96 flex flex-col items-center gap-4">

                    <form className=" flex flex-col w-96 m-4 h-[350px] gap-2 p-5">

                        <div className="row">
                            <label htmlFor="email" className="text-sm font-semibold">E-mail</label>
                            <input type="email" name="email" className="w-full border-2 rounded-md mb-3 p-2 outline-none" />
                        </div>

                        <div className="row">
                            <label htmlFor="email" className="text-sm font-semibold">Repetir e-mail</label>
                            <input type="email" name="email" className="w-full border-2 rounded-md mb-3 p-2 outline-none" />
                        </div>

                        <div className="row">
                            <label htmlFor="password" className="text-sm font-semibold">Senha</label>
                            <input type="password" name="password" className="w-full border-2 rounded-md p-2" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password" className="text-sm font-semibold">Pais</label>

                            <select className="border-2 p-2 rounded-md">
                                <option>Selecione uma opção</option>
                                <option>Estados Unidos</option>
                                <option>Brasil</option>
                                <option>Japão</option>
                            </select>
                        </div>

                        <div className="">
                            <input type="checkbox" />
                            <label className="text-sm"> Eu li e aceito os termos de uso,
                                <Link href="https://kiwify.com.br/termos-de-uso/" className="border-b-2 pr-2 pl-2">
                                    termos de licença de uso de software, </Link>
                                política de conteúdo da Kiwify
                            </label>
                        </div>

                        <Link href="/">
                            <button className="bg-blue-700 w-full h-8 text-white text-sm rounded-md font-semibold cursor-pointer">
                                Criar conta
                            </button>
                        </Link>

                    </form>


                </div>
            </div>
        </div>
    );
}
