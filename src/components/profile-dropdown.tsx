import { useEffect, useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import useDialogState from '@/hooks/use-dialog-state'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SignOutDialog } from '@/components/sign-out-dialog'

export function ProfileDropdown() {
  const [open, setOpen] = useDialogState()
  const [user, setUser] = useState<any>(null)
  const navigate = useNavigate()

  // load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // sign out handler
  const handleSignOut = () => {
    localStorage.removeItem('user')
    setUser(null)
    setOpen(false)

    navigate({ to: '/sign-in' })
  }

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src='/avatars/01.png' alt='user' />
              <AvatarFallback>
                {user?.name?.slice(0, 2).toUpperCase() || 'SN'}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className='w-56' align='end' forceMount>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col gap-1.5'>
              <p className='text-sm leading-none font-medium'>
                {user?.name || 'Guest'}
              </p>
              <p className='text-xs leading-none text-muted-foreground'>
                {user?.email || 'no-email'}
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link to='/settings'>Profile</Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link to='/settings'>Billing</Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link to='/settings'>Settings</Link>
            </DropdownMenuItem>

            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            variant='destructive'
            onClick={() => setOpen(true)}
          >
            Sign out
            <DropdownMenuShortcut className='text-current'>
              ⇧⌘Q
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Sign out dialog */}
      <SignOutDialog
        open={!!open}
        onOpenChange={(val) => {
          setOpen(val)
          if (!val) return
        }}
        onConfirm={handleSignOut}
      />
    </>
  )
}