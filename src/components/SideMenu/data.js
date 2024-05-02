const menus = [
  { label: 'Home', to: '/' },
  {
    label: 'Profile',
    to: '/profile',
    children: [
      { label: 'Details', to: 'profile/details' },
      { label: 'Location', to: 'profile/location' },
    ],
  },
  {
    label: 'Settings',
    to: '/settings',
    children: [
      { label: 'Account', to: '/settings/account' },
      {
        label: 'Security',
        to: '/settings/security',
        children: [
          { label: 'Login', to: '/settings/login' },
          { label: 'Register', to: '/settings/register' },
        ],
      },
    ],
  },
];
export default menus;
