document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    
    calculateBtn.addEventListener('click', calculatePrice);

    document.querySelectorAll('.numeric-input').forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
});

function calculatePrice() {
    const ageGroups = parseInt(document.getElementById('ageGroups').value) || 0;
    const sessionCount = parseInt(document.getElementById('sessionCount').value) || 0;
    const contractDuration = document.getElementById('contractDuration').value;
    const siblingDiscount = document.getElementById('siblingDiscount').checked;
    const participantCount = parseInt(document.getElementById('participantCount').value) || 0;

    // پارامترهای قیمت‌گذاری
const BASE_PRICE_PER_AGE_GROUP = 12000000; // قیمت پایه برای هر گروه سنی
const CUSTOM_SESSION_PRICE = 450000;      // قیمت هر جلسه سفارشی

    // Apply discounts
    basePrice *= 0.5; // Initial cooperation discount
    
    if (contractDuration === '3') basePrice *= 0.9;
    else if (contractDuration === '6') basePrice *= 0.8;
    
    if (siblingDiscount) customPrice *= 0.8;
    if (participantCount > 5) customPrice *= 0.75;

    const totalPrice = basePrice + customPrice;
    
    document.getElementById('priceResult').innerHTML = `
        <span class="result-label">قیمت نهایی:</span>
        <br>
        <span class="price-value">${totalPrice.toLocaleString('fa-IR')}</span>
        <span class="currency-unit">تومان</span>
    `;
}