// Paralel evren senaryoları
const universeStories = [
    "Başka bir evrende, ikimiz de uzay kaşifiyiz. Ay'ın karanlık yüzünde kurduğumuz küçük istasyonda, gece vardiyalarında sana şiirler okuyorum. Dünya'ya baktığımızda, o mavi gezegendeki aşkımızın ne kadar nadir olduğunu anlıyoruz. Sen her seferinde 'Akif, bu şiir çok güzel ama kahvaltı yapmayı da unutma' diyorsun. Uzayda bile pratiksin.",
    
    "Paralel bir dünyada Paris'te sokak ressamlarıyız. Sen müzik çalıyor, ben de seni çizip duruyorum. Montmartre tepelerinde, her günbatımında yeni bir portren yapıyorum. Çünkü her bakışımda seni yeniden keşfediyorum. Bir gün bir turist resmin için 500 euro teklif etti, sen 'Akif'i satmam' dedin. O kadar mutlu oldum ki fırçayı düşürdüm.",
    
    "Başka bir zaman çizgisinde, Anadolu'nun eski bir köyünde yaşıyoruz. Ben kitap yazıyor, sen bahçede çiçek yetiştiriyorsun. Akşamları çınar ağacının altında oturmuş, sana yazdığım hikayeleri okuyorum. Her hikayede sen varsın. Köy muhtarı bile 'Bu Akif'in kafası hep havada, ama Melike'ye bayılıyor' diyor. Haklı da.",
    
    "Alternatif bir evrende, ikimiz de deniz biyologuyuz. Okyanusun derinliklerinde, bilinmeyen türleri keşfederken, senin gözlerindeki hayranlık beni büyülüyor. Her dalışta, seni ilk kez gördüğüm anı yeniden yaşıyorum. Geçen keresinde bir köpekbalığı gördün ve 'Ne kadar şirin!' dedin. Ben de o an anladım ki seni sonsuza kadar korumak istiyorum.",
    
    "Başka bir boyutta, küçük bir sahil kasabasında fotoğrafçı dükkânı işletiyoruz. Sen çektiğim her fotoğrafı büyüyle tuhaf bir güzelliğe dönüştürüyorsun. Ama en güzel fotoğrafım, her sabah uyanırken gördüğüm yüzün. Müşteriler sürekli 'Bu fotoğraflar çok romantik' diyor. Sen de gülümseyip 'Fotoğrafçım aşık' diyorsun.",
    
    "Paralel bir gerçeklikte, birlikte çay bahçesi işletiyoruz. Himalayadaki bu küçük dükkânda, dünyanın her yerinden gelen seyyahlara çay servisi yapıyoruz. Her çay demlerken, sana olan aşkımı o sıcak buharla birlikte gökyüzüne gönderirim. Sen her seferinde 'Akif, çay fazla demlendi' dersin ama içersin. Çünkü aşkla demlemiş oluyorum.",
    
    "Alternatif bir tarihte, Venedik'te küçük bir kanalın kenarında antikacılık yapıyoruz. Her eski nesne bir hikaye anlatır ama ben hepsinden çok bizim hikayemizi anlatmayı seviyorum. Gondolcular bile bizim aşkımızı kıskanır. Bir gün bir müşteri 17. yüzyıldan bir aşk mektubu getirdi, sen okuduktan sonra 'Akif'inki daha güzel' dedin. O gün dükkanı erken kapattık.",
    
    "Başka bir evrende, kutup araştırmacısıyız. Antarktika'nın buzlu sessizliğinde, aurora ışıkları altında dans ederiz. Minus otuz derece soğukta bile kalbim seninle o kadar sıcak ki, karlar eriyor sanki. Sen pingvinlerle arkadaş olmuşsun, onlara benim hakkımda şarkılar söylüyorsun. Pingvinler bile bizi kıskanıyor.",
    
    "Paralel bir dünyada, birlikte arkeolog olmuşuz. Mezopotamya'nın antik kalıntıları arasında çalışırken, binlerce yıllık love letters buluyoruz. Ama hiçbiri sana yazdıklarım kadar tutkulu değil. Geçen hafta 4000 yıllık bir tablet bulduk, sen çözmeye çalışırken 'Bu da aşk mektubu mu acaba?' dedin. Her şeyde aşkı görmen çok tatlı.",
    
    "Alternatif bir gerçeklikte, yağmurlu Seattle'da küçük bir kahve dükkânı açmışız. Her sabah sana özel karışım kahve hazırlıyorum. Müşteriler kahveyi beğeniyor ama ben sadece senin içtiğin ilk yudumdan sonraki gülümsemen için yaşıyorum. Bir müşteri 'Bu kahve aşk kokuyorsa şaşırmam' demişti. Sen de 'Aynen öyle' demiştin.",
    
    "Başka bir zaman diliminde, birlikte İskoçya'da koyun çobanlığı yapıyoruz. Yeşil tepelerde, sabah sisinde kaybolurken elini tutuyorum. Koyunlar bile bizim ne kadar birbirimizi sevdiğimizi biliyor. Hatta koyunlardan birini 'Aşk' diye isimlendirmişsin. O koyun da hep bizi takip ediyor, sanki bizden aşkı öğrenmeye çalışıyor.",
    
    "Paralel bir boyutta, Kyoto'da geleneksel Japon bahçesi tasarlıyoruz. Her taşı, her yaprak düşüşünü seninle birlikte planlıyoruz. Kimono giydiğin günler, sen benim kendi cennetim oluyorsun. Bahçeye gelen turistler sürekli fotoğraf çekiyor ama sen 'Akif, çiçeklerin fotoğrafını çeksinler, benim değil' diyorsun. Ama sen çiçeklerden güzelsin.",
    
    "Alternatif bir evrende, Afrika safarisinde fotoğraf çekiyoruz. Aslanlar, filler ve zebralar arasında ama ben hâlâ en güzel manzaranın senin gülüşün olduğunu düşünüyorum. Her sunset'te sana bir kez daha aşık oluyorum. Geçen gün bir aslan bize yaklaştı, sen 'Merhaba güzelim' dedin. Aslan da senin sevimli halinden etkilendi galiba, uzaklaştı.",
    
    "Başka bir gerçeklikte, Norveç'te kuzey ışıklarını araştırıyoruz. İgloo'muzda, aurora borealis'in altında sarılmışız. Işıklar dans ederken sen şarkı söylüyorsun. O an, evrenin en güzel müziği senin sesin oluyor. Kuzey ışıkları bile seninle uyum sağlamış gibi dans ediyor.",
    
    "Paralel bir evrende, ikimiz de profesyonel yemek yarışmacılarıyız. MasterChef'in en ünlü çiftiyiz. Sen hep tatlıları, ben ana yemekleri yapıyorum. Jüri her seferinde 'Bu yemek aşk tadı taşıyor' diyor. Sen de 'Çünkü Akif aşkla yapıyor' diyorsun. Sonunda programı kazandık ama asıl ödülüm zaten senmişsin.",
    
    "Başka bir boyutta, birlikte sirkte çalışıyoruz. Sen trapeze, ben cambazlığa yetenekliyim. Her gösteri öncesi ellerimizi tutup 'Bugün de mükemmel olacak' deriz. Seyirciler artık bizi 'Aşk Akrobatları' diye çağırıyor. Çünkü her hareketimizde aşkımızı gösteriyoruz.",
    
    "Alternatif bir zaman diliminde, 1920'lerde caz kulübünde çalışıyoruz. Sen sahne alıp şarkı söylüyorsun, ben piano çalıyorum. Her nota senin sesine eşlik etmek için var. Charleston dansı yaptığımız geceler, salon bizi izlemek için doluyor. 'Bu ikisi gerçek aşkı bulmuş' diye fısıldaşıyorlar.",
    
    "Paralel bir dünyada, birlikte video oyunu geliştiricileriyiz. Sen karakterleri tasarlıyor, ben hikayeleri yazıyorum. Her oyunumuzda bir aşk hikayesi var. Oyuncular 'Bu oyundaki aşk çok gerçekçi' diye yorum yapıyor. Sen de 'Çünkü gerçeği yaşıyoruz' diyorsun. Beta testinde bile oyuncu karakterler bizim gibi aşık oluyor.",
    
    "Başka bir gerçeklikte, Amazon ormanlarında botanik araştırması yapıyoruz. Yeni çiçek türleri keşfederken, hepsine senin isminle başlayan isimler veriyorum. 'Melikus Romanticus', 'Melikea Güzelensis' gibi. Sen gülerek 'Akif, bu bilimsel değil' diyorsun ama Latin adları öğrenmeye başlamışsın.",
    
    "Alternatif bir evrende, birlikte gizli ajan olmışız. Kod adın 'Pembe Gül', benimki 'Aşık Kartal'. Her görevden önce 'Aşkımıza kavuşmak için' diye ant içiyoruz. Düşman ajanlar bile bizim kod konuşmalarımızı çözemiyor çünkü sürekli aşk metaforları kullanıyoruz.",
    
    "Paralel bir boyutta, zaman makinesi mucitleriyiz. Geçmişe ve geleceğe seyahat ediyoruz ama her seferinde aynı sonuca ulaşıyoruz: Her zaman diliminde sana aşık olacakmışım. Dinozor çağında bile seni bulmak için aramaya çıkıyorum. Gelecekte robot olsak bile kalbim senin için çarpıyor.",
    
    "Başka bir evrende, ikimiz de süper kahramanız. Senin gücün kalpleri iyileştirmek, benimki aşkla uçmak. Şehri kötü güçlerden korurken, asıl gücümüzün sevgimiz olduğunu biliyoruz. Kötüler bile bizim karşımızda eriyor, 'Bu ne büyük aşk böyle' diye itiraf ediyor.",
    
    "Alternatif bir gerçeklikte, büyücü olmışuz. Sen iksir hazırlıyorsun, ben büyülü hikayeler yazıyorum. En güçlü büyümüz 'Sonsuz Aşk' formülü. Herkese aşık olmayı öğretiyoruz. Büyü okulunda en popüler dersimiz 'Romantizm 101'. Öğrenciler bile bizim gibi aşık olmak istiyor.",
    
    "Paralel bir dünyada, birlikte oyuncuyuz. Sen drama, ben komedi oyunlarında oynuyoruz. Ama sahnede en iyi performansımız, gerçek aşkımızı oynadığımız anlarda oluyor. Tiyatro eleştirmenleri 'Bu ikisinin kimyası inanılmaz' yazıyor. Sen de kulisde 'Çünkü gerçek' diye gülüyorsun.",
    
    "Başka bir zaman çizgisinde, birlikte kitapçı olmışuz. Sen romantik romanları, ben şiir kitaplarını öneriyorsun. Müşteriler 'Bu kitapçıda aşk kokuyor' diyor. Çünkü her kitapta bizim hikayemizi görüyoruz. Gece dükkanı kapattıktan sonra sana kendi yazdığım şiirleri okuyorum."
];

