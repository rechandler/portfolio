import { ActivityIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "work",
  title: "Work",
  icon: ActivityIcon,
  type: "document",
  fields: [
    defineField({
      name: "when",
      title: "When",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
