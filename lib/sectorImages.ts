/**
 * Sektör bazlı küratörlü Unsplash görsel kütüphanesi.
 * Her sektör için 10-12 yüksek kaliteli, telif-free fotoğraf.
 * Hizmet/ürün/öğe kartlarına sırayla atanır.
 */

const U = (id: string, w = 600) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${Math.round(w * 0.75)}&fit=crop&q=80`;

export const SECTOR_IMAGES: Record<string, string[]> = {
  // ═══ RESTORAN / KAFE ═══
  restoran: [
    U('1414235077428-338989a2e8c0'),   // fine dining tabak
    U('1504674900247-0877df9cc836'),   // güzel yemek sunumu
    U('1555396273-367ea4eb4db5'),   // restoran iç mekan
    U('1476224203421-9ac39bcb3327'),   // renkli yemek tabağı
    U('1565299624946-b28f40a0ae38'),   // kebap/ızgara
    U('1565958011703-44f9829ba187'),   // pizza
    U('1551024506-0bccd828d307'),   // tatlı/dessert
    U('1495474472287-4d71bcdd2085'),   // kahve fincanı
    U('1514933651103-005eec06c04b'),   // restoran bar
    U('1541014741-04a485698a71'),   // meze tabağı
    U('1517248135467-4c7edcad34c4'),   // restoran ambiyans
    U('1559339352-11d035aa65de'),   // şef mutfakta
  ],
  kafe: [
    U('1495474472287-4d71bcdd2085'),   // latte art
    U('1554118811-1e0d58224f24'),   // kafe iç mekan
    U('1509042239860-f550ce710b93'),   // pasta/kek
    U('1447933601403-0c6688de566e'),   // kahve çekirdeği
    U('1504754524776-8f4f37790ca0'),   // brunch tabağı
    U('1559305616-3f99cd43e353'),   // kafe vitrin
    U('1461023058943-07fcbe16d735'),   // espresso yapımı
    U('1572442388796-11668a67e53d'),   // cheesecake
    U('1445116572660-236099ec97a0'),   // çay/bitki çayı
    U('1521017432531-fde1cf535e6b'),   // kahve ve kitap
  ],

  // ═══ KLİNİK / DİŞÇİ ═══
  klinik: [
    U('1629909613654-28e377c37b09'),   // modern klinik
    U('1579684385127-1ef15d508118'),   // doktor muayene
    U('1631815588090-d4bfec5b1ccb'),   // tıbbi ekipman
    U('1666214280557-c1b8e09e4d36'),   // stetoskop
    U('1551190822-a9ce113d0d0e'),   // laboratuvar
    U('1576091160399-112ba8d25d1d'),   // hasta bakım
    U('1538108149393-fbbd81895907'),   // modern hastane koridoru
    U('1559757148-5c350d0d3c56'),   // ilaçlar
    U('1530497610245-94d3c16cda28'),   // ultrason
    U('1612349317150-e413f6a5b16d'),   // sağlık kontrolü
  ],
  disci: [
    U('1588776814546-1ffcf47267a5'),   // dişçi tedavi
    U('1606811841689-23dfddce3e95'),   // diş kliniği
    U('1598256989800-fe5f95da9787'),   // güzel gülümseme
    U('1609840114035-3c981b782dfe'),   // ortodonti
    U('1571772996211-2f02c9727629'),   // diş bakım
    U('1629909615184-74f495363b67'),   // modern diş kliniği
    U('1612349316228-5b0d9e7f7c4b'),   // diş röntgeni
    U('1559757175-5700dde675bc'),   // diş hekimi çalışırken
    U('1603398938378-e54eab446dde'),   // implant sonrası
    U('1579684453423-f84349ef60b0'),   // klinik ekipman
  ],

  // ═══ EMLAK ═══
  emlak: [
    U('1560448204-e02f11c3d0e2'),   // lüks daire iç
    U('1512917774080-9991f1c4c750'),   // villa dış
    U('1502672260266-1c1ef2d93688'),   // modern salon
    U('1556909114-f6e7ad7d3136'),   // mutfak
    U('1560185127-6a8c6150e96b'),   // balkon manzara
    U('1497366216548-37526070297c'),   // ofis binası
    U('1560185007-cde436f6670d'),   // yatak odası
    U('1600585154340-be6161a56a0c'),   // banyo
    U('1600607687939-ce8a6c25118c'),   // bahçe/teras
    U('1486406146926-c627a92ad1ab'),   // gece şehir manzarası
    U('1600566753190-17f0baa2a6c3'),   // havuzlu villa
    U('1564013799919-ab600027ffc6'),   // penthouse
  ],

  // ═══ AVUKAT ═══
  avukat: [
    U('1589829545856-d10d557cf95f'),   // terazi/adalet
    U('1507679799987-c73779587ccf'),   // hukuk kitapları
    U('1450101499163-c8848e968f44'),   // mahkeme binası
    U('1521791055366-0d553872125f'),   // profesyonel ofis
    U('1556761175-b413da4baf72'),   // sözleşme imzalama
    U('1497215728101-856f4ea42174'),   // toplantı masası
    U('1568992688065-536aad8a9592'),   // avukat danışmanlık
    U('1575505586569-646b2ca898fc'),   // el sıkışma
    U('1434030216411-0b793f4b4173'),   // kütüphane
    U('1454165804606-c3d57bc86b40'),   // döküman/yazışma
  ],

  // ═══ GÜZELLİK / KUAFÖR ═══
  guzellik: [
    U('1560066984-138dadb4c035'),   // güzellik salonu
    U('1570172619644-dfd03ed5d881'),   // cilt bakımı
    U('1596755389378-c31d21fd1273'),   // manikür
    U('1519415510236-718bdfcd89c8'),   // yüz bakımı
    U('1616394584738-fc6e612e71b9'),   // lazer epilasyon
    U('1544161515-4ab6ce6db874'),   // masaj/spa
    U('1487412912498-0447578fcca8'),   // makyaj
    U('1522337360788-8b13dee7a37e'),   // dudak dolgusu
    U('1629397685944-7d3700e0f41c'),   // medikal estetik
    U('1516975080664-ed2fc6a32937'),   // cilt analizi
  ],
  kuafor: [
    U('1521590832167-7228f6710463'),   // saç kesimi
    U('1562322140-8baeececf3df'),   // saç boyama
    U('1522337360788-8b13dee7a37e'),   // saç şekillendirme
    U('1560066984-138dadb4c035'),   // kuaför salonu
    U('1580618672591-3c51e3ef69d5'),   // saç bakımı
    U('1634449571010-02389ed0f3b4'),   // braid/örgü
    U('1596178065887-1198b6148b2b'),   // erkek berber
    U('1503025625460-9ab45f6b6b3d'),   // föhn
    U('1527799820374-dcf8d9d4a388'),   // keratin bakım
    U('1519699047748-de8e457a634e'),   // salon iç mekan
  ],

  // ═══ OTEL ═══
  otel: [
    U('1566073771259-6a8506099945'),   // otel dış cephe
    U('1582719478250-c89cae4dc85b'),   // lüks oda
    U('1551882547-ff40c63fe5fa'),   // otel lobi
    U('1571896349842-33c89424de2d'),   // havuz
    U('1540541338287-41700207dee6'),   // otel restoran
    U('1544161515-4ab6ce6db874'),   // spa/wellness
    U('1578683010236-d716f9a3f461'),   // suit oda
    U('1551918120-9739cb430c6d'),   // kahvaltı büfe
    U('1520250497591-112f2f40a3f4'),   // deniz manzarası
    U('1584132967334-10e028bd69f7'),   // otel bahçe
    U('1596178065887-1198b6148b2b'),   // resepsiyon
    U('1560624052-449f5ddf0c31'),   // bar/lounge
  ],

  // ═══ EĞİTİM ═══
  egitim: [
    U('1524178232363-1fb2b075b655'),   // sınıf ortamı
    U('1427504494785-3a9ca7044f45'),   // laboratuvar
    U('1481627834876-b7833e8f5570'),   // kütüphane
    U('1522202176988-66273c2fd55f'),   // öğrenci çalışma
    U('1516321318423-f06f85e504b3'),   // bilgisayar lab
    U('1513364776144-60967b0f800f'),   // sanat atölyesi
    U('1511379938547-c1f69419868d'),   // müzik dersi
    U('1503676260728-1c00da094a0b'),   // spor/yoga
    U('1544717305166-b407b8ba4c8c'),   // sunum/seminer
    U('1509062522246-3755977927d7'),   // diploma/mezuniyet
    U('1497633762265-9d179a990aa6'),   // kitap yığını
    U('1580582932707-520aed937b7b'),   // online eğitim
  ],

  // ═══ E-TİCARET ═══
  eticaret: [
    U('1556742049-0cfed4f6a45d'),   // online alışveriş
    U('1607082349566-187ee22588ef'),   // ürün çekimi
    U('1558618666-fcd25c85f82e'),   // paketleme
    U('1472851294608-062f824d29cc'),   // kargo kutusu
    U('1460925895917-afdab827c52f'),   // alışveriş çantası
    U('1441986300917-64674bd600d8'),   // vitrin düzeni
    U('1483985988355-763728e1935b'),   // moda/giyim
    U('1523275335684-37898b6baf30'),   // elektronik
    U('1505740420928-5e560c06d30e'),   // kozmetik
    U('1526170375885-4d8ecf77b99f'),   // ev dekorasyon
    U('1556742111-a301076d9d18'),   // sepet/checkout
    U('1553062407-98eeb64c6a62'),   // mağaza iç mekan
  ],
};

/**
 * Sektör anahtarından görsel dizisi döndürür.
 * Config'de image varsa onu kullanır, yoksa küratörlü görselden sırayla atar.
 */
export function getSectorImage(sectorKey: string, index: number): string {
  const images = SECTOR_IMAGES[sectorKey] || SECTOR_IMAGES.restoran;
  return images[index % images.length];
}

/**
 * Sektör anahtarını normalize eder.
 */
export function normalizeSector(sector: string): string {
  const s = sector.toLowerCase()
    .replace(/[ıİ]/g, 'i').replace(/[şŞ]/g, 's').replace(/[çÇ]/g, 'c')
    .replace(/[üÜ]/g, 'u').replace(/[öÖ]/g, 'o').replace(/[ğĞ]/g, 'g');
  for (const key of Object.keys(SECTOR_IMAGES)) {
    if (s.includes(key) || key.includes(s)) return key;
  }
  return 'restoran';
}
