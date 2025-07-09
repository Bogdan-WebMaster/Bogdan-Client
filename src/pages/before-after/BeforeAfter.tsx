
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Share2, ZoomIn, ZoomOut } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { galleryData } from '../data/galleryData';

const BeforeAfterDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState(50);
  const [zoomLevel, setZoomLevel] = useState(1);

const {beforeImage, afterImage} = galleryData
  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value));
  };

  const handleZoomIn = () => {
    if (zoomLevel < 2) {
      setZoomLevel(zoomLevel + 0.25);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(zoomLevel - 0.25);
    }
  };

 
 
 

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
      
       

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-6 md:p-8 border-b">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                    
                  </span>
                  <span className="inline-block ml-2 text-gray-500 text-sm">
                  
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold"></h1>
              </div>
           
            </div>
       
          </div>

        
          <div className="relative" style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center', transition: 'transform 0.3s ease' }}>
            <BeforeAfterSlider
              beforeImage={"https://avtoservice-pror2.ru/img/18792760.jpg"}
              afterImage={"https://avtoservice-pror2.ru/img/18340739_1975_q70.webp"}
              initialPosition={sliderValue}
              className="h-[500px]"
            />
          </div>

          
        
        </div>

      
      </div>
    </div>
  );
};

export default BeforeAfterDetailsPage;