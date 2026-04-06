// AP European History — MCQ Data
// Schema: { unitId, unitName, questions: [{id, stimulus?, question, choices:{A,B,C,D}, correct, explanation}] }

const mcq = [
  {
    unitId: 1,
    unitName: "Renaissance and Exploration",
    questions: [
      {
        id: "u1-q1",
        stimulus:
          '"A prince must not worry about the reproach of cruelty when it is a question of keeping the people united and loyal." — Niccolò Machiavelli, The Prince, c. 1513',
        question:
          "The political philosophy in the excerpt most directly reflected which Renaissance development?",
        choices: {
          A: "A renewed emphasis on Christian morality as the basis for governance",
          B: "A secular, pragmatic approach to statecraft based on observed political reality",
          C: "The rise of constitutional limits on monarchical authority",
          D: "Humanist belief that rulers must be philosopher-kings trained in virtue",
        },
        correct: "B",
        explanation:
          "Machiavelli argued rulers must prioritize effectiveness over morality (B). He explicitly rejected Christian ethical constraints, making A wrong. Constitutional limits (C) are associated with English developments. While humanist, Machiavelli rejected Platonic idealism (D) in favor of realpolitik.",
      },
      {
        id: "u1-q2",
        question:
          "Which best explains why the Renaissance emerged first in the Italian city-states?",
        choices: {
          A: "Italy was unified under a strong monarchy that funded large art programs",
          B: "The Catholic Church directly commissioned all major Renaissance works",
          C: "Merchant wealth from trade created a patronage class with demand for cultural prestige",
          D: "Italy's isolation from northern Europe preserved classical texts during the Middle Ages",
        },
        correct: "C",
        explanation:
          "Merchant wealth (C) in Florence and Venice created competing patrons. Italy was not unified (A) — fragmentation encouraged competition. The Church was one patron among many, not the sole driver (B). Italy was not geographically isolated (D); fleeing Byzantine scholars brought texts from Constantinople.",
      },
      {
        id: "u1-q3",
        question:
          "The Treaty of Tordesillas (1494) is best understood as evidence of which development?",
        choices: {
          A: "The Protestant challenge to papal authority over secular affairs",
          B: "The beginning of European imperial competition over global territory",
          C: "A military alliance between Spain and Portugal against Ottoman expansion",
          D: "The decline of Italian city-states as centers of international trade",
        },
        correct: "B",
        explanation:
          "Tordesillas (B) divided the non-European world between two powers, formalizing European imperial expansion. Protestantism (A) had not yet emerged. The treaty was not a military alliance against the Ottomans (C). Italian city-state decline is unrelated (D).",
      },
      {
        id: "u1-q4",
        question:
          "How did Gutenberg's printing press most significantly alter European society?",
        choices: {
          A: "It allowed the Church to control the production and distribution of religious texts",
          B: "It immediately produced mass literacy across all social classes",
          C: "It lowered the cost of books and accelerated circulation of humanist and reform ideas",
          D: "It replaced universities as the primary centers of intellectual debate",
        },
        correct: "C",
        explanation:
          "The press (C) made books cheaper, spreading Renaissance humanism and later Protestant ideas. Far from helping Church control (A), it undermined the Church's monopoly. Literacy growth was gradual, not immediate (B). Universities continued functioning as intellectual centers (D).",
      },
      {
        id: "u1-q5",
        question:
          "The Columbian Exchange most directly resulted in which long-term consequence?",
        choices: {
          A: "A rapid improvement in indigenous Americans' quality of life from European technology",
          B: "The demographic collapse of indigenous populations primarily caused by Old World diseases",
          C: "The immediate establishment of democratic governance in Spanish colonial territories",
          D: "A decline in European agricultural productivity due to American crop introductions",
        },
        correct: "B",
        explanation:
          "Epidemics (B) — smallpox, measles — killed up to 90% of some indigenous populations. European technology enabled conquest rather than improving indigenous welfare (A). Spanish colonies were governed autocratically, not democratically (C). American crops like potatoes actually increased European agricultural productivity (D) — the opposite of what D claims.",
      },
    ],
  },
  {
    unitId: 2,
    unitName: "Age of Reformation",
    questions: [
      {
        id: "u2-q1",
        stimulus:
          '"As soon as the coin in the coffer rings, the soul from purgatory springs." — attributed to Johann Tetzel, c. 1517',
        question:
          "Martin Luther most directly challenged the practice described in the excerpt because it",
        choices: {
          A: "generated revenue that competed with secular German princes",
          B: "contradicted his theology that salvation comes through faith alone, not purchased acts",
          C: "violated Church canon law by selling sacraments for profit",
          D: "undermined the authority of the Holy Roman Emperor over Church affairs",
        },
        correct: "B",
        explanation:
          "Luther's core argument was sola fide (B) — only faith saves, not purchased indulgences. While princes resented papal revenue extraction (A), this was political, not Luther's primary theological objection. Indulgences were technically permitted by canon law (C). Luther's early dispute was with the Church hierarchy, not the Emperor (D).",
      },
      {
        id: "u2-q2",
        question: "The Peace of Augsburg (1555) was significant primarily because it",
        choices: {
          A: "granted religious freedom to individual German citizens",
          B: "formally recognized Calvinism as a legal religion within the Holy Roman Empire",
          C: "established the principle that princes determined the religion of their territory",
          D: "ended all religious warfare in the Holy Roman Empire for a century",
        },
        correct: "C",
        explanation:
          "Augsburg established cuius regio, eius religio (C) — the prince's choice determined his subjects' religion. Individual citizens had no religious freedom; they either conformed or emigrated (A). Only Lutheranism (not Calvinism) was recognized — Calvinism was added only at Westphalia in 1648 (B). Religious wars resumed with the Thirty Years' War (1618–1648), so D is false.",
      },
      {
        id: "u2-q3",
        question:
          "The Council of Trent (1545–1563) most directly responded to Protestant challenges by",
        choices: {
          A: "accepting the Protestant doctrine of justification by faith alone",
          B: "reaffirming Catholic doctrines while reforming clerical abuses and improving education",
          C: "dissolving the monasteries to redirect Church wealth toward poor relief",
          D: "granting Protestant princes the right to keep Church properties already seized",
        },
        correct: "B",
        explanation:
          "Trent (B) was the Counter-Reformation's doctrinal backbone — it reaffirmed tradition alongside Scripture, all seven sacraments, and clerical celibacy, while improving seminary education. It explicitly rejected Protestant doctrines like sola fide (A). Dissolving monasteries was Henry VIII's English action, not a Council decision (C). Trent did not concede Protestant land claims (D).",
      },
      {
        id: "u2-q4",
        question:
          "Which best describes Calvinism's long-term political significance in Europe?",
        choices: {
          A: "It strengthened monarchies by tying religious authority directly to royal power",
          B: "It had no political impact since it focused exclusively on theology",
          C: "It encouraged resistance to tyrannical rulers and supported republican governance in some regions",
          D: "It unified France under a common Protestant faith by the 17th century",
        },
        correct: "C",
        explanation:
          "Calvinist theology supported resistance theory (C) — developed by thinkers like John Knox and the Monarchomachs, arguing subjects could resist ungodly rulers. This influenced Dutch independence, Scottish Presbyterianism, and English Puritanism. Calvinism often opposed royal control of religion (A). Its political impact was enormous (B is wrong). France remained predominantly Catholic and fought religious wars against Huguenots (D).",
      },
      {
        id: "u2-q5",
        question:
          "The English Reformation differed from the German Reformation primarily in that the English Reformation",
        choices: {
          A: "was driven primarily by theological disputes over salvation and biblical authority",
          B: "was initiated by the monarch for dynastic and political reasons rather than theology",
          C: "immediately produced a complete break with Catholic doctrine and practice",
          D: "was led by common people demanding an end to clerical corruption",
        },
        correct: "B",
        explanation:
          "Henry VIII broke from Rome primarily to obtain an annulment (B), not over theology. Unlike Luther's theological challenge, Henry retained much Catholic doctrine initially (the Act of Six Articles). The German Reformation was theologically driven (A) — the English Reformation began as political. The Church of England retained much Catholic practice initially (C is wrong). The English Reformation was a top-down royal act, not a popular movement (D).",
      },
    ],
  },
  {
    unitId: 3,
    unitName: "Absolutism and Constitutionalism",
    questions: [
      {
        id: "u3-q1",
        stimulus:
          '"I am the state." — attributed to Louis XIV of France, c. 1655',
        question:
          "Louis XIV's construction of Versailles most directly served to",
        choices: {
          A: "demonstrate French architectural superiority over Italian Renaissance models",
          B: "concentrate noble power at court and away from regional bases, weakening the aristocracy",
          C: "provide a defensible military stronghold near Paris in case of revolt",
          D: "honor the Catholic Church by building the largest palace chapel in Europe",
        },
        correct: "B",
        explanation:
          "Versailles (B) functioned as a gilded cage — nobles required to attend court lost touch with their regional estates and became dependent on royal patronage. While architecturally impressive (A), this was not its primary political function. Versailles was palatial, not military (C). Religious devotion was not Versailles's primary purpose (D).",
      },
      {
        id: "u3-q2",
        question:
          "The Glorious Revolution of 1688 was 'glorious' primarily because it",
        choices: {
          A: "restored the Catholic Stuart line while protecting Protestant worship",
          B: "overthrew the monarchy entirely and established a republic",
          C: "transferred power peacefully from James II to William and Mary under parliamentary conditions",
          D: "united England, Scotland, and Ireland under a single constitutional framework",
        },
        correct: "C",
        explanation:
          "The Glorious Revolution (C) was peaceful ('bloodless') and conditioned — William and Mary accepted the Bill of Rights before taking the throne, firmly establishing parliamentary supremacy. It replaced a Catholic king (James II) with Protestant monarchs, not restoring Catholicism (A). The monarchy was preserved, not abolished (B). Union with Scotland came in 1707, Ireland in 1801 — not 1688 (D).",
      },
      {
        id: "u3-q3",
        question:
          "Peter the Great's reforms in Russia were most similar to which broader European pattern?",
        choices: {
          A: "Parliamentary constitutionalism limiting royal power",
          B: "Religious reformation challenging Church authority",
          C: "Enlightened despotism — using state power to modernize from the top down",
          D: "Bourgeois revolution transferring power from nobility to merchants",
        },
        correct: "C",
        explanation:
          "Peter (C) used absolute royal power to force Westernization — building St. Petersburg, reforming the military, reorganizing the bureaucracy, subordinating the Church. This mirrors enlightened despotism. He strengthened royal power, not limited it (A). His reforms were secular, not religious reformation (B). He transferred no power to merchants — the nobility and state retained control (D).",
      },
      {
        id: "u3-q4",
        question:
          "Mercantilism as an economic theory most directly supported which governmental practice?",
        choices: {
          A: "Free trade between European nations to stimulate overall continental prosperity",
          B: "Colonial acquisition and state intervention in trade to maximize national wealth",
          C: "Reduction of tariffs to encourage consumer goods imports and economic efficiency",
          D: "Worker-owned production cooperatives replacing aristocratic land ownership",
        },
        correct: "B",
        explanation:
          "Mercantilism (B) held that national wealth depended on a positive trade balance and accumulating bullion — achieved through colonies (raw materials), trade monopolies, and high tariffs. Mercantilism opposed free trade between nations (A) — it was nationalist and competitive. It favored tariffs to protect domestic industries, not reduce them (C). Mercantilism had nothing to do with worker ownership (D).",
      },
      {
        id: "u3-q5",
        question:
          "Which statement best explains why absolutism was more successful in France and Prussia than in England?",
        choices: {
          A: "France and Prussia had stronger noble traditions that supported centralized royal power",
          B: "England's parliamentary tradition, common law, and commercial class provided institutional resistance to absolute rule",
          C: "The Catholic Church actively undermined English monarchs while supporting French and Prussian rulers",
          D: "France and Prussia benefited from Renaissance humanism that encouraged strong centralized states",
        },
        correct: "B",
        explanation:
          "England's Parliament (dating to Magna Carta), common law tradition, and powerful commercial middle class created institutional checks on royal power (B). French nobility was weakened (not strengthened) under absolutism (A). The English Reformation actually freed English monarchs from papal influence (C is backward). Renaissance humanism influenced both England and France; it cannot explain why absolutism succeeded in one but not the other (D).",
      },
    ],
  },
  {
    unitId: 4,
    unitName: "Scientific, Philosophical, and Political Developments",
    questions: [
      {
        id: "u4-q1",
        stimulus:
          '"Hypotheses non fingo" (I frame no hypotheses). — Isaac Newton, Principia Mathematica, 1687',
        question:
          "Newton's statement most directly reflects which characteristic of the Scientific Revolution?",
        choices: {
          A: "Reliance on biblical authority to validate scientific findings",
          B: "Commitment to empirical observation and mathematical law rather than speculative explanation",
          C: "Rejection of all previous scientific theories, including Copernican heliocentrism",
          D: "Belief that God directly intervened in natural phenomena to produce motion",
        },
        correct: "B",
        explanation:
          "Newton's statement (B) reflects the Scientific Revolution's empirical method — he would not speculate beyond what mathematics and observation could demonstrate. The Scientific Revolution challenged, rather than relied on, biblical authority (A). Newton built on Copernicus, Kepler, and Galileo — he did not reject them (C). Newton did leave room for God as a first cause, but his laws described natural mechanisms, not divine intervention (D).",
      },
      {
        id: "u4-q2",
        question:
          "John Locke's theory of government most directly influenced which later development?",
        choices: {
          A: "The Divine Right justifications used by Louis XIV of France",
          B: "The American Declaration of Independence and French Declaration of Rights of Man",
          C: "The Marxist theory of class struggle and proletarian revolution",
          D: "The German Romantic nationalism that drove the revolutions of 1848",
        },
        correct: "B",
        explanation:
          "Locke's natural rights (life, liberty, property) and consent of the governed (B) directly shaped both the American Declaration of Independence (Jefferson borrowed heavily from Locke) and the French Declaration of Rights of Man. Divine Right was Locke's explicit target, not his influence (A). Marxism focused on economic class, not natural rights (C). Romantic nationalism drew more from Rousseau and Herder than Locke (D).",
      },
      {
        id: "u4-q3",
        question:
          "The Encyclopédie published by Diderot and d'Alembert (1751–1772) was significant primarily because it",
        choices: {
          A: "provided scientific proof for the existence of God through rational argument",
          B: "gathered all human knowledge under a framework of reason, implicitly critiquing church and state",
          C: "argued that tradition and custom were the true foundations of stable government",
          D: "was the first European publication to be printed in vernacular rather than Latin",
        },
        correct: "B",
        explanation:
          "The Encyclopédie (B) was an Enlightenment project systematizing knowledge under reason — its entries on religion, law, and government implicitly challenged Church authority and traditional institutions. It was secular and skeptical, not theistic (A). The defense of tradition and custom was Burke's conservative position, not the Encyclopédie's (C). Vernacular printing began with Gutenberg in the 15th century (D).",
      },
      {
        id: "u4-q4",
        question:
          "Enlightened despots like Frederick the Great and Catherine the Great were 'enlightened' in that they",
        choices: {
          A: "voluntarily transferred power to representative assemblies",
          B: "abolished serfdom and granted full political equality to all subjects",
          C: "applied Enlightenment principles (toleration, legal reform, education) while retaining absolute power",
          D: "supported democratic revolutions against other monarchs in Europe",
        },
        correct: "C",
        explanation:
          "Enlightened despots (C) used Enlightenment ideas pragmatically — Frederick tolerated Protestants and Catholics, reformed legal codes; Catherine corresponded with philosophes and modernized the bureaucracy — but neither surrendered power. They strengthened royal authority rather than transferring it (A). Serfdom was not abolished — Catherine actually strengthened it in Russia (B). They defended the existing monarchical order, not revolutionary democracy (D).",
      },
      {
        id: "u4-q5",
        question:
          "Rousseau's concept of the 'general will' differed from Locke's social contract primarily in that Rousseau",
        choices: {
          A: "gave individuals more rights against government than Locke",
          B: "argued that individual rights must be subordinated to collective popular sovereignty",
          C: "supported constitutional monarchy as the best form of government",
          D: "based his theory on biblical authority rather than natural law",
        },
        correct: "B",
        explanation:
          "Rousseau (B) argued the general will (collective good) could override individual interests — this has authoritarian implications since the majority can suppress minorities in the name of the 'will of the people.' Locke emphasized individual rights against government, giving Locke a more liberal position (A). Rousseau was skeptical of representative institutions; Locke supported constitutional limits (C). Both Locke and Rousseau used secular natural law, not biblical authority (D).",
      },
    ],
  },
  {
    unitId: 5,
    unitName: "Conflict, Crisis, and Reaction in the Late 18th Century",
    questions: [
      {
        id: "u5-q1",
        stimulus:
          '"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness." — Declaration of Independence, 1776',
        question:
          "The ideas expressed in the excerpt most directly reflect the influence of which Enlightenment thinker?",
        choices: {
          A: "Rousseau's general will and collective sovereignty",
          B: "Locke's natural rights and consent of the governed",
          C: "Montesquieu's separation of powers between government branches",
          D: "Voltaire's critique of religious intolerance and Church authority",
        },
        correct: "B",
        explanation:
          "The natural rights of life and liberty are directly from Locke (B), who argued government exists to protect natural rights. Rousseau emphasized collective will over individual rights (A). Montesquieu's separation of powers influenced the Constitution's structure, not this declaration (C). Voltaire critiqued religion but did not develop natural rights theory (D).",
      },
      {
        id: "u5-q2",
        question:
          "The Reign of Terror (1793–1794) demonstrated which of the following about the French Revolution?",
        choices: {
          A: "That the Revolution had achieved its Enlightenment goals of liberty and equality",
          B: "That radical revolutions can produce authoritarian violence in the name of popular sovereignty",
          C: "That foreign military intervention was necessary to restore order in France",
          D: "That the Catholic Church successfully resisted dechristianization efforts",
        },
        correct: "B",
        explanation:
          "The Terror (B) showed how revolutions can turn on themselves — Robespierre invoked 'the people' to justify mass executions. The Terror violated the Revolution's own principles of liberty (A is wrong). The Terror was led by French radicals, not caused by foreign intervention (C). The Church was severely suppressed during the Revolution and Terror (D is wrong).",
      },
      {
        id: "u5-q3",
        question:
          "Napoleon's Napoleonic Code (1804) was significant primarily because it",
        choices: {
          A: "restored feudal privileges to the French nobility",
          B: "codified revolutionary principles of legal equality while maintaining patriarchal family law",
          C: "established Catholicism as France's official state religion",
          D: "granted women full legal equality with men in property and family law",
        },
        correct: "B",
        explanation:
          "The Code (B) preserved revolutionary gains — equality before the law, property rights, religious toleration — while reasserting patriarchal control in family matters. It destroyed feudal privilege rather than restoring it (A). The Concordat (1801) restored Church-state relations, but France was not a theocracy (C). Women had fewer rights under the Code than during the Revolution; Napoleon reinforced male authority (D).",
      },
      {
        id: "u5-q4",
        question:
          "The Congress of Vienna (1814–1815) was guided primarily by the principle of",
        choices: {
          A: "national self-determination — allowing people to choose their own governments",
          B: "balance of power — preventing any single state from dominating Europe",
          C: "popular sovereignty — making governments accountable to elected legislatures",
          D: "free trade — removing tariffs to create a unified European market",
        },
        correct: "B",
        explanation:
          "The Congress (B) was guided by balance of power — Metternich and the great powers redrew the map to prevent a repeat of French hegemony. National self-determination (A) was exactly what Vienna suppressed — nationalists' aspirations were ignored to maintain conservative order. Popular sovereignty (C) was the revolutionary principle Vienna was designed to contain. Free trade (D) was an economic liberal idea irrelevant to Vienna's territorial negotiations.",
      },
      {
        id: "u5-q5",
        question:
          "Which best explains why Napoleon's invasion of Russia (1812) was a turning point in his empire?",
        choices: {
          A: "Russia's superior military technology overwhelmed French forces",
          B: "The invasion destroyed the French army through attrition, scorched-earth tactics, and the Russian winter",
          C: "The invasion triggered a coordinated British-Russian naval blockade of France",
          D: "Napoleon's generals mutinied, refusing to advance past Moscow",
        },
        correct: "B",
        explanation:
          "The Russian campaign (B) devastated the Grande Armée — Russia's 'scorched earth' retreat denied supplies, and the brutal retreat from Moscow reduced 600,000 troops to a remnant. Russia did not have superior military technology (A). The naval blockade via the Continental System predated 1812 and was Napoleon's own policy (C). Generals did not mutiny — the army simply disintegrated from attrition and cold (D).",
      },
    ],
  },
  {
    unitId: 6,
    unitName: "Industrialization and Its Effects",
    questions: [
      {
        id: "u6-q1",
        question:
          "Britain industrialized before other European nations primarily because of",
        choices: {
          A: "a larger population providing abundant factory labor compared to continental rivals",
          B: "abundant coal and iron, capital from trade, colonial markets, and a stable property-rights regime",
          C: "government-directed industrial planning under a strong mercantilist state",
          D: "the absence of guild restrictions that persisted throughout continental Europe",
        },
        correct: "B",
        explanation:
          "Britain's combination (B) of resources, markets, capital, and institutions created optimal conditions. Britain's population was not significantly larger than France's (A). Industrialization in Britain was largely private-sector driven with minimal state planning — the opposite of state-directed mercantilism (C). Guilds existed in England too, though they were weaker than on the continent (D overstates this factor).",
      },
      {
        id: "u6-q2",
        stimulus:
          '"The history of all hitherto existing society is the history of class struggles." — Karl Marx and Friedrich Engels, The Communist Manifesto, 1848',
        question:
          "Marx and Engels argued that the Industrial Revolution would ultimately lead to",
        choices: {
          A: "gradual reform through parliamentary democracy improving workers' conditions",
          B: "proletarian revolution overthrowing capitalism and establishing collective ownership",
          C: "a natural balance between capital and labor through free market competition",
          D: "colonial expansion providing enough resources to eliminate class conflict in Europe",
        },
        correct: "B",
        explanation:
          "Marx (B) believed capitalism would produce increasing immiseration until workers revolted, establishing communism. He was deeply skeptical of parliamentary reform (A) — he viewed it as a bourgeois tool. Free market balance was Adam Smith's view, directly contradicted by Marx (C). Colonialism appeared in later Marxist theory as imperialism, but Marx predicted internal class revolution, not colonial relief (D).",
      },
      {
        id: "u6-q3",
        question:
          "The conditions experienced by the urban working class during early industrialization most directly led to",
        choices: {
          A: "a rapid improvement in life expectancy as cities replaced rural poverty",
          B: "socialist movements, labor unions, and demands for government regulation of industry",
          C: "migration back to rural areas as workers rejected factory conditions",
          D: "increased social mobility as skilled industrial workers earned middle-class wages",
        },
        correct: "B",
        explanation:
          "Industrial poverty, dangerous conditions, and child labor (B) fueled labor organizing, socialist ideology, and eventually reform legislation (Factory Acts, Ten Hours Act). Early urban industrialization actually decreased life expectancy in factory towns due to overcrowding and cholera (A is wrong initially). Migration was from rural to urban, not the reverse (C). Most factory workers remained working-class; skilled artisans sometimes rose, but this was not the dominant pattern (D).",
      },
      {
        id: "u6-q4",
        question:
          "The Luddite movement of the early 19th century is best understood as",
        choices: {
          A: "a philosophical rejection of all technological progress and scientific reasoning",
          B: "skilled workers defending their livelihoods against machinery that devalued their craft",
          C: "a politically organized movement seeking parliamentary reform and voting rights",
          D: "a rural peasant uprising against agricultural enclosures",
        },
        correct: "B",
        explanation:
          "Luddites (B) were skilled textile workers (hosiers, weavers) specifically targeting machinery that allowed owners to replace skilled labor with cheaper unskilled operatives — not opponents of technology in principle. Their objection was economic, not philosophical (A). Political parliamentary reform was the Chartist movement, not Luddism (C). Luddism was industrial, not agrarian — enclosure protests were separate (D).",
      },
      {
        id: "u6-q5",
        question:
          "Social Darwinism in the late 19th century was most commonly used to justify",
        choices: {
          A: "labor union organizing as a natural form of worker self-defense",
          B: "government regulation of industry to correct the market's natural failures",
          C: "European imperialism and economic inequality as products of natural selection",
          D: "socialist redistribution to help the 'fittest' society survive economic competition",
        },
        correct: "C",
        explanation:
          "Social Darwinism (C) applied 'survival of the fittest' to races and classes, naturalizing both imperial domination and economic inequality. Labor unions were more associated with socialist or liberal reform traditions, not Social Darwinism (A). Social Darwinism argued against government intervention — the 'unfit' were supposed to fail (B). Socialism explicitly contradicted Social Darwinism (D).",
      },
    ],
  },
  {
    unitId: 7,
    unitName: "19th-Century Perspectives and Political Developments",
    questions: [
      {
        id: "u7-q1",
        question:
          "Bismarck's use of 'blood and iron' to unify Germany was most consistent with which political philosophy?",
        choices: {
          A: "Liberal nationalism — unifying people through constitutional rights and popular sovereignty",
          B: "Romantic nationalism — appealing to shared German culture and emotional identity",
          C: "Realpolitik — achieving state goals through pragmatic power and military force",
          D: "Conservative internationalism — maintaining the Congress of Vienna's balance of power",
        },
        correct: "C",
        explanation:
          "Bismarck (C) was the model realpolitiker — he allied with and then defeated Austria, manipulated France into war, and used diplomatic and military calculation rather than idealistic nationalism. Liberal nationalism sought popular participation and constitutions; Bismarck united Germany from above, not through democratic means (A). While Germans shared cultural identity, Bismarck's method was strategic, not romantic (B). Bismarck deliberately upset the balance of power by creating a dominant German state (D).",
      },
      {
        id: "u7-q2",
        question:
          "The Revolutions of 1848 ultimately failed primarily because",
        choices: {
          A: "revolutionary movements lacked any coherent ideology or leadership",
          B: "conservative military forces suppressed revolutions while liberal-nationalist coalitions fractured",
          C: "foreign intervention by Russia and Britain defeated every revolutionary government",
          D: "the urban working class refused to participate in predominantly bourgeois movements",
        },
        correct: "B",
        explanation:
          "1848 revolutions (B) initially succeeded in forcing constitutions but collapsed when conservative armies regrouped and the coalition of liberals (wanting constitutions) and workers (wanting social reform) broke apart. Revolutionaries had clear ideological goals — constitutionalism and nationalism (A is wrong). Only in Hungary did Russia intervene militarily; Britain was not a military suppressor (C). Workers did participate, especially in France's June Days, though their social demands alienated bourgeois liberals (D overstates worker abstention).",
      },
      {
        id: "u7-q3",
        stimulus:
          '"The struggle of peoples for power is the dominant form of all history." — Heinrich von Treitschke, German historian, c. 1880',
        question:
          "The viewpoint expressed in the excerpt was most consistent with which late 19th-century development?",
        choices: {
          A: "The growth of international peace movements and arbitration treaties",
          B: "Nationalist and Social Darwinist justifications for European imperial expansion",
          C: "Socialist movements arguing that class, not nations, was the true unit of historical conflict",
          D: "Liberal efforts to create constitutional limits on militarism",
        },
        correct: "B",
        explanation:
          "Treitschke's nationalist-Darwinist view (B) of power struggle between peoples mirrored the ideological justifications for imperialism and German militarism. Peace movements explicitly rejected this competitive framing (A). Socialist (Marxist) theory argued class struggle — not national power struggle — drove history (C). Liberals sought to constrain military power through constitutions; Treitschke glorified it (D).",
      },
      {
        id: "u7-q4",
        question:
          "The Berlin Conference (1884–85) was most significant in that it",
        choices: {
          A: "granted African kingdoms formal diplomatic recognition and trade rights",
          B: "established rules for European colonization of Africa without African participation",
          C: "resolved competing claims to Morocco, triggering diplomatic crises between France and Germany",
          D: "created a joint European administration to prevent excessive colonial violence",
        },
        correct: "B",
        explanation:
          "Berlin (B) formalized the 'Scramble for Africa' by setting rules for claiming territory (effective occupation) with no African voices present. African kingdoms received no recognition — the conference divided the continent among Europeans (A). The Morocco crises occurred in 1905 and 1911, after Berlin (C). The conference accelerated rather than limited colonial violence (D).",
      },
      {
        id: "u7-q5",
        question:
          "19th-century feminist movements in Europe primarily sought",
        choices: {
          A: "the abolition of the wage-labor system that exploited both men and women",
          B: "legal rights, educational access, and political suffrage for women",
          C: "women's exemption from industrial labor to protect the traditional family",
          D: "colonial rights for European women to hold administrative positions in empires",
        },
        correct: "B",
        explanation:
          "The 19th-century feminist movement (B) targeted property rights, educational access, and ultimately voting rights. Its leading figures — Mary Wollstonecraft, John Stuart Mill, Emmeline Pankhurst — sought legal equality. Some socialist feminists opposed capitalism, but mainstream feminism focused on rights within the existing system (A). Feminists sought to expand women's public role, not restrict them to the home (C). Colonial feminist organizations existed but were not the movement's primary focus (D).",
      },
    ],
  },
  {
    unitId: 8,
    unitName: "20th-Century Global Conflicts",
    questions: [
      {
        id: "u8-q1",
        question:
          "The alliance system prior to World War I contributed to the war's outbreak primarily by",
        choices: {
          A: "encouraging direct negotiations between Austria-Hungary and Serbia",
          B: "transforming a regional Balkan crisis into a general European war through automatic mobilization",
          C: "providing Germany with the military superiority needed to launch a preventive war",
          D: "resolving colonial disputes between Britain and France that might otherwise have caused war",
        },
        correct: "B",
        explanation:
          "The alliance system (B) meant Austria-Hungary's ultimatum to Serbia triggered Russian mobilization, which triggered German mobilization against Russia and France, which triggered British entry — a cascade turning a local conflict into a world war. Alliances discouraged direct negotiation by guaranteeing automatic support (A). Germany did not have clear military superiority — that was partly why it feared a two-front war (C). Alliances created, rather than resolved, the tensions that led to war (D).",
      },
      {
        id: "u8-q2",
        stimulus:
          '"We must never forget that the rule of Germany will be permanently secured only through the sword, and the active policy of aggrandizement necessary for the German people\'s expansion living-space." — paraphrase of Nazi ideology, 1930s',
        question:
          "The ideology expressed in the excerpt most directly led to which World War II development?",
        choices: {
          A: "Germany's alliance with the Soviet Union to divide Europe between them",
          B: "Germany's invasion of Eastern Europe and the USSR to acquire 'living space' (Lebensraum)",
          C: "Germany's naval strategy targeting British supply lines in the Atlantic",
          D: "The Holocaust as a means of eliminating internal political opposition",
        },
        correct: "B",
        explanation:
          "Lebensraum (B) — the Nazi concept of eastward expansion for 'living space' — directly produced the invasions of Poland (1939) and the USSR (1941). The Nazi-Soviet Pact (1939) was tactical, not ideological — Hitler always planned to eventually destroy the USSR (A). Atlantic naval strategy was operational, not ideologically driven by Lebensraum (C). The Holocaust targeted Jews and others for racial, not political, reasons (D — while related to Nazi ideology, it's distinct from Lebensraum).",
      },
      {
        id: "u8-q3",
        question:
          "Britain and France's policy of appeasement toward Nazi Germany in the 1930s was motivated primarily by",
        choices: {
          A: "sympathy with German territorial grievances from the Treaty of Versailles",
          B: "fear of another catastrophic war combined with military unpreparedness",
          C: "a secret agreement to redirect German aggression toward the Soviet Union",
          D: "domestic political pressure from pro-Nazi fascist movements in Britain and France",
        },
        correct: "B",
        explanation:
          "Appeasement (B) was driven by the memory of WWI's devastation, unwillingness to risk another war, and real military weakness — Britain's rearmament lagged. While some leaders acknowledged Versailles's harshness (A), this was secondary to fear of war. No formal agreement to redirect Hitler east existed — though some hoped for German-Soviet conflict (C overstates this). While fascist sympathizers existed, they did not dominate British or French politics (D).",
      },
      {
        id: "u8-q4",
        question:
          "The Holocaust was unique in the history of genocide primarily because",
        choices: {
          A: "it was the first instance of mass killing targeting an ethnic or religious group",
          B: "it was carried out by a modern industrial state using bureaucratic and technological means for systematic extermination",
          C: "it was motivated by religious rather than racial ideology",
          D: "it was the largest genocide in absolute numbers of deaths in world history",
        },
        correct: "B",
        explanation:
          "The Holocaust (B) was distinguished by its industrial, bureaucratic character — railways, camps, gas chambers, and administrative systems organized for systematic extermination. Earlier genocides (Armenian, etc.) preceded the Holocaust (A). Nazi ideology was explicitly racial pseudoscience, not religious (C). Mao's China and Stalin's USSR produced comparable or larger death tolls (D — though 6 million Jews was the largest single ethnic group systematically targeted).",
      },
      {
        id: "u8-q5",
        question:
          "World War I and World War II both demonstrated the concept of 'total war' in that they",
        choices: {
          A: "were fought exclusively between professional military forces, sparing civilian populations",
          B: "mobilized entire national economies and populations, making civilians and industry legitimate targets",
          C: "were won through naval blockades rather than land warfare",
          D: "ended with negotiated peace settlements that preserved the pre-war order",
        },
        correct: "B",
        explanation:
          "Total war (B) meant entire societies mobilized — women in factories, rationing, strategic bombing, economic blockades — making civilian infrastructure and populations central to the war effort. Both wars had massive civilian casualties and targeted home fronts. Civilian populations suffered enormously in both wars (A is the opposite of reality). Land warfare was decisive in both — the Western Front in WWI, Eastern Front in WWII (C). Neither war ended in a negotiated status quo — WWI produced dramatic territorial changes, WWII destroyed Nazi Germany and Imperial Japan (D).",
      },
    ],
  },
  {
    unitId: 9,
    unitName: "Cold War and Contemporary Europe",
    questions: [
      {
        id: "u9-q1",
        question:
          "The Marshall Plan (1948) was significant primarily because it",
        choices: {
          A: "created a military alliance committing the US to defend Western Europe",
          B: "provided economic aid to rebuild Western Europe, reducing the appeal of communist movements",
          C: "established the United Nations as an international peacekeeping organization",
          D: "offered economic assistance to all European nations, including the Soviet Union and Eastern bloc",
        },
        correct: "B",
        explanation:
          "The Marshall Plan (B) rebuilt Western European economies to stabilize them against communist political movements gaining power in economically desperate populations. The military alliance was NATO (1949), separate from Marshall Plan (A). The UN was established in 1945, before the Marshall Plan (C). The USSR rejected Marshall Plan aid and prevented Eastern European states from accepting it (D — Stalin correctly saw it as American economic influence).",
      },
      {
        id: "u9-q2",
        stimulus:
          '"From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent." — Winston Churchill, 1946',
        question:
          "Churchill's 'iron curtain' metaphor most directly described",
        choices: {
          A: "the economic barrier created by the Marshall Plan between Western and Eastern Europe",
          B: "the military division between NATO and Warsaw Pact forces along the German border",
          C: "the political and ideological division between Soviet-dominated Eastern Europe and the Western democracies",
          D: "the nuclear deterrence strategy preventing direct military conflict between superpowers",
        },
        correct: "C",
        explanation:
          "Churchill's iron curtain (C) referred to the political division — Soviet domination of Eastern European states versus Western liberal democracies. He was describing an ideological and political barrier, not primarily an economic one (A). The speech was in 1946, before NATO (1949) and the Warsaw Pact (1955) formalized military division (B). Nuclear deterrence was a separate concept (D).",
      },
      {
        id: "u9-q3",
        question:
          "The Cuban Missile Crisis (1962) is historically significant primarily because it",
        choices: {
          A: "led to the permanent deployment of Soviet nuclear missiles in Cuba",
          B: "demonstrated that US conventional military forces could defeat Soviet proxy armies",
          C: "brought the world closest to nuclear war and led to direct US-Soviet communication mechanisms",
          D: "resulted in the USSR abandoning its nuclear weapons program under US pressure",
        },
        correct: "C",
        explanation:
          "The crisis (C) was the Cold War's most dangerous moment — both sides came within days of nuclear exchange — and produced the Moscow-Washington hotline and eventually nuclear test ban treaties. The USSR removed missiles from Cuba in exchange for US concessions (A is wrong). The crisis was diplomatic and naval, not a conventional military engagement (B). The USSR did not abandon its nuclear program — both sides continued building after 1962 (D).",
      },
      {
        id: "u9-q4",
        question:
          "Gorbachev's reforms of glasnost and perestroika ultimately contributed to the Soviet collapse because",
        choices: {
          A: "they led to immediate economic prosperity that empowered opposition movements",
          B: "they relaxed political controls and market restrictions faster than the system could adapt, unleashing nationalist and democratic forces",
          C: "Western nations used the reforms to covertly fund anti-Soviet movements throughout the Eastern bloc",
          D: "they were rejected by the Soviet military, which used them as justification for the 1991 coup",
        },
        correct: "B",
        explanation:
          "Glasnost (openness) and perestroika (restructuring) (B) loosened the information controls and economic rigidities that had suppressed nationalist and democratic movements — once released, these forces outran the Communist Party's ability to contain them. The Soviet economy actually worsened under the reforms before improving (A). While Western pressure existed, the collapse was primarily internally driven (C overstates covert action). The 1991 coup was led by hardliners opposing Gorbachev's reforms, not by those using reforms as justification (D).",
      },
      {
        id: "u9-q5",
        question:
          "The development of the European Union represents which broader historical trend in postwar Europe?",
        choices: {
          A: "The reassertion of strong national sovereignty against American economic dominance",
          B: "Economic and political integration as a response to the nationalism that produced two world wars",
          C: "Military cooperation to replace NATO as Europe's primary defense alliance",
          D: "Socialist economic planning replacing market capitalism across the continent",
        },
        correct: "B",
        explanation:
          "The EU (B) was consciously built on the lesson that nationalism and economic rivalry produced WWI and WWII — integration through shared markets, institutions, and eventually currency would make war 'not merely unthinkable but materially impossible' (Schuman Declaration). The EU actually reduced national sovereignty in key areas — the opposite of reasserting it (A). The EU and NATO coexist; the EU is not a military alliance replacing NATO (C). The EU is a market economy framework, not a socialist planning system (D).",
      },
    ],
  },
];

export default mcq;
