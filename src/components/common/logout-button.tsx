'use client';

import { useToast } from '@/hooks/use-toast';
import { logout } from '@/service/client/actions/auth';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

export default function LogoutButton() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="flex items-center gap-3  hover:bg-muted transition-colors rounded px-2 py-1">
          <span className="i-ri-logout-box-line" />
          Logout
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Logout</DialogTitle>
          <DialogDescription>
            Are you sure you want to log out?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-5">
          <DialogClose asChild>
            <Button variant="ghost">Maybe not</Button>
          </DialogClose>
          <Button
            onClick={async () => {
              try {
                await logout();
                setOpen(false);
                toast({
                  description: 'You are logged out.',
                });
              } catch (e) {
                toast({
                  variant: 'destructive',
                  description: 'Logout failed, please try refreshing the page.',
                });
              }
            }}
          >
            Sure
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
