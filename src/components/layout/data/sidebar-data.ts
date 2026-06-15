import {
  LayoutDashboard,
  Package,
  Settings,
  UserX,
  Users,
  FolderKanban,
  AudioWaveform,
  Command,
  CopyPlus,
  GalleryVerticalEnd,
  NotepadTextDashed,
  UserKey,
  Workflow,
  UserCog,
  Wrench,
  Palette,
  Bell,
  Monitor,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Salongrid',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard Overview',
          icon: LayoutDashboard,
          items: [
            {
              title: 'Overview',
              url: '/',
            },
            {
              title: 'Total customers',
              url: '/total-customers',
            },
            {
              title: 'Active customers',
              url: '/active-customers',
            },
            {
              title: 'Inactive customers',
              url: '/inactive-customers',
            },
            {
              title: 'Pending onboarding customers',
              url: '/pending-onboarding-customers',
            },
            {
              title: 'Total admins',
              url: '/total-admins',
            },
            {
              title: 'Total staff',
              url: '/total-staff',
            },
            {
              title: 'Total video requests',
              url: '/total-video-requests',
            },
            {
              title: 'Requests in production',
              url: '/requests-in-production',
            },
            {
              title: 'Requests awaiting customer approval',
              url: '/requests-awaiting-customer-approval',
            },
            {
              title: 'Revision requests',
              url: '/revision-requests',
            },
            {
              title: 'Approved videos',
              url: '/approved-videos',
            },
            {
              title: 'Overdue requests',
              url: '/overdue-requests',
            },
            {
              title: 'Monthly video allowance used',
              url: '/monthly-video-allowance-used',
            },
            {
              title: 'Add-on usage',
              url: '/add-on-usage',
            },
          ],
        },
        {
          title: 'Customer Management',
          icon: Users,
          items: [
            {
              title: 'View all customers',
              url: '/total-customers',
            },
            {
              title: 'View GHL location mapping',
              url: '/ghl-location-mapping',
            },
            {
              title: 'View plan',
              url: '/view-plan',
            },
            {
              title: 'View video usage',
              url: '/view-video-usage',
            },
            {
              title: 'View onboarding status',
              url: '/view-onboarding-status',
            },
            {
              title: 'View assets',
              url: '/view-assets',
            },
            {
              title: 'View request history',
              url: '/view-request-history',
            },
            {
              title: 'Suspend/activate customer',
              url: '/suspend-activate-customer',
            },
            {
              title: 'Update customer manually if needed',
              url: '/update-customer-manually',
            },
          ],
        },
        {
          title: 'Team Management',
          icon: UserX,
          items: [
            {
              title: 'View admins',
              url: '/total-admins',
            },
            {
              title: 'Create internal users',
              url: '/internal-users',
            },
            {
              title: 'Sync users from GHL',
              url: '/sync-ghl-users',
            },
            {
              title: 'Assign roles',
              url: '/assign-roles-users',
            },
            {
              title: 'Assign permissions',
              url: '/assign-permissions-users',
            },
            {
              title: 'Disable users',
              url: '/disable-users',
            },
            {
              title: 'View staff workload',
              url: '/view-staff-workload',
            },
            {
              title: 'View staff performance',
              url: '/view-staff-performance',
            },
            {
              title: 'View staff assignment history',
              url: '/view-staff-assignment-history',
            },
          ],
        },
        {
          title: 'Production Management',
          icon: FolderKanban,
          items: [
            {
              title: 'View all video requests',
              url: '/total-video-requests',
            },
            {
              title: 'View overdue requests',
              url: '/overdue-requests',
            },
            {
              title: 'Reassign staff',
              url: '/reassign-staff',
            },
            {
              title: 'Change priority',
              url: '/change-priority',
            },
            {
              title: 'Escalate issues',
              url: '/escalate-issues',
            },
            {
              title: 'Audit approval/revision cycles',
              url: '/audit-approval-revision-cycles',
            },
          ],
        },
        {
          title: 'Plan Management',
          icon: Package,
          items: [
            {
              title: 'Create/edit plans',
              url: '/create-edit-plans',
            },
            {
              title: 'Set monthly video limits',
              url: '/set-monthly-video-limits',
            },
            {
              title: 'Set template access',
              url: '/set-template-access',
            },
            {
              title: 'Set revision limits',
              url: '/set-revision-limits',
            },
            {
              title: 'Set storage limits',
              url: '/set-storage-limits',
            },
            {
              title: 'Set social posting availability',
              url: '/set-social-posting-availability',
            },
            {
              title: 'Enable/disable add-ons',
              url: '/enable-disable-add-ons',
            },
            {
              title: 'Set plan visibility',
              url: '/set-plan-visibility',
            },
          ],
        },
        {
          title: 'Add-On Management',
          icon: CopyPlus,
          items: [
            {
              title: 'Extra video packs',
              url: '/extra-video-packs',
            },
            {
              title: 'Social posting add-on',
              url: '/social-posting-add-on',
            },
            {
              title: 'Extra revision add-on',
              url: '/extra-revision-add-on',
            },
            {
              title: 'Extra storage add-on',
              url: '/extra-storage-add-on',
            },
            {
              title: 'Premium template add-on',
              url: '/premium-template-add-on',
            },
            
          ],
        },
        {
          title: 'Template Management',
          icon: NotepadTextDashed,
          items: [
            {
              title: 'Create template categories',
              url: '/create-template-categories',
            },
            {
              title: 'Define template names',
              url: '/define-template-names',
            },
            {
              title: 'Mark templates as core/premium',
              url: '/mark-templates-core-premium',
            },
            {
              title: 'Attach templates to plans',
              url: '/attach-templates-to-plans',
            },
            {
              title: 'Add production instructions',
              url: '/add-production-instructions',
            },
            {
              title: 'Add asset requirements',
              url: '/add-asset-requirements',
            },
            {
              title: 'Add example references',
              url: '/add-example-references',
            },
            {
              title: 'Enable/disable templates',
              url: '/enable-disable-templates',
            },
            
          ],
        },
        {
          title: 'Permission Management',
          icon: UserKey,
          items: [
            {
              title: 'Manage roles',
              url: '/manage-roles',
            },
            {
              title: 'Manage permissions',
              url: '/manage-permissions',
            },
            {
              title: 'Assign permissions to roles',
              url: '/assign-permissions-to-roles',
            },
            {
              title: 'Override user permissions',
              url: '/override-user-permissions',
            },
            {
              title: 'Define dashboard access',
              url: '/define-dashboard-access',
            },
            {
              title: 'Define module-level access',
              url: '/define-module-level-access',
            },
            {
              title: 'Add example references',
              url: '/add-example-references',
            },
            {
              title: 'Enable/disable templates',
              url: '/enable-disable-templates',
            },
            
          ],
        },
        {
          title: 'GHL Integration Settings',
          icon: Workflow,
          items: [
            {
              title: 'Configure webhook endpoint',
              url: '/configure-webhook-endpoint',
            },
            {
              title: 'Manage GHL API credentials',
              url: '/manage-ghl-api-credentials',
            },
            {
              title: 'Map GHL tags to portal roles',
              url: '/map-ghl-tags-to-portal-roles',
            },
            {
              title: 'Map GHL locations/sub-accounts',
              url: '/map-ghl-locations-sub-accounts',
            },
            {
              title: 'View webhook logs',
              url: '/view-webhook-logs',
            },
            {
              title: 'Retry failed webhook events',
              url: '/retry-failed-webhook-events',
            },
            {
              title: 'Configure default plan mapping',
              url: '/configure-default-plan-mapping',
            },
          ],
        },
        {
 
           title: 'Settings',
           icon: Settings,
           items: [
             {
               title: 'Profile',
               url: '/settings',
               icon: UserCog,
             },
             {
               title: 'Account',
               url: '/settings/account',
               icon: Wrench,
             },
             {
               title: 'Appearance',
               url: '/settings/appearance',
               icon: Palette,
             },
             {
               title: 'Notifications',
               url: '/settings/notifications',
               icon: Bell,
             },
             {
               title: 'Display',
               url: '/settings/display',
               icon: Monitor,
             },
           ],
         },

    //     {
    //       title: 'Tasks',
    //       url: '/tasks',
    //       icon: ListTodo,
    //     },
    //     {
    //       title: 'Apps',
    //       url: '/apps',
    //       icon: Package,
    //     },
    //     {
    //       title: 'Chats',
    //       url: '/chats',
    //       badge: '3',
    //       icon: MessagesSquare,
    //     },
    //     {
    //       title: 'Users',
    //       url: '/users',
    //       icon: Users,
    //     },
    //     {
    //       title: 'Secured by Clerk',
    //       icon: ClerkLogo,
    //       items: [
    //         {
    //           title: 'Sign In',
    //           url: '/clerk/sign-in',
    //         },
    //         {
    //           title: 'Sign Up',
    //           url: '/clerk/sign-up',
    //         },
    //         {
    //           title: 'User Management',
    //           url: '/clerk/user-management',
    //         },
    //       ],
    //     },
        
        
    //   ],
    // },
    // {
    //   title: 'Pages',
    //   items: [
    //     {
    //       title: 'Auth',
    //       icon: ShieldCheck,
    //       items: [
    //         {
    //           title: 'Sign In',
    //           url: '/sign-in',
    //         },
    //         {
    //           title: 'Sign In (2 Col)',
    //           url: '/sign-in-2',
    //         },
    //         {
    //           title: 'Sign Up',
    //           url: '/sign-up',
    //         },
    //         {
    //           title: 'Forgot Password',
    //           url: '/forgot-password',
    //         },
    //         {
    //           title: 'OTP',
    //           url: '/otp',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Errors',
    //       icon: Bug,
    //       items: [
    //         {
    //           title: 'Unauthorized',
    //           url: '/errors/unauthorized',
    //           icon: Lock,
    //         },
    //         {
    //           title: 'Forbidden',
    //           url: '/errors/forbidden',
    //           icon: UserX,
    //         },
    //         {
    //           title: 'Not Found',
    //           url: '/errors/not-found',
    //           icon: FileX,
    //         },
    //         {
    //           title: 'Internal Server Error',
    //           url: '/errors/internal-server-error',
    //           icon: ServerOff,
    //         },
    //         {
    //           title: 'Maintenance Error',
    //           url: '/errors/maintenance-error',
    //           icon: Construction,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   title: 'Other',
    //   items: [
    //     {
    //       title: 'Settings',
    //       icon: Settings,
    //       items: [
    //         {
    //           title: 'Profile',
    //           url: '/settings',
    //           icon: UserCog,
    //         },
    //         {
    //           title: 'Account',
    //           url: '/settings/account',
    //           icon: Wrench,
    //         },
    //         {
    //           title: 'Appearance',
    //           url: '/settings/appearance',
    //           icon: Palette,
    //         },
    //         {
    //           title: 'Notifications',
    //           url: '/settings/notifications',
    //           icon: Bell,
    //         },
    //         {
    //           title: 'Display',
    //           url: '/settings/display',
    //           icon: Monitor,
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Help Center',
    //       url: '/help-center',
    //       icon: HelpCircle,
    //     },
      ],
    },
  ],
}
