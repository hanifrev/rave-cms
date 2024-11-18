export default {
  name: 'itinerarySection',
  type: 'document',
  title: 'Itinerary Section',
  fields: [
    {
      name: 'mainTitle',
      type: 'string',
      title: 'Main Title',
    },
    {
      name: 'mainDescription',
      type: 'text',
      title: 'Main Description',
    },
    {
      name: 'list',
      type: 'array',
      title: 'Itinerary List',
      of: [
        {
          type: 'object',
          title: 'Itinerary Item',
          fields: [
            {
              name: 'day',
              type: 'string',
              title:
                'Day (leave this blank, day will automatically set based on order of this card)',
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'highlightTag',
              type: 'string',
              title: 'Highlight Tag',
              description: 'Optional highlight tag for the day',
            },
            {
              name: 'city',
              type: 'array',
              title: 'City',
              of: [{type: 'string'}],
            },
            {
              name: 'facilities',
              type: 'array',
              title: 'Facilities',
              of: [
                {
                  type: 'object',
                  title: 'Facility',
                  fields: [
                    {
                      name: 'title',
                      type: 'string',
                      title: 'Facility Type',
                      options: {
                        list: [
                          {title: 'Transfer', value: 'Transfer'},
                          {title: 'Accommodation', value: 'Accommodation'},
                          {title: 'Welcome', value: 'Welcome'},
                          {title: 'Included Meals', value: 'Included Meals'},
                        ],
                      },
                    },
                    {name: 'desc', type: 'text', title: 'Description'},
                    {name: 'note', type: 'string', title: 'Note'},
                  ],
                },
              ],
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'description',
              type: 'array',
              of: [{type: 'block'}],
              title: 'Description',
            },
            {
              name: 'carousel',
              type: 'array',
              title: 'Carousel',
              of: [
                {
                  type: 'object',
                  title: 'Carousel Item',
                  fields: [
                    {name: 'image', type: 'image', title: 'Image'},
                    {name: 'title', type: 'string', title: 'Title'},
                    {name: 'desc', type: 'text', title: 'Description'},
                    // {
                    //   name: 'tag',
                    //   type: 'string',
                    //   title: 'Tag',
                    //   description: 'Optional tag for the carousel item',
                    // },
                    {
                      name: 'optionalExp',
                      type: 'object',
                      title:
                        'Optional Experience (leave it blank to make this as "ICONIC EXPERIENCE")',
                      fields: [
                        {name: 'price', type: 'string', title: 'Price'},
                        {
                          name: 'category',
                          type: 'string',
                          title: 'Category (Adults by default)',
                          description:
                            'Leave it blank, it has default value, unless you want to change it',
                        },
                        {
                          name: 'bookDesc',
                          type: 'string',
                          title: 'Booking Description',
                          description:
                            'Leave it blank, it has default value, unless you want to change it',
                        },
                        {
                          name: 'addCost',
                          type: 'string',
                          title: 'Additional Cost (Question mark tooltip)',
                          description:
                            'Leave it blank, it has default value, unless you want to change it',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
