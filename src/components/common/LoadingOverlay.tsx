interface LoadingOverlayProps {
  message?: string;
}

export const LoadingOverlay = ({ 
  message = "Loading AI model" 
}: LoadingOverlayProps) => (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80 backdrop-blur-sm">
    <div className="flex flex-col items-center gap-3">
      <div className="animate-spin h-8 w-8 border-4 border-gray-400 rounded-full border-t-transparent" />
      <span className="animate-pulse text-gray-600 text-sm font-medium">
        {message}...
      </span>
    </div>
  </div>
);