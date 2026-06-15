import { createFileRoute } from '@tanstack/react-router'
import { totalCustomer } from '@/features/total-customers'

export const Route = createFileRoute('/_authenticated/total-customers/')({
  component: totalCustomer,
})
