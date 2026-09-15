// =============================================================
// عدّل هذا الملف فقط لتخصيص الموقع
// الصور داخل images/ — الفيديوهات داخل videos/ — الأغاني داخل audio/
// =============================================================
window.siteConfig = {
  password: "3012026",
  site: { title: "ذكرياتنا الجميلة", subtitle: "كل لحظة معاك ليها ذكرى ❤️", direction: "rtl", tabTitle: "ذكرياتنا ❤️" },
  theme: { primaryColor: "#d6336c", primaryDark: "#a61e4d", secondaryColor: "#ffe3ec", backgroundColor: "#fff8fa", backgroundAlt: "#fff0f5", textColor: "#4a1942", textMuted: "#9d6b83", goldAccent: "#f2b880" },
  passwordScreen: { title: "ذكرياتنا الجميلة", subtitle: "في الأول لازم تعرف كلمة السر ❤️", placeholder: "اكتب كلمة السر هنا", buttonText: "ادخل ❤️", wrongPasswordText: "كلمة السر غلط، جرب تاني 🥺" },
  hero: { title: "ذكرياتنا الجميلة ✨", description: "هنا هتلاقي أجمل اللحظات اللي عشناها مع بعض ❤️", image: "images/cover.jpg", continueText: "ادخل وشوف ذكرياتنا ❤️" },
  message: { title: "رسالة ليك ❤️", text: "من أول ما بقينا مع بعض وكل يوم بيبقى أحلى من اللي قبله.\nشكراً إنك دايماً جنبي.\nبحبك أكتر من أي حاجة في الدنيا." },
  music: { enabled: true, title: "أغنيتنا ❤️", artist: "أغنيتنا المفضلة", src: "audio/song.mp3", cover: "images/cover.jpg", autoplay: false },
  gallerySection: { title: "صور ذكرياتنا 📸", subtitle: "كل صورة ليها حكاية ❤️" },
  gallery: [
    { type: "image", src: "images/photo1.jpg", caption: "ذكرياتنا ❤️" },
    { type: "image", src: "images/photo2.jpg", caption: "لحظة جميلة ✨" },
    { type: "image", src: "images/photo3.jpg", caption: "ذكرى ما بتتنسيش 💕" },
    { type: "image", src: "images/photo4.jpg", caption: "أجمل وقت ❤️" },
    { type: "image", src: "images/photo5.jpg", caption: "لحظة حلوة 🥰" },
    { type: "image", src: "images/photo6.jpg", caption: "مع بعض دايمًا ❤️" }
  ],
  videoSection: { title: "فيديوهات ذكرياتنا 🎥", subtitle: "لحظات متحركة من أحلى الأوقات" },
  videos: [
    { title: "ذكرياتنا 🎥", src: "videos/video1.mp4", poster: "images/video1-poster.jpg" }
  ],
  finalMessage: { title: "وأجمل حاجة لسه جاية ❤️", text: "دي مجرد بداية، وكل يوم جاي هيبقى أحلى مع بعض." },
  footer: { text: "صنع بحب ❤️", year: new Date().getFullYear() }
};
