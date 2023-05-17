import { For, Match, Switch, createEffect, createSignal } from "solid-js";
import { Birthdates } from "../components/home/birthdates";
import { Calendar } from "../components/home/calendar";
import { Featuring } from "../components/home/featuring";
import { MessageBoard } from "../components/home/messageBoard";
import { createServerData$ } from "solid-start/server";
import { useRouteData } from "solid-start";
import { xata } from "~/db/xata";

export function routeData() {
  return createServerData$(() => xata.db.trabalhos.getAll());
}

export default function Home() {
  const trabalhos = useRouteData<typeof routeData>();

  return (
    <main class="w-full flex flex-col">
      {/* <Featuring /> */}
      <div class="flex flex-col xl:flex-row gap-10 p-8 lg:px-32 lg:py-20">
        <div class="w-full">
          <MessageBoard />
        </div>
        <div class="flex flex-col sm:flex-row gap-10">
          <div class="w-full">
            <Switch fallback={<div>Not Found</div>}>
              <Match when={trabalhos()}>
                <Calendar trabalhos={trabalhos()} />
              </Match>
            </Switch>
          </div>
          <div class="w-full">
            <Birthdates />
          </div>
        </div>
      </div>
    </main>
  );
}
