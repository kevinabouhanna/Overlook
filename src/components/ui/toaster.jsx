import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        duration: 5000,
        className: "bg-white border border-gray-200 text-gray-900 shadow-md",
        descriptionClassName: "text-gray-600",
        successClassName: "border-green-500 bg-green-50 text-green-900",
        errorClassName: "border-red-500 bg-red-50 text-red-900",
      }}
    />
  );
}
