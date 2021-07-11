import { relationship, text } from "@keystone-next/fields";
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { document } from "@keystone-next/fields-document";
import { list } from "@keystone-next/keystone/schema";

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_KEY || '',
  apiSecret: process.env.CLOUDINARY_SECRET || '',
  folder: process.env.CLOUDINARY_FOLDER || '',
};

export const Plant = list({
  ui: {
    listView: {
      initialColumns: ['name', 'photo'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    latinName: text({ isRequired: false }),
    description: document({ 
      formatting: true,
      links: true,
      layouts: [
        [1,1],
      ]
    }),
    photo: cloudinaryImage({
      cloudinary,
      label: 'Photo',
    }),
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