// Sonsuz cümle parçaları
const infiniteSentenceParts = [
    "Sen, benim için Buca Fen pansiyonunun en güzel kızı",
    "her bakışında aşkımı daha da derinleştiren, nefesimi kesen bir aşka dönüştüren",
    "çünkü sen benim için binlerce yıldızdan daha parlak olan",
    "ve her gülüşünde tüm evrenin anlamını bulduran",
    "gözlerimin içine baktığında karnımda kelebekler uçuşturan",
    "gözlerinin derinliklerinde kaybolduran",
    "seninle geçen her saniye sonsuzluğa eşit değerde",
    "nefesinin tenime değmesi beni başka bir boyuta taşıyor",
    "ellerinin sıcaklığı ruhumu ısıtan şey",
    "sesin bir şiirin ilk mısrası gibi, duyulduğu an tüm hikâyeyi başlatır" ,
    "gülüşün; kurumuş nehir yataklarına yeniden su yürüten bir ilkbahar gibi" ,
    "göz göze geldiğimiz an, gerçeklik benden vazgeçiyor, sadece sen kalıyorsun" ,
    "sessizliğinde bile anlatılamayacak kadar çok şey var, tam da bu yüzden büyülüsün" ,
    "ellerin bir harita gibi, nereye dokunsan orası 'ev' oluyor" ,
    "çünkü sen geldiğinden beri, zaman bile yeniden tarif ediliyor içimde" ,
    "yazsam roman olacak kadın",
    "aşkımız zamanı aşar, sonsuzluğa ulaşır",
    "her sabah seni görmek yeniden doğmak gibi",
    "gülüşün kalbimde çiçek açtırıyor",
    "seninle kurduğum her hayal gerçek oluyor",
    "aşkımızın derinliği okyanusları geride bırakıyor",
    "senin varlığın benim için en güzel armağan",
    "kalbimin en derin köşesinde sadece sen varsın",
    "seninle her an bir masal yaşıyoruz",
    "aşkımız yıldızları kıskandıracak kadar güzel",
    "bana izmiri hatırlatan ",
    "Ankara'mı güzelleştirecek",
    "zorluklarımı kolaylaştıran",
    "aşka inanmamı sağlayan",
    "duvarlarımı indiren",
    "her şeye rağmen güçlü olan",
    "benden vazgeçmeyen , burayı acaba ne zaman bitecek diye okumaktan da vazgeçmeyen vee beni bu siteyi yazdıracak kadar aşık eden  "
];

