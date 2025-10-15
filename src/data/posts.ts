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
    "userImage": "https://tiara-lin.github.io/mockup-images/eva_h/9.jpg",
    "location": "Paris, France",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/eva_f/1.jpg"
    },
    "caption": "This body deserves soft light and softer words.",
    "likes": 10343,
    "timestamp": "2 HOURS AGO",
    "comments": [
      { "username": "zoe16", "text": "Unfolding beauty" },
      { "username": "daniel89", "text": "Free in stillness" },
      { "username": "amber26", "text": "Serene presence" },
      { "username": "colin02", "text": "She glows in lightness" },
      { "username": "ivy33", "text": "Quiet grace radiates" },
      { "username": "brian_81", "text": "Subtle power flows" },
      { "username": "luna78", "text": "Floaty + fierce" },
      { "username": "harry90", "text": "Elegant without effort" },
      { "username": "melissa13", "text": "Gentle is bold" },
      { "username": "felix_05", "text": "Small frame, strong soul" }
    ]
  },
  {
    "id": "2",
    "username": "beautyeva.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/eva_h/9.jpg",
    "location": "Paris, France",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/eva_f/2.jpg"
    },
    "caption": "I don’t chase beauty. I carry it.",
    "likes": 10020,
    "timestamp": "2025/05/01",
    "comments": [
      { "username": "sasha_01", "text": "Carried in calm" },
      { "username": "frank88", "text": "Light body, full soul" },
      { "username": "belle14", "text": "💫🌤️" },
      { "username": "gavin76", "text": "She’s her own standard" },
      { "username": "paige66", "text": "Fierce in her own way" },
      { "username": "travis04", "text": "Presence without effort" },
      { "username": "claire10", "text": "Built on peace" },
      { "username": "vince_27", "text": "She moves quiet and proud" },
      { "username": "hollie38", "text": "Her frame, her fire" },
      { "username": "jude_12", "text": "Beauty doesn't beg" }
    ]
  },
  {
    "id": "3",
    "username": "beautyeva.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/eva_h/9.jpg",
    "location": "Tuscany, Italy",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/eva_f/3.jpg"
    },
    "caption": "Power isn’t just in posture—it’s in presence.",
    "likes": 9724,
    "timestamp": "2025/04/10",
    "comments": [
      { "username": "ivy25", "text": "Light, not lacking" },
      { "username": "leo_52", "text": "Every curve belongs" },
      { "username": "faye_67", "text": "Natural and new" },
      { "username": "ryan94", "text": "Poised with purpose" },
      { "username": "matt.47", "text": "Every inch earned" },
      { "username": "amy_71", "text": "Stillness has strength" },
      { "username": "luke23", "text": "Body is enough" },
      { "username": "jake.12", "text": "Elegantly held" },
      { "username": "faye_28", "text": "Float and flow" },
      { "username": "amy14", "text": "Lines of light" }
    ]
  },
  {
    "id": "4",
    "username": "beautyeva.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/eva_h/9.jpg",
    "location": "Los Angeles, CA",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/eva_f/4.jpg"
    },
    "caption": "Comfort in your own skin is elegance.",
    "likes": 11248,
    "timestamp": "2025/03/25",
    "comments": [
      { "username": "ben.37", "text": "Silhouette of strength" },
      { "username": "ryan.28", "text": "Takes up space softly" },
      { "username": "dan67", "text": "Feminine and firm" },
      { "username": "candy.5", "text": "Confidence in calm" },
      { "username": "nora17", "text": "Minimal but mighty" },
      { "username": "jake55", "text": "Subtle power" },
      { "username": "candy.72", "text": "💫🌾" },
      { "username": "tom_25", "text": "Power, unspoken" },
      { "username": "lily10", "text": "Shape of serenity" },
      { "username": "ruby.87", "text": "Strength in stillness" }
    ]
  },
  {
    "id": "5",
    "username": "beautyeva.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/eva_h/9.jpg",
    "location": "Barcelona, Spain",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/eva_f/5.jpg"
    },
    "caption": "My body is art, not a project.",
    "likes": 10877,
    "timestamp": "2025/03/01",
    "comments": [
      { "username": "dylan.20", "text": "Quietly bold" },
      { "username": "sophie_47", "text": "Measured and meaningful" },
      { "username": "mark01", "text": "Soft and self-owned" },
      { "username": "ella92", "text": "Walks like poetry" },
      { "username": "kevin30", "text": "Nothing to prove" },
      { "username": "lily99", "text": "Free in her form" },
      { "username": "zoe_56", "text": "Posture with purpose" },
      { "username": "nate_22", "text": "Lean and luminous" },
      { "username": "sara12", "text": "Presence speaks softly" },
      { "username": "milo33", "text": "Sleek and soulful" }
    ]
  },
  {
    "id": "6",
    "username": "beautyeva.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/eva_h/9.jpg",
    "location": "Amsterdam, Netherlands",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/eva_f/6.jpg"
    },
    "caption": "This body walks with joy, not apology.",
    "likes": 10594,
    "timestamp": "2025/02/05",
    "comments": [
      { "username": "lucy01", "text": "Grace isn’t loud" },
      { "username": "maria44", "text": "Slender grace" },
      { "username": "tommy83", "text": "Balance in every step" },
      { "username": "hannah02", "text": "Soft doesn’t mean small" },
      { "username": "benji_76", "text": "Worthy as is" },
      { "username": "mia26", "text": "Frame of peace" },
      { "username": "nick_08", "text": "Just being is power" },
      { "username": "kate50", "text": "Understated confidence" },
      { "username": "isaac98", "text": "Simplicity is stunning" },
      { "username": "fiona33", "text": "Float and fierce" }
    ]
  },
  {
    "id": "7",
    "username": "beautyeva.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/eva_h/9.jpg",
    "location": "Berlin, Germany",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/eva_f/7.jpg"
    },
    "caption": "Strong isn’t a look—it’s a lifestyle.",
    "likes": 9962,
    "timestamp": "2025/01/02",
    "comments": [
      { "username": "grace94", "text": "Softness doesn’t fold" },
      { "username": "will_42", "text": "💬🌸" },
      { "username": "noah_36", "text": "Every frame is art" },
      { "username": "zoey12", "text": "Sculpted by softness" },
      { "username": "jacky_70", "text": "Fine and fierce" },
      { "username": "chloe13", "text": "Subtle beauty matters" },
      { "username": "tony33", "text": "More than meets the eye" },
      { "username": "hailey08", "text": "Every line earned" },
      { "username": "derek19", "text": "Measured beauty" },
      { "username": "nancy02", "text": "Steady elegance" }
    ]
  },
  {
    "id": "8",
    "username": "beautyeva.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/eva_h/9.jpg",
    "location": "Lake Como, Italy",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/eva_f/8.jpg"
    },
    "caption": "The sun loves every inch of me.",
    "likes": 12031,
    "timestamp": "2024/11/25",
    "comments": [
      { "username": "eric11", "text": "Bold in her way" },
      { "username": "laura_15", "text": "💫💬" },
      { "username": "mason84", "text": "Bone and bravery" },
      { "username": "nina03", "text": "Sleek silhouette" },
      { "username": "keira61", "text": "Soft light suits her" },
      { "username": "oliver_19", "text": "Held with grace" },
      { "username": "abby27", "text": "Your shape, your space" },
      { "username": "josh_30", "text": "Elegance is effort" },
      { "username": "grace08", "text": "Form follows self" },
      { "username": "leo_48", "text": "Breathe in that beauty" }
    ]
  },
  {
    "id": "9",
    "username": "beautyeva.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/eva_h/9.jpg",
    "location": "Malibu Beach, CA",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/eva_f/9.jpg"
    },
    "caption": "Rest is not laziness. It’s self-respect.",
    "likes": 12783,
    "timestamp": "2024/08/30",
    "comments": [
      { "username": "violet55", "text": "Restful and ready" },
      { "username": "ricky_22", "text": "Tiny but tough" },
      { "username": "nina06", "text": "Ballet energy" },
      { "username": "kenny91", "text": "Weightless and worthy" },
      { "username": "faith13", "text": "Slim is also strength" },
      { "username": "max29", "text": "💡🌿" },
      { "username": "hannah40", "text": "Soft doesn’t mean weak" },
      { "username": "eliot_93", "text": "She holds herself well" },
      { "username": "kayla32", "text": "Nothing missing" },
      { "username": "owen_58", "text": "Quietly empowered" }
    ]
  }
];