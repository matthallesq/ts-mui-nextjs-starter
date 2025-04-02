import { Model } from '@stackbit/types';

export const Post: Model = {
    type: 'object',
    name: 'Post',
    label: 'Post',
    labelField: 'title',
    fields: [
        { type: 'string', name: 'title', label: 'Title', default: 'Item Title' },
        {
            type: 'markdown',
            name: 'text',
            label: 'Text',
            default:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.'
        }
    ]
};