let currentInfiniteSentence = "";
let typingIndex = 0;
let currentPartIndex = 0;
let typingInterval;

// Sayfa yüklendiğinde rastgele hikaye göster
document.addEventListener('DOMContentLoaded', function() {
    displayRandomStory();
    setupInfiniteSentence();
    setupLoveMeter();
});

// Rastgele hikaye göster
function displayRandomStory() {
    const randomIndex = Math.floor(Math.random() * universeStories.length);
    const storyElement = document.getElementById('storyText');
    storyElement.textContent = universeStories[randomIndex];
}

// Sonsuz cümle özelliğini ayarla
function setupInfiniteSentence() {
    const btn = document.getElementById('infiniteSentenceBtn');
    const modal = document.getElementById('infiniteModal');
    const closeBtn = document.getElementById('closeModal');
    
    btn.addEventListener('click', function() {
        modal.style.display = 'block';
        startInfiniteTyping();
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        stopInfiniteTyping();
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            stopInfiniteTyping();
        }
    });
}

// Aşk ölçer özelliğini ayarla
function setupLoveMeter() {
    const btn = document.getElementById('loveMeterBtn');
    const modal = document.getElementById('loveMeterModal');
    const closeBtn = document.getElementById('closeLoveMeterModal');
    
    btn.addEventListener('click', function() {
        modal.style.display = 'block';
        startLoveMeter();
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        resetLoveMeter();
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            resetLoveMeter();
        }
    });
}

