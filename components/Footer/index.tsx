"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
        <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/logo/logo-2.svg"
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
                {/* <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lobortis.
                </p> */}

                <div className="flex items-center justify-center">

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/routeinvest"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
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

               

                  {/* YouTube */}
                  {/* <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
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

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/route-investments/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
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

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Endereço
                </h2>
                <ul>
                  <li>
                    <p
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Avenida das Américas, 3434 - Bloco 4, Sala 316, Barra da Tijuca - Rio de Janeiro, RJ, CEP 22631-000
                    </p>
                  </li>
                  {/* <li>
                    <Link
                      href="https://www.necton.com.br/seja-parceiro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Para acessar nossa lista de sócios clique aqui: SejaBTG
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                  E-mail
                </h2>
                <ul>
                  <li>
                    <a
                      href="mailto:contato@routeinvestimentos.com.br"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      contato@routeinvestimentos.com.br
                    </a>
                  </li>
                </ul>
                <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Telefone
                </h2>
                <ul>
                  <li>
                    <a
                      href="tel:1150260007"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      (11) 5026-0007
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Ouvidoria
                </h2>
                <ul>
                  <li>
                    <a
                      href="tel:08007725755"
                      className="mb-1 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                     0800 772 5755
                    </a>
                  </li>
                  <li>
                    <a
                      href=" https://www.safra.com.br/atendimento"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      www.safra.com.br/atendimento
                    </a>
                  </li>

                  <li>
                    <Link
                      href="/politicas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Política de Privacidade
                    </Link>
                  </li>
                </ul>
              </div>

              <h2 style={{ marginTop: '-50px' }} className="mb-30 text-xl font-bold text-black dark:text-white">
                Horário de atendimento
              </h2>
              <ul>
                <li>
                  <a

                    style={{ marginBottom: '50px' }}
                    href="tel:1150260007"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Das 9h às 18h, de segunda à sexta-feira, exceto feriados

                  </a>
                </li>
              </ul>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
            <div className="px-6 pb-10 pt-10">
            <p className="text-[8px]/4 sm:text-[9px]/4 text-left text-body-color">
  Route Assessoria em Investimentos LTDA (CNPJ 54.542.639/0001-28) refere-se à Assessoria de Investimentos, Correspondência Bancária, e Corretagem de Seguros e/ou Previdência, devidamente registrada na Comissão de Valores Mobiliários (CVM), na forma da Resolução CVM n° 178/2023, e credenciada junto ao Banco Safra S.A. e/ou Safra Corretora de Valores e Câmbio Ltda., o que pode ser verificado no site da CVM (www.cvm.gov.br) ou no site do Banco Safra (www.safra.com.br/safra-invest.htm).
  <br /><br />
  O Assessor de Investimentos é preposto do Safra na distribuição de produtos de investimentos e captação de clientes. Investimentos em títulos e valores mobiliários envolvem riscos. A decisão pelo tipo e perfil de investimento é de responsabilidade exclusiva do cliente, razão pela qual se recomenda fortemente que o investidor faça uma avaliação independente sobre as operações pretendidas, riscos, condições e tributação aplicável. Quaisquer referências e rentabilidades passadas não significam de qualquer forma a garantia ou previsibilidade de rentabilidades futuras.
  <br /><br />
  A marca SAFRA INVEST é de propriedade e objeto de direitos exclusivos de empresas do Grupo J. Safra, das quais fazem parte o Banco Safra S.A. e Safra Corretora de Valores e Câmbio Ltda (&quot;Safra&quot;). O conteúdo desta mensagem está sujeito a alterações, condições adicionais e negociação específica, não se configurando ou devendo ser entendida como oferta pública ou privada, relatório de análise ou consultoria de valores mobiliários tais como definidos na legislação e regulamentação. O Grupo Safra não será responsável por perdas diretas, indiretas ou lucros cessantes decorrentes da utilização deste material para quaisquer finalidades.
  <br /><br />
  Para informações e dúvidas, favor contatar o seu Assessor de Investimentos, corretor ou correspondente bancário ou a Central de Atendimento Safra Invest:
  55 (11) 3253 4455 (Capital e Grande São Paulo) e 0300 105 1234 (Demais localidades) - De 2ª a 6ª feira, das 8h às 21h30, exceto feriados.
  <br />
  Serviço de Atendimento ao Consumidor (SAC): 0800 772 5755.
  <br />
  Atendimento aos Portadores de Necessidades Especiais Auditivas e de Fala: 0800 772 4136. 24 horas por dia.
  <br />
  Ouvidoria (caso já tenha recorrido ao SAC e não esteja satisfeito): 0800 770 1236.
  <br />
  Atendimento aos Portadores de Necessidades Especiais Auditivas e de Fala: 0800 727 7555.
  <br />
  WhatsApp: (11) 2650-9909 e Chat: www.safra.com.br/atendimento/ouvidoria.htm. De 2ª a 6ª feira, das 9h às 18h, exceto feriados.
  <br />
  Ou para formulário eletrônico disponível 24 horas acesse: safra.com.br/atendimento/ouvidoria.htm.
  <br /><br />
  Política de Privacidade:
  Conheça a Política de Privacidade do Safra: www.safra.com.br/sobre/portal-da-privacidade-e-lgpd.htm
</p>


            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-sm text-body-color dark:text-white">
              © 2024 Route Investimentos LTDA. Todos os direitos reservados.{" "}
            </p>
            <a
              href="https://tyra.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex justify-center text-center text-sm text-body-color dark:text-white"
            >
              Criado e monitorado por&nbsp;<b>Tyra.pro</b>
            </a>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#001f62"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#001f62" stopOpacity="0.62" />
                <stop offset="1" stopColor="#001f62" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#001f62" stopOpacity="0" />
                <stop offset="1" stopColor="#001f62" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#001f62" stopOpacity="0.62" />
                <stop offset="1" stopColor="#001f62" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#001f62" stopOpacity="0" />
                <stop offset="1" stopColor="#001f62" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#001f62" stopOpacity="0.62" />
                <stop offset="1" stopColor="#001f62" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#001f62" stopOpacity="0" />
                <stop offset="1" stopColor="#001f62" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
