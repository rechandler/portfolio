import React from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import MobileMenu from "./MobileMenuLayout";
export default async ({showMenu = true}: {showMenu: Boolean}) => {
  const settings = await sanityFetch({
    query: settingsQuery,
  });
  return (
    <MobileMenu title={settings?.title} showMenu={showMenu} />
  )
}