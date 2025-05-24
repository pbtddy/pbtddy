<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NUVÉ Lab - حرکت خلاقانه کودکانه</title>
    <style>
        :root {
            --sage: #C8D5B9;
            --wood: #FAEDCD;
            --sky: #B5E2FA;
            --yellow: #FDFFB6;
            --accent: #FF6B6B;
            --font-en: 'Poppins', sans-serif;
            --font-fa: 'Samim', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-fa);
            background: var(--sage);
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
        }

        .scroll-container {
            display: flex;
            width: max-content;
        }

        .section {
            width: 100vw;
            height: 100vh;
            scroll-snap-align: start;
            padding: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* هدر */
        .header {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 1.5rem;
            background: rgba(255,255,255,0.9);
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: var(--font-en);
            font-size: 2rem;
            color: var(--accent);
        }

        /* بخش اصلی */
        .hero {
            background: linear-gradient(45deg, var(--sage), var(--sky));
            flex-direction: column;
            text-align: center;
        }

        .hero h1 {
            font-size: 4rem;
            margin-bottom: 2rem;
            animation: float 3s ease-in-out infinite;
        }

        /* ماشین حساب */
        .calculator {
            background: var(--wood);
            padding: 3rem;
            border-radius: 2rem;
            box-shadow: 0 1rem 3rem rgba(0,0,0,0.1);
            width: 90%;
            max-width: 800px;
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .input-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
        }

        .input-group input,
        .input-group select {
            width: 100%;
            padding: 1rem;
            border: 2px solid var(--sage);
            border-radius: 1rem;
            font-family: inherit;
        }

        button.calculate-btn {
            background: var(--accent);
            color: white;
            padding: 1.5rem 3rem;
            border: none;
            border-radius: 1rem;
            font-size: 1.2rem;
            cursor: pointer;
            transition: transform 0.3s;
            width: 100%;
        }

        #result {
            margin-top: 2rem;
            padding: 2rem;
            background: var(--yellow);
            border-radius: 1rem;
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
        }

        /* انیمیشن‌ها */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-1rem); }
        }

        @media (max-width: 768px) {
            .section {
                padding: 2rem;
                height: auto;
                min-height: 100vh;
            }

            .form-grid {
                grid-template-columns: 1fr;
            }

            .hero h1 {
                font-size: 2.5rem;
            }
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link href="https://cdn.fontcdn.ir/Font/Persian/Samim/Samim.css" rel="stylesheet">
</head>
<body>
    <header class="header">
        <div class="logo">NUVÉ Lab</div>
        <nav>
            <button class="lang-toggle" onclick="toggleLanguage()">EN/FA</button>
        </nav>
    </header>

    <div class="scroll-container">
        <!-- بخش اصلی -->
        <section class="section hero">
            <h1>حرکت خلاقانه کودکانه</h1>
            <p>با روش‌های نوین آموزشی رشد همه جانبه کودک رو تضمین کنید</p>
        </section>

        <!-- ماشین حساب قیمت -->
        <section class="section">
            <div class="calculator">
                <div class="form-grid">
                    <div class="input-group">
                        <label>تعداد گروه‌های سنی</label>
                        <input type="number" id="ageGroups" min="1" value="1">
                    </div>
                    
                    <div class="input-group">
                        <label>تعداد جلسات سفارشی</label>
                        <input type="number" id="sessions" min="0" value="0">
                    </div>

                    <div class="input-group">
                        <label>مدت قرارداد</label>
                        <select id="contract">
                            <option value="3">3 ماهه</option>
                            <option value="6">6 ماهه</option>
                        </select>
                    </div>

                    <div class="input-group">
                        <label>تعداد شرکت‌کنندگان</label>
                        <input type="number" id="participants" min="1" value="1">
                    </div>
                </div>

                <div class="input-group">
                    <label>
                        <input type="checkbox" id="siblings">
                        جلسات خواهر/برادر یا دوتایی
                    </label>
                </div>

                <button class="calculate-btn" onclick="calculatePrice()">محاسبه قیمت</button>
                <div id="result"></div>
            </div>
        </section>
    </div>

    <script>
        // تغییر زبان
        function toggleLanguage() {
            const body = document.body;
            body.dir = body.dir === 'rtl' ? 'ltr' : 'rtl';
            body.style.fontFamily = body.dir === 'rtl' ? 
                'var(--font-fa)' : 'var(--font-en)';
        }

        // محاسبات قیمت
        function calculatePrice() {
            const inputs = {
                ageGroups: parseInt(document.getElementById('ageGroups').value) || 1,
                sessions: parseInt(document.getElementById('sessions').value) || 0,
                contract: document.getElementById('contract').value,
                siblings: document.getElementById('siblings').checked,
                participants: parseInt(document.getElementById('participants').value) || 1
            };

            // قیمت پایه
            let basePrice = 12000000 * inputs.ageGroups;
            let customization = 450000 * inputs.sessions;

            // تخفیف‌ها
            let discounts = {
                startup: 0.5,
                contract: inputs.contract === '6' ? 0.2 : 0.1,
                siblings: inputs.siblings ? 0.2 : 0,
                group: inputs.participants > 5 ? 0.25 : 0
            };

            // اعمال تخفیف‌ها
            basePrice *= discounts.startup;
            basePrice *= (1 - discounts.contract);
            customization *= (1 - discounts.siblings - discounts.group);

            // قیمت نهایی
            const total = basePrice + customization;

            // نمایش نتیجه
            showResult(total);
        }

        function showResult(price) {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <div style="color: var(--accent); margin-bottom: 1rem;">💰 قیمت نهایی</div>
                <div style="font-size: 2.5rem;">${price.toLocaleString('fa-IR')}</div>
                <div style="font-size: 1rem; margin-top: 1rem;">تومان</div>
            `;
        }

        // اسکرول افکت
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.25 });

        sections.forEach(section => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'all 0.8s ease-out';
            observer.observe(section);
        });
    </script>
</body>
</html>