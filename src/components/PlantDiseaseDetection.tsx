import { useState } from 'react';
import { LoadingOverlay } from './common/LoadingOverlay';

const PlantDiseaseDetection = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="content-overlay container mx-auto px-4 py-8 rounded-xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">
          Plant Disease <span className="text-agro-green-dark">Detection</span>
        </h1>
        <p className="text-lg text-emerald-800 max-w-2xl mx-auto">
          Upload an image of your plant to detect diseases using our advanced AI model.
        </p>
      </div>

      <div className="w-full aspect-[4/3] max-w-4xl mx-auto rounded-xl overflow-hidden border-2 border-agro-green-medium/20 hover:border-agro-green-medium/40 transition-all bg-white/5 relative">
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