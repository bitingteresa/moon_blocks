export const MOON_BLOCKS = {
    '0,1': {
        text: 'Yes',
        description: 'One flat side up and one round side up',
        shorthand: 'y',
    },
    '1,0': {
        text: 'Yes',
        description: 'One round side up and one flat side up',
        shorthand: 'y',
    },
    '1,1': {
        text: 'No',
        description: 'Two round sides up',
        shorthand: 'n',
    },
    '0,0': {
        text: 'Laughing',
        description: 'Two flat sides up',
        shorthand: 'l',
    },
};

export const MOON_BLOCKS_IMAGES = {
    'left-0': {
        src: './images/left_flat.png',
        alt: 'left moon block is flat side up'
    },
    'left-1': {
        src: './images/left_round.png',
        alt: 'left moon block is round side up'
    },
    'right-0': {
        src: './images/right_flat.png',
        alt: 'right moon block is flat side up'
    },
    'right-1': {
        src: './images/right_round.png',
        alt: 'right moon block is round side up'
    },
};

export const OUTCOMES = {
    yes: {
        text: 'The binary gods would like to give advice on your question.',
        showFortuneSticks: true,
    },
    no: {
        text: 'The binary gods are unavailable for your question today.',
        showFortuneSticks: false,
    },
    laughing: {
        text: 'Try to rephrase your question to be more specific and ask again.',
        showFortuneSticks: false,
    },
};

