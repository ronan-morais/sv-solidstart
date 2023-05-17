"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { parseISO, format, isBefore, isAfter, isSameDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineBookOpen,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { TbHanger } from "react-icons/tb";
import { useCalendarioStore } from "store";
import Link from "next/link";

function classs(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function Lista({ trabalhos }: any) {
  const hoje = useCalendarioStore((state: any) => state.hoje);
  const mesAtual = useCalendarioStore((state: any) => state.mesAtual);

  const filterEventos =
    trabalhos &&
    trabalhos.filter(
      (evento: any) =>
        format(evento.dataInicio, "MMM-yyyy") === mesAtual
    );

  if (filterEventos.length > 0) {
    return (
      <div class="flex flex-col w-full">
        {trabalhos &&
          trabalhos.map((trabalho: any, key: number) => {
            if (format(trabalho.dataInicio, "MMM-yyyy") == mesAtual) {
              return (
                <>
                  <Item key={key} trabalho={trabalho} hoje={hoje} />
                </>
              );
            }
          })}
      </div>
    );
  } else {
    return (
      <div class="font-bold text-sm text-begeMedio p-5">
        Nenhum trabalho.
      </div>
    );
  }
}

interface ItemProps {
  trabalho: any;
  hoje: Date;
}

function Item({ trabalho, hoje }: ItemProps) {
  const [parent] = useAutoAnimate();
  const index = useCalendarioStore((state: any) => state.index);
  const setIndex = useCalendarioStore((state: any) => state.setIndex);
  const setDiaSelecionado = useCalendarioStore(
    (state: any) => state.setDiaSelecionado
  );
  const antes = isBefore(trabalho.dataInicio, hoje);
  const depois = isAfter(trabalho.dataInicio, hoje);
  const mesmoDia = isSameDay(trabalho.dataInicio, hoje);

  const handleSetIndex = (id: number) => {
    index !== id && setIndex(id);
  };

  return (
    <>
      <div
        class={classs(
          antes && !mesmoDia && "italic text-begeMedio",
          (depois || mesmoDia) &&
            "text-begeEscuro border border-gray-300 bg-white rounded-xl mb-2"
        )}
        ref={parent}
      >
        <div
          onClick={() => {
            handleSetIndex(trabalho.id);
            setDiaSelecionado(trabalho.dataInicio);
          }}
          class="font-bold text-md lg:text-xl tracking-tight cursor-pointer"
        >
          <div class="p-5 text-base md:text-lg flex flex-row items-center">
            {trabalho.nome}
            <span
              class={classs(
                index === trabalho.id && "invisible",
                "font-normal text-sm ml-2 flex flex-row items-center gap-1"
              )}
            >
              <HiOutlineCalendar class="w-5 h-5 text-begeMedio" />{" "}
              {format(trabalho.dataInicio, "dd/MM")}
            </span>
          </div>
        </div>
        {index === trabalho.id && (
          <div class="text-xs md:text-sm p-5 -mt-7 flex flex-col gap-2">
            <div class="flex flex-col lg:flex-row gap-2 lg:gap-5">
              <div class="flex flex-row gap-1 items-center">
                <HiOutlineCalendar class="w-5 h-5 text-begeMedio" /> Data:{" "}
                <b>
                  {format(trabalho.dataInicio, "iiii, d 'de' MMMM", {
                    locale: ptBR,
                  })}
                </b>
              </div>
              <div class="flex flex-row gap-5">
                <div class="flex flex-row gap-1 items-center">
                  <HiOutlineClock class="w-5 h-5 text-begeMedio" /> Horario:{" "}
                  <b>{trabalho.horaInicio}</b>
                </div>
                <div class="flex flex-row gap-1 items-center">
                  <TbHanger class="w-5 h-5 text-begeMedio" /> Farda:{" "}
                  <b>{trabalho.farda}</b>
                </div>
              </div>
            </div>
            <div class="flex flex-row items-center gap-1">
              <HiOutlineBookOpen class="w-5 h-5 text-begeMedio" />{" "}
              <span class="pt-1">
                Hinário: <b>{trabalho.hinario}</b>
              </span>
            </div>
            <div class="pt-3 flex w-full md:justify-start gap-3">
              {(mesmoDia || depois) && (
                <Link
                  href={`/trabalho/${trabalho.id}`}
                  class="bg-dourado font-bold text-white p-3 py-2 rounded-lg w-full md:w-auto flex flex-row items-center justify-center gap-1"
                >
                  <HiOutlineInformationCircle class="w-6 h-6" /> Mais
                  informações
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
