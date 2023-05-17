import { HiOutlineCalendar } from 'solid-icons/hi'
import "swiper/swiper.min.css";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { A } from "@solidjs/router";

export function Calendar({ trabalhos }: any) {
  return (
    <section class="w-full pt-5 min-w-[25vw] md:pr-14">
      <A href="/calendario">
        <h2 class="flex flex-row text-lg lg:text-2xl font-sans font-light text-begeMedio">
          <HiOutlineCalendar class="w-10 h-6 lg:w-14 lg:h-8 fill-begeMedio" />
          Calendário
        </h2>
      </A>
      <ul class="mt-10">
        {trabalhos.map((trabalho: any, key: number) => (
          <li key={key} class="flex gap-3 mb-3">
            <div class="bg-white px-3 rounded-xl flex flex-col justify-center text-center shadow-sm">
              <span class="text-lg lg:text-2xl p-0 m-0 font-bold text-begeMedio tracking-tight">
                <A href={`trabalho/${trabalho.id}`}>
                  {format(trabalho.dataInicio, "dd")}
                </A>
              </span>
              <span class="text-ellipsis text-begeEscuro text-xs lg:text-base p-0 -mt-1">
                <A href={`trabalho/${trabalho.id}`}>
                  {format(trabalho.dataInicio, "MMM", { locale: pt })}
                </A>
              </span>
            </div>
            <div class="text-sm lg:text-xl flex flex-col text-begeEscuro py-2">
              <span class="">
                <A href={`trabalho/${trabalho.id}`}>
                  <b>{trabalho.nome}</b>
                </A>
              </span>
              <span class="text-xs lg:text-sm">
                {format(trabalho.dataInicio, "EEEE", { locale: pt })},{" "}
                {trabalho.horaInicio}, {trabalho.farda}
              </span>
              <span class="text-xs lg:text-sm">
                <b>Hinário:</b> {trabalho.hinario}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
