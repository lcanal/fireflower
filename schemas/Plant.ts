import { text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Plant = list({
  ui: {
    listView: {
      initialColumns: ['name'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    latinName: text({ isRequired: true })
  }
});