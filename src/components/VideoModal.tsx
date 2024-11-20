import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-dark-gray p-4 rounded-xl max-w-4xl w-full mx-4 border border-white/10">
        <div className="flex justify-end mb-2">
          <button 
            onClick={onClose}
            className="text-off-white/50 hover:text-off-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="aspect-w-16 aspect-h-9 bg-black/50 rounded-lg">
          <div className="flex items-center justify-center">
            <p className="text-off-white/50">Video player placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}