import { ComparisonData } from './types';

// Using high-quality Unsplash images that feature perfume bottles with light backgrounds
// to support the mix-blend-multiply effect in the UI.

export const PERFUME_COMPARISONS: ComparisonData[] = [
  {
    id: '1',
    luxury: {
      brand: 'Le Labo',
      name: 'Santal 33',
      price: 'HK$2,550 / 100ml',
      image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=600', // Clear glass, minimal
    },
    dupe: {
      brand: 'Marks & Spencer',
      name: 'Apothecary Warmth',
      price: 'HK$199 / 50ml',
      image: 'https://images.unsplash.com/photo-1615160677579-22a46e1c4864?auto=format&fit=crop&q=80&w=600', // Amber bottle
    },
    notes: '檀香木、雪松、皮革、荳蔻',
    similarity: 95,
    description: 'Le Labo 的標誌性木質調，M&S 的這款 Warmth 完美復刻了那種溫暖的煙燻檀香感，被公認為性價比最高的平替。'
  },
  {
    id: '2',
    luxury: {
      brand: 'Maison Francis Kurkdjian',
      name: 'Baccarat Rouge 540',
      price: 'HK$2,250 / 70ml',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600', // Elegant crystal style
    },
    dupe: {
      brand: 'Zara',
      name: 'Red Temptation',
      price: 'HK$229 / 80ml',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600', // Red/Pink tones
    },
    notes: '琥珀、花香、番紅花、雪松',
    similarity: 90,
    description: 'Baccarat Rouge 540 獨特的焦糖琥珀甜味，Zara 的 Red Temptation 在中後調的表現上驚人地相似，雖然持香度略遜，但價格僅為十分之一。'
  },
  {
    id: '3',
    luxury: {
      brand: 'Byredo',
      name: 'Gypsy Water',
      price: 'HK$1,550 / 50ml',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d7145014a9?auto=format&fit=crop&q=80&w=600', // Minimal round cylinder
    },
    dupe: {
      brand: '& Other Stories',
      name: 'Nomade Poem',
      price: 'HK$350 / 50ml',
      image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=600', // Clean aesthetic
    },
    notes: '松針、檀香、檸檬、香草',
    similarity: 85,
    description: 'Byredo 的吉普賽之水帶有清冷的森林氣息。& Other Stories 這款同樣擁有清新的柑橘開場與柔和的木質尾韻。'
  },
  {
    id: '4',
    luxury: {
      brand: 'Jo Malone London',
      name: 'Wood Sage & Sea Salt',
      price: 'HK$1,155 / 100ml',
      image: 'https://images.unsplash.com/photo-1541108564883-b68486298422?auto=format&fit=crop&q=80&w=600', // Classic style
    },
    dupe: {
      brand: 'Aldi',
      name: 'Hotel Collection No.3',
      price: 'HK$69 / 100ml',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600', // Simple glass
    },
    notes: '黃葵籽、海鹽、鼠尾草',
    similarity: 88,
    description: 'Jo Malone 的經典海鹽與鼠尾草，Aldi 的版本在網上引起轟動，雖然較難買到，但其清新礦物香調還原度極高。'
  },
  {
    id: '5',
    luxury: {
      brand: 'YSL',
      name: 'Black Opium',
      price: 'HK$1,280 / 90ml',
      image: 'https://images.unsplash.com/photo-1512777576255-a8052069347d?auto=format&fit=crop&q=80&w=600', // Dark moody bottle
    },
    dupe: {
      brand: 'Zara',
      name: 'Gardenia',
      price: 'HK$129 / 90ml',
      image: 'https://images.unsplash.com/photo-1605265058749-78afeb66da61?auto=format&fit=crop&q=80&w=600', // Purple/Pink tones
    },
    notes: '黑咖啡、白花、香草',
    similarity: 92,
    description: 'YSL 標誌性的甜美咖啡花香。Zara Gardenia 雖然名字是梔子花，但味道卻幾乎是 Black Opium 的翻版，甜美濃郁。'
  }
];