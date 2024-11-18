export default {
  name: 'aboutSection',
  type: 'document',
  title: 'About Section (Travel & Sightsee Highlight',
  fields: [
    {
      name: 'mainTitle',
      type: 'string',
      title: 'Main Title',
    },
    {
      name: 'sightseeingHighlight',
      type: 'object',
      title: 'Sightseeing Highlight',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {
          name: 'list',
          type: 'array',
          title: 'List of Highlights',
          of: [{type: 'string'}],
        },
      ],
    },
    {
      name: 'travelHighlight',
      type: 'object',
      title: 'Travel Highlight',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'description', type: 'text', title: 'Description'},
        {name: 'CTA', type: 'string', title: 'CTA'},
        {
          name: 'list',
          type: 'array',
          title: 'List of Highlights',
          of: [{type: 'string'}],
        },
      ],
    },
  ],
}
