import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const PlantZone = list({
  ui: {
    description: "Specific zone where plants live?",
  },
  fields: {
    name: text({ isRequired: true }),
    plants: relationship({ 
      ref: 'Plant.plantZones',
      ui: {
        linkToItem: false,
        displayMode: 'count',
      },
      many: true,
    })
  }
});