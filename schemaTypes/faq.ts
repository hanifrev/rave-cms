export default {
  name: 'faqSection',
  type: 'document',
  title: 'FAQ Section',
  fields: [
    {
      name: 'mainTitle',
      type: 'string',
      title: 'Main Title',
    },
    {
      name: 'faqList',
      type: 'array',
      title: 'FAQ List',
      of: [
        {
          type: 'object',
          title: 'FAQ Item',
          fields: [
            {name: 'question', type: 'string', title: 'Question'},
            {name: 'answer', type: 'array', of: [{type: 'block'}], title: 'Answer'},
          ],
        },
      ],
    },
  ],
}
