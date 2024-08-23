"use server";

import React from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import HeroLayout from './HeroLayout'
import { SettingsQueryResult } from "@/sanity.types";

export default async () => {
  const settings: SettingsQueryResult = await sanityFetch({query: settingsQuery,});
  return (
    <HeroLayout settings={settings}/>
  )
}