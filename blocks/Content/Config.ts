import { Block } from 'payload/types';

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
    // {
    //   name: 'columns',
    //   type: 'array',
    //   minRows: 1,
    //   defaultValue: 'full',
    //   fields: [
    //     {
    //       type: 'row',
    //       fields: [
    //         {
    //           name: 'width',
    //           label: 'Column Width',
    //           type: 'select',
    //           defaultValue: 'full',
    //           required: true,
    //           options: [
    //             {
    //               label: 'One third',
    //               value: 'third',
    //             },
    //             {
    //               label: 'Half',
    //               value: 'half',
    //             },
    //             {
    //               label: 'Two thirds',
    //               value: 'twoThirds',
    //             },
    //             {
    //               label: 'Full width',
    //               value: 'full',
    //             },
    //           ],
    //           admin: {
    //             width: '50%',
    //           },
    //         },
    //         {
    //           name: 'alignment',
    //           label: 'Alignment',
    //           type: 'select',
    //           defaultValue: 'left',
    //           required: true,
    //           options: [
    //             {
    //               label: 'Left',
    //               value: 'left',
    //             },
    //             {
    //               label: 'Center',
    //               value: 'center',
    //             },
    //             {
    //               label: 'Right',
    //               value: 'right',
    //             },
    //           ],
    //           admin: {
    //             width: '§50%',
    //           },
    //         },
    //         {
    //           name: 'content',
    //           type: 'richText',
    //           required: true,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default Content;
