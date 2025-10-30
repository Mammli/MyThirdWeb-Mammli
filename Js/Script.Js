//فراخواندن هایمان به جی اس
const textInputEl = document.querySelector('.text_input');
const charachtersNumberEl = document.querySelector('.characters-info');
const twitterCharacterNumberLimitEl = document.querySelector('.twitter-info')
const facebookCharacterNumberLimitEl = document.querySelector('.facebook-info')
const wordsNumberEl = document.querySelector('.word-info')



//زدن یک فانکشن برای کنترل ورودی های جی اس
//                   برای کاراکتر هاس
function inputTextareaEl() {
    //در اینجا میایم و این مقدار داده شده به اون رو که به صورت عدد میاد اگر ولیو بنویسیم رو فراخوانی میکنه.
    let textareaValue = textInputEl.value.length;
    //--------------------------------------------------------------------------------------------------------------------------------
    //for characters
    charachtersNumberEl.textContent = (textareaValue);
    //--------------------------------------------------------------------------------------------------------------------------------
    //For twitter
    const twitterCharacter = 280 - textareaValue;
    if (twitterCharacter < 0) {
        twitterCharacterNumberLimitEl.textContent = (0);
        twitterCharacterNumberLimitEl.classList.add('anything-info-ADD')
    }
    else {
        twitterCharacterNumberLimitEl.textContent = (twitterCharacter);
        twitterCharacterNumberLimitEl.classList.remove('anything-info-ADD')
    }
    //----------------------------------------------------------------------------------------------------------------------------
    //for Facebook
    const facebookCharacter = 2200 - textareaValue;
    if (facebookCharacter < 0) {
        facebookCharacterNumberLimitEl.textContent = (0)
        facebookCharacterNumberLimitEl.classList.add('anything-info-ADD')
    }
    else {
        facebookCharacterNumberLimitEl.textContent = (facebookCharacter);
        facebookCharacterNumberLimitEl.classList.remove('anything-info-ADD')
    }
    //----------------------------------------------------------------------------------------------------------------------------
    //for words
    var numberOfWords = textInputEl.value.split(' ').length;

    if (textInputEl.value.length === 0) {
        numberOfWords = 0;
    }

    wordsNumberEl.textContent = (numberOfWords);
}

//میایم و بهش میگیم اگر این شد این و انجام بده
textInputEl.addEventListener('input', inputTextareaEl)
