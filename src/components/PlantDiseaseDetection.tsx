import { useState } from 'react';
import { LoadingOverlay } from './common/LoadingOverlay';

const PlantDiseaseDetection = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Plant Disease <span className="gradient-text">Detection</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Upload an image of your plant to detect diseases using our advanced AI model.
        </p>
      </div>

      <div className="w-full aspect-[4/3] max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white relative">
        {!iframeLoaded && (
          <LoadingOverlay message="Starting disease detection" />
        )}

        <iframe
          src="https://dkg-2-agroshield-disease-prediction.hf.space"
          className="w-full h-full border-0"
          onLoad={() => setIframeLoaded(true)}
          style={{ minHeight: '450px' }}
          allow="camera; microphone"
          sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-modals"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default PlantDiseaseDetection;