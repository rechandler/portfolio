import React from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import HeaderLayout from "./HeaderLayout";
export default async ({showMenu = true}: {showMenu: Boolean}) => {
  const settings = await sanityFetch({
    query: settingsQuery,
  });
  return (
    <HeaderLayout title={settings?.title} showMenu={showMenu} />
  )
}