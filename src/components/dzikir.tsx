import { Tab, Tabs } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Dzikir = () => {
  const LIST_DZIKIR_PAGI = [
    {
      title: "1. Membaca Taawudz",
      arab1: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
      latin:
        "Aku berlindung kepada Allah dari godaan setan yang terkutuk. Dengan menyebut nama Allah yang Maha Pemurah lagi Maha Penyayang",
      length: 2,
    },
    {
      title: "2. Membaca Ayat Kursi (1x)",
      arab1: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      arab2:
        "اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ .  لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ .  لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ .  مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ .  يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ .  وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ .  وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ .  وَلَا يَئُودُهُ حِفْظُهُمَا .  وَهُوَ الْعَلِيُّ الْعَظِيمُ",
      latin:
        "Allah, tidak ada ilah (yang berhak disembah) melainkan Dia, yang hidup kekal lagi terus menerus mengurus (makhluk-Nya). Dia tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa`at di sisi-Nya tanpa seizin-Nya. Dia mengetahui apa-apa yang di hadapan mereka dan di belakang mereka. Mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dan Dia Maha Tinggi lagi Maha besar. (QS. Al Baqarah: 255)",
      length: 3,
    },
    {
      title: "3. Membaca surat Al Ikhlas (3x)",
      arab1: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      arab2:
        "قُلْ هُوَ ٱللَّهُ أَحَدٌ .  ٱللَّهُ ٱلصَّمَدُ .  لَمْ يَلِدْ وَلَمْ يُولَدْ .  وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ ",
      latin:
        "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah ilah yang bergantung kepada-Nya segala urusan. Dia tidak beranak dan tiada pula diperanakkan, dan tidak ada seorang pun yang setara dengan Dia. (QS. Al Ikhlas: 1-4)",
      length: 3,
    },
    {
      title: "4. Membaca surat Al Falaq (3x)",
      arab1: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      arab2:
        "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ .  مِن شَرِّ مَا خَلَقَ .  وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ .  وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ .  وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      latin:
        "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb yang menguasai Shubuh, dari kejahatan makhluk-Nya, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan-kejahatan wanita tukang sihir yang menghembus pada buhul-buhul, dan dari kejahatan orang yang dengki apabila ia dengki. (QS. Al Falaq: 1-5)",
      length: 3,
    },
    {
      title: "5. Membaca surat An Naas (3x)",
      arab1: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      arab2:
        "قُلْ أَعُوذُ بِرَبِّ النَّاسِ .  مَلِكِ النَّاسِ .  إِلَهِ النَّاسِ .  مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ .  الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ .  مِنَ الْجِنَّةِ وَ النَّاسِ",
      latin:
        "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb manusia. Raja manusia. Sembahan manusia, dari kejahatan (bisikan) syaitan yang biasa bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia, dari jin dan manusia. (QS. An Naas: 1-6)",
      length: 3,
    },
    {
      title: "6. Membaca Doa Perlindungan",
      arab1:
        "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ .  وَالْحَمْدُ لِلَّهِ .  لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ .  لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ .  وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ .  رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ .  رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
      latin:
        "Kami telah memasuki waktu pagi dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada ilah (yang berhak disembah) kecuali Allah semata, tiada sekutu bagi-Nya. Milik Allah kerajaan dan bagi-Nya pujian. Dia-lah Yang Mahakuasa atas segala sesuatu. Wahai Rabbku, aku mohon kepada-Mu kebaikan di hari ini dan kebaikan sesudahnya. Aku berlindung kepada-Mu dari kejahatan hari ini dan kejahatan sesudahnya. Wahai Rabbku, aku berlindung kepada-Mu dari kemalasan dan kejelekan di hari tua. Wahai Rabbku, aku berlindung kepada-Mu dari siksaan di neraka dan siksaan di alam kubur.",
      length: 2,
    },
    {
      title: "7. Membaca Doa Berserah Diri",
      arab1:
        "اَللَّهُمَّ بِكَ أَصْبَحْنَا .  وَبِكَ أَمْسَيْنَا .  وَبِكَ نَحْيَا .  وَبِكَ نَمُوْتُ وَإِلَيْكَ النُّشُوْرُ",
      latin:
        "Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi, dan dengan rahmat dan pertolongan-Mu kami memasuki waktu petang. Dengan rahmat dan pertolongan-Mu kami hidup dan dengan kehendak-Mu kami mati. Dan kepada-Mu kebangkitan (bagi semua makhluk)",
      length: 2,
    },
    {
      title: "8. Membaca Sayyidul Istighfar",
      arab1:
        "اَللَّهُمَّ أَنْتَ رَبِّيْ لاَ إِلَـهَ إِلاَّ أَنْتَ .  خَلَقْتَنِيْ وَأَنَا عَبْدُكَ .  وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ .  أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ .  أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ .  وَأَبُوْءُ بِذَنْبِيْ فَاغْفِرْ لِيْ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ",
      latin:
        "Ya Allah, Engkau adalah Rabbku, tidak ada ilah yang berhak disembah kecuali Engkau, Engkaulah yang menciptakanku. Aku adalah hamba-Mu. Aku akan setia pada perjanjianku pada-Mu (yaitu aku akan mentauhidkan-Mu) semampuku dan aku yakin akan janji-Mu (berupa surga untukku). Aku berlindung kepada-Mu dari kejelekan yang kuperbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku. Oleh karena itu, ampunilah aku. Sesungguhnya tiada yang mengampuni dosa kecuali Engkau.",
      length: 2,
    },
    {
      title: "9. Membaca Doa Pesaksian (4x)",
      arab1:
        "اَللَّهُمَّ إِنِّيْ أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ .  وَمَلاَئِكَتَكَ وَجَمِيْعَ خَلْقِكَ .  أَنَّكَ أَنْتَ اللهُ لاَ إِلَـهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيْكَ لَكَ .  وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ",
      latin:
        "Ya Allah, sesungguhnya aku di waktu pagi ini mempersaksikan Engkau, malaikat yang memikul ‘Arys-Mu, malaikat-malaikat dan seluruh makhluk-Mu, bahwa sesungguhnya Engkau adalah Allah, tiada ilah yang berhak disembah kecuali Engkau semata, tiada sekutu bagi-Mu dan sesungguhnya Muhammad adalah hamba dan utusan-Mu",
      length: 2,
    },
    {
      title: "10. Membaca Doa Bersyukur",
      arab1:
        "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ .  لَا شَرِيكَ لَكَ .  فَلَكَ الْحَمْدُ .  وَلَكَ الشُّكْرُ",
      latin:
        "Ya Allah, nikmat apapun yang ada padaku di waktu pagi atau yang ada pada setiap makhluk-Mu, semuanya hanya dari-Mu semata, tiada sekutu bagi-Mu, bagi-Mu segala puji dan bagi-Mu segala syukur.",
      length: 2,
    },
    {
      title: "11. Membaca Doa Keselamatan (3x)",
      arab1:
        "اللَّهُمَّ عَافِنِى فِى بَدَنِى . اللَّهُمَّ عَافِنِى فِى سَمْعِى . اللَّهُمَّ عَافِنِى فِى بَصَرِى . لاَ إِلَهَ إِلاَّ أَنْتَ . اَللّٰھُمَّ اِنِّیْ اَعُوْذُبِکَ مِنَ الْکُفْرِ وَالْفَقْرِ .  اَللّٰھُمَّ اِنِّی اَعُوْذُ بِکَ مِنَ عَذَابِ الْقَبْرِ . لَا اِلَہَ اِلَّا اَنْتَ",
      latin:
        "Ya Allah, berikanlah aku kesehatan dalam tubuhku. Ya Allah, berikanlah aku kesehatan dalam pendengaranku. Ya Allah, berikanlah aku kesehatan dalam penglihatanku. Tidak ada Tuhan yang berhak disembah kecuali Engkau. Ya Allah, aku berlindung kepada-Mu dari kekafiran dan kefakiran. Ya Allah, aku berlindung kepada-Mu dari siksa kubur. Tidak ada ilah yang berhak disembah selain Engkau.",
      length: 2,
    },
    {
      title: "12. Membaca Doa Kecukupan (7x)",
      arab1:
        "حَسْبِيَ الله لاَ إِلهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلتُ وَهُوَ رَبُّ الْعَرشِ الْعَظِيمِ",
      latin:
        "Cukuplah Allah bagiku, tidak ada Tuhan selain Dia. Hanya kepada-Nya aku bertawakal, dan Dia adalah Tuhan yang memiliki `Arasy yang agung.",
      length: 2,
    },
    {
      title: "13. Membaca Doa Keselamatan",
      arab1:
        "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَاْلآخِرَةِ .  اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ اللَّهُمَّ اسْتُرْ عَوْرَاتِى وَآمِنْ رَوْعَاتِى. اَللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ .  وَمِنْ خَلْفِيْ .  وَعَنْ يَمِيْنِيْ وَعَنْ شِمَالِيْ .  وَمِنْ فَوْقِيْ .  وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ",
      latin:
        "Ya Allah, aku memohon kepada-Mu ampunan dan keselamatan, baik di dunia maupun di akhirat. Ya Allah, aku memohon kepada-Mu ampunan dan keselamatan dalam agamaku, dunia dan keluargaku, serta harta benda. Ya Allah, tutupilah aib-aibku dan amankanlah aku dari ketakutan. Ya Allah, peliharalah aku dari depanku, dari belakangku, dari kananku, dari kiriku, dan dari atasku. Aku berlindung dengan keagungan-Mu agar tidak diserang dari bawahku.",
      length: 2,
    },
    {
      title: "14. Membaca Doa Perlindungan",
      arab1:
        "اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَاْلأَرْضِ .  رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ .  أَشْهَدُ أَنْ لاَ إِلَـهَ إِلاَّ أَنْتَ .  أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ .  وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ .  وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
      latin:
        "Allah, Yang Maha Mengetahui yang ghaib dan yang nyata, Pencipta langit dan bumi, Tuhan dari segala sesuatu dan Raja atas segala raja. Aku bersaksi bahwa tidak ada Tuhan yang berhak disembah kecuali Engkau. Aku berlindung kepada-Mu dari kejahatan diriku sendiri, dari kejahatan setan dan tipu dayanya, serta agar aku tidak melakukan keburukan kepada diriku sendiri atau menyeretnya kepada seorang Muslim.",
      length: 2,
    },
    {
      title: "15. Membaca Doa Terhindar Dari Marabahaya (3x)",
      arab1:
        "بِسْمِ اللَّهِ الَّذِى لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِى الأَرْضِ وَلاَ فِى السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
      latin:
        "Dengan menyebut nama Allah Yang tidak ada sesuatupun di bumi dan di langit yang dapat mendatangkan bahaya dengan nama-Nya. Dan Dia-lah Yang Maha Mendengar lagi Maha Mengetahui.",
      length: 2,
    },
    {
      title: "16. Membaca Doa Keridhaan (3x)",
      arab1:
        "رَضِيْتُ بِاللهِ رَبًّا .  وَبِالإِسْلَامِ دِيْنًا .  وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
      latin:
        "Aku ridha (senang dan rela) dengan Allah sebagai Rabb, dengan Islam sebagai agama, dan dengan Muhammad Shalallahu Alaihi Wassalam sebagai Nabi.",
    },
    {
      title: "17. Membaca Doa Pertolongan",
      arab1:
        "يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ .  وَأَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ أَبَدًا",
      latin:
        "Ya Hayyu, Ya Qayyum, dengan rahmat-Mu aku meminta pertolongan. Perbaikilah segala urusanku dan janganlah Engkau serahkan aku kepada diriku sendiri meski hanya sekejap mata.",
    },
    {
      title: "18. Membaca Doa Kebaikan",
      arab1:
        "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِيْنَ .  اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ .  وَنَصْرَهُ وَنُوْرَهُ .  وَبَرَكَتَهُ .  وَهُدَاهُ .  وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْهِ وَشَرِّ مَابَعْدَهُ",
      latin:
        "Kami telah memasuki pagi dan segala kerajaan milik Allah, Tuhan seluruh alam. Ya Allah, aku memohon kepada-Mu kebaikan pada hari ini: keberhasilannya, kemenangannya, cahayanya, berkahnya, petunjuknya. Dan aku berlindung kepada-Mu dari kejahatan yang ada di dalamnya dan dari kejahatan yang akan datang setelahnya.",
    },
    {
      title: "19. Membaca Doa Fitrah",
      arab1:
        "أَصْبَحْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ .  وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ .  وَعَلَى مِلَّةِ أَبِيْنَاإِبْرَاهِيْمَ .  حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ",
      latin:
        "Kami memasuki pagi ini dalam fitrah (kesucian) Islam, dengan kalimat ikhlas (kesungguhan hati), dengan agama Nabi kami Muhammad Shalallahu Alaihi Wassalam, dan dengan milah (agama) nenek moyang kami, Ibrahim yang lurus, yang menjadi Muslim, dan tidaklah termasuk orang-orang yang musyrik.",
    },
    {
      title: "20. Membaca Tasbih (100x)",
      arab1: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
      latin: "Mahasuci Allah, aku memuji-Nya.",
    },
    {
      title: "21. Membaca Istighfar (100x)",
      arab1: "أَسْتَغْفِرُ اللهَ وَأَتُوْبُ إِلَيْهِ",
      latin: "Aku memohon ampunan kepada Allah dan bertaubat kepada-Nya.",
    },
    {
      title: "22. Membaca Kalimat La ilaha illallah (1x / 10x)",
      arab1:
        "لا إلَهَ إِلاَّ اللهُ وَحْدَهُ لا شَرِيكَ لَهُ .  لَهُ المُلْكُ ؛ وَلَهُ الحَمْدُ  .  وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      latin:
        "Tidak ada Tuhan selain Allah, Yang Maha Esa, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan, bagi-Nya pujian, dan Dia Maha Kuasa atas segala sesuatu.",
    },
    {
      title: "23. Membaca Dzikir Pemberat Timbangan (3x)",
      arab1:
        "سُبْحَانَ اللهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ .  وَرِضَا نَفْسِهِ .  وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
      latin:
        "Maha Suci Allah, aku memuji-Nya sebanyak jumlah ciptaan-Nya, seberapa pun kekuasan-Nya, dan seberat timbangan `Arsy-Nya, serta sebanyak tinta dari kalimat-kalimat-Nya.",
    },
    {
      title: "24. Doa Memohon Ilmu dan Amal",
      arab1:
        "اللَّهُمَّ إنِّي أَسْأَلُكَ عِلْماً نَافِعاً .  وَرِزْقاً طَيِّباً .  وَعَمَلاً مُتَقَبَّلاً",
      latin:
        "Ya Allah, aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amal yang diterima.",
    },
    {
      title: "25. Membaca Shalawat Atas Nabi (10x)",
      arab1: "اَللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
      latin: "Ya Allah, limpahkanlah rahmat dan salam atas Nabi kita Muhammad.",
    },
  ];

  const LIST_DZIKIR_PETANG = [
    {
      title: "1. Membaca Taawudz",
      arab1: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
      latin:
        "Aku berlindung kepada Allah dari godaan setan yang terkutuk. Dengan menyebut nama Allah yang Maha Pemurah lagi Maha Penyayang",
      length: 2,
    },
    {
      title: "2. Membaca Ayat Kursi (1x)",
      arab1: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      arab2:
        "اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ .  لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ .  لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ .  مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ .  يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ .  وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ .  وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ .  وَلَا يَئُودُهُ حِفْظُهُمَا .  وَهُوَ الْعَلِيُّ الْعَظِيمُ",
      latin:
        "Allah, tidak ada ilah (yang berhak disembah) melainkan Dia, yang hidup kekal lagi terus menerus mengurus (makhluk-Nya). Dia tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa`at di sisi-Nya tanpa seizin-Nya. Dia mengetahui apa-apa yang di hadapan mereka dan di belakang mereka. Mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dan Dia Maha Tinggi lagi Maha besar. (QS. Al Baqarah: 255)",
      length: 3,
    },
    {
      title: "3. Membaca surat Al Ikhlas (3x)",
      arab1: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      arab2:
        "قُلْ هُوَ ٱللَّهُ أَحَدٌ .  ٱللَّهُ ٱلصَّمَدُ .  لَمْ يَلِدْ وَلَمْ يُولَدْ .  وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ ",
      latin:
        "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah ilah yang bergantung kepada-Nya segala urusan. Dia tidak beranak dan tiada pula diperanakkan, dan tidak ada seorang pun yang setara dengan Dia. (QS. Al Ikhlas: 1-4)",
      length: 3,
    },
    {
      title: "4. Membaca surat Al Falaq (3x)",
      arab1: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      arab2:
        "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ .  مِن شَرِّ مَا خَلَقَ .  وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ .  وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ .  وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      latin:
        "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb yang menguasai Shubuh, dari kejahatan makhluk-Nya, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan-kejahatan wanita tukang sihir yang menghembus pada buhul-buhul, dan dari kejahatan orang yang dengki apabila ia dengki. (QS. Al Falaq: 1-5)",
      length: 3,
    },
    {
      title: "5. Membaca surat An Naas (3x)",
      arab1: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      arab2:
        "قُلْ أَعُوذُ بِرَبِّ النَّاسِ .  مَلِكِ النَّاسِ .  إِلَهِ النَّاسِ .  مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ .  الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ .  مِنَ الْجِنَّةِ وَ النَّاسِ",
      latin:
        "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Rabb manusia. Raja manusia. Sembahan manusia, dari kejahatan (bisikan) syaitan yang biasa bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia, dari jin dan manusia. (QS. An Naas: 1-6)",
      length: 3,
    },
    {
      title: "6. Membaca Doa Perlindungan",
      arab1:
        "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ . وَالْحَمْدُ للهِ . لَا إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ . لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ . وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ . رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا . وَأَعُوذُبِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا . رَبِّ أَعُوذُبِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ . رَبِّ أَعُوذُبِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
      latin:
        "Kami telah memasuki waktu petang dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada ilah (yang berhak disembah) kecuali Allah semata, tiada sekutu bagi-Nya. Milik Allah kerajaan dan bagi-Nya pujian. Dia-lah Yang Mahakuasa atas segala sesuatu. Wahai Rabbku, aku mohon kepada-Mu kebaikan di hari ini dan kebaikan sesudahnya. Aku berlindung kepada-Mu dari kejahatan hari ini dan kejahatan sesudahnya. Wahai Rabbku, aku berlindung kepada-Mu dari kemalasan dan kejelekan di hari tua. Wahai Rabbku, aku berlindung kepada-Mu dari siksaan di neraka dan siksaan di alam kubur.",
      length: 2,
    },
    {
      title: "7. Membaca Doa Berserah Diri",
      arab1:
        "اللَّهُمَّ بِكَ أَمْسَيْنَا . وَبِكَ أَصْبَحْنَا .وَبِكَ نَحْيَا . وَبِكَ نَمُوتُ . وَإِلَيْكَ الْمَصِيْرُ",
      latin:
        "Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu petang, dan dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi. Dengan rahmat dan pertolonganMu kami hidup dan dengan kehendakMu kami mati. Dan kepada-Mu tempat kembali (bagi semua makhluk).",
      length: 2,
    },
    {
      title: "8. Membaca Sayyidul Istighfar",
      arab1:
        "اَللَّهُمَّ أَنْتَ رَبِّيْ لاَ إِلَـهَ إِلاَّ أَنْتَ . خَلَقْتَنِيْ وَأَنَا عَبْدُكَ . وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ . أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ . أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ . وَأَبُوْءُ بِذَنْبِيْ فَاغْفِرْ لِيْ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ",
      latin:
        "Ya Allah, Engkau adalah Rabbku, tidak ada ilah yang berhak disembah kecuali Engkau, Engkaulah yang menciptakanku. Aku adalah hamba-Mu. Aku akan setia pada perjanjianku pada-Mu (yaitu aku akan mentauhidkan-Mu) semampuku dan aku yakin akan janji-Mu (berupa surga untukku). Aku berlindung kepada-Mu dari kejelekan yang kuperbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku. Oleh karena itu, ampunilah aku. Sesungguhnya tiada yang mengampuni dosa kecuali Engkau.",
      length: 2,
    },
    {
      title: "9. Membaca Doa Pesaksian (4x)",
      arab1:
        "اَللَّهُمَّ إِنِّيْ أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ . وَمَلاَئِكَتَكَ وَجَمِيْعَ خَلْقِكَ . أَنَّكَ أَنْتَ اللهُ لاَ إِلَـهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيْكَ لَكَ . وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ",
      latin:
        "Ya Allah, sesungguhnya aku telah memasuki waktu petang ini dengan bersaksi atas Engkau, bersama para pembawa Arasy-Mu, para malaikat-Mu, dan seluruh makhluk-Mu bahwa sesungguhnya Engkau adalah Allah, tidak ada Tuhan yang berhak disembah kecuali Engkau semata, tidak ada sekutu bagi-Mu. Dan sesungguhnya Muhammad adalah hamba dan utusan-Mu.",
      length: 2,
    },
    {
      title: "10. Membaca Doa Bersyukur",
      arab1:
        "اَللَّهُمَّ مَا أَمْسَى بِيْ مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَاشَرِيْكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
      latin:
        "Ya Allah, segala nikmat yang telah aku rasakan pada malam ini atau yang diperoleh salah satu dari makhluk-Mu, semuanya datang dari-Mu semata, tidak ada sekutu bagi-Mu. Bagi-Mu segala puji dan syukur.",
      length: 2,
    },
    {
      title: "11. Membaca Doa Keselamatan (3x)",
      arab1:
        "اللَّهُمَّ عَافِنِى فِى بَدَنِى اللَّهُمَّ عَافِنِى فِى سَمْعِى اللَّهُمَّ عَافِنِى فِى بَصَرِى لاَ إِلَهَ إِلاَّ أَنْتَ, اَللّٰھُمَّ اِنِّیْ اَعُوْذُبِکَ مِنَ الْکُفْرِ وَالْفَقْرِ  . اَللّٰھُمَّ اِنِّی اَعُوْذُ بِکَ مِنَ عَذَابِ الْقَبْرِ . لَا اِلَہَ اِلَّا اَنْتَ",
      latin:
        "Ya Allah, berikanlah aku kesehatan dalam tubuhku. Ya Allah, berikanlah aku kesehatan dalam pendengaranku. Ya Allah, berikanlah aku kesehatan dalam penglihatanku. Tidak ada Tuhan yang berhak disembah kecuali Engkau. Ya Allah, aku berlindung kepada-Mu dari kekafiran dan kefakiran. Ya Allah, aku berlindung kepada-Mu dari siksa kubur. Tidak ada ilah yang berhak disembah selain Engkau.",
      length: 2,
    },
    {
      title: "12. Membaca Doa Kecukupan (7x)",
      arab1:
        "حَسْبِيَ الله لاَ إِلهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلتُ وَهُوَ رَبُّ الْعَرشِ الْعَظِيمِ",
      latin:
        "Cukuplah Allah bagiku, tidak ada Tuhan selain Dia. Hanya kepada-Nya aku bertawakal, dan Dia adalah Tuhan yang memiliki `Arasy yang agung.",
      length: 2,
    },
    {
      title: "13. Membaca Doa Keselamatan",
      arab1:
        "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَاْلآخِرَةِ . اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ اللَّهُمَّ اسْتُرْ عَوْرَاتِى وَآمِنْ رَوْعَاتِى. اَللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ . وَمِنْ خَلْفِيْ . وَعَنْ يَمِيْنِيْ وَعَنْ شِمَالِيْ . وَمِنْ فَوْقِيْ . وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ",
      latin:
        "Ya Allah, sungguh aku memohon kepada-Mu ampunan dan keselamatan di dunia dan di akhirat. Ya Allah, sungguh aku memohon kepada-Mu ampunan dan keselamatan dalam agamaku, kehidupanku, keluargaku, dan harta yang kumiliki. Ya Allah, tutupilah aib-aibku dan lindungilah aku dari rasa takut. Ya Allah, peliharalah aku dari depanku, dari belakangku, dari kananku, dari kiriku, dan dari atasku. Aku berlindung dengan keagungan-Mu agar tidak ditimpa bahaya dari bawahku.",
      length: 2,
    },
    {
      title: "14. Membaca Doa Perlindungan",
      arab1:
        "اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَاْلأَرْضِ . رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ . أَشْهَدُ أَنْ لاَ إِلَـهَ إِلاَّ أَنْتَ . أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ . وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ . وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
      latin:
        "Allah, Yang Maha Mengetahui yang ghaib dan yang nyata, Pencipta langit dan bumi, Tuhan dari segala sesuatu dan Raja atas segala raja. Aku bersaksi bahwa tidak ada Tuhan yang berhak disembah kecuali Engkau. Aku berlindung kepada-Mu dari kejahatan diriku sendiri, dari kejahatan setan dan tipu dayanya, serta agar aku tidak melakukan keburukan kepada diriku sendiri atau menyeretnya kepada seorang Muslim.",
      length: 2,
    },
    {
      title: "15. Membaca Doa Terhindar Dari Marabahaya (3x)",
      arab1:
        "بِسْمِ اللَّهِ الَّذِى لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِى الأَرْضِ وَلاَ فِى السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
      latin:
        "Dengan menyebut nama Allah Yang tidak ada sesuatupun di bumi dan di langit yang dapat mendatangkan bahaya dengan nama-Nya. Dan Dia-lah Yang Maha Mendengar lagi Maha Mengetahui.",
      length: 2,
    },
    {
      title: "16. Membaca Doa Keridhaan (3x)",
      arab1:
        "رَضِيْتُ بِاللهِ رَبًّا . وَبِالإِسْلَامِ دِيْنًا . وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
      latin:
        "Aku ridha (senang dan rela) dengan Allah sebagai Rabb, dengan Islam sebagai agama, dan dengan Muhammad Shalallahu Alaihi Wassalam sebagai Nabi.",
    },
    {
      title: "17. Membaca Doa Pertolongan",
      arab1:
        "يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ . وَأَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ أَبَدًا",
      latin:
        "Ya Hayyu, Ya Qayyum, dengan rahmat-Mu aku meminta pertolongan. Perbaikilah segala urusanku dan janganlah Engkau serahkan aku kepada diriku sendiri meski hanya sekejap mata.",
    },
    {
      title: "18. Membaca Doa Kebaikan",
      arab1:
        "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ . وَالْحَمْدُ للهِ . لَا إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ . لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ . وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ . رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا . وَأَعُوذُبِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا . رَبِّ أَعُوذُبِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ . رَبِّ أَعُوذُبِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
      latin:
        "Pagi dan petang adalah kepunyaan Allah, segala puji bagi Allah. Tidak ada Tuhan selain Allah Yang Maha Esa, tiada sekutu bagi-Nya. Bagi-Nya segala kerajaan dan bagi-Nya segala pujian. Dia-lah Yang Mahakuasa atas segala sesuatu. Ya Tuhanku, aku memohon kebaikan pada malam ini dan kebaikan setelahnya. Aku berlindung kepada-Mu dari kejahatan malam ini dan kejahatan setelahnya. Ya Tuhanku, aku berlindung kepada-Mu dari kemalasan dan kejelekan kesombongan. Ya Tuhanku, aku berlindung kepada-Mu dari siksaan di dalam neraka dan siksaan di dalam kubur.",
    },
    {
      title: "19. Membaca Doa Fitrah",
      arab1:
        "أَمْسَيْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ . وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ . وَعَلَى مِلَّةِ أَبِيْنَاإِبْرَاهِيْمَ . حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ",
      latin:
        "Kami memasuki petang ini dalam fitrah (kesucian) Islam, dengan kalimat ikhlas (kesungguhan hati), dengan agama Nabi kami Muhammad Shalallahu Alaihi Wassalam, dan dengan milah (agama) nenek moyang kami, Ibrahim yang lurus, yang menjadi Muslim, dan tidaklah termasuk orang-orang yang musyrik.",
    },
    {
      title: "20. Membaca Kalimat La ilaha illallah (1x / 10x)",
      arab1:
        "لا إلَهَ إِلاَّ اللهُ وَحْدَهُ لا شَرِيكَ لَهُ . لَهُ المُلْكُ ؛ وَلَهُ الحَمْدُ  . وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      latin:
        "Tidak ada Tuhan selain Allah, Yang Maha Esa, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan, bagi-Nya pujian, dan Dia Maha Kuasa atas segala sesuatu.",
    },
    {
      title: "21. Membaca Doa Perlindungan (3x)",
      arab1: "أَعُوْذُ بِكَلِمَاتِ اللهِ التَّآمَّاتِ مِنْ شَرِّ مَا خَلَقَ",
      latin:
        "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk-Nya.",
    },
    {
      title: "22. Membaca Shalawat Atas Nabi (10x)",
      arab1: "اَللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
      latin: "Ya Allah, limpahkanlah rahmat dan salam atas Nabi kita Muhammad.",
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="dzikir-pagi"
          title={
            <div className="flex items-center space-x-2">
              <Icon icon="mage:sun" />
              <span>Dizikir Pagi</span>
            </div>
          }
        >
          <div className="mt-10">
            {LIST_DZIKIR_PAGI.map((list, index) => (
              <div
                key={`dzikir-pagi-${index}`}
                className="flex flex-col gap-4 mb-10"
              >
                <div className="mb-4 font-bold">{list.title}</div>
                <div className="text-2xl font-arab-v1 text-right leading-[2em]">
                  {list.arab1}
                </div>
                {list.length === 3 && (
                  <div className="text-2xl font-thin font-arab-v1 leading-[2em] text-right mt-6">
                    {list.arab2}
                  </div>
                )}
                {list.latin && (
                  <div className="text-sm text-left capitalize tracking-wide">
                    {list.latin}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Tab>
        <Tab
          key="dzikir-petang"
          title={
            <div className="flex items-center space-x-2">
              <Icon icon="mage:moon" />
              <span>Dzikir Petang</span>
            </div>
          }
        >
          <div className="mt-10">
            {LIST_DZIKIR_PETANG.map((list, index) => (
              <div
                key={`dzikir-petang-${index}`}
                className="flex flex-col gap-4 mb-10"
              >
                <div className="mb-4 font-bold">{list.title}</div>
                <div className="text-2xl font-arab-v1 text-right leading-[2em]">
                  {list.arab1}
                </div>
                {list.length === 3 && (
                  <div className="text-2xl font-thin font-arab-v1 leading-[2em] text-right mt-6">
                    {list.arab2}
                  </div>
                )}
                {list.latin && (
                  <div className="text-sm text-left capitalize tracking-wide">
                    {list.latin}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dzikir;
