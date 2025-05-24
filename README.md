```markdown
# NUVÉ Lab Price Calculator

![Project Preview](https://via.placeholder.com/800x500.png?text=NUVÉ+Lab+Price+Calculator+Preview)

یک ماشین حساب قیمت‌گذاری پیشرفته با رابط کاربری فارسی و پشتیبانی RTL

## ✨ ویژگی‌های کلیدی

- 💻 رابط کاربری کاملاً واکنش‌گرا (Responsive)
- 🎨 طراحی مدرن با انیمیشن‌های ظریف
- 📱 سازگاری با تمام دستگاه‌ها
- 🧮 محاسبات قیمت پیشرفته با قوانین سفارشی
- 💰 سیستم تخفیف هوشمند
- 🌍 پشتیبانی کامل از زبان فارسی (راست به چپ)

## 🚀 راه اندازی سریع

### پیش نیازها
- مرورگر مدرن (Chrome 90+, Firefox 88+, Safari 14+)
- دسترسی به اینترنت (برای فونت Vazirmatn)

### نصب
```bash
git clone https://github.com/yourusername/nuve-lab-price-calculator.git
cd nuve-lab-price-calculator
```

## 🛠 استفاده

1. فایل `index.html` را در مرورگر باز کنید
2. مقادیر مورد نظر را وارد نمایید:
   - تعداد گروه‌های سنی
   - تعداد جلسات سفارشی
   - مدت قرارداد (3 یا 6 ماهه)
   - تعداد شرکت‌کنندگان
3. گزینه‌های تخفیف را انتخاب کنید
4. دکمه "محاسبه قیمت نهایی" را کلیک کنید

## 🎨 سفارشی سازی

### تغییر رنگ‌ها
در فایل `styles/main.css` متغیرهای CSS را ویرایش کنید:
```css
:root {
    --primary: #1A5F7A;    /* رنگ اصلی */
    --secondary: #CC7E6B;  /* رنگ ثانویه */
    --accent: #76C4AE;     /* رنگ تاکیدی */
    --bg: #FFF3E0;         /* رنگ پس زمینه */
    --text: #2D2D2D;       /* رنگ متن اصلی */
}
```

### تغییر نرخ‌های محاسباتی
در فایل `scripts/main.js` مقادیر پایه را ویرایش کنید:
```javascript
// پارامترهای قیمت‌گذاری
const BASE_PRICE_PER_AGE_GROUP = 12000000; // قیمت پایه برای هر گروه سنی
const CUSTOM_SESSION_PRICE = 450000;      // قیمت هر جلسه سفارشی
```

## 📜 مجوز
این پروژه تحت مجوز [MIT](LICENSE) منتشر شده است.

## 🤝 مشارکت
1. ریپازیتوری را فورک کنید
2. برنچ جدید ایجاد کنید (`git checkout -b feature/your-feature`)
3. کامیت تغییرات (`git commit -m 'Add some feature'`)
4. به برنچ اصلی پوش کنید (`git push origin feature/your-feature`)
5. یک Pull Request ایجاد کنید

## 📧 تماس با ما
برای پرسش و پیشنهادات: [contact@nuvelab.com](mailto:contact@nuvelab.com)  
گزارش باگ: [ایجاد Issue جدید](https://github.com/yourusername/nuve-lab-price-calculator/issues)

---

**نکته:** این پروژه به صورت فعال در حال توسعه است. برای دریافت آخرین بروزرسانی‌ها، ریپازیتوری را ستاره بزنید ⭐
```

این فایل README شامل:

1. اطلاعات کلی پروژه
2. دستورالعمل نصب و استفاده
3. راهنمای سفارشی سازی
4. مجوز و قوانین
5. دستورالعمل مشارکت
6. اطلاعات تماس
7. نکات فنی مهم

----------

```markdown
# NUVÉ Lab Price Calculator

![Project Preview](https://via.placeholder.com/800x500.png?text=NUVÉ+Lab+Price+Calculator+Preview)

An advanced pricing calculator with Persian UI and RTL support

## ✨ Key Features

- 💻 Fully Responsive UI
- 🎨 Modern Design with Subtle Animations
- 📱 Mobile-First Approach
- 🧮 Advanced Price Calculations with Custom Rules
- 💰 Smart Discount System
- 🌍 Full RTL (Right-to-Left) Support for Persian

## 🚀 Quick Start

### Prerequisites
- Modern Browser (Chrome 90+, Firefox 88+, Safari 14+)
- Internet Connection (for Vazirmatn font)

### Installation
```bash
git clone https://github.com/yourusername/nuve-lab-price-calculator.git
cd nuve-lab-price-calculator
```

## 🛠 Usage

1. Open `index.html` in your browser
2. Input required values:
   - Age Groups Count
   - Custom Sessions Number
   - Contract Duration (3 or 6 months)
   - Participants Count
3. Select discount options
4. Click "Calculate Final Price" button

## 🎨 Customization

### Color Scheme
Edit CSS variables in `styles/main.css`:
```css
:root {
    --primary: #1A5F7A;    /* Main brand color */
    --secondary: #CC7E6B;  /* Secondary color */
    --accent: #76C4AE;     /* Accent color */
    --bg: #FFF3E0;         /* Background color */
    --text: #2D2D2D;       /* Primary text color */
}
```

### Pricing Configuration
Modify base values in `scripts/main.js`:
```javascript
// Pricing parameters
const BASE_PRICE_PER_AGE_GROUP = 12000000; // Base price per age group
const CUSTOM_SESSION_PRICE = 450000;      // Price per custom session
```

## 📜 License
This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📧 Contact

For inquiries: [contact@nuvelab.com](mailto:contact@nuvelab.com)  
Report bugs: [Open New Issue](https://github.com/yourusername/nuve-lab-price-calculator/issues)

---

**Note:** This project is actively maintained. Star the repo ⭐ to stay updated with latest developments.

[View Persian Version](README.fa.md)
```

This English version includes:
- Full technical documentation
- Bilingual support notice
- Clear contribution guidelines
- Maintains all functionality from Persian version
- Standard open-source structure
- Active development status

The document follows best practices for open-source projects while maintaining the original Persian functionality. Would you like any specific section to be expanded or modified?