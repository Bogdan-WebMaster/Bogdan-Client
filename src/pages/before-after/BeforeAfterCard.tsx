
import { Link } from 'react-router-dom';
import BeforeAfterSlider from './BeforeAfterSlider';


const BeforeAfterCard = ({ item, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}>
      <Link to={`/gallery/${item.id}`}>
        <BeforeAfterSlider
          beforeImage={item.beforeImage}
          afterImage={item.afterImage}
          initialPosition={60}
        />
      </Link>
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
            {item.serviceName}
          </span>
          <span className="inline-block ml-2 text-gray-500 text-sm">{item.date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-gray-600 line-clamp-2">{item.description}</p>
        <Link
          to={`/gallery/${item.id}`}
          className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BeforeAfterCard;