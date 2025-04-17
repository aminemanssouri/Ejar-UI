import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-primary text-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">عقارات الفاخرة</h3>
            <p className="text-desert-light">
              نحن نساعدك في العثور على منزل أحلامك
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-desert hover:text-gold">من نحن</a></li>
              <li><a href="#" className="text-desert hover:text-gold">العقارات</a></li>
              <li><a href="#" className="text-desert hover:text-gold">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">خدماتنا</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-desert hover:text-gold">شراء عقار</a></li>
              <li><a href="#" className="text-desert hover:text-gold">بيع عقار</a></li>
              <li><a href="#" className="text-desert hover:text-gold">تأجير عقار</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">معلومات الاتصال</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-gold" />
                <span className="text-desert">شارع الشيخ زايد، دبي</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-gold" />
                <span className="text-desert" dir="ltr">+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gold" />
                <span className="text-desert">info@realestate.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-desert/20 mt-12 pt-8 text-center text-desert">
          <p>© {new Date().getFullYear()} عقارات الفاخرة. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;