import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const PlantZone = list({
  ui: {
    description: "Specific zone where plants live?",
  },
  fields: {
    name: text({ isRequired: true }),
    // TODO: Add a map zone or region field
    plants: relationship({ 
      ref: 'Plant.plantZones',
      many: true,
    })
  }
});