import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-100 w-screen h-screen flex items-center justify-center">
      <div className="w-1/5 h-1/2 flex flex-col items-center gap-4">
        <img src="./image/logo2.svg" alt="Logo Kiwify" className="w-40" />

        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-extrabold">Entrar na sua conta</h2>

          <div className="flex gap-1">

            <h1>Ou</h1>
            <Link href="/cadastro">
              <p className="text-blue-700 font-semibold cursor-pointer">fazer cadastro</p>
            </Link>

          </div>
        </div>

        <div className="bg-white rounded-md h-64 flex flex-col items-center gap-4">

          <form className=" flex flex-col w-80 m-4 gap-1">
            <label htmlFor="email" className="text-sm font-semibold">E-mail</label>
            <input type="email" name="email" className="w-80 border-2 rounded-md mb-3" />

            <label htmlFor="password" className="text-sm font-semibold">Senha</label>
            <input type="password" name="password" className="w-80 border-2 rounded-md" />
            <Link href="/redefinir">
              <p className="text-right text-blue-700 font-semibold cursor-pointer">Esqueceu sua senha?</p>
            </Link>
          </form>

          <button className="bg-blue-700 w-80 h-8 text-white text-sm rounded-md font-semibold cursor-pointer">Entrar</button>

        </div>
      </div>
    </div>
  );
}
