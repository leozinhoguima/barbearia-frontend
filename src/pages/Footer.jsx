import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";


export function Footer() {
    return (
        <footer className=" text-black py-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
         
            
            <div className="flex space-x-4 text-lg mt-4 md:mt-0">
              <FaFacebookF />
              <FaInstagram />
              <FaWhatsapp />
              
            </div>
          </div>
          
          <hr className="border-[#222] my-4" />
          
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-black-500">
            <p>Barbearia Dallas 2025 - todos os direitos reservados</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:underline">política de privacidade</a>
              <a href="#" className="hover:underline">termos de uso</a>
            </div>
          </div>
        </footer>
      );
}