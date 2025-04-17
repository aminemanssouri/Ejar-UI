import { useState } from 'react';
import { FaBed, FaBath, FaRuler, FaSearch, FaFilter } from 'react-icons/fa';

const PROPERTIES = [
  {
    id: 1,
    title: "فيلا عصرية",
    price: 2500000,
    location: "دبي مارينا",
    type: "فيلا",
    beds: 4,
    baths: 3,
    size: 350,
    image: "https://images.unsplash.com/photo-1582797493098-07c2b6a631e4",
    status: "للبيع",
    features: ["حمام سباحة", "حديقة خاصة", "موقف سيارات"],
  },
  {
    id: 2,
    title: "شقة فاخرة",
    price: 1800000,
    location: "وسط المدينة",
    type: "شقة",
    beds: 3,
    baths: 2,
    size: 200,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    status: "للإيجار",
    features: ["شرفة", "مطبخ مجهز", "أمن 24/7"],
  },
  {
    id: 3,
    title: "قصر فخم",
    price: 5500000,
    location: "نخلة جميرا",
    type: "قصر",
    beds: 6,
    baths: 5,
    size: 800,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    status: "للبيع",
    features: ["إطلالة بحرية", "مسبح داخلي", "صالة رياضية"],
  },
  {
    id: 4,
    title: "بنتهاوس مميز",
    price: 3200000,
    location: "الخليج التجاري",
    type: "بنتهاوس",
    beds: 4,
    baths: 4,
    size: 400,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
    status: "للبيع",
    features: ["تراس خاص", "مصعد خاص", "خدمة كونسيرج"],
  },
];

const LOCATIONS = ["الكل", "دبي مارينا", "وسط المدينة", "نخلة جميرا", "الخليج التجاري"];
const PROPERTY_TYPES = ["الكل", "فيلا", "شقة", "قصر", "بنتهاوس"];
const STATUSES = ["الكل", "للبيع", "للإيجار"];
const PRICE_RANGES = ["الكل", "1-2 مليون", "2-3 مليون", "3-4 مليون", "4+ مليون"];

function Properties() {
  const [filters, setFilters] = useState({
    type: "الكل",
    location: "الكل",
    status: "الكل",
    priceRange: "الكل",
    minBeds: 0,
    search: "",
  });

  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = PROPERTIES.filter(property => {
    if (filters.type !== "الكل" && property.type !== filters.type) return false;
    if (filters.location !== "الكل" && property.location !== filters.location) return false;
    if (filters.status !== "الكل" && property.status !== filters.status) return false;
    if (filters.minBeds > 0 && property.beds < filters.minBeds) return false;
    if (filters.search && !property.title.includes(filters.search)) return false;
    return true;
  });

  return (
    <div className="bg-desert-light min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-primary arabic-pattern overflow-hidden">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sand mb-6">
            اكتشف عقارك المثالي
          </h1>
          <div className="flex gap-4 items-center bg-white p-4 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="ابحث عن العقار..."
              className="flex-1 px-4 py-2 border-2 border-desert rounded-lg focus:border-gold outline-none"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-primary flex items-center gap-2"
            >
              <FaFilter />
              الفلاتر
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className={`bg-white rounded-lg shadow-lg p-6 mb-8 transition-all duration-300 ${showFilters ? 'block' : 'hidden'}`}>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">نوع العقار</label>
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full px-4 py-2 border-2 border-desert rounded-lg focus:border-gold outline-none"
              >
                {PROPERTY_TYPES.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">الموقع</label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full px-4 py-2 border-2 border-desert rounded-lg focus:border-gold outline-none"
              >
                {LOCATIONS.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">الحالة</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full px-4 py-2 border-2 border-desert rounded-lg focus:border-gold outline-none"
              >
                {STATUSES.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">السعر</label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full px-4 py-2 border-2 border-desert rounded-lg focus:border-gold outline-none"
              >
                {PRICE_RANGES.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">الحد الأدنى لعدد الغرف</label>
              <input
                type="number"
                min="0"
                value={filters.minBeds}
                onChange={(e) => setFilters({ ...filters, minBeds: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border-2 border-desert rounded-lg focus:border-gold outline-none"
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-gray-600">
          <p className="text-lg">
            تم العثور على {filteredProperties.length} عقار
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="group property-card">
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gold/90 text-white px-4 py-1 rounded-full">
                  {property.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-primary">{property.title}</h3>
                <p className="text-gold text-2xl font-bold mb-4">
                  {property.price.toLocaleString('ar-SA')} درهم
                </p>
                <div className="text-gray-600 mb-4">
                  <p className="text-lg mb-2">{property.location}</p>
                  <p className="text-lg">{property.type}</p>
                </div>
                <div className="flex justify-between text-gray-500 mb-4">
                  <span className="flex items-center gap-2">
                    <FaBed className="text-primary" /> {property.beds}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaBath className="text-primary" /> {property.baths}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaRuler className="text-primary" /> {property.size} م²
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature, index) => (
                    <span key={index} className="bg-desert-light px-3 py-1 rounded-full text-primary text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full btn-primary">عرض التفاصيل</button>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-600">لم يتم العثور على عقارات تطابق معايير البحث</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Properties;