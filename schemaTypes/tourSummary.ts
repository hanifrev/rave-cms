export default {
  name: 'tourSummary',
  type: 'document',
  title: 'Tour Summary',
  fields: [
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      options: {
        hotspot: true, // Enables image cropping in Sanity Studio
      },
    },
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Title',
    },
    {
      name: 'heroDescription',
      type: 'text',
      title: 'Hero Description',
    },
    {
      name: 'cardDescription',
      type: 'array',
      title: 'Card Description',
      of: [
        {
          type: 'object',
          title: 'Card',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            // {
            //   name: 'mainIcon',
            //   type: 'image',
            //   title: 'Main Icon',
            //   options: {
            //     hotspot: true,
            //   },
            // },
            {
              name: 'descLine1',
              type: 'object',
              title: 'Description Line 1',
              fields: [
                {name: 'text', type: 'string', title: 'Text'},
                {name: 'id', type: 'string', title: 'ID'},
                {name: 'isClickable', type: 'boolean', title: 'Is Clickable?'},
                {
                  name: 'tooltip',
                  type: 'string',
                  title: 'Tooltip',
                  description: 'Optional tooltip text.',
                },
              ],
            },
            {name: 'descLine2', type: 'string', title: 'Description Line 2 (Optional)'},
          ],
        },
      ],
    },
    {
      name: 'heroCTA',
      type: 'object',
      title: 'Hero CTA',
      fields: [
        {name: 'title', type: 'string', title: 'CTA Title'},
        {name: 'description', type: 'string', title: 'CTA Description'},
      ],
    },
    {
      name: 'tripCode',
      type: 'string',
      title: 'Trip Code',
    },
    {
      name: 'tileHero',
      type: 'array',
      title: 'Tile Hero (3 ITEMS ONLY)',
      of: [{type: 'string'}],
    },
    {
      name: 'marketingMessage',
      title: 'Marketing Message',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'mapItineraryTitle',
      type: 'string',
      title: 'Map and Itinerary',
    },
    {
      name: 'mapImage',
      type: 'image',
      title: 'Map Itinerary Image',
      options: {
        hotspot: true, // Enables image cropping in Sanity Studio
      },
    },
  ],
}
