const list = [
  {
    id: 1,
    type: 'general',
    title: 'Emergency Number',
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
    type: 'general',
    title: 'How to pray ( PRAY Method )',
    data: [
      {
        id: 1,
        title: 'Praise',
        description:
          'Acknowledge and express gratitude for what God has done. Matthew 6:9-10: "Our Father in heaven, hallowed be Your name."',
        verses: [
          {
            id: 1,
            text: 'Recognize God’s greatness and sovereignty. Psalm 145:3: "Great is the Lord and most worthy of praise; His greatness no one can fathom."',
          },
          {
            id: 2,
            text: 'Praise Him for His love, mercy, and grace. Ephesians 2:4-5: "But because of His great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved."',
          },
          {
            id: 3,
            text: 'Celebrate His goodness and faithfulness. Psalm 100:5: "For the Lord is good and His love endures forever; His faithfulness continues through all generations."',
          },
        ],
      },
      {
        id: 2,
        title: 'Repent',
        description:
          'Take responsibility for the sins you have committed and seek forgiveness. Matthew 6:12: "And forgive us our debts, as we also have forgiven our debtors."',
        verses: [
          {
            id: 1,
            text: 'Acknowledge your sins and mistakes. 1 John 1:9: "If we confess our sins, He is faithful and just and will forgive us our sins and purify us from all unrighteousness."',
          },
          {
            id: 2,
            text: 'Ask for God’s forgiveness and cleansing. Psalm 51:1-2: "Have mercy on me, O God, according to Your unfailing love; according to Your great compassion blot out my transgressions. Wash away all my iniquity and cleanse me from my sin."',
          },
          {
            id: 3,
            text: 'Commit to turning away from sin and seeking to live a righteous life. Acts 3:19: "Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord."',
          },
        ],
      },
      {
        id: 3,
        title: 'Ask',
        description:
          'Present your needs and requests to God, trusting in His provision. James 1:5: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you."',
        verses: [
          {
            id: 1,
            text: 'Ask for what you need in faith. Matthew 7:7: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you."',
          },
          {
            id: 2,
            text: 'Seek God’s guidance in your life. Psalm 25:4-5: "Show me Your ways, Lord, teach me Your paths. Guide me in Your truth and teach me, for You are God my Savior, and my hope is in You all day long."',
          },
          {
            id: 3,
            text: 'Trust that God will provide according to His will. Philippians 4:19: "And my God will meet all your needs according to the riches of His glory in Christ Jesus."',
          },
        ],
      },
      {
        id: 4,
        title: 'Yield',
        description:
          'Surrender to God’s will and follow His guidance. Romans 12:1: "Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship."',
        verses: [
          {
            id: 1,
            text: 'Submit to God’s will and plan for your life. Proverbs 3:5-6: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight."',
          },
          {
            id: 2,
            text: 'Seek to live in obedience to His commands. John 14:15: "If you love me, keep my commands."',
          },
          {
            id: 3,
            text: 'Allow the Holy Spirit to guide and transform you. Galatians 5:16: "So I say, walk by the Spirit, and you will not gratify the desires of the flesh."',
          },
        ],
      },
    ],
  },

  {
    id: 3,
    type: 'Behavior',
    title: 'Man of God characteristics',
    data: [
      {
        id: 1,
        title: 'Kindness',
        description:
          'Show genuine care and appreciation for others. Proverbs 14:24: "The wealth of the wise is their crown, but the folly of fools yields folly."',
        verses: [
          {
            id: 1,
            text: 'Demonstrate kindness through your actions and words. Proverbs 11:17: "Those who are kind benefit themselves, but the cruel bring ruin on themselves."',
          },
        ],
      },
      {
        id: 2,
        title: 'Respect',
        description:
          'Honor your leaders and value their experience. Proverbs 12:15: "The way of fools seems right to them, but the wise listen to advice."',
        verses: [
          {
            id: 1,
            text: 'Show respect by listening and valuing the guidance of those who are experienced. 1 Thessalonians 5:12-13: "Now we ask you, brothers and sisters, to acknowledge those who work hard among you, who care for you in the Lord and who admonish you. Hold them in the highest regard in love because of their work."',
          },
        ],
      },
      {
        id: 3,
        title: 'Responsibility',
        description:
          'Fulfill your commitments diligently, even at personal expense. Colossians 3:23-24: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving."',
        verses: [
          {
            id: 1,
            text: 'Demonstrate responsibility by being faithful and committed. Proverbs 20:6: "Many claim to have unfailing love, but a faithful person who can find?"',
          },
        ],
      },
      {
        id: 4,
        title: 'Discipline',
        description:
          'Exercise self-control and carefully consider your actions. 1 Corinthians 9:26-27: "Therefore I do not run like someone running aimlessly; I do not fight like a boxer beating the air. No, I strike a blow to my body and make it my slave so that after I have preached to others, I myself will not be disqualified for the prize."',
        verses: [
          {
            id: 1,
            text: 'Maintain discipline in all areas of life. Proverbs 25:28: "Like a city whose walls are broken through is a person who lacks self-control."',
          },
        ],
      },
      {
        id: 5,
        title: 'Strength',
        description:
          'Bear the burdens of others and take responsibility. Galatians 6:2: "Carry each other’s burdens, and in this way you will fulfill the law of Christ."',
        verses: [
          {
            id: 1,
            text: 'Support and uplift others in their time of need. Isaiah 41:10: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."',
          },
        ],
      },
      {
        id: 6,
        title: 'Confidence',
        description:
          'Forge new paths with confidence and resilience. Proverbs 3:5-6: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight."',
        verses: [
          {
            id: 1,
            text: 'Have confidence in God’s guidance and provision. Joshua 1:9: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."',
          },
        ],
      },
      {
        id: 7,
        title: 'Integrity',
        description:
          'Live according to your values, regardless of who is watching. Proverbs 11:3: "The integrity of the upright guides them, but the unfaithful are destroyed by their duplicity."',
        verses: [
          {
            id: 1,
            text: 'Maintain your principles and honesty in all situations. Psalm 15:1-2: "Lord, who may dwell in your sacred tent? Who may live on your holy mountain? The one whose walk is blameless, who does what is righteous, who speaks the truth from their heart."',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: 'Behavior',
    title: 'Women of God characteristics',
    data: [
      {
        id: 1,
        title: 'Gentleness',
        description:
          'Show a gentle spirit in your interactions with others. Proverbs 31:26: "She speaks with wisdom, and faithful instruction is on her tongue."',
        verses: [
          {
            id: 1,
            text: 'Demonstrate gentleness in your demeanor and communication. 1 Peter 3:4: "Rather, it should be that of your inner self, the unfading beauty of a gentle and quiet spirit, which is of great worth in God’s sight."',
          },
        ],
      },
      {
        id: 2,
        title: 'Wisdom',
        description:
          'Seek and apply wisdom in all areas of life. Proverbs 31:26: "She speaks with wisdom, and faithful instruction is on her tongue."',
        verses: [
          {
            id: 1,
            text: 'Pursue wisdom and understanding. Proverbs 2:6: "For the Lord gives wisdom; from his mouth come knowledge and understanding."',
          },
        ],
      },
      {
        id: 3,
        title: 'Diligence',
        description:
          'Be industrious and responsible in fulfilling your duties. Proverbs 31:17: "She sets about her work vigorously; her arms are strong for her tasks."',
        verses: [
          {
            id: 1,
            text: 'Exhibit diligence in your tasks and responsibilities. Colossians 3:23: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."',
          },
        ],
      },
      {
        id: 4,
        title: 'Compassion',
        description:
          'Show kindness and empathy towards others. Proverbs 31:20: "She opens her arms to the poor and extends her hands to the needy."',
        verses: [
          {
            id: 1,
            text: 'Express compassion in your actions and heart. 1 John 3:17: "If anyone has material possessions and sees a brother or sister in need but has no pity on them, how can the love of God be in that person?"',
          },
        ],
      },
      {
        id: 5,
        title: 'Faithfulness',
        description:
          'Be dependable and trustworthy in your commitments. Proverbs 31:11-12: "Her husband has full confidence in her and lacks nothing of value. She brings him good, not harm, all the days of her life."',
        verses: [
          {
            id: 1,
            text: 'Demonstrate faithfulness in your relationships and responsibilities. 1 Corinthians 4:2: "Now it is required that those who have been given a trust must prove faithful."',
          },
        ],
      },
      {
        id: 6,
        title: 'Graciousness',
        description:
          'Show grace and kindness in your interactions. Proverbs 31:26: "She speaks with wisdom, and faithful instruction is on her tongue."',
        verses: [
          {
            id: 1,
            text: 'Extend grace to others. Colossians 4:6: "Let your conversation be always full of grace, seasoned with salt, so that you may know how to answer everyone."',
          },
        ],
      },
      {
        id: 7,
        title: 'Strength',
        description:
          'Exhibit inner strength and resilience. Proverbs 31:25: "She is clothed with strength and dignity; she can laugh at the days to come."',
        verses: [
          {
            id: 1,
            text: 'Find strength in God. Philippians 4:13: "I can do all this through him who gives me strength."',
          },
        ],
      },
    ],
  },

  {
    id: 5,
    type: 'relationship',
    title: 'Bible verse for relationship',
    data: [
      {
        id: 1,
        title: 'Do Everything in Love',
        description:
          'Ensure that all your actions are motivated by love and compassion. 1 Corinthians 16:14: "Do everything in love."',
        verses: [
          {
            id: 1,
            text: '1 Corinthians 16:14: "Do everything in love."',
          },
        ],
      },
      {
        id: 2,
        title: 'Be Kind and Compassionate',
        description:
          'Show kindness and compassion to others, reflecting the love of Christ. Ephesians 4:32: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."',
        verses: [
          {
            id: 1,
            text: 'Ephesians 4:32: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."',
          },
        ],
      },
      {
        id: 3,
        title: 'Control Anger',
        description:
          'Handle conflicts with gentleness and avoid letting anger control your actions. Proverbs 15:1: "A gentle answer turns away wrath, but a harsh word stirs up anger."',
        verses: [
          {
            id: 1,
            text: 'Proverbs 15:1: "A gentle answer turns away wrath, but a harsh word stirs up anger."',
          },
        ],
      },
      {
        id: 4,
        title: 'Get Rid of All Bitterness',
        description:
          'Remove all forms of bitterness and resentment from your relationships. Ephesians 4:31: "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice."',
        verses: [
          {
            id: 1,
            text: 'Ephesians 4:31: "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice."',
          },
        ],
      },
      {
        id: 5,
        title: 'Bear with Each Other',
        description:
          'Be patient and bear with each other’s shortcomings. Colossians 3:13: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you."',
        verses: [
          {
            id: 1,
            text: 'Colossians 3:13: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you."',
          },
        ],
      },
      {
        id: 6,
        title: 'Love is Patient and Kind',
        description:
          'Demonstrate the qualities of love as described in 1 Corinthians 13. 1 Corinthians 13:4: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud."',
        verses: [
          {
            id: 1,
            text: '1 Corinthians 13:4: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud."',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    type: 'relationship',
    title: 'Men to Avoid as a Woman of God',
    data: [
      {
        id: 1,
        title: 'Deceitful',
        description: 'Avoid those who are dishonest and manipulate others for their gain.',
        verses: [
          {
            id: 1,
            text: 'Proverbs 12:22: "The Lord detests lying lips, but he delights in people who are trustworthy."',
          },
          {
            id: 2,
            text: 'Proverbs 26:24-26: "Enemies disguise themselves with their lips, but in their hearts they harbor deceit. Though their speech is charming, do not believe them, for seven abominations fill their hearts. Their malice may be concealed by deception, but their wickedness will be exposed in the assembly."',
          },
        ],
      },
      {
        id: 2,
        title: 'Abusive',
        description:
          'Stay away from men who display abusive behavior, whether physical, emotional, or verbal.',
        verses: [
          {
            id: 1,
            text: 'Ephesians 4:31: "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice."',
          },
          {
            id: 2,
            text: '1 Peter 3:7: "Husbands, in the same way be considerate as you live with your wives, and treat them with respect as the weaker partner and as heirs with you of the gracious gift of life, so that nothing will hinder your prayers."',
          },
        ],
      },
      {
        id: 3,
        title: 'Unfaithful',
        description: 'Avoid those who are unfaithful and lack commitment in relationships.',
        verses: [
          {
            id: 1,
            text: 'Proverbs 20:6: "Many claim to have unfailing love, but a faithful person who can find?"',
          },
          {
            id: 2,
            text: 'Matthew 19:6: "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate."',
          },
        ],
      },
      {
        id: 4,
        title: 'Self-Centered',
        description:
          'Refrain from men who are self-centered and only concerned with their own desires.',
        verses: [
          {
            id: 1,
            text: 'Philippians 2:3: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves."',
          },
          {
            id: 2,
            text: 'James 3:16: "For where you have envy and selfish ambition, there you find disorder and every evil practice."',
          },
        ],
      },
      {
        id: 5,
        title: 'Irresponsible',
        description: 'Avoid men who do not take responsibility for their actions and obligations.',
        verses: [
          {
            id: 1,
            text: 'Proverbs 18:9: "One who is slack in his work is brother to one who destroys."',
          },
          {
            id: 2,
            text: 'Luke 16:10: "Whoever can be trusted with very little can also be trusted with much, and whoever is dishonest with very little will also be dishonest with much."',
          },
        ],
      },
      {
        id: 6,
        title: 'UnGodly',
        description: 'Stay away from men who do not adhere to Godly principles and values.',
        verses: [
          {
            id: 1,
            text: '2 Corinthians 6:14: "Do not be yoked together with unbelievers. For what do righteousness and wickedness have in common? Or what fellowship can light have with darkness?"',
          },
          {
            id: 2,
            text: 'Psalm 1:1: "Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers,"',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    type: 'relationship',
    title: 'Women to Avoid as a Man of God',
    data: [
      {
        id: 1,
        title: 'Dishonest',
        description:
          'Avoid women who are deceitful or dishonest, as honesty is crucial in any relationship.',
        verses: [
          {
            id: 1,
            text: 'Proverbs 12:22: "The Lord detests lying lips, but he delights in people who are trustworthy."',
          },
          {
            id: 2,
            text: 'Proverbs 6:16-19: "There are six things the Lord hates, seven that are detestable to him: haughty eyes, a lying tongue, hands that shed innocent blood, a heart that devises wicked schemes, feet that are quick to rush into evil, a false witness who pours out lies and a person who stirs up conflict in the community."',
          },
        ],
      },
      {
        id: 2,
        title: 'Manipulative',
        description:
          'Stay away from women who use manipulation to control others or to achieve their own ends.',
        verses: [
          {
            id: 1,
            text: 'Proverbs 7:21-23: "With persuasive words she led him astray; she seduced him with her smooth talk. All at once he followed her like an ox going to the slaughter, like a deer stepping into a noose till an arrow pierces his liver, like a bird darting into a snare, little knowing it will cost him his life."',
          },
          {
            id: 2,
            text: 'Proverbs 5:3-4: "For the lips of the adulterous woman drip honey, and her speech is smoother than oil; but in the end she is bitter as gall, sharp as a double-edged sword."',
          },
        ],
      },
      {
        id: 3,
        title: 'Self-Centered',
        description:
          'Refrain from women who are excessively focused on themselves and their own desires without regard for others.',
        verses: [
          {
            id: 1,
            text: 'Philippians 2:3: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves."',
          },
          {
            id: 2,
            text: 'James 3:16: "For where you have envy and selfish ambition, there you find disorder and every evil practice."',
          },
        ],
      },
      {
        id: 4,
        title: 'Irresponsible',
        description:
          'Avoid women who show a lack of responsibility in their actions or commitments.',
        verses: [
          {
            id: 1,
            text: 'Proverbs 18:9: "One who is slack in his work is brother to one who destroys."',
          },
          {
            id: 2,
            text: 'Luke 16:10: "Whoever can be trusted with very little can also be trusted with much, and whoever is dishonest with very little will also be dishonest with much."',
          },
        ],
      },
      {
        id: 5,
        title: 'UnGodly',
        description:
          'Stay away from women whose values and actions do not align with Godly principles.',
        verses: [
          {
            id: 1,
            text: '2 Corinthians 6:14: "Do not be yoked together with unbelievers. For what do righteousness and wickedness have in common? Or what fellowship can light have with darkness?"',
          },
          {
            id: 2,
            text: 'Psalm 1:1: "Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers,"',
          },
        ],
      },
      {
        id: 6,
        title: 'Reckless',
        description:
          'Avoid women who act recklessly and do not consider the consequences of their actions.',
        verses: [
          {
            id: 1,
            text: 'Proverbs 14:16: "The wise fear the Lord and shun evil, but a fool is hotheaded and yet feels secure."',
          },
          {
            id: 2,
            text: 'Proverbs 22:3: "The prudent see danger and take refuge, but the simple keep going and pay the penalty."',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    type: 'relationship',
    title: 'How a Man of God Should Treat His Wife',
    data: [
      {
        id: 1,
        title: 'Love Sacrificially',
        description:
          'A man of God should love his wife with a selfless, sacrificial love, reflecting Christ’s love for the church.',
        verses: [
          {
            id: 1,
            text: 'Ephesians 5:25: "Husbands, love your wives, just as Christ loved the church and gave himself up for her."',
          },
          {
            id: 2,
            text: '1 John 3:16: "This is how we know what love is: Jesus Christ laid down his life for us. And we ought to lay down our lives for our brothers and sisters."',
          },
        ],
      },
      {
        id: 2,
        title: 'Show Respect',
        description:
          'Respect your wife’s opinions, feelings, and contributions to the relationship and household.',
        verses: [
          {
            id: 1,
            text: '1 Peter 3:7: "Husbands, in the same way be considerate as you live with your wives, and treat them with respect as the weaker partner and as heirs with you of the gracious gift of life, so that nothing will hinder your prayers."',
          },
          {
            id: 2,
            text: 'Ephesians 5:33: "However, each one of you also must love his wife as he loves himself, and the wife must respect her husband."',
          },
        ],
      },
      {
        id: 3,
        title: 'Provide and Protect',
        description:
          'Ensure the well-being of your wife by providing for her needs and protecting her physically, emotionally, and spiritually.',
        verses: [
          {
            id: 1,
            text: '1 Timothy 5:8: "Anyone who does not provide for their relatives, and especially for their own household, has denied the faith and is worse than an unbeliever."',
          },
          {
            id: 2,
            text: 'Proverbs 31:11-12: "Her husband has full confidence in her and lacks nothing of value. She brings him good, not harm, all the days of her life."',
          },
        ],
      },
      {
        id: 4,
        title: 'Communicate Openly',
        description:
          'Maintain open and honest communication with your wife, addressing issues with kindness and patience.',
        verses: [
          {
            id: 1,
            text: 'James 1:19: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,"',
          },
          {
            id: 2,
            text: 'Colossians 3:19: "Husbands, love your wives and do not be harsh with them."',
          },
        ],
      },
      {
        id: 5,
        title: 'Support Her Growth',
        description:
          'Encourage and support your wife’s spiritual, personal, and professional growth.',
        verses: [
          {
            id: 1,
            text: 'Ecclesiastes 4:9: "Two are better than one, because they have a good return for their labor:"',
          },
          {
            id: 2,
            text: 'Proverbs 31:25: "She is clothed with strength and dignity; she can laugh at the days to come."',
          },
        ],
      },
      {
        id: 6,
        title: 'Forgive and Reconcile',
        description:
          'Practice forgiveness and seek reconciliation in times of conflict or misunderstanding.',
        verses: [
          {
            id: 1,
            text: 'Ephesians 4:32: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."',
          },
          {
            id: 2,
            text: 'Colossians 3:13: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you."',
          },
        ],
      },
    ],
  },
  {
    id: 9,
    type: 'relationship',
    title: 'How a Woman of God Should Treat Her Husband',
    data: [
      {
        id: 1,
        title: 'Submit Respectfully',
        description:
          'A woman of God should submit to her husband out of reverence for Christ, honoring his role as the leader of the household.',
        verses: [
          {
            id: 1,
            text: 'Ephesians 5:22-24: "Wives, submit yourselves to your own husbands as you do to the Lord. For the husband is the head of the wife as Christ is the head of the church, his body, of which he is the Savior. Now as the church submits to Christ, so also wives should submit to their husbands in everything."',
          },
          {
            id: 2,
            text: 'Colossians 3:18: "Wives, submit yourselves to your husbands, as is fitting in the Lord."',
          },
        ],
      },
      {
        id: 2,
        title: 'Show Respect',
        description:
          'Respect your husband’s decisions and leadership, valuing his role and contributions to the marriage.',
        verses: [
          {
            id: 1,
            text: '1 Peter 3:1-2: "Wives, in the same way submit yourselves to your own husbands so that, if any of them do not believe the word, they may be won over without words by the behavior of their wives, when they see the purity and reverence of your lives."',
          },
          {
            id: 2,
            text: 'Proverbs 31:11-12: "Her husband has full confidence in her and lacks nothing of value. She brings him good, not harm, all the days of her life."',
          },
        ],
      },

      {
        id: 3,
        title: 'Communicate Kindly',
        description:
          'Communicate with your husband in a respectful and loving manner, avoiding harsh words and fostering understanding.',
        verses: [
          {
            id: 1,
            text: 'Proverbs 31:26: "She speaks with wisdom, and faithful instruction is on her tongue."',
          },
          {
            id: 2,
            text: 'Ephesians 4:29: "Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen."',
          },
        ],
      },
      {
        id: 4,
        title: 'Encourage and Support',
        description:
          'Encourage and support your husband’s goals and dreams, being a source of strength and motivation.',
        verses: [
          {
            id: 1,
            text: 'Ecclesiastes 4:9: "Two are better than one, because they have a good return for their labor:"',
          },
          {
            id: 2,
            text: 'Proverbs 31:11: "Her husband has full confidence in her and lacks nothing of value."',
          },
        ],
      },
      {
        id: 5,
        title: 'Forgive and Reconcile',
        description:
          'Practice forgiveness and seek reconciliation in times of conflict, showing grace and compassion.',
        verses: [
          {
            id: 1,
            text: 'Ephesians 4:32: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."',
          },
          {
            id: 2,
            text: 'Colossians 3:13: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you."',
          },
        ],
      },
    ],
  },
  {
    id: 10,
    type: 'relationship',
    title: 'Bible Verses on Godly Relationship',
    data: [
      {
        id: 1,
        title: 'Love Unconditionally',
        description:
          'Cultivate a relationship marked by unconditional love and selflessness, following the example of Christ’s love for us.',
        verses: [
          {
            id: 1,
            text: '1 Corinthians 13:4-7: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres."',
          },
          {
            id: 2,
            text: 'John 15:12: "My command is this: Love each other as I have loved you."',
          },
        ],
      },
      {
        id: 2,
        title: 'Be Forgiving',
        description:
          'Forgive one another, as God has forgiven us, to maintain a healthy and godly relationship.',
        verses: [
          {
            id: 1,
            text: 'Ephesians 4:32: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."',
          },
          {
            id: 2,
            text: 'Colossians 3:13: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you."',
          },
        ],
      },
      {
        id: 3,
        title: 'Seek Peace',
        description:
          'Strive for peace and harmony in your relationships, resolving conflicts with love and understanding.',
        verses: [
          {
            id: 1,
            text: 'Romans 12:18: "If it is possible, as far as it depends on you, live at peace with everyone."',
          },
          {
            id: 2,
            text: 'Hebrews 12:14: "Make every effort to live in peace with everyone and to be holy; without holiness no one will see the Lord."',
          },
        ],
      },
      {
        id: 4,
        title: 'Communicate with Love',
        description:
          'Communicate with kindness and honesty, valuing and respecting each other’s feelings and thoughts.',
        verses: [
          {
            id: 1,
            text: 'Proverbs 15:1: "A gentle answer turns away wrath, but a harsh word stirs up anger."',
          },
          {
            id: 2,
            text: 'James 1:19: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,"',
          },
        ],
      },
      {
        id: 5,
        title: 'Honor and Respect',
        description:
          'Show honor and respect in your relationship, recognizing the value and dignity of each person involved.',
        verses: [
          {
            id: 1,
            text: '1 Peter 2:17: "Show proper respect to everyone, love the family of believers, fear God, honor the emperor."',
          },
          {
            id: 2,
            text: 'Romans 13:7: "Give to everyone what you owe them: If you owe taxes, pay taxes; if revenue, then revenue; if respect, then respect; if honor, then honor."',
          },
        ],
      },
      {
        id: 6,
        title: 'Support One Another',
        description:
          'Be a source of support and encouragement to each other, helping one another grow in faith and character.',
        verses: [
          {
            id: 1,
            text: 'Ecclesiastes 4:9: "Two are better than one, because they have a good return for their labor:"',
          },
          {
            id: 2,
            text: 'Galatians 6:2: "Carry each other’s burdens, and in this way you will fulfill the law of Christ."',
          },
        ],
      },
    ],
  },
  {
    id: 11,
    type: 'general',
    title: 'SOAP Bible Study Method',
    data: [
      {
        id: 1,
        title: 'Scripture',
        description:
          'Read a passage of Scripture and write down the specific verse or verses that stand out to you.',
        verses: [
          {
            id: 1,
            text: 'Example : John 3:16: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
          },
        ],
      },
      {
        id: 2,
        title: 'Observation',
        description:
          'Observe the context and meaning of the verse(s). Ask questions like: What is the main message? Who is the audience? What is the historical and cultural context?',
        verses: [
          {
            id: 1,
            text: 'Example : In John 3:16, the verse is about God’s immense love for humanity and the promise of eternal life through belief in Jesus. The context is Jesus’ conversation with Nicodemus, highlighting the core of the Gospel message',
          },
        ],
      },
      {
        id: 3,
        title: 'Application',
        description:
          'Apply the verse to your own life. Reflect on how it impacts your current situation or behavior. Consider questions like: How can I live out this principle? What changes do I need to make?',
        verses: [
          {
            id: 1,
            text: 'Understanding that God’s love is unconditional and sacrificial challenges me to love others in the same way. I should be more forgiving and selfless in my relationships, demonstrating love through my actions.',
          },
        ],
      },
      {
        id: 4,
        title: 'Prayer',
        description:
          'Pray about what you’ve learned from the Scripture. Ask God for help to apply the lesson to your life, and for strength and wisdom to live according to His Word.',
        verses: [
          {
            id: 1,
            text: ' Example : Lord, thank You for Your incredible love and the gift of eternal life through Jesus. Help me to reflect Your love in my daily life. Give me the strength to be more loving and to share Your message with others. Amen.',
          },
        ],
      },
    ],
  },
  {
    id: 12,
    type: 'relationship',
    title: 'Biblical Teachings on Sexual Purity and Sin',
    data: [
      {
        id: 1,
        title: 'Avoid Sexual Immorality',
        description:
          'The Bible calls believers to avoid sexual immorality and to honor God with their bodies.',
        verses: [
          {
            id: 1,
            text: '1 Corinthians 6:18: "Flee from sexual immorality. All other sins a person commits are outside the body, but whoever sins sexually, sins against their own body."',
          },
          {
            id: 2,
            text: 'Hebrews 13:4: "Let marriage be held in honor among all, and let the marriage bed be undefiled; for God will judge the sexually immoral and adulterous."',
          },
        ],
      },
      {
        id: 2,
        title: 'Resist Lustful Desires',
        description:
          'Lustful desires and thoughts are to be resisted, as they lead to sin and impurity.',
        verses: [
          {
            id: 1,
            text: 'Matthew 5:28: "But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart."',
          },
          {
            id: 2,
            text: 'James 1:14-15: "But each person is tempted when they are dragged away by their own evil desire and enticed. Then, after desire has conceived, it gives birth to sin; and sin, when it is full-grown, gives birth to death."',
          },
        ],
      },
      {
        id: 3,
        title: 'Honor God with Your Body',
        description:
          'Believers are called to honor God with their bodies and to view sexual relationships within the confines of marriage.',
        verses: [
          {
            id: 1,
            text: '1 Thessalonians 4:3-4: "It is God’s will that you should be sanctified: that you should avoid sexual immorality; that each of you should learn to control your own body in a way that is holy and honorable,"',
          },
          {
            id: 2,
            text: '1 Corinthians 6:19-20: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies."',
          },
        ],
      },
      {
        id: 4,
        title: 'Repentance and Forgiveness',
        description:
          'God offers forgiveness and restoration to those who repent of their sexual sins and seek His grace.',
        verses: [
          {
            id: 1,
            text: '1 John 1:9: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness."',
          },
          {
            id: 2,
            text: '2 Corinthians 7:10: "Godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death."',
          },
        ],
      },
      {
        id: 5,
        title: 'The Dangers of Normalizing Sin',
        description:
          'The Bible warns against the normalization of sinful actions, urging believers to uphold God’s standards of purity.',
        verses: [
          {
            id: 1,
            text: 'Romans 1:32: "Although they know God’s righteous decree that those who do such things deserve death, they not only continue to do these very things but also approve of those who practice them."',
          },
          {
            id: 2,
            text: 'Galatians 5:19-21: "The acts of the flesh are obvious: sexual immorality, impurity and debauchery; idolatry and witchcraft; hatred, discord, jealousy, fits of rage, selfish ambition, dissensions, factions and envy; drunkenness, orgies, and the like. I warn you, as I did before, that those who live like this will not inherit the kingdom of God."',
          },
        ],
      },
    ],
  },
];

export default list;
