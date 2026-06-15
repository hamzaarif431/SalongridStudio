import { type QueryClient } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  Outlet,
  redirect,
  useLocation,
} from '@tanstack/react-router'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Toaster } from '@/components/ui/sonner'
import FloatingChat from '@/components/layout/floating-chat'
import { NavigationProgress } from '@/components/navigation-progress'
import { GeneralError } from '@/features/errors/general-error'
import { NotFoundError } from '@/features/errors/not-found-error'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  beforeLoad: ({ location }) => {
    const user = localStorage.getItem('user')

    // ✅ auth routes allow list
    const authRoutes = [
      '/sign-in',
      '/forgot-password',
      '/reset-password',
    ]

    const isAuthRoute = authRoutes.includes(location.pathname)

    // 👉 allow auth pages
    if (isAuthRoute) return

    // ❌ if no user → redirect to sign-in
    if (!user) {
      throw redirect({
        to: '/sign-in',
      })
    }
  },

  component: () => {
    const location = useLocation()
    const authRoutes = [
      '/sign-in',
      '/sign-in-2',
      '/sign-up',
      '/forgot-password',
      '/otp',
      '/reset-password',
    ]

    const hideFloatingChat = authRoutes.includes(location.pathname)

    return (
      <>
        <NavigationProgress />
        <Outlet />
        <Toaster duration={5000} />

        {!hideFloatingChat && <FloatingChat />}

        {import.meta.env.MODE === 'development' && (
          <>
            <ReactQueryDevtools buttonPosition="bottom-left" />
            <TanStackRouterDevtools position="bottom-right" />
          </>
        )}
      </>
    )
  },

  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})