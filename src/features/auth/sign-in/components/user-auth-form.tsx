import { useState } from 'react'
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from '@tanstack/react-router'
import { Loader2, LogIn } from 'lucide-react'
import { toast } from 'sonner'

import { IconFacebook, IconGithub } from '@/assets/brand-icons'
import { useAuthStore } from '@/stores/auth-store'
import { sleep, cn } from '@/lib/utils'
import { users } from '@/lib/userdata'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/password-input'

const formSchema = z.object({
  email: z.email({
    error: (iss) =>
      iss.input === '' ? 'Please enter your email.' : undefined,
  }),
  password: z
    .string()
    .min(1, 'Please enter your password.')
    .min(7, 'Password must be at least 7 characters long.'),
})

interface UserAuthFormProps
  extends React.HTMLAttributes<HTMLFormElement> {
  redirectTo?: string
}

export function UserAuthForm({
  className,
  redirectTo,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { auth } = useAuthStore()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      await sleep(1000)

      // 🔥 FIND USER FROM STATIC DATA
      const foundUser = users.find(
        (u) =>
          u.email === data.email &&
          u.password === data.password
      )

      if (!foundUser) {
        toast.error('Invalid email or password')
        return
      }

      // 🔐 CREATE USER SESSION
      const loggedInUser = {
        accountNo: `ACC-${foundUser.id}`,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role,
        exp: Date.now() + 24 * 60 * 60 * 1000,
      }

      // 💾 SAVE IN LOCALSTORAGE (IMPORTANT FOR ROUTE GUARD)
      localStorage.setItem('user', JSON.stringify(loggedInUser))

      // 💾 SAVE IN ZUSTAND STORE
      auth.setUser(loggedInUser)
      auth.setAccessToken('mock-access-token')

      toast.success(`Welcome ${foundUser.name}!`)

      const roleRedirectMap: Record<string, string> = {
        super_admin: '/users',
        admin: '/tasks',
        staff: '/chats',
        customer: '/help-center',
      }

      const destination = redirectTo ?? roleRedirectMap[foundUser.role] ?? '/'
      navigate({
        to: destination,
        replace: true,
      })
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('grid gap-3', className)}
        {...props}
      >
        {/* EMAIL */}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='name@example.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* PASSWORD */}
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='relative'>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder='********' {...field} />
              </FormControl>
              <FormMessage />

              <Link
                to='/forgot-password'
                className='absolute inset-e-0 -top-0.5 text-sm font-medium text-muted-foreground hover:opacity-75'
              >
                Forgot password?
              </Link>
            </FormItem>
          )}
        />

        {/* BUTTON */}
        <Button className='mt-2' disabled={isLoading}>
          {isLoading ? (
            <Loader2 className='animate-spin' />
          ) : (
            <LogIn />
          )}
          Sign in
        </Button>

        {/* DIVIDER */}
        <div className='relative my-2'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>
              Or continue with
            </span>
          </div>
        </div>

        {/* SOCIAL */}
        <div className='grid grid-cols-2 gap-2'>
          <Button variant='outline' type='button' disabled={isLoading}>
            <IconGithub className='h-4 w-4' /> GitHub
          </Button>
          <Button variant='outline' type='button' disabled={isLoading}>
            <IconFacebook className='h-4 w-4' /> Facebook
          </Button>
        </div>
      </form>
    </Form>
  )
}