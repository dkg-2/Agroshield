import { useState } from 'react';
import { LoadingOverlay } from './common/LoadingOverlay';

const CropRecommendation = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Crop <span className="gradient-text">Recommendation</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Input soil and climate parameters to get AI-powered crop recommendations.
        </p>
      </div>

      <div className="w-full aspect-[4/3] max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white relative">
        {!iframeLoaded && (
          <LoadingOverlay message="Initializing crop recommendation" />
        )}

        <iframe
          src="https://dkg-2-agroshield-crop-recommendation.hf.space"
          className="w-full h-full border-0"
          onLoad={() => setIframeLoaded(true)}
          style={{ minHeight: '450px' }}
          allow="microphone; camera"
          sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-modals"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default CropRecommendation;