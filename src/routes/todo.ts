import React from 'react';

const Today = React.lazy(() => import('Src/modules/Today'));
const Inbox = React.lazy(() => import('Src/modules/Inbox'));
const Upcoming = React.lazy(() => import('Src/modules/Upcoming'));

export default [
    {
        state: 'today',
        path: '/today',
        exact: true,
        component: Today,
        resources: [
            
        ]
    },
    {
        state: 'inbox',
        path: '/inbox',
        exact: true,
        component: Inbox,
        resources: [

        ]
    },
    {
        state: 'upcoming',
        path: '/upcoming',
        exact: true,
        component: Upcoming,
        resources: [

        ]
    }
];