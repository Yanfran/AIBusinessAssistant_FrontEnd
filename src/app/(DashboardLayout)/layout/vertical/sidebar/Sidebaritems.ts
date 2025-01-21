export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
}

import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [
  

  {
    id: 1,
    name: "Pages",
    items: [
      {
        heading: "Pages",
        children: [
          {
            name: "Dashboard",
            icon: "bx:home",
            id: uniqueId(),
            url: "/dashboard",
          },
          {
            name: "Automatizaciones",
            icon: "f7:bolt",
            id: uniqueId(),
            url: "/sample-page",
          },
          {
            name: "Templates",
            icon: "mage:file-3",
            id: uniqueId(),
            url: "/first-automation",
          },
          {
            name: "Analytics",
            icon: "uim:analytics",
            id: uniqueId(),
            url: "/sample-page",
          }
         
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Menu",
    items: [
      {
        heading: "Multi level",
        children: [
          {
            name: "Menu Level",
            icon: "solar:widget-add-line-duotone",
            id: uniqueId(),
            children: [
              {
                id: uniqueId(),
                name: "Level 1",
                url: "",
              },
              {
                id: uniqueId(),
                name: "Level 1.1",
                icon: "fad:armrecording",
                url: "",
                children: [
                  {
                    id: uniqueId(),
                    name: "Level 2",
                    url: "",
                  },
                  {
                    id: uniqueId(),
                    name: "Level 2.1",
                    icon: "fad:armrecording",
                    url: "",
                    children: [
                      {
                        id: uniqueId(),
                        name: "Level 3",
                        url: "",
                      },
                      {
                        id: uniqueId(),
                        name: "Level 3.1",
                        url: "",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "More Options",
        children: [
          {
            id: uniqueId(),
            url: "/sample-page",
            name: "Applications",
            icon: "solar:check-circle-bold",
            color: "text-primary",
          },
          {
            id: uniqueId(),
            url: "",
            name: "Form Options",
            icon: "solar:check-circle-bold",
            color: "text-secondary",
          },
          {
            id: uniqueId(),
            url: "",
            name: "Table Variations",
            icon: "solar:check-circle-bold",
            color: "text-info",
          },
          {
            id: uniqueId(),
            url: "",
            name: "Charts Selection",
            icon: "solar:check-circle-bold",
            color: "text-warning",
          },
          {
            id: uniqueId(),
            url: "",
            name: "Widgets",
            icon: "solar:check-circle-bold",
            color: "text-success",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    heading: "Quick Actions",
    children: [
      { id: 'recent', name: 'Recent', icon: "wi:time-5", url: '/recent' },
      { id: 'favorites', name: 'Favorites', icon: "clarity:favorite-line", url: '/favorites' },
      { id: 'shortcuts', name: 'Shortcuts', icon: "bx:home", url: '/shortcuts' },
      { id: 'profile', name: 'Profile', icon: "iconamoon:profile-light", url: '/profile' },
      { id: 'settings', name: 'Settings', icon: "solar:settings-outline", url: '/settings' },
      { id: 'help', name: 'Help', icon: "tabler:help", url: '/help' },
    ],
  },
];

export default SidebarContent;
