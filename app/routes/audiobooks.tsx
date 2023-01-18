import { LoaderFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import HeaderNav from "~/components/audiobooks/HeaderNav";
import { getAllAudiobooks } from "~/data/audiobookGet.server";
import { requireUserSession } from "~/data/session.sever";

//----------------------------------
//-- Component
//----------------------------------
export default function Audiobooks() {
  return (
    <div>
      <HeaderNav />
      <Outlet />
    </div>
  );
}
