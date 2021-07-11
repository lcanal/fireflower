import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Plant = list({
  ui: {
    listView: {
      initialColumns: ['name'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    latinName: text({ isRequired: false }),
    plantZones: relationship({ 
      ref: 'PlantZone.plants', 
      ui: {
        displayMode: 'cards',
        cardFields: ['name'],
        linkToItem: true,
        inlineCreate: { fields: ['name']},
      },
      many: true })
  }
});