const list = [
  {
    id: 1,
    type: 'Emergency Number',
    data: [
      {
        id: 1,
        title: 'If you are depressed',
        description:
          'In times of depression, it can be hard to find light and hope. This verse reminds us that God is our constant source of strength and protection. Even in our darkest moments, He is our salvation and the stronghold of our lives, ensuring we have nothing to fear.',
        verses: [
          {
            id: 1,
            text: 'Psalm 27: The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?',
          },
        ],
      },
      {
        id: 2,
        title: 'When you are lonely',
        description:
          'Loneliness can feel overwhelming, but Psalm 23 offers reassurance that we are never truly alone. God, our shepherd, provides for all our needs and leads us to peace and restoration. His presence refreshes our soul and brings us comfort.',
        verses: [
          {
            id: 2,
            text: 'Psalm 23: The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.',
          },
        ],
      },
      {
        id: 3,
        title: 'When you want courage',
        description:
          'Facing challenges requires great courage, and Joshua 1:9 encourages us to be strong and courageous. This verse reassures us that God is with us wherever we go, providing the strength and bravery we need to overcome fear and discouragement.',
        verses: [
          {
            id: 3,
            text: 'Joshua 1:9: Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.',
          },
        ],
      },
      {
        id: 4,
        title: 'If people seem unkind',
        description:
          'Encountering unkindness can be disheartening, but John 15:12 calls us to respond with love. Jesus commands us to love each other as He has loved us, reminding us that kindness and compassion are powerful responses to negativity.',
        verses: [
          {
            id: 4,
            text: 'John 15:12: My command is this: Love each other as I have loved you.',
          },
        ],
      },
      {
        id: 5,
        title: 'When your faith needs stirring',
        description:
          "Sometimes our faith may waver, but Hebrews 11:1 reinvigorates us by defining faith as confidence in what we hope for and assurance about what we do not see. This verse encourages us to trust in God's promises and remain steadfast in our faith.",
        verses: [
          {
            id: 5,
            text: 'Hebrews 11:1: Now faith is confidence in what we hope for and assurance about what we do not see.',
          },
        ],
      },
      {
        id: 6,
        title: 'When you have sinned',
        description:
          "Acknowledging our sins can be difficult, but Psalm 51:10 offers a path to forgiveness and renewal. This verse is a heartfelt plea for a pure heart and a steadfast spirit, reminding us that God's mercy can restore us.",
        verses: [
          {
            id: 6,
            text: 'Psalm 51:10: Create in me a pure heart, O God, and renew a steadfast spirit within me.',
          },
        ],
      },
      {
        id: 7,
        title: 'When you worry',
        description:
          "Worry can consume our thoughts, but Matthew 6:25-34 reassures us that God will provide for our needs. This passage encourages us to trust in God's care and to focus on seeking His kingdom rather than being anxious about material concerns.",
        verses: [
          {
            id: 7,
            text: 'Matthew 6:25-34: Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?',
          },
        ],
      },
      {
        id: 8,
        title: 'When God seems far away',
        description:
          "There are times when God feels distant, but Psalm 139:7-10 reminds us that He is always near. This verse speaks of God's omnipresence, assuring us that no matter where we go, His presence is with us, guiding and supporting us.",
        verses: [
          {
            id: 8,
            text: 'Psalm 139:7-10: Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there.',
          },
        ],
      },
      {
        id: 9,
        title: 'Feeling bitter and critical',
        description:
          'Bitterness and criticism can harden our hearts, but 1 Corinthians 13:4-7 teaches us about the true nature of love. This passage encourages us to embrace patience, kindness, and forgiveness, helping us overcome negative emotions.',
        verses: [
          {
            id: 9,
            text: '1 Corinthians 13:4-7: Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.',
          },
        ],
      },
      {
        id: 10,
        title: 'When in sorrow',
        description:
          'Sorrow can be overwhelming, but John 15:11 offers hope and joy. Jesus shares His teachings so that our joy may be complete, providing comfort and assurance that even in sorrow, we can find lasting happiness through Him.',
        verses: [
          {
            id: 10,
            text: 'John 15:11: I have told you this so that my joy may be in you and that your joy may be complete.',
          },
        ],
      },
      {
        id: 11,
        title: "When you're in danger",
        description:
          "In times of danger, Psalm 91:1-2 offers reassurance of God's protection. This verse describes God as our refuge and fortress, a reliable source of safety and security in any situation.",
        verses: [
          {
            id: 11,
            text: "Psalm 91:1-2: Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'",
          },
        ],
      },
      {
        id: 12,
        title: 'If your wallet is empty',
        description:
          "Financial struggles can be daunting, but Psalm 37:25 reassures us of God's provision. This verse emphasizes that God takes care of the righteous, ensuring that their needs are met and they are never forsaken.",
        verses: [
          {
            id: 12,
            text: 'Psalm 37:25: I was young and now I am old, yet I have never seen the righteous forsaken or their children begging bread.',
          },
        ],
      },
      {
        id: 13,
        title: 'Discouraged about work',
        description:
          'Work-related discouragement can weigh heavily on us, but Psalm 126:5-6 offers hope and motivation. This passage promises that our hard work and perseverance, even when accompanied by tears, will eventually yield joy and success.',
        verses: [
          {
            id: 13,
            text: 'Psalm 126:5-6: Those who sow with tears will reap with songs of joy. Those who go out weeping, carrying seed to sow, will return with songs of joy, carrying sheaves with them.',
          },
        ],
      },
      {
        id: 14,
        title: 'When you want peace',
        description:
          'Finding peace in a hectic world can be challenging, but Matthew 11:28-30 invites us to find rest in Jesus. He promises to ease our burdens and give us rest, offering a path to true peace and tranquility.',
        verses: [
          {
            id: 14,
            text: 'Matthew 11:28-30: Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.',
          },
        ],
      },
      {
        id: 15,
        title: 'Christian assurance',
        description:
          'In times of doubt, Romans 8:1 provides strong assurance of our salvation in Christ. This verse affirms that those who are in Christ Jesus are free from condemnation, reinforcing our faith and confidence in His saving grace.',
        verses: [
          {
            id: 15,
            text: 'Romans 8:1: Therefore, there is now no condemnation for those who are in Christ Jesus.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: 'How to pray',
  },
  {
    id: 3,
    type: 'Man of God characteristics',
  },
  {
    id: 4,
    type: 'Woman of God characteristics',
  },
  {
    id: 5,
    type: 'Bible verse for relationship',
  },
  {
    id: 6,
    type: 'Man you should avoid as a Women of God',
  },
  {
    id: 7,
    type: 'Woman you should avoid as a Man of God',
  },
  {
    id: 8,
    type: 'How a man of God should treat his Wife',
  },
  {
    id: 9,
    type: 'How a woman of God should treat her Husband',
  },
  {
    id: 10,
    type: 'Bible verse on a Godly friendship',
  },
  {
    id: 11,
    type: 'SOAP Bible study method',
  },
];

export default list;
