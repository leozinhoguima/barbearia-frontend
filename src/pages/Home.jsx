import { Footer } from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-gray-100 to-gray-200">
      <main className="flex-1 p-6 max-w-screen-lg mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-4 drop-shadow">
            Bem-vindo à Barbearia Dallas
          </h1>
          <p className="text-center text-gray-700 text-lg mb-8">
            Gerencie clientes, agendamentos e muito mais.
          </p>
        </div>

        <section className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Conheça o nosso estabelecimento
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr1DWLaecgbA1-EnuargpweL_Doc6vCIjSb33CUTxVUA6ycmm1S0H8dmsbfLSQvUWbSv3936yWWQLAbBSscFtQ2eBUUuowsYPZ8lQwd2aWqkiNPUUa2Q14XOfLsGJGZnVMo3Pg=s680-w680-h510-rw"
              alt="Barbearia Dallas 2"
              className="w-72 h-52 rounded-xl shadow-lg object-cover border-4 border-blue-100"
            />
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPivTnb-HSgmVqpVqU1AWQz0FC4DM-ifP8ZROtt=s680-w680-h510-rw"
              alt="Barbearia Dallas 1"
              className="w-72 h-52 rounded-xl shadow-lg object-cover border-4 border-blue-100"
            />
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nphi-u_TkFzvrYZg_w7h1H-sJHU9qItKrSxeoqKsAG0Lu77tEKCP0tLyVXmMVB8zWptJRP3DPz-OVx1sYiFbQMUAF41bZimkhrWYPQT7unIKk8eGS_Z5Mq5FAVgEnOFazT6BGWt=w243-h244-n-k-no-nu"
              alt="Barbearia Dallas 2"
              className="w-72 h-52 rounded-xl shadow-lg object-cover border-4 border-blue-100"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}