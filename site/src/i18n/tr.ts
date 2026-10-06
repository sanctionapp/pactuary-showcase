import type { Dict } from "./en";

export const tr: Dict = {
  lang: "tr",
  meta: {
    title: "Pactuary · Türkiye'deki uyum ekipleri için AML ve yaptırım taraması",
    description:
      "İsim ve PEP taraması, sürekli ve işlem izleme, dört göz onaylı vaka yönetimi ve denetime hazır kararlar. MASAK ve FATF gereklilikleri gözetilerek tasarlandı.",
    aboutTitle: "Geliştirici hakkında · Pactuary",
    aboutDescription:
      "Burak Esenoğlu'nun AML ve yaptırım tarama SaaS'ı Pactuary'yi neden ve nasıl kurduğu, uçtan uca nelerin sahibi olduğu.",
  },
  nav: {
    modules: "Modüller",
    how: "Nasıl çalışır",
    benchmark: "Ölçüm",
    api: "API",
    faq: "SSS",
    about: "Hakkında",
    demo: "Demo isteyin",
    theme: "Renk temasını değiştir",
    langLabel: "English",
    skip: "İçeriğe geç",
  },
  hero: {
    eyebrow: "AML ve yaptırım tarama SaaS",
    title: "Boş sonuç, temiz sonuç değildir.",
    lead:
      "Pactuary müşterileri ve karşı tarafları yaptırım ve PEP listelerine karşı tarar, müşteri kabulünden sonra da izler, işlemleri bilinen tipolojilere göre denetler ve her kararı denetçiye hazır tutar. Türkiye'deki uyum ekipleri için.",
    ctaDemo: "Demo isteyin",
    ctaGithub: "GitHub'da inceleyin",
    note: "Burak Esenoğlu'nun bağımsız ürünü. Ekranlarda sentetik bir demo banka görünür.",
    receiptTitle: "Tarama fişi",
    receiptQuery: "Sorgu",
    receiptQueryValue: "Defne Örnekoğlu · Kişi · TR",
    receiptOk: "yanıt verdi",
    receiptFail: "zaman aşımı",
    receiptClear: "0 eşleşme · tüm kaynaklar yanıt verdi → TEMİZ",
    receiptIncomplete: "0 eşleşme · bir kaynak düştü → EKSİK, temiz değil",
    shotAlt: "Kamuya açık yaptırım listesindeki bir varlık için tarama sonuçları",
  },
  problem: {
    eyebrow: "Sorun",
    title: "Tarama yapmak kolay. Savunmak zor.",
    before: "Sistem olmadan",
    after: "Pactuary ile",
    beforeItems: [
      "Listeler elle indirilir ve iki indirme arasında eskir.",
      "Erişilemeyen bir kaynak \"eşleşme yok\" diye okunur ve kimse fark etmez.",
      "Onaylar e-postayla verilir, gerekçe kaybolur.",
      "Yaygın isimler analisti yanlış pozitife boğar.",
    ],
    afterItems: [
      "Canlı yaptırım ve PEP verisi ile kurumun kendi iç listeleri tek aramada.",
      "Her kaynak kendi durumunu bildirir; düşen kaynak gizlenmez, gösterilir.",
      "Her kararın yazılı bir gerekçesi, isteğe bağlı ikinci onaycısı ve görülen verinin anlık görüntüsü vardır.",
      "Risk, kaydın ne olduğundan türetilir; önceki yanlış pozitif kararları hatırlanır.",
    ],
  },
  modules: {
    eyebrow: "Modüller",
    title: "İlk aramadan denetim dosyasına tek akış",
    items: [
      {
        key: "screening",
        title: "İsim ve PEP taraması",
        body:
          "Kişi ve şirketler canlı OpenSanctions verisine ve kurumun iç listelerine karşı paralel taranır. Sonuçlarda risk seviyesi, konular, eşleşme skoru ve kaynak listeler görünür. Risk seviyesi ismin ne kadar benzediğinden değil, kaydın ne olduğundan (yaptırım, suç, PEP) gelir.",
        shot: "01-screening-results",
        alt: "Risk rozetleri ve kaynak listeleriyle tarama sonuçları",
      },
      {
        key: "decision",
        title: "Varlık detayı ve karar",
        body:
          "Takma adlar, kimlik numaraları, yaptırım programları ve kaynak belgeler tek sayfada. Analist gerçek eşleşme, yanlış pozitif veya üst onaya taşıma kararı verir; gerekçe her zaman zorunludur.",
        shot: "02-entity-detail-decision",
        alt: "Karar formuyla varlık detay sayfası",
      },
      {
        key: "batch",
        title: "Toplu tarama",
        body:
          "Tek istekte 100 özneye kadar; eşleşmeyi keskinleştirmek için isteğe bağlı doğum yılı ve ülke. Bütün bir portföy saniyeler içinde taranır.",
        shot: "03-batch-screening",
        alt: "Toplu tarama sonuçları",
      },
      {
        key: "transactions",
        title: "İşlem izleme",
        body:
          "Beş tipoloji: tekil eşik aşımı, yüksek riskli ülke (FATF listeleri), karşı taraf yaptırım/PEP eşleşmesi, parçalama ve hız/hacim. Anlık kurallar işlem geldiğinde, örüntü kuralları her gece çalışır. TCMB kurları kullanılır; eksik kur asla tahmin edilmez.",
        shot: "04-alert-structuring-four-eyes",
        alt: "Tetikleyen işlemler ve karar geçmişiyle parçalama alarmı",
      },
      {
        key: "fourEyes",
        title: "Dört göz onaylı alarm ve vaka yönetimi",
        body:
          "Sürekli izleme ve işlem alarmları tek kutuda. Dört göz açıkken gerçek eşleşme kararı ikinci ve farklı bir analistin onayını bekler; kişinin kendi kararını onaylaması sistemce reddedilir.",
        shot: "05-alert-pending-second-approval",
        alt: "İkinci onay bekleyen alarm",
      },
      {
        key: "risk",
        title: "Müşteri risk skoru",
        body:
          "Dört ağırlıklı faktörden (tarama sinyali, işlem örüntüsü, ülke ve kanal) 0–100 arası skor. Her faktör gerekçesini gösterir; skor açıklanabilir.",
        shot: "07-subject-risk-score",
        alt: "İzlenen bir şirketin risk skoru kırılımı",
      },
      {
        key: "rules",
        title: "Ayarlanabilir kurallar",
        body:
          "Her tipoloji kurum bazında açılıp kapatılır ve ayarlanır. Geçersiz ayar güvenli varsayılana döner; bozuk bir ayar bir kuralı sessizce kapatmaz.",
        shot: "06-rule-settings",
        alt: "Kural ayarları sayfası",
      },
    ],
    more: "Ayrıca",
    moreItems: [
      { title: "Sürekli izleme", body: "Portföy her gece yeniden taranır; yalnızca yeni eşleşmeler alarm üretir." },
      { title: "Denetim izi ve PDF", body: "Anlık görüntülü, yalnızca eklenebilen kararlar ve vaka başına tek tıkla denetim dosyası." },
      { title: "API ve webhook", body: "Tarama ve işlem gönderimi için kapsamlı API anahtarları, HMAC imzalı webhook'lar." },
      { title: "Çok kiracılı yapı", body: "Şirket bazında izolasyon, üç rol ve modül başına ayrı kota havuzları." },
      { title: "Olumsuz medya", body: "Sağlayıcıya hazır (stub): arayüz, veri modeli ve ekran hazır; henüz bir haber sağlayıcısı bağlı değil." },
      { title: "KYC / CDD", body: "Yol haritasında." },
    ],
  },
  how: {
    eyebrow: "Nasıl çalışır",
    title: "Bir isimden ya da işlemden savunulabilir bir karara",
    steps: [
      { title: "Al", body: "Analist arar, portföy yüklenir ya da ana sistem API üzerinden işlem gönderir." },
      { title: "Tara", body: "Kaynaklar paralel sorgulanır; her biri kendi durumunu ve süresini bildirir." },
      { title: "Değerlendir", body: "Tipoloji kuralları ve risk skoru, eşleşme ve örüntüleri önceliklendirilmiş alarmlara çevirir." },
      { title: "Karar ver", body: "Analist kararı ve gerekçeyi yazar; dört göz açıksa ikinci analist onaylar." },
      { title: "Kanıtla", body: "Karar, anlık görüntüsü ve denetim dosyası denetçi için değişmeden saklanır." },
    ],
    diagramLabel: "Akış: al, tara, değerlendir, karar ver, kanıtla",
    notes: ["arayüz · toplu · API", "her kaynak durum bildirir", "5 tipoloji · risk skoru", "gerekçe zorunlu", "eklenebilir · anlık görüntü · PDF"],
    failNote: "kaynak düşerse → eksik, asla temiz değil",
    fourEyesNote: "dört göz: farklı bir analist onaylar",
  },
  principles: {
    eyebrow: "Tasarımdan gelen uyum",
    title: "Politika belgesinde değil, kodda uygulanan ilkeler",
    items: [
      { title: "Boş sonuç ≠ temiz", body: "Her kaynak kendi durumunu bildirir. Tüm kaynaklar düşerse API boş liste değil hata döner. Çalışamayan bir kural \"kullanılamıyor\" olarak bildirilir." },
      { title: "Dört göz", body: "Kurum bazında, gerçek eşleşme ikinci bir onaycı ister ve kişi kendi kararını onaylayamaz." },
      { title: "Yalnızca eklenebilen kararlar", body: "Kararlar asla düzenlenmez. Değişiklik, eskisini işaret eden yeni bir kayıttır ve karar anındaki verinin anlık görüntüsünü taşır." },
      { title: "Risk tabanlı yaklaşım", body: "Her müşterinin açıklanabilir 0–100 skoru var; ülke riski FATF kara ve gri listelerini izler." },
      { title: "Konu tabanlı risk seviyesi", body: "Bir yaptırım kaydı orta bir isim skoruyla bile kritiktir; bir PEP tam skorla bile orta seviyededir." },
      { title: "Uydurma kur yok", body: "TCMB kuru yoksa işlem \"kur bekliyor\" olarak bekler; tutar kuralları kur gelince çalışır." },
    ],
    disclaimer:
      "MASAK ve FATF gereklilikleri gözetilerek tasarlandı. Bir sertifika ya da uyum garantisi değildir: 75.000 TL gibi eşikler her kurumun doğrulaması gereken başlangıç değerleridir.",
  },
  benchmark: {
    eyebrow: "Eşleşme ölçümü",
    title: "Ölçüldü ve olduğu gibi raporlandı",
    lead:
      "Ekim 2026'da 100 etiketli sorgu, ürünün toplu tarama yolundan (OpenSanctions /match, eşik 0,7, sanctions koleksiyonu) geçirildi.",
    figures: [
      { value: "%100", label: "Duyarlılık (recall)", detail: "50 yaptırımlı isim ve varyantın 50'si yakalandı, hepsi doğru varlığa" },
      { value: "%80,6", label: "Kesinlik (precision)", detail: "İsabetlerin gerçek yaptırımlı varlık olma oranı" },
      { value: "%24", label: "Yanlış pozitif oranı", detail: "50 temiz ismin 12'si bir listeye takıldı" },
    ],
    breakdownTitle: "İsabetler nereden geldi",
    breakdown: [
      { label: "Yaptırımlı isimlerin özgün yazımı", value: "25 / 25" },
      { label: "Yazım, Türkçe yazım ve isim sırası varyantları", value: "25 / 25" },
      { label: "Gerçek hayatta yaygın isimler (temiz)", value: "12 / 25" },
      { label: "Uydurma isimler (temiz)", value: "0 / 25" },
    ],
    notes: [
      "Yanlış pozitiflerin tamamı listede gerçek bir adaşı bulunan yaygın isimlerden geldi; örneğin \"Mehmet Kaya\".",
      "Sorgular yalnızca isim içeriyordu. Doğum tarihi veya uyruğun yanlış pozitifi azaltması beklenir, ama bu etki ölçülmedi.",
      "Örneklem küçük; rakamları yol gösterici kabul edin.",
    ],
  },
  security: {
    eyebrow: "Güvenlik ve mimari",
    title: "Önemli yerlerde sıkıcı",
    items: [
      { title: "Sunucuda doğrulanan oturum", body: "Her API isteğinde JWT sunucuda doğrulanır; doğrulanmamış çerez okuması kullanılmaz." },
      { title: "Hash'lenmiş, kapsamlı API anahtarları", body: "Anahtarlar SHA-256 hash olarak saklanır, tamamı bir kez gösterilir, tek bir işe yetkilidir ve silinmeden iptal edilir." },
      { title: "Kiracı izolasyonu", body: "Tüm sorgular şirkete göre süzülür. Veritabanı satır güvenliği doğrudan veri API erişimini reddeder." },
      { title: "Yarışsız kota", body: "Kota ücretli çağrıdan önce kontrol edilir ve koşullu SQL ile düşülür; eşzamanlı istekler fazla harcayamaz." },
      { title: "Dayanıklı veri istemcisi", body: "Zaman aşımı, geri çekilmeli ve jitter'lı yeniden deneme, Retry-After desteği, TTL cache ve istek birleştirme." },
      { title: "Varsayılan olarak kapalı", body: "Zamanlanmış işler sırları olmadan çalışmaz; sağlık kontrolü eksik yapılandırmayı bildirir." },
    ],
    stackTitle: "Teknoloji",
    stack: ["Next.js 16", "React 19", "TypeScript strict", "PostgreSQL", "Prisma", "pg_trgm + unaccent", "Supabase Auth", "Vitest", "Playwright", "Vercel"],
    quality: [
      { value: "838", label: "geçen test" },
      { value: "%88", label: "satır kapsamı (iş mantığı)" },
      { value: "2", label: "dil, aydınlık ve karanlık tema" },
    ],
  },
  api: {
    eyebrow: "Geliştirici API'si",
    title: "Kendi sistemlerinizden tarayın",
    lead:
      "İsmi isteğe bağlı doğum tarihi ve ülkelerle gönderin. Her yanıt hangi kaynakların yanıt verdiğini söyler; sisteminiz \"temiz\" ile \"eksik\"i ayırt edebilir. Örnekte kurgusal bir müşteri ve sahte bir anahtar kullanıldı.",
    requestLabel: "İstek",
    responseLabel: "Yanıt · 200",
    failLabel: "Tüm kaynaklar düşerse · 502",
  },
  faq: {
    eyebrow: "SSS",
    title: "Sorular",
    items: [
      { q: "Yaptırım verisi nereden geliyor?", a: "OpenSanctions'tan, barındırılan API'si üzerinden canlı olarak. Varsayılan kapsam OFAC SDN, BM Güvenlik Konseyi listesi, AB ve BK yaptırımları ile MASAK varlık dondurma listesi dahil 95 yaptırım listesidir. Kurumlar kendi iç listelerini ekleyebilir." },
      { q: "Pactuary MASAK sertifikalı mı?", a: "Hayır. MASAK ve FATF gereklilikleri gözetilerek tasarlandı, ancak bu tür araçlar için bir sertifika yok ve böyle bir iddiada bulunulmuyor. Her kurum eşikleri ve prosedürleri kendi uyum birimiyle doğrular." },
      { q: "Yanlış pozitifler nasıl ele alınıyor?", a: "Risk isim skorundan değil, kaydın ne olduğundan gelir. İsteğe bağlı doğum yılı ve ülke eşleşmeyi keskinleştirir; yanlış pozitif kararı hatırlanır ve aynı kayıt o özne için bir dahaki taramada elenir." },
      { q: "Bir veri kaynağı çökerse ne olur?", a: "Analist hangi kaynağın düştüğünü görür. Tüm kaynaklar düşerse istek boş liste yerine hata döner; çünkü boş liste \"temiz\" diye okunur." },
      { q: "Olumsuz medya dahil mi?", a: "Olumsuz medya modülü sağlayıcıya hazır: arayüzü, veri modeli ve ekranı var; bir haber sağlayıcısı bağlanana kadar örnek veri gösterir." },
      { q: "Kaynak kodu görebilir miyim?", a: "Depo özel. Kodu ve tasarım kararlarını bir mülakatta memnuniyetle anlatırım." },
      { q: "Ücreti nedir?", a: "Fiyatlar yayınlanmıyor. Demo ve hacimlerinize uygun bir görüşme için bize ulaşın." },
    ],
  },
  cta: {
    title: "Kendi senaryolarınızla görün",
    body: "30 dakikalık bir tur: tarama, bir parçalama alarmı, dört göz akışı ve denetim dosyası.",
    pricing: "Fiyat: bize ulaşın.",
    demo: "Demo isteyin",
    github: "GitHub'da inceleyin",
  },
  footer: {
    built: "Burak Esenoğlu tarafından geliştirildi",
    data: "Yaptırım ve PEP verisi: OpenSanctions (CC BY-NC 4.0). Döviz kurları: TCMB.",
    synthetic: "Gösterilen tüm müşteri, özne ve işlem verileri sentetiktir.",
    about: "Geliştirici hakkında",
  },
  about: {
    eyebrow: "Geliştirici hakkında",
    title: "Kendini açıklayabilen uyum yazılımı geliştiriyorum",
    intro:
      "Ben Burak Esenoğlu, yazılım geliştiriciyim. Pactuary, Türkiye'deki uyum ekiplerinin her gün yaşadığı soruna uçtan uca bir yanıt: taramayı ve izlemeyi ölçekte yaparken her kararı bir denetçiye gerekçelendirebilmek.",
    whyTitle: "Neden kurdum",
    why: [
      "Tarama araçları çoğu zaman sessizce hata yapar: erişilemeyen bir liste \"eşleşme yok\" diye okunur. Eksik bir kontrolün asla temiz sanılmadığı bir sistem istedim.",
      "Zor kısımların çoğu kod değil karar: bir PEP'in risk seviyesi ne olmalı, ikinci onay ne zaman gerekir, bir denetçi bir yıl sonra neyi görmeli.",
    ],
    howTitle: "Nasıl kurdum",
    how: [
      "İlk sürüm (2026 başı) listeleri elle yüklüyor ve bulanık SQL ile eşleştiriyordu. Bunu canlı OpenSanctions verisiyle değiştirdim; Postgres'i iç listeler ve uygulama durumu için tuttum.",
      "Ardından işlem izleme, maker-checker ve yalnızca eklenebilen geçmişle tek bir karar servisi, risk skoru, yenilenen arayüz ve Türkçe/İngilizce desteği geldi.",
      "Geliştirme Claude Code ile yapay zekâ destekli yapıldı. Ürün kapsamını, mimariyi ve uyum kurallarını ben belirledim; her karar tasarım belgelerinde kayıtlı.",
    ],
    roleTitle: "Rolüm",
    role: "Ürün sahibi, mimar ve geliştirici. Kapsamın, veri ve uyum modelinin, ödünleşimlerin ve kalite çıtasının (838 test, iş mantığında %88 kapsam) sahibiyim.",
    recruiterTitle: "İşe alımcılar için beş maddede",
    recruiter: [
      "Bir AML/yaptırım SaaS'ını uçtan uca kurdum: tarama, sürekli ve işlem izleme, vaka yönetimi ve denetim izi.",
      "Uyum ilkelerini koda döktüm: boş ≠ temiz, dört göz, yalnızca eklenebilen kararlar, konu tabanlı risk.",
      "Parçalama ve hız/hacim dahil beş işlem tipolojisini kurum bazında ayarlanabilir olarak geliştirdim.",
      "Eşleşme kalitesini dürüstçe ölçtüm: %100 duyarlılık, %80,6 kesinlik ve yaygın isimlerde %24 yanlış pozitif oranı; olduğu gibi yayımlandı.",
      "Mühendislik disipliniyle teslim ettim: strict TypeScript, 838 test, dayanıklı ücretli API istemcisi ve yarışsız kota.",
    ],
    openTo: "AML / dolandırıcılık önleme teknolojisi alanındaki pozisyonlara açığım.",
    source: "Kaynak kod özel; bir mülakatta memnuniyetle üzerinden geçerim.",
    contact: "İletişime geçin",
    linkedin: "LinkedIn",
    github: "GitHub",
    back: "Ürüne dön",
  },
};
