# مشروع: Ahmed Portfolio
هذا المشروع هو محفظة شخصية (Portfolio) مبنية باستخدام React وVite. يهدف المشروع لعرض أعمال ومقاطع فيديو وصور؛ يحتوي على إعداد بسيط للتطوير مع HMR وقواعد ESLint أساسية.
## نظرة عامة
- إطار العمل: React
- أداة البناء والتطوير: Vite
- مدير الحزم: (تفقد `package.json`) — عادةً `npm` أو `pnpm`/`yarn`
## متطلبات النظام
- Node.js (الإصدار 14+ موصى به، تحقق من `engines` في `package.json` إن وُجد)
- مدير الحزم المفضل لديك (npm / pnpm / yarn)
- نظام تشغيل: أي نظام يدعم Node.js (تم التطوير على Windows)
## تركيب المشروع (محليًا)
1. افتح نافذة طرفية في مجلد المشروع (`d:/my-web-projects/ahmed-portfolio`).
2. ثبّت التبعيات:
```powershell
# باستخدام npm
npm install

# أو باستخدام pnpm
pnpm install

# أو باستخدام yarn
yarn install
```

3. شغّل بيئة التطوير (تفتح الخادم المحلي مع HMR):
```powershell
# باستخدام npm
npm run dev

# أو pnpm
pnpm dev

# أو yarn
yarn dev
```

4. افتح المتصفح وادخل إلى العنوان الذي سيطبعه Vite (عادةً http://localhost:5173).
## بناء المشروع للنشر
```powershell
# بناء الإنتاج
npm run build

# معاينة الناتج محليًا
npm run preview
```

المجلد الناتج عادة سيكون `dist/` ويمكن رفعه إلى أي استضافة ثابتة (Netlify, Vercel, GitHub Pages، الخ).
## بنية المشروع الأساسية
المجلدات والملفات المهمة في هذا المستودع:
- `index.html` — نقطة الدخول للتطبيق
- `src/` — ملفات الشيفرة المصدرية
	- `main.jsx` — ملف التهيئة والجذر
	- `App.jsx` — مكون التطبيق الرئيسي
	- `App.css`, `index.css` — أنماط التطبيق
	- `assets/`, `images/`, `videos/` — وسائط المشروع (صور وفيديوهات)
- `public/` — أصول عامة (تنسخ كما هي عند البناء)
- `package.json` — تعريف السكربتات والتبعيات
- `vite.config.js` — إعدادات Vite
- `eslint.config.js` — إعدادات ESLint

ملحوظة: تفقد `src/images/` و`src/videos/` حيث توجد الوسائط المستخدمة في المحفظة.
## السكربتات الشائعة (في `package.json`)

- `dev` — تشغيل خادم التطوير
- `build` — إنشاء حزمة للإنتاج
- `preview` — معاينة حزمة الإنتاج محليًا
- قد تحتوي على سكربتات إضافية مثل `lint` أو `format` حسب الإعداد
## الأدوات والتقنيات المستخدمة

- React (مكونات الواجهة)
- Vite (بناء سريع وHMR)
- ESLint (تحليل جودة الشيفرة)
- CSS/Vanilla CSS أو أي مكتبة CSS مستخدمة في المشروع
- متصفحات حديثة تدعم ES Modules
## تقنيات وممارسات متبعة

- تقسيم المكونات React إلى ملفات صغيرة وقابلة لإعادة الاستخدام
- استخدام Vite لسرعة التطوير وبناء أسرع
- تنظيم الأصول داخل `src/assets`, `src/images`, `src/videos`
- استخدام قواعد ESLint لتحسين جودة الشيفرة
## نصائح لتطوير وتحسين المشروع

- إضافة TypeScript لتحسين الثبات والدقة النوعية
- تحسين أداء الصور (تقليل الحجم، lazy-loading)
- تحسين الأداء للوسائط الثقيلة (تحويل الفيديوهات إلى صيغ أخف أو استخدام CDN)
- إضافة اختبارات (unit/integration) باستخدام Jest أو React Testing Library
- إضافة CI (GitHub Actions) لفحص البنية، اللينت، والاختبارات قبل الدمج
## استكشاف الأخطاء الشائعة

- إذا واجهت خطأ أثناء التثبيت: تأكد من نسخة Node.js وتوافق الحزم.
- إذا لم يعمل `npm run dev`: تأكد من أن المنفذ غير مستخدم أو قم بتغيير إعدادات Vite.
## معلومات إضافية وملاحظات

- إذا أردت تغيير مدير الحزم (npm ↔ pnpm ↔ yarn)، قد تحتاج لحذف `node_modules` وملف القفل (`package-lock.json` أو `pnpm-lock.yaml` أو `yarn.lock`) ثم إعادة التثبيت.
- راجع `package.json` لمزيد من التفاصيل عن الحزم والسكربتات.

---

إذا تريدني أضيف مثال تشغيل مُفصّل (لقطات شاشة أو أوامر لنشر إلى Netlify/Vercel)، أو أترجم README إلى الإنجليزية أيضًا، أخبرني وسأضيفها.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
