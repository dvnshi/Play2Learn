function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelector').value;
    const languageData = getLanguageData(selectedLanguage);

    // Update content based on the selected language
    document.getElementById('learnText').innerHTML = languageData.learnText;
    document.getElementById('getStartedText').innerHTML = languageData.getStartedText;
    document.getElementById('accountText').innerHTML = languageData.accountText;
    document.getElementById('enterIdText').innerHTML = languageData.enterIdText;
    document.getElementById('enterHereText').innerHTML = languageData.enterHereText;
    document.getElementById('enterPasswordText').innerHTML = languageData.enterPasswordText;
    document.getElementById('enterText').innerHTML = languageData.enterText;
}

function getLanguageData(language) {
    // Add translations for each language
    const translations = {
        'en': {
            learnText: 'THE FREE, FUN AND INTERACTIVE WAYS TO LEARN YOUR LAWS.',
            getStartedText: 'GET STARTED',
            accountText: 'I ALREADY HAVE AN ACCOUNT',
            enterIdText: 'Enter your ID',
            enterHereText: 'enter here',
            enterPasswordText: 'Enter your password',
            enterText: 'Enter',
        },
        'hi': {
            learnText: 'आपके कानून को सीखने के लिए मुफ्त, मजेदार और इंटरएक्टिव तरीके।',
            getStartedText: 'प्रारंभ करें',
            accountText: 'मेरे पास पहले से ही खाता है',
            enterIdText: 'अपना आईडी दर्ज करें',
            enterHereText: 'यहां दर्ज करें',
            enterPasswordText: 'अपना पासवर्ड दर्ज करें',
            enterText: 'प्रवेश करें',
        },
        'bn': {
            learnText: 'আপনার আইন শেখার জন্য বিনামূল্যে, মজার এবং ইন্টারঅ্যাক্টিভ উপায়ে।',
            getStartedText: 'শুরু করুন',
            accountText: 'আমার ইতিমধ্যে একটি অ্যাকাউন্ট রয়েছে',
            enterIdText: 'আপনার আইডি লিখুন',
            enterHereText: 'এখানে লিখুন',
            enterPasswordText: 'আপনার পাসওয়ার্ড লিখুন',
            enterText: 'প্রবেশ করুন',
        },
        'doi': {
            learnText: 'ਤੁਹਾਡੇ ਕਾਨੂੰਨ ਨੂੰ ਸਿੱਖਣ ਲਈ ਮੁਫਤ, ਮਜੇਦਾਰ ਅਤੇ ਇੰਟਰਐਕਟਿਵ ਤਰੀਕੇ।',
            getStartedText: 'ਸ਼ੁਰੂ ਕਰੋ',
            accountText: 'ਮੇਰੇ ਕੋਲ ਪਹਿਲਾਂ ਹੀ ਇੱਕ ਖਾਤਾ ਹੈ',
            enterIdText: 'ਆਪਣਾ ID ਦਰਜ ਕਰੋ',
            enterHereText: 'ਇੱਥੇ ਦਰਜ ਕਰੋ',
            enterPasswordText: 'ਆਪਣਾ ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ',
            enterText: 'ਦਾਖਲ ਹੋਵੋ',
        },
        'as': {
            learnText: 'আপোনাৰ আইন জানিবলৈ মুক্ত, মজাই আৰু ইন্টাৰঅেক্টিভ উপায়ে।',
            getStartedText: 'আৰম্ভ কৰক',
            accountText: 'মোৰ ইতিমধ্যে একটি খাতা আছে',
            enterIdText: 'আপোনাৰ আইডি লিখক',
            enterHereText: 'ইয়াত লিখক',
            enterPasswordText: 'আপোনাৰ পাছৱৰ্ড লিখক',
            enterText: 'প্ৰৱেশ কৰক',
        },
        'brx': {
            learnText: 'आपुनि आपुनि कौनों জानोलै मुफ्त, रोजाइ आरो इंटरएक्टिभ थान।',
            getStartedText: 'कुनैपनि सुरुवात करो',
            accountText: 'मेराय पाछा से पहले से ही एक खाता है',
            enterIdText: 'अपुन आपुनिया ID दर्ज करो',
            enterHereText: 'इथे दर्ज करो',
            enterPasswordText: 'आपुन आपुनिया पासवर्ड दर्ज करो',
            enterText: 'प्रवेश करो',
        },
        'gu': {
            learnText: 'તમારા કાનૂનને શીખવા માટે મફત, મજેદાર અને ઇન્ટરઍક્ટિવ રીતે।',
            getStartedText: 'શરૂ કરો',
            accountText: 'મારા પાસે પહેલાંથી એક એકાઉન્ટ છે',
            enterIdText: 'તમારો આઈડી દાખલ કરો',
            enterHereText: 'અહીં દાખલ કરો',
            enterPasswordText: 'તમારો પા',
                },  
                'kn': {
                    learnText: 'ನಿಮ್ಮ ಕಾನೂನು ಕಲಿಯಲು ಉಚಿತ, ರಮಣೀಯ ಮತ್ತು ಇಂಟರ್ಯಾಕ್ಟಿವ್ ವಿಧಾನಗಳು।',
                    getStartedText: 'ಪ್ರಾರಂಭಿಸಿ',
                    accountText: 'ನನಗೆ ಈಗಾಗಲೇ ಖಾತೆ ಇದೆ',
                    enterIdText: 'ನಿಮ್ಮ ಐಡಿ ನಮೂದಿಸಿ',
                    enterHereText: 'ಇಲ್ಲಿ ನಮೂದಿಸಿ',
                    enterPasswordText: 'ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ',
                    enterText: 'ಪ್ರವೇಶಿಸಿ',
                },
                'ks': {
                    learnText: 'توهانچو کانون سیکھڻ لاء مفت، مزیدار ۽ انٽرایکٽو ٽریکسون ۔',
                    getStartedText: 'شروع ڪريو',
                    accountText: 'مان جيڪان ڏانهن حساب آهي',
                    enterIdText: 'توهان جو ID درج ڪريو',
                    enterHereText: 'اهيندا درج ڪريو',
                    enterPasswordText: 'توهان جو پاس ورڊ درج ڪريو',
                    enterText: 'پُرڇيء',
                },
                'kok': {
                    learnText: 'तुमका कायदा सिकयाचं म्हणून मुफ्त, मस्त आनि बाट वाट तुमका सिकयाचं तरीका।',
                    getStartedText: 'सुरु करा',
                    accountText: 'माझ्याकडून पुन्हा एक खातं आहे',
                    enterIdText: 'तुमचं आयडी प्रविष्ट करा',
                    enterHereText: 'इथे प्रविष्ट करा',
                    enterPasswordText: 'तुमचं संकेतशब्द प्रविष्ट क',
                          },   
                          'mai': {
                            learnText: 'आपके कानून को सीखने के लिए मुफ्त, मजेदार और इंटरएक्टिव तरीके।',
                            getStartedText: 'प्रारंभ करें',
                            accountText: 'मेरे पास पहले से ही खाता है',
                            enterIdText: 'अपना आईडी दर्ज करें',
                            enterHereText: 'यहां दर्ज करें',
                            enterPasswordText: 'अपना पासवर्ड दर्ज करें',
                            enterText: 'प्रवेश करें',
                        },
                        'ml': {
                            learnText: 'നിങ്ങളുടെ കാനൂനുകളെ പഠിക്കാൻ, കളിക്കാൻ എന്നൊരു പ്രവണത കൂടി ഇന്റരാക്ടിവ് രീതിയിൽ.',
                            getStartedText: 'ആരംഭിക്കുക',
                            accountText: 'എനിക്ക് ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ട്',
                            enterIdText: 'നിനക്ക് നിനക്ക് അടിയാളമായ ഒരു ID ലഭിക്കുക',
                            enterHereText: 'ഇവിടെ നിനക്ക് അടിയാളമായ ഒരു ID ലഭിക്കുക',
                            enterPasswordText: 'നിനക്ക് നിനക്ക് അടിയാളമായ ഒരു ID ലഭിക്കുക',
                            enterText: 'പ്രവേശിക്കുക',
                        },
                        'mr': {
                            learnText: 'तुमच्या कायद्यांचे शिकवण्यासाठी, मोफत, आनंददायक आणि इंटरॅक्टिव्ह पद्धती.',
                            getStartedText: 'सुरू करा',
                            accountText: 'माझ्याकडून आधीच खाते आहे',
                        },
                        'ne': {
                            learnText: 'तपाईंको कानून सिक्न मुक्त, मनोरञ्जनपूर्ण र इन्टरएक्टिभ तरिकामा।',
                            getStartedText: 'प्रारंभ गर्नुहोस्',
                            accountText: 'मेरो पहिलोदेखि खाता छ',
                        }, 
                        'or': {
                            learnText: 'ଆପଣଙ୍କର ଆଇନ ସମ୍ବନ୍ଧରେ ଶିଖିବା ପାଇଁ, ମାଜାଦାର ଏବଂ ଇଣ୍ଟରାକ୍ଟିଭ ପ୍ରଣାଳି।',
                            getStartedText: 'ଶୁରୁ କରନ୍ତୁ',
                            accountText: 'ମୋ ପାଇଁ ଇମାନେ ଖାତା ଅଛି',
                        },
                        'sa': {
                            learnText: 'आपके कानून को सीखने के लिए मुफ्त, मजेदार और इंटरएक्टिव तरीके।',
                            getStartedText: 'प्रारंभ करें',
                            accountText: 'मेरे पास पहले से ही खाता है',
                        },
                        'pa': {
                            learnText: 'ਤੁਹਾਡੇ ਕਾਨੂੰਨ ਬਾਰੇ ਜਾਣਨ ਲਈ ਮੁਫ਼ਤ, ਮਜੇਦਾਰ ਅਤੇ ਇੰਟਰਐਕਟਿਵ ਤਰੀਕੇ ਨਾਲ।',
                            getStartedText: 'ਸ਼ੁਰੂ ਕਰੋ',
                            accountText: 'ਮੇਰੇ ਕੋਲ ਪਹਿਲਾਂ ਹੀ ਇੱਕ ਖਾਤਾ ਹੈ',
                        },
                        'sat': {
                            learnText: 'ᱵᱤᱭᱟᱹᱞ ᱠᱟᱱᱤᱞᱤᱠ ᱨᱮᱱᱟᱞ ᱯᱟᱹᱨᱤ, ᱪᱮᱯᱴᱱᱤᱠ ᱯᱩᱦᱟᱠᱚ ᱠᱚᱢᱚᱱᱚᱛ ᱥᱮᱨᱢᱚᱨᱤᱠᱮᱱᱤᱠᱤᱱᱤᱠᱷᱟᱜᱚᱢᱚᱱ ᱢᱮᱱᱟᱞᱤᱠᱟᱨᱤᱠᱮᱱᱤᱠᱤᱱᱤᱠᱷᱟᱜᱚᱢᱚᱱ।',
                            getStartedText: 'ᱴᱷᱚᱱᱚᱝ ᱢᱮ',
                            accountText: 'ᱢᱮᱱᱟᱞᱤᱠᱟᱨᱤᱠ ᱨᱮ ᱨᱮᱱᱟᱞ',
                        },
                        'sd': {
                            learnText: 'تمهار قانون سکڻ لاء ڄاڻ سپرت، مزيدار ۽ انٽراکٽو ٻابتن۔',
                            getStartedText: 'شروع ٿڻو',
                            accountText: 'منهنجي چهڻ پهرين آهي',
                        },
                        'ta': {
                            learnText: 'உங்கள் சட்டங்களை கற்றுக்கொள்ள இலவசமாக, சுவாரஸ்யமான மற்றும் இணைந்த முறைகளின் மூலம்.',
                            getStartedText: 'ஆரம்பிக்கவும்',
                            accountText: 'எனக்கு ஏற்கனவே கணக்கு உள்ளது',
                        }, 
                        'te': {
                            learnText: 'మీ కానూనులను నేర్చుకోవడానికి, ఉచిత, రమణీయ, మరియు ఇంటరాక్టివ్ మోడల్స్.',
                            getStartedText: 'ప్రారంభించండి',
                            accountText: 'నాకు ఇప్పటికే ఖాతా ఉంది',
                        },
                        'mni': {
                            learnText: 'আপোনার আইন সম্পর্কে শেখার জন্য বিনামূল্যে, মজাদার এবং ইন্টারেক্টিভ উপায়ে।',
                            getStartedText: 'আরম্ভ করুন',
                            accountText: 'আমার কাছে ইতিমধ্যে একটি অ্যাকাউন্ট রয়েছে',
                        },
                        'ur': {
                            learnText: 'آپ کے قانون کو سیکھنے کے لئے مفت، مزیدار اور متعامل طریقے۔',
                            getStartedText: 'شروع کریں',
                            accountText: 'میرے پاس پہلے ہی ایک کھاتا ہے',
                        },
                                                      
                                             
                             // Add translations for other languages
    };

    return translations[language] || translations['en']; // Default to English if the selected language is not available
}