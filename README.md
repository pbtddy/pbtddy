<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NUVÉ Lab - حرکت، بازی، آگاهی</title>
    <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet>
    <style>
        /* Global Persian Modern Style */
        :root {
            --primary: #1A5F7A; /* Persian Blue */
            --secondary: #CC7E6B; /* Terracotta */
            --accent: #76C4AE; /* Turquoise */
            --bg: #FFF3E0; /* Saffron Cream */
            --text: #2D2D2D;
        }

        body {
            background: linear-gradient(145deg, var(--bg), rgba(255,255,255,0.8));
            font-family: Vazirmatn, sans-serif;
        }

        /* Hero Section - با افکت پارالاکس ایرانی */
        .hero-section {
            height: 100vh;
            position: relative;
            overflow: hidden;
        }

        .hero-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.9;
            mix-blend-mode: multiply;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            padding: 2rem;
            text-align: center;
            transform: translateY(20%);
        }

        .hero-title {
            font-size: 4rem;
            color: var(--primary);
            text-shadow: 0 4px 12px rgba(26,95,122,0.2);
            margin-bottom: 1.5rem;
            animation: titleFloat 6s ease-in-out infinite;
        }

        /* Section Transition - با الهام از هنر خوشنویسی */
        .section-divider {
            height: 80px;
            background: url('data:image/svg+xml;utf8,<svg ... طرح نقوش اسلیمی ... </svg>');
            background-size: cover;
            opacity: 0.3;
        }

        /* Our Story Section - با افکت داستان پردازی مینیاتوری */
        .story-section {
            background: linear-gradient(45deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6));
            backdrop-filter: blur(10px);
            padding: 4rem 2rem;
        }

        .story-cat-path {
            position: absolute;
            width: 120%;
            height: auto;
            right: -10%;
            opacity: 0.1;
            pointer-events: none;
        }

        /* Age Groups - با طراحی مدرن ایرانی */
        .age-group-card {
            background: white;
            border-radius: 16px;
            padding: 1.5rem;
            box-shadow: 0 8px 24px rgba(0,0,0,0.08);
            transition: 0.3s;
            border-right: 4px solid var(--primary);
        }

        .age-group-card:hover {
            transform: translateX(-10px);
            border-right-color: var(--secondary);
        }

        /* Methodology Section - با افکت کتاب علمی قدیمی */
        .methodology-card {
            background: url('data:image/svg+xml;utf8,<svg ... طرح کاغذ پوستی ... </svg>');
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* Registration Form - با الهام از فرم‌های سنتی */
        .persian-form-input {
            border: 1px solid var(--primary);
            border-radius: 8px;
            padding: 1rem;
            font-size: 1.1rem;
            transition: 0.3s;
        }

        .persian-form-input:focus {
            border-color: var(--secondary);
            box-shadow: 0 0 0 3px rgba(204,126,107,0.2);
        }

        /* Responsive Design برای زبان فارسی */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
                line-height: 1.4;
            }
            
            .age-group-card {
                margin: 1rem 0;
            }
        }

        @keyframes titleFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
    </style>
</head>
<body>

    <!-- ❶ Hero Section -->
    <section class="hero-section">
        <video class="hero-video" autoplay muted loop>
            <source src="nature-play.mp4" type="video/mp4">
        </video>
        <div class="hero-content">
            <h1 class="hero-title">حرکت، بازی، آگاهی</h1>
            <p class="hero-subtitle">ما برای کودکان، جهانی می‌سازیم برای لمس، تجربه و رشد</p>
            <div class="cta-buttons">
                <button class="persian-cta">ثبت‌نام کودک</button>
                <button class="persian-cta">مشاهده ویدئو</button>
            </div>
        </div>
    </section>

    <!-- ❷ Our Story -->
    <section class="story-section">
        <img src="orange-cat-path.svg" class="story-cat-path" alt="مسیر گربه نارنجی">
        <h2>داستان ما، فلسفه ما</h2>
        <p>NUVÉ Lab فضایی‌ست از حرکت، لمس، و خیال</p>
        <blockquote class="persian-quote">
            «هر حرکت کوچک، پلی‌ست به درون. و هر بازی، دروازه‌ای‌ست به رشد»
        </blockquote>
    </section>

    <!-- ❸ For Children -->
    <section class="age-groups-section">
        <h2>حرکت، بازی، آگاهی برای ۲ تا ۶ سال</h2>
        <div class="age-group-container">
            <div class="age-group-card" style="border-color: #FF9F66;">
                <h3>۲–۳ سال</h3>
                <p>کشف حسی-حرکتی اولیه</p>
            </div>
            <!-- سایر گروه‌های سنی -->
        </div>
    </section>

    <!-- سایر سکشن‌ها با استایل مشابه -->

    <script>
        // Interactive Persian Elements
        const ageCards = document.querySelectorAll('.age-group-card');
        ageCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateX(-10px) rotate(-2deg)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateX(0) rotate(0)';
            });
        });

        // Animated Form Interactions
        const formInputs = document.querySelectorAll('.persian-form-input');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.style.transform = 'scale(1)';
            });
        });
    </script>
</body>
</html>