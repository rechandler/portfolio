"use server";

import React from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery, highlightsQuery } from "@/sanity/lib/queries";
import HeroLayout from './HeroLayout'
import { HighlightsQueryResult, SettingsQueryResult } from "@/sanity.types";

export default async () => {
  const [settings, highlights]: [SettingsQueryResult, HighlightsQueryResult] = await Promise.all(
    [
      sanityFetch({query: settingsQuery,}),
      sanityFetch({query: highlightsQuery,})
    ]);

  return (
    <HeroLayout settings={settings} highlights={highlights}/>
  )
}