// Sonsuz yazım başlat
function startInfiniteTyping() {
    const textElement = document.getElementById('infiniteText');
    textElement.textContent = '';
    currentInfiniteSentence = "Eğer sana olan hislerimi tek bir cümleyle anlatabilseydim, ";
    typingIndex = 0;
    currentPartIndex = 0;
    
    // İlk cümleyi yaz
    typeText(currentInfiniteSentence, textElement, function() {
        // İlk cümle tamamlandıktan sonra sonsuz döngü başlat
        continueInfiniteTyping();
    });
}

// Metin yazma animasyonu
function typeText(text, element, callback) {
    let index = 0;
    const typingSpeed = 50; // ms
    
    const typeInterval = setInterval(function() {
        element.textContent = text.substring(0, index + 1);
        index++;
        
        if (index >= text.length) {
            clearInterval(typeInterval);
            if (callback) callback();
        }
    }, typingSpeed);
}

// Sonsuz yazımı devam ettir
function continueInfiniteTyping() {
    const textElement = document.getElementById('infiniteText');
    const typingSpeed = 80;
    
    typingInterval = setInterval(function() {
        // Yeni parça ekle
        if (typingIndex === 0) {
            currentInfiniteSentence += infiniteSentenceParts[currentPartIndex] + ", ";
            currentPartIndex = (currentPartIndex + 1) % infiniteSentenceParts.length;
        }
        
        // Karakterleri tek tek yaz
        textElement.textContent = currentInfiniteSentence.substring(0, currentInfiniteSentence.length - (infiniteSentenceParts[currentPartIndex === 0 ? infiniteSentenceParts.length - 1 : currentPartIndex - 1].length - typingIndex));
        
        typingIndex++;
        
        // Parça tamamlandı
        if (typingIndex > infiniteSentenceParts[currentPartIndex === 0 ? infiniteSentenceParts.length - 1 : currentPartIndex - 1].length + 2) {
            typingIndex = 0;
        }
    }, typingSpeed);
}

// Sonsuz yazımı durdur
function stopInfiniteTyping() {
    if (typingInterval) {
        clearInterval(typingInterval);
    }
}

// Aşk ölçer başlat
function startLoveMeter() {
    const meterFill = document.getElementById('meterFill');
    const meterPercentage = document.getElementById('meterPercentage');
    const meterResult = document.getElementById('meterResult');
    
    // Reset
    meterFill.style.width = '0%';
    meterPercentage.textContent = '0%';
    meterResult.classList.remove('show');
    
    // Animasyonlu artış
    setTimeout(function() {
        let percentage = 0;
        const interval = setInterval(function() {
            percentage += 2;
            meterFill.style.width = percentage + '%';
            meterPercentage.textContent = percentage + '%';
            
            if (percentage >= 100) {
                clearInterval(interval);
                // Sonucu göster
                setTimeout(function() {
                    meterResult.classList.add('show');
                }, 500);
            }
        }, 30);
    }, 500);
}

// Aşk ölçer sıfırla
function resetLoveMeter() {
    const meterFill = document.getElementById('meterFill');
    const meterPercentage = document.getElementById('meterPercentage');
    const meterResult = document.getElementById('meterResult');
    
    meterFill.style.width = '0%';
    meterPercentage.textContent = '0%';
    meterResult.classList.remove('show');
}

// Sayfa yenileme için ipucu animasyonu
setInterval(function() {
    const hint = document.querySelector('.refresh-hint');
    hint.style.animation = 'none';
    setTimeout(function() {
        hint.style.animation = 'pulse 2s infinite';
    }, 100);
}, 10000);