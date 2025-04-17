import { Link } from 'react-router-dom';
import { FaHome, FaClock, FaUserTie, FaSearch, FaStar, FaArrowLeft } from 'react-icons/fa';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center arabic-pattern overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582797493098-07c2b6a631e4')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-sand hero-text-shadow animate-fade-in">
            اكتشف منزل أحلامك
          </h1>
          <p className="text-2xl mb-12 text-desert-light hero-text-shadow animate-fade-in delay-200">
            عقارات فاخرة تجمع بين الأصالة والحداثة
          </p>
          <div className="max-w-3xl mx-auto mb-12 p-4 glass-effect rounded-xl animate-fade-in delay-300">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="ابحث عن العقار المناسب..."
                className="flex-1 px-6 py-3 rounded-lg border-2 border-desert focus:border-gold outline-none"
              />
              <button className="btn-primary flex items-center gap-2">
                <FaSearch />
                ابحث الآن
              </button>
            </div>
          </div>
          <div className="flex gap-6 justify-center animate-fade-in delay-400">
            <Link to="/properties" className="btn-primary flex items-center gap-2">
              تصفح العقارات
              <FaArrowLeft className="text-lg" />
            </Link>
            <button className="px-6 py-3 border-2 border-gold text-sand rounded-lg hover:bg-gold/20 transition-all duration-300 flex items-center gap-2">
              اتصل بنا
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1200+", label: "عقار متاح" },
              { number: "800+", label: "عميل سعيد" },
              { number: "10+", label: "سنوات خبرة" },
              { number: "4.9", label: "تقييم العملاء", icon: <FaStar className="text-gold" /> }
            ].map((stat, index) => (
              <div key={index} className="floating-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                  {stat.number}
                  {stat.icon}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white arabic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">لماذا تختارنا</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="feature-icon mx-auto">
                <FaHome className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">تشكيلة واسعة</h3>
              <p className="text-gray-600 text-lg">
                مجموعة متنوعة من العقارات الفاخرة تناسب جميع الأذواق
              </p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="feature-icon mx-auto">
                <FaClock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">خدمة سريعة</h3>
              <p className="text-gray-600 text-lg">
                إجراءات سريعة وسلسة لشراء أو استئجار العقار
              </p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="feature-icon mx-auto">
                <FaUserTie className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">خبراء موثوقون</h3>
              <p className="text-gray-600 text-lg">
                فريق من الخبراء المحترفين لمساعدتك في اتخاذ القرار المناسب
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-desert-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">عقارات مميزة</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="property-card">
                <div className="relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-158${2797493098 + item}`}
                    alt="Luxury Property"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold/90 text-white px-4 py-1 rounded-full">
                    حصري
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-primary">فيلا فاخرة</h3>
                  <p className="text-gold text-xl font-bold mb-4">
                    {(2 + item).toLocaleString('ar-SA')} مليون درهم
                  </p>
                  <div className="flex justify-between items-center mb-4 text-gray-600">
                    <span>دبي مارينا</span>
                    <span>500 متر مربع</span>
                  </div>
                  <button className="w-full btn-primary">عرض التفاصيل</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/properties" className="btn-primary inline-flex items-center gap-2">
              عرض جميع العقارات
              <FaArrowLeft />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white arabic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">آراء عملائنا</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "أحمد محمد",
                role: "مستثمر عقاري",
                text: "تجربة رائعة مع فريق محترف. ساعدوني في العثور على أفضل الفرص الاستثمارية."
              },
              {
                name: "سارة أحمد",
                role: "مالكة منزل",
                text: "خدمة ممتازة وفريق متعاون. وجدت منزل أحلامي بسهولة وسرعة."
              },
              {
                name: "خالد عبدالله",
                role: "مستأجر",
                text: "شفافية في التعامل وخيارات متنوعة. أنصح بالتعامل معهم."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-2 border-desert hover:border-gold/50 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-gold" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;