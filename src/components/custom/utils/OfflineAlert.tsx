// ToastAlert.tsx
import React, { useState, useEffect } from 'react';
import * as Toast from '@radix-ui/react-toast';
import { cn } from "@/lib/utils"; // Utilitaire pour gérer les classes conditionnelles (ShadCN).

const ToastAlert: React.FC = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [open, setOpen] = useState(!isOnline);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            setOpen(false);
        };

        const handleOffline = () => {
            setIsOnline(false);
            setOpen(true);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <Toast.Provider>
            <Toast.Root
                open={open}
                onOpenChange={setOpen}
                className={cn(
                    "fixed bottom-4 left-4 z-50 w-72 rounded-lg bg-red-500 p-4 text-white shadow-lg",
                    "data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out"
                )}
            >
                <Toast.Title className="font-bold text-lg">
                    Pas de connexion Internet
                </Toast.Title>
                <Toast.Description className="mt-2 text-sm">
                    Vous êtes actuellement hors ligne. Vérifiez votre connexion pour continuer.
                </Toast.Description>
            </Toast.Root>
            <Toast.Viewport className="fixed bottom-4 left-4 z-50" />
        </Toast.Provider>
    );
};

export default ToastAlert;
