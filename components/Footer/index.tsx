"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-3/12 xl:w-3/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-2.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/logo/logo-2.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                {/* <p className="mb-9 text-base leading-relaxed text-[#788293] dark:text-[#788293]-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lobortis.
                </p> */}
                <div className="flex items-center justify-center">
                  <a
                    href="https://www.instagram.com/verbumcapital/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-[#788293] duration-300 hover:text-blue-950 dark:text-[#788293]-dark dark:hover:text-primary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      width="19" 
                      height="19" 
                      viewBox="0 0 256 256"
                    >
                      <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"
                      fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-[#788293] duration-300 hover:text-blue-950 dark:text-[#788293]-dark dark:hover:text-blue-950"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  {/* <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-[#788293] duration-300 hover:text-blue-950 dark:text-[#788293]-dark dark:hover:text-blue-950"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a> */}
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#788293] duration-300 hover:text-blue-950 dark:text-[#788293]-dark dark:hover:text-blue-950"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-3 text-xl font-bold text-black dark:text-black">
                  Endereço
                </h2>
                <ul>
                  <li>
                    <p
                      className="mb-4 inline-block text-base text-[#788293] duration-300 hover:text-blue-950 dark:text-[#788293]-dark dark:hover:text-blue-950"
                    >
                      Rua Helena, 218, 5° andar, CJ 509 e 510, Vila Olímpia - SP
                    </p>
                  </li>
                  {/* <li>
                    <Link
                      href="https://www.sejabtg.com/escritorios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 inline-block text-base text-[#788293] duration-300 hover:text-blue-950 dark:text-[#788293]-dark dark:hover:text-blue-950"
                    >
                      Para acessar nossa lista de sócios clique aqui: SejaBTG
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-3 text-xl font-bold text-black dark:text-black">
                  E-mail
                </h2>
                <ul>
                  <li>
                    <a
                      href="mailto:contato@verbumcapital.com.br"
                      className="mb-4 inline-block text-base text-[#788293] duration-300 hover:text-blue-950 dark:text-[#788293]-dark dark:hover:text-blue-950"
                    >
                      contato@verbumcapital.com.br
                    </a>
                  </li>
                </ul>
                <h2 className="mb-3 text-xl font-bold text-black dark:text-black">
                  Telefone
                </h2>
                <ul>
                  <li>
                    <a
                      href="tel:1150260007"
                      className="mb-4 inline-block text-base text-[#788293] duration-300 hover:text-blue-950 dark:text-[#788293]-dark dark:hover:text-blue-950"
                    >
                      (11) 5026-0007
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-3 text-xl font-bold text-black dark:text-black">
                  Ouvidoria
                </h2>
                <ul>
                  <li>
                    <a
                      href="tel:08007220048"
                      className="mb-1 inline-block text-base text-[#788293] duration-300 hover:text-blue-950 dark:text-[#788293]-dark dark:hover:text-blue-950"
                    >
                      0800 7220 048
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:ouvidoria@btgpactual.com.br"
                      className="mb-4 inline-block text-base text-[#788293] duration-300 hover:text-blue-950 dark:text-[#788293]-dark dark:hover:text-blue-950"
                    >
                      ouvidoria@btgpactual.com.br
                    </a>
                  </li>
                  <li>
                    <Link
                      href="https://verbumcapital.com/politicas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 inline-block text-base text-[#788293] duration-300 hover:text-blue-950 dark:text-[#788293]-dark dark:hover:text-blue-950"
                    >
                      Política de Privacidade
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-sm text-[#788293] dark:text-[#788293]">
              © 2024 Verbum Capital - Acessor de Investimentos LTDA. Todos os direitos reservados.{" "}
            </p>
            <a
              href="http://cyostech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-950 flex justify-center text-center text-sm text-[#788293] dark:text-[#788293]"
            >
              Criado e monitorado por&nbsp;<b>Cyos Technologies</b>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