export const FORTUNE_STICKS = {
    64: {
        poem: 'Two good friends were in business together;\nThe richer gave the poorer a larger share.\nSuch virtue did not go unrewarded, and very soon Both became ministers under the great king.',
        traditional: 'Working together with others is your best hope for advancement and profit. Form close friendships, and affairs will be settled quickly. Great chances are very close, and you will soon receive pleasing news. Investments will most likely prosper, and you will recover from most illnesses quickly.',
        reflection: 'Quiet acts of kindness may seem insignificant, but in fact, they make you into the sort of person that kings and emperors would like as a friend. Nothing is too small to count. Cultivate kindness and compassion in your life. Discover how this will bring you a better fortune, because it will make you a better person.'
    },
    63: {
        poem: 'Last time we sailed we lost our compass;\nToday we set forth to search for it again.\nThough the first compass was later found,\nIt is no use now and all hope is drowned.',
        traditional: 'Misfortune is very close, and your current efforts to prevent it are useless. Forget your old methods, and try a completely new approach, or you may end up in considerable trouble. You are more likely to find success in business than in your personal life. Remember that compromise is often the best solution to a dispute.',
        reflection: 'This poem is a warning. You are very close to making the wrong decision. Passion, power, and excitement have already caused you to lose your way once. Do not do it again. Use the compass of your conscience to guide you into making the correct decision - walking the true Tao. To do otherwise, will be unfortunate.'
    },
    62: {
        poem: 'Holding a piece of fine jade is a rare treat.\nIt should be valued and loved as a worthy item.\nOnly great wealth can buy such beauty;\nGreat things deserve great honour, after all.',
        traditional: 'While your current goal (whether it is recovering from sickness, making a long journey, or starting a business) will take a long time to succeed, patience will eventually lead to affluence. Profits, both financial and personal, may seem small at the moment, but they will eventually accumulate into great riches. Let reason and logic be your guide, and wait for the perfect moment to put a plan into effect.',
        reflection: 'You have been privileged, but do not think it will last forever. Good fortune is like a piece of jade. The rare jade has passed through many hands of many centuries - those who thought they owned it are dust now, but the jade still exists. Treat fortune like that, and recognize that it passes on to others and is only with you for a moment.',
    },
    61: {
        poem: 'The oracle is ambiguous; who can read it?\nTo some it means rebel and you will succeed.\nBut the honest general read it otherwise,\nAnd found to his cost that this meaning was true.',
        traditional: 'Your future teeters on a thin line between prosperity and disaster. Any decision you make now may well affect your life forever, but leaving things as they are will only make affairs worse. Do not act rashly; consider plans carefully before rushing into disaster. Calamity may well be prevented only at the very last moment.',
        reflection: 'Not all divination can reassure. Sometimes you will be brought face to face with harsh, painful decisions; perhaps the very opposite of what you had hoped. Bite the bullet, and face the consequences. Do not dodge the difficult, but deal with it instead.',
    },
    60: {
        poem: 'As a blazing fire consumes the fuel around it,\nSpreading far and wide and sparing nothing,\nSo a fearful death awaits every one of us.\nNeither rank nor riches can save us now.',
        traditional: 'Any problems that occur are soon likely to become positive disasters unless you are very careful. Act quickly to stop problems getting out of your control, or they will become like the blazing fire described in the fortune. Minor health problems may develop into serious illness. Be cautious; and remember that what appears wise to you now may be foolish with hindsight. Listen closely to the advice of others.',
        reflection: 'Life ends; this is a reality. In the end, we need to go into that dark night. You can try and resist, but eventually death awaits us all. As you draw near, look to what will be remembered of you when you are gone. Never mind power and wealth. Will you be missed for who you are? Will people mourn your passing because their lives will be the poorer for your absence?',
    },
    59: {
        poem: 'A simple maid was married to a noble lord,\nHer perfect beauty proved the ruin of the king.\nAnother, though ugly, tried to match her smile.\nBut can the pheasant wear the phoenix\'s clothes?',
        traditional: 'This is generally a precarious and tricky time for you, and it would be a very bad idea to make new plans. Any wealth you are enjoying at the moment is likely to be wasted, unless you invest it wisely. You should pay more attention to your health, or you may suffer considerable pain. The best way to find peace for yourself and avert these problems is to perform good deeds for others.',
        reflection: 'The infamous courtesan who drains the powers of the decadent Emperor is a common story of the demise of various dynasties. This is a warning to avoid people who might divert you from what is right and proper. Be yourself, warts and all, as trying to be something that you are not is a true recipe for disaster.',
    },
    58: {
        poem: 'One state stood above the other six\nAnd sought to conquer the whole of the land.\nBut one man united the six together,\nAnd resisted the aggression of the seventh.',
        traditional: 'This is a very promising fortune, but your fate ultimately lies with your own ability to make decisions and take the initiative. You should strive to be firm and assertive in order to overcome your problems. Although you may be suffering from illness now, it is not likely to have serious consequences. Now is a very good time to form close personal relationships.',
        reflection: 'The brutal triumph of the Chin Emperor in 221 BC has left a deep scar on the Chinese psyche. The Chin kingdom defeated the other kingdoms and crushed all resistance. Thus this poem, which says what might have been, warns you to resist the growth of threatening forces by cooperating with others in the same situation. To allow division and disagreement to stand in the way of united opposition would be to leave yourself vulnerable to attack and takeover.',
    },
    57: {
        poem: 'Close your ears to rumour and scandal;\nYour lot is a harvest of food and fine clothes.\nPut all sorrow and woe out of your mind,\nPlace your trust in me and joy will be yours.',
        traditional: 'This fortune is like a mother\'s lullaby to her baby. Just as a devoted mother cradles and protects her child, so you are protected by fate. Everything is well looked after at the moment, so you should have very few worries. It is wise to stay where you are and avoid travel, as your current situation is so well-favored by fortune. Also, it would probably be a good idea to make long-term investments.',
        reflection: 'Think not of what others say, but remain true to the child within. Have faith. Trust those around you who have your best interests at heart. Ignore those who try to provoke you or who offer suspect advice. Listen to your conscience and your heart, and find the right way forward.',
    },
    56: {
        poem: 'The hidden dagger in water becomes a dragon,\nSoaring far into the sky over thousands of miles.\nA story like this can mean nothing but good.\nYou will rise higher as the result of an ordeal.',
        traditional: 'While a significant test is approaching in your life, you will gain enormously if you succeed in it. This is a very opportune time to put any plans into action. Although you will encounter difficulties, remember that persistence is the best solution - splendid opportunities await you, and you can persevere despite your troubles. Events may take some time to turn to your advantage, but eventual success and a happy life are most likely.',
        reflection: 'Whatever is troubling you now will (if handled well) become a source of great joy and success for you. The dagger symbolizes the danger or problems you currently face. The dragon symbolizes the ability to rise above your present circumstances and emerge triumphant.',
    },
    55: {
        poem: 'The Chief Minister was the wisest of all men.\nLoved by good people; feared by the unjust.\nHe promoted honesty throughout the land\nAnd advised the people to attend to their farms.',
        traditional: 'Try to attend to your own home rather than putting all your energy into work, and do not crave for more money and status than you already have. It is a good idea to settle any outstanding disputes; otherwise they will likely be resolved against you. You are likely to remain in good health for a long time, and someone long absent from you may soon return.',
        reflection: 'Good ministers and honest judges were highly honored in ancient China, and after death, they were often made judges in the afterlife. To be given good advice by such a person was to be given the wisdom of Heaven. And the usual advice, as in the Tao Te Ching, was to be content with what you have. Stop trying to find greener pastures. Live at ease with who and what you are.',
    },
    54: {
        poem: 'Reflections in rippling water,\nAre constantly shifting, never the same.\nIn fate, though, everything is set,\nAnd no advice can help the outcome.',
        traditional: 'Like a reflection in water, your safety is not certain. You should take precautions against possible dangers, and not embark on any risky endeavors. In doing business, you will probably meet with many obstructions, and it is not a good time to put new plans into effect. Generally, things are likely to turn against you unless you keep tight control. On the positive side, you should recover from illness easily, and people missing from your life are likely to return soon.',
        reflection: 'Chinese notions of fate and fortune set a clear line between that which is fixed and that which is changeable. Certain aspects of fate, like your date of birth or the kind of family you are born into, are fixed. The rest is up to you. However, if there is some aspect of yourself that makes you behave in a way you dislike, it is up to you to change. Otherwise you will \'fate\' yourself to be like that for the rest of your life. Fate can keep you trapped. Your choice to change can set you free.',
    },
    53: {
        poem: 'The prince\'s court housed three thousand guests,\nNobody could say which was the greatest.\nOne of them complained of being ignored,\nClaiming his worth was above all others.',
        traditional: 'You should contemplate carefully the ramifications of any plan you attempt at the moment, as well as heeding the advice of others. If travelling, you are likely to experience many inconveniences and delays. Relationships will probably be happy and contented, and there is little chance of accident or illness within your family. You, however, should take care to keep healthy.',
        reflection: 'No detail is too small, no concern too minor, to ignore at present. If you try to do things on too grandiose a scale, you may by accident ignore those of true worth while leaving yourself open to attack by the pompous and the ignorant. Take care in all you do. Focus on quality, not quantity. Listen, watch, be available, and you may be able to undertake great things without losing either yourself or others.',
    },
    52: {
        poem: 'In the royal canal love poems floated on leaves,\nWritten by a maid in service at the court.\nA scholar responded by the same means,\nAnd at last the leaves brought the lovers together.',
        traditional: 'While happiness awaits you, it may take many years for your current difficulties to mend. Expect a gradual recovery from your problems rather than a sudden solution. You may well find your friends are your best source of support. If you are considering committing to a relationship, this would be a very good time, as the relationship is likely to be long-lasting and successful.',
        reflection: 'An impossible chasm seems to be set between yourself and another. Yet this gulf can be bridged. Be honest about what you feel, and see if such honesty brings a change on the other side. Even if it does not, you will have acted appropriately.',
    },
    51: {
        poem: 'During the long, long summer dog days\nEverybody is tortured by the burning sun.\nBut now a calm and soothing breeze has arisen,\nThe will of Heaven that eases human souls.',
        traditional: 'At the moment, everything may seem overwhelming and your problems just too many to cope with effectively. Do not be worried - learn to relax, to avoid stress, and your problems will soon pass. Your personal life will blossom, and you are likely to make friends with someone who is in a good position to help you. Any business investments you have made, however, are likely to take a sharp downturn soon, so it would be wise to take any money now, while you still can.',
        reflection: 'A hot Chinese summer can be almost unbearable. It is a small wonder, therefore, that the Emperors sacrificed to the yin spirit of cold, wet, and winter at the height of summer! But, through the rise and fall of yin and yang, summer is always followed by autumn and winter. Bear with your current situation, and you will find that things become a little easier. Change will come - it always does.',
    },
    50: {
        poem: 'Fleeing a lord\'s wrath, the hero rushed to the river,\nWhere a friendly boatman ferried him over.\nThe hero offered him his sword in thanks, but he refused,\nPlacing friendship above any material reward.',
        traditional: 'While you have little to worry about, materially speaking your life is not likely to improve much for the moment. Do not work yourself too hard - learn to enjoy the pleasures of family life and your hobbies. You should take care in your business dealings and be prudent in your personal relationships. Avoid overspending, particularly around the holidays. Charitable work and good deeds will help to improve your peace of mind.',
        reflection: 'This tale, taken from one of the great Chinese heroic tales, makes the point that sometimes people do things because the action is right, not out of a hope for reward. It may be that you have underestimated the support, care, and commitment of those around you. You cannot buy such things; only thank Heaven for them when you find them.',
    },
    49: {
        poem: 'Although the general had great wisdom\nAnd saved the Emperor\'s skin many a time,\nHe eventually fell from favour with his master,\nLeft the court, and escaped into oblivion.',
        traditional: 'There are many obstacles in your way at the moment, and a complete change of lifestyle might be a good idea. You could well find happiness in ways you had never imagined; it is foolish to be complacent. Travel would be a good idea, both to get your mind off your problems and to broaden your horizons, but see if you can resolve any personal disputes before you leave.',
        reflection: 'Taoism mocks fame and fortune. It sees material benefit or worldly success as little more than illusion. Taoist sages often pointed out that great heroes or model ministers frequently underwent terrible sufferings for the Empire, only to die alone or scorned. Do not invest all your energies in issues that are temporal, material, and bound to pass away. Instead, look to the things of Heaven, where your reward will be everlasting.',
    },
    48: {
        poem: 'The humble partridge becomes the great roc;\nA freedom that no other bird can know.\nHigher and higher he soars into the sky,\nLeaving miles of clouds far below him.',
        traditional: 'A dramatic change is about to occur in your life - whether this is for good or bad depends on your actions. Be prepared for things to change completely, and learn to adapt with circumstances. While you may have difficulties forming new relationships, existing ones will probably be successful. Business deals will probably be delayed for some time but will prove profitable in the end.',
        reflection: 'This is about contrasts. The roc was a vast, mythological creature and the partridge but a small, dull bird. Yet, says the poet, that which was humdrum and ordinary can become transformed, different. You can be in charge of your own destiny if you want to. Your actions can make you a better person. It is in your power. See if you, also, are able to change.',
    },
    47: {
        poem: 'The envoy travelled hard over a thousand miles\nTo claim a province for his master from another.\nThe king said nothing, but tears streaked his face,\nKnowing he was too weak to save the province.',
        traditional: 'Events will take a long time to be resolved and may not turn out in your favor. Periods of misfortune are likely to be particularly severe, and you will be overshadowed with worries for a good while. Committing yourself to a relationship now could be a fatal mistake. Only kind words and patience will get you through this tricky period - your friends may well be your greatest source of support.',
        reflection: 'Serving faithfully one who is not able to honor your service can be seen as the highest level of loyalty... or as an act of great foolishness. It is up to you to decide. Either way, your integrity is assumed. But what outcome do you desire most of all? Remember that you always have a choice.',
    },
    46: {
        poem: 'For the sake of one child, the ruler\'s command\nWas the death of all children in his own city.\nBut the orphan was hidden in a far-off state,\nAnd, when a man, earned revenge for his father.',
        traditional: 'This is a risky time, and you should avoid overreaching yourself. Do not get embroiled in conflicts with others, and try not to strive for wealth and fame, lest you encounter disaster along the way. You may have a tricky time in your personal life, but patience and tolerance will let you win through.',
        reflection: 'Stories of special children being hunted at birth are to be found worldwide - the baby Krishna and Child Jesus are just two examples. The moral here is that rash, fearful, or vengeful actions will rebound. Trying to destroy what you fear may well lead to that fear returning a hundred times worse. In Greek legend, the basis of the tragic notion was the attempt to kill children destined to overthrow you.',
    },
    45: {
        poem: 'The meek will overcome the violent;\nThe kind-hearted will receive infinite rewards.\nTheir deeds of kindness bestow to such great merit,\nThat heavenly ambrosia will quench their thirst.',
        traditional: 'Your best chance to gain the favor of fortune is to be kind and tender towards others. If you perform good deeds, your reputation will improve, and others will be more likely to aid you. Autumn will be your most prosperous season, although you will remain peaceful and safe throughout the year. You should be the victor in any outstanding disputes, because you are most likely in the right.',
        reflection: 'The Tao Te Ching stresses how water wears away huge rocks, and the weak wears down the strong. The Taoist way is not to confront but simply to be, to flow round and under obstacles rather than try to overwhelm them. Be natural. Be considerate. Be thoughtful. Hurdles will fall, melt away, or after a while, will cease to be important.',
    },
    44: {
        poem: 'Competing fiercely to become spring\'s queen,\nThe garden flowers blossom to their full beauty.\nWho will win the golden crown of glory?\nAmong them all, only the peony stands out.',
        traditional: 'Your attempts to gain wealth and fame are likely to be successful, and your personal relationships will turn out well. You need only search to find many opportunities for advancement. Do not hesitate to put your plans into operation, and it is a good idea to commit yourself more strongly to your current relationships. With care, you can remain both physically and mentally fit.',
        reflection: 'The peony is the beloved flower of Chinese poets and artists, for it has a strong sexual overtone, being (in its elongated bud stage) the example par excellence of the male member and the yang principle. But its multitude of opening petals is the symbol of the female, of sex, and of the yin principle. Thus it combines the yin and yang symbolism. It is saying: be complete, both yin and yang, and you will be able to progress. Do not rely on just one aspect of your personality, nor should you be too modest. In Chinese slang, a peony is a stunningly beautiful and sexy young woman. Do not hide your light under a bushel! If you have skills and attributes, use them, show them to others, and they will appreciate you and help you to advance.',
    },
    43: {
        poem: 'The prince went to a great banquet,\nFearing traitors\' knives at any moment.\nAbandoning pride, he sneaked away,\nSaving himself to assume the throne.',
        traditional: 'Discretion is often the better part of valor, and you should try to avoid risks now, as they may turn out to be more dangerous than you think. With caution, you can rise to high status, but you will have to travel far to find romance. You should not have any difficulties in business, and legal problems are likely to be resolved your way.',
        reflection: 'Wisdom is often more useful than boastful valor. If you suspect all is not well, listen to your heart, and take suitable action. Do not be foolhardy, confronting where wisdom would tell you to walk away. If your senses warn you to beware, then listen to them.',
    },
    42: {
        poem: 'Earthly rulers bestow many blessings,\nBoth honourable and without any shame.\nSo have you been blessed by Heaven\'s favour,\nMaking your life a Paradise on earth.',
        traditional: 'You are extremely privileged to receive the favor of Heaven, but you should be careful lest your deeds turn fate against you. Show your gratitude through good works and prayer; remember your obligations to others. Follow this advice and everything will go your way, but you should not expect great wealth. You should take care of your health during the summer.',
        reflection: 'This says that sometimes the most wonderful things happen for no apparent reason. They are gifts from Heaven, a blessing, a sign of grace. Do not try to work out why - just be joyful that such events occur. Do not feel you always have to \'earn\' everything. Some things simply come from the bounty of Heaven.',
    },
    41: {
        poem: 'In the moonlight the boat floated among the stars,\nBringing together lovers that fate has set apart.\nFor her love he became a distant planet.\nNobody knows how much he has suffered.',
        traditional: 'It is time to look around for chances for profit, friendship, or romance. While an element of deceit may be involved, you are likely to form strong new bonds soon. Your plans will be realized, provided you are prepared to work hard for them. Physically, you will likely remain fit and healthy, but somebody close to you may fall ill. Visitors are likely to arrive soon, probably with good news.',
        reflection: 'Stories of ill-fated lovers turned into stars that are allowed to meet occasionally are great favorites in China. The moral is that some loves are fated not to be fulfilled, but that love is nevertheless of boundless worth. It may be that fate frustrates your plans, but still hold true to that which you have glimpsed.',
    },
    40: {
        poem: 'The countryside was full of chaos and disorder,\nBefore the new Emperor came with the Mandate of Heaven.\nA good ruler serves the whole country, both poor and rich,\nAnd brings peace, prosperity and good times for all.',
        traditional: 'An extremely good fortune presaging the likely attainment of many of your goals. Fate will probably shield you against most illnesses and accidents and, if you work hard and help others, you will find joy in everything you do. You should consider settling down permanently and committing yourself to your partner, as relationships sealed now are likely to be very successful.',
        reflection: 'The Mandate of Heaven means the right to rule. Chinese emperors were called the Sons of Heaven. If chaos, war, civil unrest, bad harvests, and adverse weather conditions afflicted the State, this was seen as a clear sign that Heaven had withdrawn the right to rule from the Imperial family. See the present times of disturbance as the passing of an old corrupt way, and be prepared to look for the new way, the new order, which will restore order because it has been blessed.',
    },
    39: {
        poem: 'The message has come from a far distant horizon.\nIts meaning is obscure - just worthless nonsense.\nYou cannot turn a stone into a polished mirror;\nSo do not waste your time, save your labour instead.',
        traditional: 'You are being foolish in attempting things beyond your ability. Although you craft a thousand schemes, all of them will probably fail. Opt for patience rather than rashness, and try to be content with your lot. Be careful of your own safety, as a serious accident may occur soon. This is not a good time to commit to relationships - let things cool off for awhile, and think about them calmly.',
        reflection: 'The image of trying to polish a stone in order to make a mirror is very common in China. Traditional mirrors were made by polishing brass or copper, but, whereas these can be brought to such perfection as to afford a reflection, an ordinary stone cannot. So with you as well. Do not expend time and energy trying to make one thing into something it cannot ever be. Allow each to be true to its own innate nature, as Chuang Tzu the sage so often said. To force one thing to become what it is not is to fail twice.',
    },
    38: {
        poem: 'Free from his day\'s work, the poet sailed leisurely home.\nThough not spacious, his little cottage always served him well.\nHe would write poems or drink wine by the south window,\nOr go for a lazy stroll, enjoying the beauty of the mountains.',
        traditional: 'While you are unlikely to achieve great fame, you will probably find happiness, provided you are prepared to settle for modest gains rather than overreaching yourself. You should learn to avoid taking risks and exercise caution in most matters. Little effort is required on your part for you to achieve a contented life.',
        reflection: 'Contentment is the theme of this poem. We see poets as creatures of leisure. But most Chinese poets were scholars, administrators, or judges. They worked hard, but when the day was done - or they had retired they found true peace in being content with the simple things of life.',
    },
    37: {
        poem: 'A great scholar knows the laws of Nature,\nSeeing that as you sow, so shall you also reap.\nThere is no use praying to Heaven for your sins.\nYou will only find redemption in righteous living.',
        traditional: 'Words are of no use without deeds to accompany them. You should try to settle the problems you have now, and (as always) kind deeds are the best way to assure a good fortune. Wealth and status are beyond your reach at the moment, but personal relationships are more favored by fate. Sickness will only pass if you seek some medical assistance.',
        reflection: 'This poem seems to echo the words of Jesus. Not only did He say you reap what you sow, but He also said that those who simply prayed would not enter Heaven; only those who cared for the sick, the poor, those in prison, for example, would get there. This poem says the same. Forget religious practices and rituals, meditation or crystal gazing. Unless you live a life of service to others, how can you expect Heaven\'s favors?',
    },
    36: {
        poem: 'You are ill and caught up in problems, but be calm.\nMany benefits and riches are waiting for you still.\nA clever monkey can loose himself from a golden chain,\nAnd roam about freely in his mountain home.',
        traditional: 'Like the monkey the fortune describes, you will be able to free yourself from your current problems, provided you are cunning. Once these problems are over, very little will be beyond your reach. People close to you may have an uncertain time for a while, but your own prosperity is virtually assured. Look for the lost (be they people or objects) far away from where you are now.',
        reflection: 'The image of the monkey on a golden chain is a favorite one in China, used to express a conundrum. The pet monkey has all it needs by way of food, drink, and luxury - hence the gold chain. But it does not have freedom. The sage Chuang Tzu was once asked to become a minister in the Emperor\'s court. He refused, saying he would feel like the sacrificed bull, which is well-fed but destined for destruction. He wanted to remain free.Are you trapped in a world of goods that is like a golden chain around your neck?',
    },
    35: {
        poem: 'When Heaven chooses a man for greatness,\nIt first makes him suffer terribly in body and soul.\nHappiness does not come to anyone easily.\nThere is always a good reason for wealth or poverty.',
        traditional: 'As this fortune says, you will not achieve anything without experiencing a fair amount of worry and suffering along the way. Be careful and discriminating before embarking on a new scheme, but throw all your efforts into whatever you eventually decide to do. Do not be dissuaded by the difficulties you encounter, as you will win through in the end. Try to anticipate problems before they occur so you are prepared to deal with them. Try your best to reconcile yourself with any friends or family you are currently estranged from, and do not be afraid to commit yourself to a relationship.',
        reflection: 'Too often we assume today that we have a right to be happy, that nothing is worth struggling for. We assume that if we are not enjoying ourselves we should move on and abandon relationships or situations. But this belief in happiness is so damaging for it leads us to give up before we have even started. You must persevere. The struggle is necessary for a sense of true worth to arise. Stick with it and you will find, perhaps not happiness exactly, but something even better contentment.',
    },
    34: {
        poem: 'He was a great commander, but ugly and squat,\nAnd so found himself rejected by two mighty kings.\nBut a high official saw his value, beneath his scars,\nSought him through the night and won his aid.',
        traditional: 'Do not judge by appearances, or you may overlook great resources and opportunities. Instead, investigate things closely before making any judgment, especially in legal situations. Unless you are careful, your current affluence may slip away from you. Do not believe the rumors you hear about others: remember that people may be spreading similar stories about you.',
        reflection: 'The meaning of this poem is clear, and a frequent insight in divination poems. Do not judge by outward appearances, for to find a beautiful piece of jade you first have to break open a plain piece of rock. Beware also of being condescending. The high official had to work to undo the damage done to the ugly commander, who later became the God of Literature\'s chief attendant. Value everyone as an equal.',
    },
    33: {
        poem: 'You do not see the valuables within your grasp,\nSo you turn around and around in a vain search.\nRelax and wait for the arrival of another,\nFor they can tell you where the treasure is hidden.',
        traditional: 'Better prospects are much closer than you realize, and fortune will aid you in finding them, so you do not need to spend so much time looking for new opportunities yourself. Personally, you have very little to worry about, and your family will also be blessed with good luck if you take the time to care for them. It is not a good time to move against others, to travel, or to invest in risky enterprises - maintain your current position instead.',
        reflection: 'Sometimes we are too close to things to see their true value. We become myopic. So we spend time looking for what we already have, searching for that which is not lost.',
    },
    32: {
        poem: 'He endured the bleak north for nineteen years,\nHis captured banner trailing upon the distant sands.\nSnow was his only food; his heart was full of woe,\nAnd his only companions the sheep he tended.',
        traditional: 'This fortune refers to a famous Chinese general, Su Wu, who was taken prisoner by the northern barbarians and forced to work as a shepherd. Like him, at the moment you may seem to be in a position below your true worth. You must seek to take pride and pleasure in the work you do, rather than dreaming of past or future glories. Learn to bear adversity with good will, and you may attain the status you truly deserve.',
        reflection: 'This very famous story is about steadfast loyalty. The general was captured by the Mongols, who at first tried to bribe him into betraying the Emperor. When that failed, they sent him into the wilds to guard the sheep. Yet he refused to deny his Emperor. Loyalty is what will bring you through. Do not be tempted by easy solutions, nor expect that things will go smoothly. Stay the course, and you will have done the right thing.',
    },
    31: {
        poem: 'Two scholars went to the capital for examinations;\nOne passed and stayed, one failed and returned\nCarrying a letter from his friend. He fell ill,\nBut eventually - thank Heaven! - came home.',
        traditional: 'You may be beset with worries at the moment, but your life will improve, step by step, over time. There will be no miraculous solutions to your problems but instead a gradual recovery. Old friends may soon arrive to help you, and the time is ripe to make firmer commitments in your personal life. In the long run, happiness really does lie ahead.',
        reflection: 'The aim of every scholar in China was to go to the capital to take the final Imperial exam. Being successful opened the way to glory, power, and wealth. But not to pass the exam meant failure and great disappointment. This story, however, makes the following point. Although the one who failed had to return home, the strain of failure made him ill. Being ill made him realize how much he longed for the security, love, and friendship of home - even if he did not come home in triumph. Appreciate what you have.',
    },
    30: {
        poem: 'The best thing, I tell you, is not to aim too high.\nA flying stork will not see the fatal arrow.\nGathering wood, you may uncover a snake,\nAnd you will regret forever its poisonous bite.',
        traditional: 'Be content with your lot, and restrain yourself from too high an ambition. Take precautions against possible dangers, and seal your mouth. Try to avoid getting involved in other people\'s quarrels. Your personal health is uncertain, and you may bring problems upon yourself by rash speech. Financially, you do not have much hope of improvement at the moment - bide your time and new prospects will come to you.',
        reflection: 'The somewhat contradictory message of this poem is this: expect the unexpected. It warns that trouble comes when you least expect it. The stork, believed by the Chinese to fly higher and to live longer than any other bird, can be killed by an arrow rising up through the clouds. Disturbing things can also prove dangerous. Be watchful and careful. Do not assume you are unassailable.',
    },
    29: {
        poem: 'Fish on my plate; flowers by my side.\nI enjoy the cool evening with a sip of fine wine.\nThe tide is rising; the boat is moving.\nMy heart is joyous; my spirit is high.',
        traditional: 'This fortune depicts a man enjoying the pleasures of late summer and waiting for the move into a gentle autumn. Like him, you should delight in the diversions available to you now, and not worry yourself about future problems, as good luck and well-being are largely assured. Your hopes and dreams will eventually realize themselves, and you only need to continue as you are to move smoothly into a pleasant and prosperous season of your life.',
        reflection: 'Be at peace. You have worked hard, and now it is time to rest. Your fiery, energetic yang nature has been dominant. Now it is time for your quieter, calmer, and more reflective yin nature to take over. You need to rest if you wish to enjoy what you have gained and to sample again the simple delights of life.',
    },
    28: {
        poem: 'The scholar made a pledge on the bridge,\nSaying \'I shall not cross here again,\nUnless I come in a horse-drawn carriage.\'\nFortune blessed him; he crossed the bridge again.',
        traditional: 'You cannot achieve all your goals immediately. Be patient: wealth and status take both effort and time to achieve, but eventually the trappings of prosperity will be yours. You should work on personal relationships before committing yourself permanently to them. While business problems will soon be resolved, your health may be bad for some time.',
        reflection: 'A scholar in China had many opportunities for success once he passed the Imperial exams, for honor and lucrative appointments lay that way. But to achieve this he had to devote himself to study every day and for many years. It was usually worth it. Take time you must work for what you want, not just assume it is yours by right.',
    },
    27: {
        poem: 'Your plans are carefully constructed,\nBut fear stops you from completing them.\nWhen the time is right, a noble patron\nWill help you establish a comfortable home.',
        traditional: 'Your life is like a peaceful and wealthy mansion defended by a strong fence. You can enjoy peace and prosperity safely, and both you and your family are largely free from danger. If you try to make more money quickly, though, you will find difficulties, and you should make long-term investments instead. Existing problems will drag out for some time, but will turn out all right in the end. For instance, illnesses will most likely be prolonged but have no lasting effects.',
        reflection: 'You have everything planned, but somehow you cannot ever let yourself go and thus do what you keep planning. To do so you may need to seek help from someone who can stand back from the issues and cast a calm, detached eye over your plans. Look for such a person, and listen to their advice. If it seems sound, do not hesitate.',
    },
    26: {
        poem: 'The shadows of flowers hang about the doorposts,\nAnd the moon reflects the traveller\'s weary face.\nA crane\'s mournful cry breaks the silent night,\nUrging the wanderer to hurry back to his home.',
        traditional: 'When you embark on any endeavor, you should look out for warning signs that the enterprise may not be as successful as you hoped. If you find I any such clues, cut your losses as soon as possible. Do not waste your energy in useless persistence, and remember that good times cannot last forever. For you, success in anything depends on both choosing the right moment and ensuring that you have a safe refuge if things go badly.',
        reflection: 'The good times do not last! You have had it good for some time, but look for the signs of inevitable change and decay. There is nothing to be afraid of in this. Change is inevitable, as the I-Ching always reminds us. The Buddha saw dependency on what is bound to change as one of the main causes of human misery. And Jesus said to live each day as if it were your last. So watch for the shadows of change, and welcome them as you would the cool of autumn after the heat of summer.',
    },
    25: {
        poem: 'Emperor Ming slew his one true love,\nBut a shaman took pity and eased his heart,\nWith dreams of roaming upon the moon,\nHis beloved mistress forever at his side.',
        traditional: 'While you seem to have suffered a great loss at the moment, some kind of reconciliation will occur, although it may only be a partial and unfulfilling one. Things will set themselves right but not for a while. Your professional prospects are better than your personal ones, so it may be a good idea to take some time off work to attend to your private life. Maybe you have been neglecting the spiritual side of your personality.',
        reflection: 'What is gone is gone and you must now learn to live with that. Recall and enjoy the best of what was, but also move on. You will never get over what has happened because it is now part of you, but this can strengthen and guide you rather than hang around your neck like some sort of curse.',
    },
    24: {
        poem: 'Life is broken by meaningless quarrels,\nLike fallen blossoms drifting over the ocean.\nYou will never find grace behaving like a fool.\nAll that can leave you is a heap of troubles.',
        traditional: 'Troubles lurk ahead, but you have no option but to put up with your present difficulties. Remember that tolerance can be a lifesaver, and avoid talking about others behind their back. Look after everything carefully and avoid risks; just keep on working as hard as possible. Only your own determination and willpower can bear you through the problems that are coming, though it may be a good idea to move to a new area if your problems seem totally insurmountable.',
        reflection: 'Something is keeping you from resolving a profound problem. The Bible says never to let the sun go down on your anger. Resolve differences quickly; otherwise they embitter you, twist you up, and waste your energies, as well as of those of the person you are angry with. In the end, disagreements must be solved - unless, of course, you want to ruin everything you have worked for.',
    },
    23: {
        poem: 'Health, fortune, fame - they are all illusion.\nProsperity is only a game played by fools.\nThe fruit of success tastes sour in the mouth.\nSoon you will mourn your dreams of worldly glory.',
        traditional: 'You are surrounded by illusions, and many concealed dangers await you. While your future prospects may appear good, this may not really be the case. You should consider any seeming chance to make extra money extremely carefully, as it could be a trick. Equally, somebody in your personal life may be deceiving you, especially about children. Hidden ailments might be troubling you physically, and you should try to get a thorough medical checkup soon.',
        reflection: 'This could hardly be clearer. The things you currently value most - the material aspects of your life - are not what is really valuable. Indeed, they are traps. Look very deep within, and see what truly lies there.',
    },
    22: {
        poem: 'The drunken poet wrote of wine and love.\nHis Emperor, Ming, loved verse and song.\nWhen they were introduced, they found\nMutual friendship in the balm of poetry.',
        traditional: 'This is an excellent fortune, predicting great opportunities for you, both personally and professionally. Soon you will have the chance to form a new friendship, providing you with the emotional support you may be missing currently. Problems, especially legal ones, will resolve themselves naturally if you do not create more troubles for yourself. Your social and financial position may soon improve, and your family and close friends may also prosper as a result of your newfound wealth.',
        reflection: 'This delightful image of the laid-back drunken Taoist poet and the hard-working Confucian Emperor finding solace in each other\'s company - has a simple message: do not reject or turn away from those who at first glance seem totally different from you. It may just be that you are both what the other needs. Take time to find out. Do not judge too hastily.',
    },
    21: {
        poem: 'Marriage is a blessed union indeed,\nWhen done in accordance with yin and yang.\nThe dragon and the phoenix coil together,\nUniting in a sweet dream of love.',
        traditional: 'This fortune describes the harmony of the universe, with the dragon and phoenix representing yang and yin respectively. It prophesies good fortune, especially in love. If you are currently single, you will probably find a new partner soon, and existing relationships will be strengthened. In general, everything will go harmoniously for you, and your own health and safety - if you maintain the right balance of yin and yang in your life - is guaranteed.',
        reflection: 'All things will work out positively. Yin and yang are the basic building blocks of the universe and, when in balance, all goes well. You need to find someone who will complement you, bring a sense of balance and harmony to your life. Forget excitement and danger: you need someone who can offer you what is missing from the dynamics of your life. It is for you to work out whether that is yin or yang!',
    },
    20: {
        poem: 'All names in Heaven are unique,\nAnd even earthly things cannot be the same.\nYour future is set within the Book of Fate,\nWhich never confuses praise and blame.',
        traditional: 'Although your fate is partially predetermined, your own actions can alter your destiny. Good deeds, especially those which genuinely cost you time and effort, and particularly any that involve travelling, will rebound to your benefit. Your future prosperity depends upon your own kindness. Be careful about your family\'s safety as well. Your personal relationships will remain in a state of flux for some time.',
        reflection: 'You are both determined by fate and have your future within your own hands! Chinese belief says certain things are fixed - such as when you are born, where, and into what sort of a family - and beyond that everything else is in your power to change. Your fortune should not be confused by the things people around you say or suggest. Act with integrity in all that you do, and do not be swayed by praise or hints of glory.',
    },
    19: {
        poem: 'On the kitchen floor the kitten lies,\nLazily warming herself in the afternoon sun.\nGraceful animals always bring good luck,\nAnd should be protected whenever possible.',
        traditional: 'This is a very good fortune, and it predicts great luck in anything you do. Your best path to happiness, however, is through romance: you will only ultimately find yourself by looking in another. Do not allow apparent obstacles to deter you - remember that love eventually finds a way. Foreign travel will probably be extremely successful.',
        reflection: 'The imagery here echoes an older poem in which a lovesick soldier on duty in the cold north recalls his lover\'s kitten, relaxed, warm, and content in her house in the south. In his mind he travels to be with her. This poem says you should appreciate what you have and, if you leave it, treasure it and seek to be reunited as soon as possible. You may be striving to achieve great things, but really you would like to be your beloved\'s cat!',
    },
    18: {
        poem: 'Far off the raven falls and the rabbit rises,\nSo things have been since the start of time.\nBelieve in Buddha and the Tao and you will find wisdom,\nWhether you are scholar or peasant, worker or merchant.',
        traditional: 'The setting and rising of the sun (the raven) and the moon (the rabbit) symbolizes the ups and downs of human life. Harmony between the two is a sign of good fortune, and you should seek a similar harmony in your own life. If you manage this, everything will be secure and successful. Attempt to remain calm and look to understand your enemies rather than opposing them directly. If you have any firm plans for the future, you should start putting them into effect now. Maybe now is a good time to think about moving.',
        reflection: 'Yin and yang are at the heart of this poem. The raven, symbol of the sun, is yang. The rabbit, symbol of the moon, is yin. Buddha, busy teaching and organizing, is yang. The Tao, calm and just being, is yin. You too are both yin and yang: you need the energy of the yang to be balanced by the yin of calmness. Look to yourself. If the balance is not quite right, learn to cultivate it in order that you can achieve essential harmony.',
    },
    17: {
        poem: 'The river\'s reeds are tipped with morning dew,\nMoonlight bathes the stone courtyard steps.\nI hear the neigh of horses on the soft breeze,\nSwiftly following the bell\'s call to rise.',
        traditional: 'While you have a decent chance of being both respected and admired for your actions, wealth will not necessarily accompany this. It is time to make firm decisions about your relationships: either committing yourself definitely or breaking away for good. In general, your life will progress fairly smoothly without major upsets. If you feel depressed, you should start thinking about helping other people rather than yourself.',
        reflection: 'The most beautiful time of day is early in the morning, exquisitely recalled in this poem. But there is another meaning. So the story goes, a young servant, up early in order to enjoy the morning air and ready to work, heard upon the wind the faint sound of enemy soldiers approaching on horseback to attack the palace. He raised the alarm just in time. Be alert. Be ready. You have no idea when the peace and quiet will be broken by changing events.',
    },
    16: {
        poem: 'Though his stepmother slandered him to his father\'s face,\nThe faithful son loved her despite all her faults.\nWhen her illness had brought her near the gate of death,\nHe found her medicine and warmed her heart forever.',
        traditional: 'Any divisions in your life at the moment will require a lot of time and effort to settle, but this is not too large a price to pay for peace, as the consequences of letting disagreements continue could be horrendous. Your chances of personal gain are slim and your health uncertain, but you can work to help others. Place other people before yourself, and their gratitude will make your life much easier.',
        reflection: 'The famous legend of Shun the Filial, whose father left him to the attacks of his new wife and her family, is one of the classics of Confucian piety. The moral of the story of selfless obedience to the rules of filial piety was that the Emperor Yao heard of this and appointed Shun to be his successor. Troubles borne bravely now will bring rewards in the future.',
    },
    15: {
        poem: 'The hillwalker faints from the heat of the sun,\nSo Nature\'s curse will soon strike you down too.\nLike a bird driven by predators from its nest,\nYou\'ll only find solace in the depths of the forest.',
        traditional: 'As a bird seeks shelter in the forest, you will encounter hardship and troubles at first, but all your troubles will eventually be over. Do not seek revenge on people who have hurt you, nor should you attempt false reconciliations; simply live and let live. Be cautious about your personal safety, as there is a chance of an accident. Existing relationships will grow stronger, but few new ones are likely to be formed soon. Your work will go well, and you may be offered a promotion.',
        reflection: 'Troubles have come upon you. Perhaps you have overstretched yourself or have been unlucky. Your ordinary, settled way of life has been turned upside down. Do not pretend this is not happening. It is. What you need to do is learn from this. Go deep within yourself, go deep within your own faith, and find at the center of your own dark forest the strength to recover, to learn, and to start again. It is there.',
    },
    14: {
        poem: 'The hermit delights in the rain on his roof,\nBeating its pattern against his woven thatch.\nHe drinks himself to sleep among the apricots,\nAnd hates the wakeful chatter of the birds.',
        traditional: 'Your prospects are good, but not wonderful. Any chance of money will certainly be delayed for some time, but you should think about other matters. Your family life will be much as normal, but also be cautious of what others may be saying about you. Any improvement in your life will likely be gradual and come with new problems. Though these difficulties may bother you, remember that nothing is perfect in this world.',
        reflection: 'The hermit is a strange person in Chinese legend. He often lives quite a raucous life, enjoying alcohol especially! Apricots are a symbol of long life. This poem uses the imagery of the hermit, alcohol, apricots, and a rude awakening to say that self-indulgence may be all right for a while, but if you really seek a long life you must wake up to the harsher realities surrounding you.',
    },
    13: {
        poem: 'Grandfather Kiang fished all day,\nThough once a minister, he\'d put such things away.\nBut when the country needed him again,\nHe ceased his fishing to ease the country\'s pain.',
        traditional: 'The time is not ripe for whatever plans you have at present and you should wait a while before putting them into effect. It is better at the moment to remain inactive and enjoy your hobbies, but wealth and status are in store in the future. It may take you some time to recover from any current health problems, but legal difficulties should soon clear up. Somebody important to you who is currently absent will return soon.',
        reflection: 'This poem is about duty. It cites the famous case of a wise official who longed for the peace and quiet of retirement but who, when duty called, took up the burden of high office and responsibility again. There are things you have to do, responsibilities you must fulfill. It is no good trying to leave them to others or pretending that it is not up to you, because it is.',
    },
    12: {
        poem: 'Fortune changes quickly, both good and ill.\nThe bad times end, good luck will come again.\nFind the wise man living on the mountain,\nAnd his kind words will turn your life around.',
        traditional: 'You may be going through a brief period of misfortune at the moment, but things will soon turn around with the aid of another. You will have enough money to provide not only the basic necessities of life, but plenty of little luxuries as well. You should put any money that comes to you into long-term investments rather than spending it immediately. This is not a good time to travel, as you will have many problems and may be late in returning to your home.',
        reflection: 'The Chinese character for an immortal, a great sage, is made up of two other characters - that for a human alone and that for a mountain. The sage is the person who lives alone on the mountain, shunning human politics and society. To be encouraged to go and see such a person means that you need to put your life into a wider, more profound perspective. You are probably far too caught up in material things and need to recover the spiritual.',
    },
    11: {
        poem: 'The trees form a green curtain by the river.\nI sleep in their shade in summer, when the light is long,\nWatching the swallows take their playful path by,\nAmong the gentle breezes and hanging trees.',
        traditional: 'If you concentrate on your home life rather than your work, this can be a very prosperous time for you. You need not worry too much about your work because things will probably turn out well whatever you do. Truly good fortune, however, will come through your family and friends. This is a very fertile time: if you want children you will probably have them, and any investments or land you own will give a very good return.',
        reflection: 'Delight in what is around you! Enjoy the ordinariness of what you have. Do not go looking for great wonders or marvels in foreign lands or with exotic people. Where you are, there is already more than enough to enjoy, wonder at, and discover. Stay put, and discover the extraordinary.',
    },
    10: {
        poem: 'Disease afflicts all folk alike,\nNo matter how upright their conduct.\nEven a faithful student of Confucius\nBecame a leper and died alone.',
        traditional: 'Although your personal conduct is good, troubles may lie ahead. Your personal reputation is in jeopardy, and you should be aware that others may be spreading rumors about you. Unless you are careful and restrained, you may be faced with many creditors and lawsuits. This is not a good time to start new projects; instead, you should try to defend what you already have.',
        reflection: 'The story of the Confucian student who died sick and alone is well- known in China. Sickness was often seen as a judgment meted out by the deities to those who had done wrong. But what \'wrong\' had the student of Confucius done? This is rather like the Book of Job in the Bible which asks \'Why?\' to the issue of sickness and disaster. Ultimately this poem reminds us that wealth, power, and fame are meaningless to disease. In the end, we are all but human and weak.',
    },
    9: {
        poem: 'Why bother with the pains of hate and greed?\nJust as the full moon lights up the traveller\'s path,\nSo too can your conscience guide your life.\nLet your heart be like that moon: full, bright and clear.',
        traditional: 'The full moon in this fortune represents hope for the future. Though things may seem confused at the moment, if you follow your conscience, everything will become clear. You need to make a clear division between right and wrong in your life. If you do this, it will be a good time for you. Your newfound clarity will benefit both your personal life and your business. The relationship with your family, particularly with your parents, will improve.',
        reflection: 'You know what is right and what is wrong. Stop pretending otherwise. All may seem obscure and troubling around you, but let your conscience dictate, and you will find the right path to follow.',
    },
    8: {
        poem: 'The turtle dove invades the home of the magpie,\nLeaving one a thief, one homeless, both discontent.\nWhen plants of different natures twist together,\nNobody can possibly tell what they hide.',
        traditional: 'This fortune suggests that, unless you change your ways, you are likely to bring only disharmony and trouble for yourself and others. Unless you take great care in what you say, you are likely to be the target of harmful gossip. You should be extremely careful about your health, and it would be unwise to make any new business decisions. Travelling is undesirable, and you have little chance of financial success in the immediate future.',
        reflection: 'This poem is a warning. Do not mix together that which Nature keeps separate. The turtle dove and the magpie are birds whose symbolism in China could not be more different. To bring them together like this is nonsensical to the Chinese. The poem says that whatever or whoever you are caught up with, in ways that are unnatural or wrong, will only bring you grief. Go your separate ways, or if you stay together be honest about the problems this will bring.',
    },
    7: {
        poem: 'Although he reached a great position,\nWise Lu did not care for earthly things.\nHe brewed instead the pills of heaven,\nForging immortality in his earthly crucible.',
        traditional: 'This is an extremely good fortune. Your position in life should soon improve, and great wealth is potentially at hand. Any plans you\'re acting on at the moment are likely to be successful and lead to high prospects. If you are ill, you will soon recover with proper treatment. Visitors from overseas are likely, and your personal relationships will be happy and content.',
        reflection: 'Power comes in two forms. There is temporal power - being head of your group, the big boss, able to throw your weight around. But those who understand real power look to the second kind - spiritual power. This power does not seek to dominate, but to become so fully at one with the Tao that you never die, living forever in its ebb and flow. Immortality is ultimate union with the Tao and is the greatest symbol of true power, attainable only if you use this life - the earthly crucible - to help and care for as many as you can.',
    },
    6: {
        poem: 'Live in the wilderness with only the ravens as friends,\nKnow yourself and do not envy others\' wealth.\nEverybody\'s capable of finding their own bread,\nBut nobody gets to see the whole world.',
        traditional: 'You should try to live your life in accordance with Nature and count your blessings rather than envying others. Material goods may be scarce for a while, but your friends and family may well be able to support you both emotionally and financially. You should invest money in long-term businesses now, but you may suffer some financial losses along the way. Equally, if you have a medical problem you should try to get it treated immediately. People and objects you thought were lost will turn up soon.',
        reflection: 'This calls to mind the prophet Elijah in the Bible, who fled from the persecution of the enemies of God and lived in the desert, his food being brought by ravens. Both that story and this poem remind us that, while we may strive for much, sometimes we need to be content with what we have. We may want the world but should learn to find true value in the ordinary - as the Christian mystic Mother Julian of Norwich did when she realized that the whole universe was contained in a walnut.',
    },
    5: {
        poem: 'A gale tore apart the garden\'s flowers,\nLeaving only broken plants in every bed.\nKind folk took pity upon the shattered lawn,\nPlanting new seeds for its rebirth.',
        traditional: 'Be cautious in your plans because they can easily go wrong at this point. Disaster lurks just around the corner, but can be avoided with forethought and discretion. Your personal relationships may be difficult for a while, and you may have business difficulties, but your friends will eventually come through for you. Take care over details, particularly in selecting medical treatment or planning a journey.',
        reflection: 'Gardening was one of the great arts of China - a visible attempt by humanity to impose order without destroying the overarching order of the Tao (Nature). This image reminds us that even the most lovely of things, done for the best of reasons, can be destroyed by the very forces we are trying to work with. But the image goes on to show that after such a disaster you must start again. Do not give in - you have to carry on.',
    },
    4: {
        poem: 'The hero was stronger than two bulls.\nHe could cross three rivers in one leap.\nBut all his strength was of no use\nAgainst false claims by evil men.',
        traditional: 'You should try to be content with what you have rather than overreaching yourself. Although you may be very competent at your work, you are likely not paying enough attention to your home life. At the moment, high positions are beyond your reach. Avoid getting involved in disputes with others, particularly within the family, and postpone travel unless strictly necessary because it will involve many delays and harassments.',
        reflection: 'The sheer destructiveness of those who gossip, who attack those they envy, by chipping away at their good name, is condemned here, but it is also feared. If you are under attack by those around you through unkind words or petty actions, this can wear you out and cause you great distress. You may feel you should not be affected by such silly things. But this poem tells you that you are not alone in feeling this way. Even the strongest can be reduced to tears and unhappiness by those who maliciously attack or criticize them. Keep going, and you will recover.',
    },
    3: {
        poem: 'The mother sparrow builds with clay against a storm,\nThe traveller struggles against the driving rain,\nHer fledglings huddle inside the nest,\nBut the clay melts and falls - all efforts futile.',
        traditional: 'Your current precautions against disaster are unlikely to be of any use. Rather than wearing yourself out trying to defend against all possible calamities, concentrate on the good aspects of your life. With care and consideration you can build these up, so that when bad times do come you are easily able to weather them. Paying attention to your finances is wise, as is cautious investment in long-term projects. This is a good time to travel and meet new people, but do not commit yourself to somebody personally unless you are very sure you can trust them.',
        reflection: 'All the imagery here is of struggle, anxiety, and difficulties. In the midst of this, do not give up. Continue to plan, to build, to try to journey on, even if all collapses or seems to do so. The mother\'s love never ceases, nor can the traveller act as if he or she is not travelling. It is difficult, but not beyond hope. Keep going, and eventually all will be better.',
    },
    2: {
        poem: 'The dead trees break into green once more;\nThe woods are alive with buzzing life.\nThe immortal peach tree gives forth its fruit,\nAnd all the lost find their way home.',
        traditional: 'In this verse, winter turns to spring, and new life is born. Your own affairs will prosper in time, given the natural course of things. All you need to do is let Nature take its course - opportunities will naturally come your way, especially with a little self-discipline. Though your gains will not be great, they will come steadily and certainly, whether in business or in personal relationships. Prosperity is just a matter of time.',
        reflection: 'This is a vision of wonder and joy - not just because spring is on the way, but because the immortal peaches are ripe. This only happens once every thousand years. All the signs suggest that this is a most auspicious time.',
    },
    1: {
        poem: 'The Han dynasty began with the fall of a great city;\nTwo generals strove to be the conqueror,\nOne threw up walls around it, but the mightiest\nCould break them down to claim his throne.',
        traditional: 'Just as the general in this story became an Emperor, this predicts that you will rise to a high position, so long as you seize the opportunities given to you and strike while the iron is hot. In particular, this is a very good fortune for anything to do with business affairs, although it is possible you will have difficulties with a particularly tenacious rival. It is also a fortunate moment for you to commit yourself to any kind of relationship, and existing relationships will grow stronger.',
        reflection: 'The symbol of the fall of a great city means that, in what you are about to do, you must think big. The odds may seem stacked against you, but in reality the time is right. Yes, you will meet opposition but this should not deter you. In particular, if those who oppose you are guilty of oppression or abuse of power, then the need to overcome them is greater.',
    },
};

