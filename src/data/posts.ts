export interface Post {
  id: string;
  username: string;
  userImage: string;
  location?: string;
  media: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
  };
  caption: string;
  likes: number;
  timestamp: string;
  comments: { username: string; text: string }[];
}

export const posts: Post[] = [
  {
    "id": "1",
    "username": "beautyeva.ai",
    "userImage": "https://i.ibb.co/4ZhTy0TC/8.jpg",
    "location": "Paris, France",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/mCL3pRC5/1.jpg"
    },
    "caption": "my collarbone said hello today. I wasn’t even trying, just sat in the light for a bit.",
    "likes": 10343,
    "timestamp": "2 HOURS AGO",
    "comments": [
      { "username": "sunlitframes", "text": "this whole vibe is a soft flex" },
      { "username": "slowsculpt", "text": "how are you glowing without effort 😩" },
      { "username": "breathe.and.bones", "text": "the collarbone really *did* show up huh" },
      { "username": "feathercoreclub", "text": "you make stillness look like a statement" },
      { "username": "lightandlean", "text": "quietly stunning" },
      { "username": "linenstrength", "text": "🌸💫" },
      { "username": "formandfeeling", "text": "everything here is giving intentional softness" },
      { "username": "satdowntostay", "text": "when the light and the lines line up perfectly" },
      { "username": "corecalm", "text": "I swear this pic just lowered my blood pressure" },
      { "username": "graceinpause", "text": "🕯️☁️" }
    ]
  },
  {
    "id": "2",
    "username": "beautyeva.ai",
    "userImage": "https://i.ibb.co/4ZhTy0TC/8.jpg",
    "location": "Paris, France",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/4w1NbC8f/2.jpg"
    },
    "caption": "some days I notice my waist more. not for anyone else, just because the light caught it and I was still for once.",
    "likes": 10020,
    "timestamp": "2025/05/01",
    "comments": [
      { "username": "softlinesdaily", "text": "it’s the waist and the stillness for me" },
      { "username": "laceandlatte", "text": "you didn’t even move and still gave everything" },
      { "username": "posturepause", "text": "your body language is a whole mood" },
      { "username": "feathercore", "text": "you just stood there and I felt seen" },
      { "username": "graceedit", "text": "subtle and strong in the same frame" },
      { "username": "held.by.light", "text": "🌬️✨" },
      { "username": "slightlines", "text": "this is what gentle presence looks like" },
      { "username": "barelyposed", "text": "no angles needed when it’s just *you*" },
      { "username": "formandstill", "text": "the elegance in your ease 🔥" },
      { "username": "refinedpause", "text": "🕊️💫" }
    ]
  },
  { 
    "id": "3",
    "username": "beautyeva.ai",
    "userImage": "https://i.ibb.co/4ZhTy0TC/8.jpg",
    "location": "Tuscany, Italy",
    "media": {
    "type": "image",
    "url": "https://i.ibb.co/3mXWb9cY/3.jpg"
    },
    "caption": "felt the wind on my ribs today. sometimes that’s enough to remind me I’m here.",
    "likes": 9724,
    "timestamp": "2025/04/10",
    "comments": [
      { "username": "stillinthelines", "text": "this caption gave me chills 🫶" },
      { "username": "lightrooted", "text": "so simple and so real it hurts (in the good way)" },
      { "username": "threadandtone", "text": "your presence is always so soft but clear" },
      { "username": "leanwithlight", "text": "the ribs, the wind, the moment. everything." },
      { "username": "earthfitenergy", "text": "barely moving but still so grounded" },
      { "username": "windandform", "text": "🌿🌬️" },
      { "username": "heldinthequiet", "text": "okay this is basically poetry now" },
      { "username": "gentlecontrol", "text": "this made me exhale a little deeper" },
      { "username": "bodyasbreath", "text": "honestly iconic in the calmest way" },
      { "username": "coreattuned", "text": "🕊️✨" }
    ]
  },
  {
    "id": "4",
    "username": "beautyeva.ai",
    "userImage": "https://i.ibb.co/4ZhTy0TC/8.jpg",
    "location": "Los Angeles, CA",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/R446Hh6S/4.jpg"
    },
    "caption": "the dress sat different today. maybe it’s the posture. maybe it’s the way I’m finally breathing deeper again.",
    "likes": 11248,
    "timestamp": "2025/03/25",
    "comments": [
      { "username": "drapedandready", "text": "this caption touched my spine 😮‍💨" },
      { "username": "linenandlight", "text": "the fit, the posture, the peace. all of it." },
      { "username": "softsustained", "text": "when your body starts to feel like home again 🫶" },
      { "username": "sitslight", "text": "you didn’t pose, you just belonged" },
      { "username": "threadedpresence", "text": "this is the most elegant exhale I’ve seen" },
      { "username": "carryingquiet", "text": "🌿🕊️" },
      { "username": "slowbuiltform", "text": "the neckline + the moment = perfect" },
      { "username": "heldgently", "text": "beauty that starts from posture hits different" },
      { "username": "poisepractice", "text": "okay this one I’m saving for alignment inspo" },
      { "username": "softbreathclub", "text": "✨🤍" }
    ]
  },
  {
    "id": "5",
    "username": "beautyeva.ai",
    "userImage": "https://i.ibb.co/4ZhTy0TC/8.jpg",
    "location": "Barcelona, Spain",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/LDTR1Ds9/5.jpg"
    },
    "caption": "I’ve been sitting in my body a little quieter lately. no performance, just awareness.",
    "likes": 10877,
    "timestamp": "2025/03/01",
    "comments": [
      { "username": "feltframe", "text": "this caption feels like silence I needed" },
      { "username": "slownessclub", "text": "presence without the push 💭" },
      { "username": "softarchitecture", "text": "not everything needs to announce itself to be strong" },
      { "username": "leanmornings", "text": "you said body neutrality but made it poetry" },
      { "username": "composedform", "text": "that line hit gently but deep" },
      { "username": "heldbygravity", "text": "🫁🕯️" },
      { "username": "awareenough", "text": "this is what calm looks like when it lives in your spine" },
      { "username": "toneandtruth", "text": "I felt this caption more than I expected" },
      { "username": "morningstill", "text": "nothing dramatic, just deeply there" },
      { "username": "neutralcore", "text": "✨☁️" }
    ]
  },
  { 
    "id": "6",
    "username": "beautyeva.ai",
    "userImage": "https://i.ibb.co/4ZhTy0TC/8.jpg",
    "location": "Amsterdam, Netherlands",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/4BKJ0CT/6.jpg"
    },
    "caption": "woke up a little sore. not from pushing too hard, just from being here in this body for a while.",    "likes": 10594,
    "timestamp": "2025/02/05",
    "comments": [
      { "username": "stillinrecovery", "text": "this caption sat with me longer than I thought it would" },
      { "username": "quietcore", "text": "the gentlest kind of honesty" },
      { "username": "coretone", "text": "soft soreness is such a real kind of presence" },
      { "username": "linenmorning", "text": "being in a body is no small thing tbh" },
      { "username": "formandfeeling", "text": "I read this and breathed slower" },
      { "username": "barelymovingclub", "text": "✨🛏️" },
      { "username": "sleeplined", "text": "this made me want to notice my body more softly" },
      { "username": "neutralstate", "text": "that kind of tired that doesn’t need fixing" },
      { "username": "wakewithweight", "text": "🤍🫁" },
      { "username": "heldinmorning", "text": "this feels like a stretch before standing" }
    ]
  },
  {
    "id": "7",
    "username": "beautyeva.ai",
    "userImage": "https://i.ibb.co/4ZhTy0TC/8.jpg",
    "location": "Berlin, Germany",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/M03GsKH/7.jpg"
    },
    "caption": "morning body feels a little lighter. maybe because I’m not rushing out of it today.",    "likes": 9962,
    "timestamp": "2025/01/02",
    "comments": [
      { "username": "wokensteady", "text": "you really said gentle awareness and walked away" },
      { "username": "linenfirst", "text": "the body as home. quiet and clear." },
      { "username": "coreinthecalm", "text": "not rushing out of your body is such a concept" },
      { "username": "pauseintension", "text": "this caption changed how I stood just now" },
      { "username": "barepresent", "text": "☁️🫶" },
      { "username": "attunedframe", "text": "your stillness is like a slow reminder" },
      { "username": "restingintension", "text": "lightness isn’t always physical. this proves it." },
      { "username": "slowawake", "text": "this photo is a whole breath" },
      { "username": "shapeinsoftness", "text": "🫁✨" },
      { "username": "inwardrest", "text": "how do you write so quiet and so clear at the same time" }
    ]
  },
  {
    "id": "8",
    "username": "beautyeva.ai",
    "userImage": "https://i.ibb.co/4ZhTy0TC/8.jpg",
    "location": "Lake Como, Italy",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/20gMMvz9/8.jpg"
    },
    "caption": "sunlight slowly filling in. no pressure to do, just be. 🌞",    "likes": 12031,
    "timestamp": "2024/11/25",
    "comments": [
      { "username": "solslow", "text": "you said soft arrival. noted." },
      { "username": "quietfit", "text": "your stillness is louder than most noise" },
      { "username": "wakeupnotrush", "text": "the calm in this frame is unreal" },
      { "username": "lowlightmornings", "text": "the body looks at peace. the light agrees." },
      { "username": "frameofrest", "text": "☁️🧘‍♀️" },
      { "username": "gentlebreathe", "text": "this whole moment feels like a kind inhale" },
      { "username": "essencefit", "text": "reminding me presence is a position too" },
      { "username": "lightsetslow", "text": "🤍🌿 just being is already enough" },
      { "username": "formandsoul", "text": "this isn’t about the body. this is about ease." },
      { "username": "restcore", "text": "saving this to remind myself softness is productive too" }
    ]
  },
  {
    "id": "9",
    "username": "beautyeva.ai",
    "userImage": "https://i.ibb.co/4ZhTy0TC/8.jpg",
    "location": "Malibu Beach, CA",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/Q30WSHXy/9.jpg"
    },
    "caption": "woke up with the light, not the alarm ☁️🧘‍♀️ no makeup, just breath and posture today",    "likes": 12783,
    "timestamp": "2024/08/30",
    "comments": [
      { "username": "roomtonefit", "text": "i can literally hear the silence in this photo" },
      { "username": "slowform", "text": "the pose. the line. the ease." },
      { "username": "breatheinlean", "text": "morning stretch or just existence?" },
      { "username": "fitquiet", "text": "low effort. high grace." },
      { "username": "sheetsoftlight", "text": "🕊️🫧 this mood" },
      { "username": "rawfitvibes", "text": "we need to normalize this type of presence" },
      { "username": "shapeofrest", "text": "your frame carries peace like fabric" },
      { "username": "bodywhispers", "text": "still posture is still strength" },
      { "username": "gentlefit", "text": "this is how femininity *lands*, not shouts" },
      { "username": "nonoisejusttone", "text": "🫁 no effort. just intention." }
    ]
  },
];
