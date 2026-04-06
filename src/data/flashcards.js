// AP European History — Flashcard Data
// Schema: { unitId, unitName, cards: [{id, term, definition, hint?}] }

const flashcards = [
  {
    unitId: 1,
    unitName: "Renaissance and Exploration",
    cards: [
      {
        id: "u1-c1",
        term: "Humanism",
        definition:
          "An intellectual movement reviving classical Greek and Roman learning. It emphasized human potential, secular achievement, and individual dignity rather than purely theological concerns.",
        hint: "Human-centered, not God-centered",
      },
      {
        id: "u1-c2",
        term: "Patronage",
        definition:
          "Financial support given by wealthy individuals (patrons) to artists and scholars. The Medici family of Florence were the Renaissance's most famous patrons, funding art in exchange for cultural prestige.",
        hint: "Patrons = funders of art",
      },
      {
        id: "u1-c3",
        term: "The Prince (1513)",
        definition:
          "Treatise by Niccolò Machiavelli arguing rulers must prioritize political effectiveness over personal morality — it is better to be feared than loved if one cannot be both.",
        hint: "Machiavelli = ruthless political realism",
      },
      {
        id: "u1-c4",
        term: "Printing Press (c. 1440)",
        definition:
          "Invented by Johannes Gutenberg; dramatically lowered the cost of books, accelerated the spread of humanist and later Protestant ideas, and increased literacy across Europe.",
        hint: "Gutenberg = information revolution",
      },
      {
        id: "u1-c5",
        term: "Italian City-States",
        definition:
          "Independent political units (Florence, Venice, Milan, Rome) that competed economically and culturally, creating the conditions for Renaissance patronage and artistic rivalry.",
        hint: "Florence = Medici; Venice = trade republic",
      },
      {
        id: "u1-c6",
        term: "Treaty of Tordesillas (1494)",
        definition:
          "Agreement between Spain and Portugal, brokered by the Pope, dividing the non-European world along a meridian — Spain received rights west, Portugal east.",
        hint: "Splits the globe between Spain and Portugal",
      },
      {
        id: "u1-c7",
        term: "Columbian Exchange",
        definition:
          "The transfer of plants, animals, diseases, and people between the Americas and the Old World after 1492; devastated indigenous populations through disease while transforming European diets (potatoes, maize).",
        hint: "Two-way biological exchange across the Atlantic",
      },
      {
        id: "u1-c8",
        term: "Secularism",
        definition:
          "Cultural attitude emphasizing worldly over spiritual concerns. Evident in Renaissance art featuring portraits, mythological subjects, and civic writing alongside religious themes.",
        hint: "Secular = this world, not the afterlife",
      },
      {
        id: "u1-c9",
        term: "Vernacular Literature",
        definition:
          "Writing in everyday spoken languages (Italian, French, English) rather than Latin, making texts accessible to broader audiences. Dante, Petrarch, and Boccaccio pioneered this shift.",
        hint: "Vernacular = the people's language",
      },
      {
        id: "u1-c10",
        term: "Sack of Rome (1527)",
        definition:
          "Attack on Rome by Holy Roman Emperor Charles V's mutinous troops that devastated the city and effectively ended the High Renaissance in Italy, scattering artists northward.",
        hint: "1527 = symbolic end of Italian Renaissance",
      },
      {
        id: "u1-c11",
        term: "Christian Humanism",
        definition:
          "Northern European variant of humanism that applied classical scholarship to reform the Catholic Church from within. Erasmus's In Praise of Folly is the key example.",
        hint: "Erasmus: reform church through learning, not break from it",
      },
    ],
  },
  {
    unitId: 2,
    unitName: "Age of Reformation",
    cards: [
      {
        id: "u2-c1",
        term: "95 Theses (1517)",
        definition:
          "Martin Luther's list of arguments against indulgences nailed to the Wittenberg church door (or mailed to the Archbishop). Sparked the Protestant Reformation by challenging papal authority over salvation.",
        hint: "Luther's opening shot against indulgences",
      },
      {
        id: "u2-c2",
        term: "Indulgences",
        definition:
          "Church-granted remissions of punishment for sin, often sold for money. The sale of indulgences by Johann Tetzel to fund St. Peter's Basilica outraged Luther and many reformers.",
        hint: "Pay the Church to reduce time in purgatory",
      },
      {
        id: "u2-c3",
        term: "Justification by Faith Alone (Sola Fide)",
        definition:
          "Luther's core theological doctrine: salvation comes through faith in God's grace, not through good works or Church sacraments. It undermined the Church's role as mediator between God and humans.",
        hint: "Faith alone saves — not works or Church rites",
      },
      {
        id: "u2-c4",
        term: "Peace of Augsburg (1555)",
        definition:
          "Agreement between Holy Roman Emperor Charles V and German princes establishing the principle cuius regio, eius religio ('whose realm, his religion'), allowing princes to choose Lutheranism or Catholicism for their territory.",
        hint: "Princes choose the religion of their land",
      },
      {
        id: "u2-c5",
        term: "Calvinism / Predestination",
        definition:
          "John Calvin's theology held that God predestines souls to salvation or damnation before birth. The 'elect' (saved) would show signs through worldly success and moral discipline, creating a rigorous Calvinist culture.",
        hint: "God already decided who is saved — live as if you are",
      },
      {
        id: "u2-c6",
        term: "English Reformation",
        definition:
          "Henry VIII broke from Rome in 1534 via the Act of Supremacy, making the monarch head of the Church of England. Motivated primarily by his desire for an annulment, not theological reform.",
        hint: "Henry VIII = divorce from Church, not just his wife",
      },
      {
        id: "u2-c7",
        term: "Council of Trent (1545–1563)",
        definition:
          "Catholic Church's formal response to Protestantism. Reaffirmed core Catholic doctrines (tradition alongside Scripture, seven sacraments, clerical celibacy) while reforming Church abuses and improving clerical education.",
        hint: "Counter-Reformation's doctrinal backbone",
      },
      {
        id: "u2-c8",
        term: "Society of Jesus (Jesuits)",
        definition:
          "Religious order founded by Ignatius of Loyola (1540) devoted to education, missionary work, and defending Catholicism. Jesuits became the intellectual shock troops of the Counter-Reformation.",
        hint: "Loyola's disciplined soldiers for the Pope",
      },
      {
        id: "u2-c9",
        term: "Anabaptists",
        definition:
          "Radical reformers who rejected infant baptism (believing only adult believers' baptism was valid), separated church from state, and often held communal property. Persecuted by both Catholics and mainstream Protestants.",
        hint: "Re-baptizers: adult baptism only, radical separatists",
      },
      {
        id: "u2-c10",
        term: "French Wars of Religion (1562–1598)",
        definition:
          "Civil wars between French Catholics and Huguenots (Calvinist Protestants). The St. Bartholomew's Day Massacre (1572) killed thousands of Huguenots. Ended with the Edict of Nantes granting Huguenots limited rights.",
        hint: "St. Bartholomew's Day = worst Catholic-Protestant violence",
      },
    ],
  },
  {
    unitId: 3,
    unitName: "Absolutism and Constitutionalism",
    cards: [
      {
        id: "u3-c1",
        term: "Absolute Monarchy",
        definition:
          "A system in which the monarch holds supreme, unchecked power over the state, claiming divine right authority. France under Louis XIV is the model example.",
        hint: "All power in one ruler, by God's will",
      },
      {
        id: "u3-c2",
        term: "Divine Right of Kings",
        definition:
          "The doctrine that monarchs derive their authority directly from God and are accountable only to God, not to nobles or parliaments. Articulated by Jacques-Bénigne Bossuet for Louis XIV.",
        hint: "Kings rule because God chose them",
      },
      {
        id: "u3-c3",
        term: "Louis XIV ('Sun King')",
        definition:
          "French absolute monarch (r. 1643–1715) who centralized power, built Versailles to control nobility, revoked the Edict of Nantes (1685), and declared 'L'état, c'est moi' ('I am the state').",
        hint: "Versailles + 'I am the state' = peak absolutism",
      },
      {
        id: "u3-c4",
        term: "Palace of Versailles",
        definition:
          "Louis XIV's grand palace outside Paris that served as a gilded cage for French nobles, requiring attendance at court and keeping them dependent on royal favor rather than their own regional power bases.",
        hint: "Nobles trapped in luxury, away from their estates",
      },
      {
        id: "u3-c5",
        term: "English Civil War (1642–1651)",
        definition:
          "Conflict between King Charles I (Cavaliers) and Parliament (Roundheads/Puritans) over royal prerogative and religious policy. Charles I was executed in 1649; England briefly became a republic under Oliver Cromwell.",
        hint: "Parliament vs. King → King loses his head",
      },
      {
        id: "u3-c6",
        term: "Glorious Revolution (1688)",
        definition:
          "Bloodless overthrow of Catholic James II by Parliament, which invited Protestant William III of Orange and Mary II to rule. Led to the English Bill of Rights (1689), establishing constitutional monarchy.",
        hint: "Parliament picks the monarch — power shifts permanently",
      },
      {
        id: "u3-c7",
        term: "English Bill of Rights (1689)",
        definition:
          "Document establishing that Parliament, not the monarch, held supreme legislative authority. Prohibited the Crown from suspending laws, maintaining a peacetime army, or levying taxes without Parliament's consent.",
        hint: "Parliament > Crown in England after 1689",
      },
      {
        id: "u3-c8",
        term: "Peter the Great (r. 1682–1725)",
        definition:
          "Russian tsar who modernized and Westernized Russia: built St. Petersburg, reorganized the military and bureaucracy, subordinated the Church to the state, and expanded Russia's territory to the Baltic.",
        hint: "Russia's forced Westernization from the top down",
      },
      {
        id: "u3-c9",
        term: "Hohenzollern Prussia",
        definition:
          "German state whose rulers (especially Frederick William I and Frederick the Great) built one of Europe's most efficient bureaucracies and powerful militaries, making Prussia a great power by the 18th century.",
        hint: "Prussia = bureaucracy + military discipline",
      },
      {
        id: "u3-c10",
        term: "Mercantilism",
        definition:
          "Economic theory holding that national wealth depends on accumulating gold/silver through a favorable balance of trade (exports > imports). Colonies existed to supply raw materials and buy finished goods from the mother country.",
        hint: "Exports > imports = national power",
      },
    ],
  },
  {
    unitId: 4,
    unitName: "Scientific, Philosophical, and Political Developments",
    cards: [
      {
        id: "u4-c1",
        term: "Scientific Revolution",
        definition:
          "The 16th–17th century transformation in European understanding of the natural world through observation, experimentation, and mathematics — replacing Aristotelian and Church-based authority with empirical method.",
        hint: "Observation and experiment replace ancient authority",
      },
      {
        id: "u4-c2",
        term: "Heliocentric Model (Copernicus)",
        definition:
          "Nicolaus Copernicus proposed in De Revolutionibus (1543) that the Earth orbits the Sun, not vice versa. This challenged the Church-endorsed geocentric (Earth-centered) Ptolemaic model and triggered a cosmological revolution.",
        hint: "Sun at center — Earth moves. Copernicus flips cosmology.",
      },
      {
        id: "u4-c3",
        term: "Galileo and the Telescope",
        definition:
          "Galileo Galilei used improved telescopes to confirm heliocentrism (observing Jupiter's moons, lunar craters). Tried by the Inquisition in 1633 and forced to recant, but his work stood as a model of empirical inquiry.",
        hint: "Galileo saw the proof; the Church made him unsee it",
      },
      {
        id: "u4-c4",
        term: "Isaac Newton's Principia (1687)",
        definition:
          "Newton unified terrestrial and celestial mechanics with the laws of universal gravitation and motion, showing that one set of mathematical laws governs the entire universe — the capstone of the Scientific Revolution.",
        hint: "One law governs apples and planets alike",
      },
      {
        id: "u4-c5",
        term: "The Enlightenment",
        definition:
          "18th-century intellectual movement applying reason, skepticism, and empirical method to human society, government, religion, and economics. Philosophes challenged tradition, superstition, and arbitrary authority.",
        hint: "Reason applied to everything — society, religion, government",
      },
      {
        id: "u4-c6",
        term: "John Locke — Social Contract",
        definition:
          "Locke argued in Two Treatises of Government (1689) that government derives legitimacy from the consent of the governed and exists to protect natural rights (life, liberty, property). Revolution is justified when rulers violate these rights.",
        hint: "Government protects rights; people can revolt if it doesn't",
      },
      {
        id: "u4-c7",
        term: "Voltaire",
        definition:
          "French philosophe known for sharp satirical critiques of the Church, religious intolerance, and arbitrary government (Candide, 1759). Favored enlightened despotism and religious toleration.",
        hint: "Satirist of Church and tyranny; champion of toleration",
      },
      {
        id: "u4-c8",
        term: "Montesquieu — Separation of Powers",
        definition:
          "In The Spirit of the Laws (1748), Montesquieu argued for dividing government into executive, legislative, and judicial branches to prevent tyranny — a direct influence on the U.S. Constitution.",
        hint: "Three branches of government prevent tyranny",
      },
      {
        id: "u4-c9",
        term: "Jean-Jacques Rousseau",
        definition:
          "Enlightenment thinker who argued in The Social Contract (1762) that legitimate government rests on the 'general will' of the people. Also critiqued civilization as corrupting natural human goodness.",
        hint: "General will = popular sovereignty; civilization = corruption",
      },
      {
        id: "u4-c10",
        term: "Enlightened Despotism",
        definition:
          "A form of absolute monarchy where rulers like Frederick the Great of Prussia and Catherine the Great of Russia applied Enlightenment principles — religious toleration, legal reform, education — while retaining absolute power.",
        hint: "Absolute ruler who governs by reason, not just tradition",
      },
    ],
  },
  {
    unitId: 5,
    unitName: "Conflict, Crisis, and Reaction in the Late 18th Century",
    cards: [
      {
        id: "u5-c1",
        term: "American Revolution (1776)",
        definition:
          "Colonial rebellion against British rule that produced the Declaration of Independence and inspired European reformers. France's costly military support of the colonists worsened its fiscal crisis, contributing to the French Revolution.",
        hint: "American independence → France bankrupt → French Revolution",
      },
      {
        id: "u5-c2",
        term: "Causes of the French Revolution",
        definition:
          "France's financial bankruptcy (from wars and debt), social inequality (Third Estate bearing tax burden), Enlightenment ideas challenging authority, and weak leadership of Louis XVI all combined to produce revolutionary crisis by 1789.",
        hint: "Debt + inequality + Enlightenment + weak king = revolution",
      },
      {
        id: "u5-c3",
        term: "Estates-General / National Assembly (1789)",
        definition:
          "Louis XVI convened the Estates-General to address financial crisis. When the Third Estate was locked out of its meeting hall, delegates took the Tennis Court Oath, declaring themselves the National Assembly and refusing to disband until France had a constitution.",
        hint: "Tennis Court Oath = moment Third Estate seized power",
      },
      {
        id: "u5-c4",
        term: "Storming of the Bastille (July 14, 1789)",
        definition:
          "Parisian crowd seized the Bastille fortress (a symbol of royal tyranny), marking the popular uprising phase of the Revolution. Bastille Day remains France's national holiday.",
        hint: "Crowd power vs. royal symbol — revolution goes popular",
      },
      {
        id: "u5-c5",
        term: "Declaration of the Rights of Man (1789)",
        definition:
          "Revolutionary document proclaiming liberty, equality, and popular sovereignty as universal rights. Influenced by Enlightenment philosophy and the American Declaration of Independence, but notably excluded women.",
        hint: "French Enlightenment rights charter — excludes women",
      },
      {
        id: "u5-c6",
        term: "The Reign of Terror (1793–1794)",
        definition:
          "Radical phase of the Revolution under the Committee of Public Safety led by Maximilien Robespierre. ~17,000 executed as 'enemies of the Revolution'; ended when Robespierre himself was guillotined in Thermidorian Reaction.",
        hint: "Robespierre guillotines enemies — then gets guillotined himself",
      },
      {
        id: "u5-c7",
        term: "Napoleon Bonaparte",
        definition:
          "Military general who seized power in the coup of 18 Brumaire (1799), became Emperor (1804). Spread revolutionary ideals (Napoleonic Code) across Europe while also restoring order and building a new imperial hierarchy.",
        hint: "Ends Revolution, spreads its ideas through conquest",
      },
      {
        id: "u5-c8",
        term: "Napoleonic Code (1804)",
        definition:
          "Napoleon's systematic legal code establishing equality before the law, property rights, and religious toleration while codifying patriarchal authority in the family. Applied across French-controlled Europe.",
        hint: "Legal equality + property rights, but patriarchal family law",
      },
      {
        id: "u5-c9",
        term: "Continental System",
        definition:
          "Napoleon's economic blockade of Britain, prohibiting European nations from trading with Britain to weaken the British economy. It backfired by hurting European economies and encouraging resistance, especially in Russia.",
        hint: "Napoleon's economic war on Britain — backfires badly",
      },
      {
        id: "u5-c10",
        term: "Congress of Vienna (1814–1815)",
        definition:
          "Post-Napoleonic peace settlement led by Metternich (Austria) that redrew Europe's map to restore conservative balance-of-power order, surround France with stronger neighbors, and suppress revolutionary nationalism.",
        hint: "Metternich redraws Europe to contain future revolutions",
      },
    ],
  },
  {
    unitId: 6,
    unitName: "Industrialization and Its Effects",
    cards: [
      {
        id: "u6-c1",
        term: "Industrial Revolution",
        definition:
          "The transformation of manufacturing from hand tools in homes to machine production in factories, beginning in Britain c. 1760–1840 and spreading to the continent. Powered by coal, steam, and new organizational systems.",
        hint: "Britain first: coal + steam + factories = new economy",
      },
      {
        id: "u6-c2",
        term: "Why Britain First?",
        definition:
          "Britain industrialized first due to: abundant coal and iron, a colonial market, navigable rivers and canals, a stable constitutional government protecting property rights, agricultural enclosures freeing up labor, and capital from trade.",
        hint: "Resources + markets + stability + labor = Britain's head start",
      },
      {
        id: "u6-c3",
        term: "Steam Engine (Watt, 1769)",
        definition:
          "James Watt's improved steam engine dramatically increased efficiency and enabled factories to locate away from rivers. It powered textile mills, mines, and eventually railways and steamships.",
        hint: "Watt's engine = power source not tied to water",
      },
      {
        id: "u6-c4",
        term: "Proletariat",
        definition:
          "The industrial working class — factory workers who owned no means of production and sold their labor for wages. Subject to dangerous conditions, long hours, child labor, and urban poverty in early industrial capitalism.",
        hint: "Factory workers who sell their labor; own nothing",
      },
      {
        id: "u6-c5",
        term: "Marxism / The Communist Manifesto (1848)",
        definition:
          "Karl Marx and Friedrich Engels argued that history is driven by class struggle, capitalism would produce its own destruction through worker immiseration, and the proletariat would ultimately overthrow the bourgeoisie and establish communism.",
        hint: "Workers of the world, unite! History = class struggle",
      },
      {
        id: "u6-c6",
        term: "Luddites",
        definition:
          "British workers (c. 1811–1816) who smashed textile machinery they blamed for destroying their skilled trades. Name became synonymous with opposition to technological change.",
        hint: "Machine-smashers protecting craft jobs",
      },
      {
        id: "u6-c7",
        term: "Urbanization",
        definition:
          "Rapid growth of cities as workers moved from rural areas to industrial centers. Produced overcrowded slums, poor sanitation (cholera epidemics), child labor, and eventually public health and reform movements.",
        hint: "Factory towns = overcrowding, disease, reform pressure",
      },
      {
        id: "u6-c8",
        term: "Chartism",
        definition:
          "British working-class movement (1838–1857) demanding political reforms including universal male suffrage, secret ballot, and pay for MPs. The People's Charter was petitioned to Parliament three times; all petitions rejected.",
        hint: "Working-class demand for voting rights in Britain",
      },
      {
        id: "u6-c9",
        term: "Laissez-Faire Economics",
        definition:
          "The doctrine (from Adam Smith's Wealth of Nations, 1776) that government should not interfere in the economy, allowing the free market's 'invisible hand' to allocate resources most efficiently.",
        hint: "Adam Smith: let markets work without government meddling",
      },
      {
        id: "u6-c10",
        term: "Social Darwinism",
        definition:
          "Application of Darwin's 'survival of the fittest' concept to human society and economics, used to justify wealth inequality as natural and imperial domination of 'weaker' peoples as biologically inevitable.",
        hint: "Rich are rich because they're 'fit' — misuse of Darwin",
      },
    ],
  },
  {
    unitId: 7,
    unitName: "19th-Century Perspectives and Political Developments",
    cards: [
      {
        id: "u7-c1",
        term: "Conservatism (post-1815)",
        definition:
          "Political ideology championed by Metternich defending tradition, established institutions, monarchy, and the Church against revolutionary change. Saw the French Revolution as proof that rapid change leads to chaos.",
        hint: "Metternich: tradition over revolution, stability over reform",
      },
      {
        id: "u7-c2",
        term: "Liberalism (19th century)",
        definition:
          "Political ideology advocating constitutional government, individual rights, free press, and free markets. Middle-class liberals wanted limits on royal power and protection of property — but often opposed extending rights to the poor.",
        hint: "Constitutional rights + free markets for the middle class",
      },
      {
        id: "u7-c3",
        term: "Nationalism",
        definition:
          "The belief that people sharing a common language, culture, or ethnicity should form their own sovereign state. Threatened multi-ethnic empires (Austria-Hungary, Ottoman) and drove the unification of Germany and Italy.",
        hint: "One nation = one state; threat to multi-ethnic empires",
      },
      {
        id: "u7-c4",
        term: "Revolutions of 1848",
        definition:
          "Wave of liberal and nationalist revolutions across Europe (France, Austria, Germany, Italy). Initially successful in forcing constitutions, almost all were suppressed by year's end, leaving conservatives in power but reforms incomplete.",
        hint: "Spring of Nations: revolutions everywhere, then reversal",
      },
      {
        id: "u7-c5",
        term: "Unification of Germany (1871)",
        definition:
          "Achieved by Prussian Chancellor Otto von Bismarck through 'blood and iron' — three strategic wars (against Denmark 1864, Austria 1866, France 1870–71). Prussia's King Wilhelm I was proclaimed German Emperor at Versailles.",
        hint: "Bismarck: wars + diplomacy → German Empire at Versailles",
      },
      {
        id: "u7-c6",
        term: "Realpolitik",
        definition:
          "Bismarck's political philosophy of pursuing state interests through pragmatic power politics, not ideological principles. Alliances made and broken based on strategic advantage, not moral considerations.",
        hint: "Power and interests, not ideals, drive Bismarck's decisions",
      },
      {
        id: "u7-c7",
        term: "Italian Unification (Risorgimento)",
        definition:
          "Unification of the Italian peninsula (completed 1870) led by Cavour (diplomacy/Piedmont), Garibaldi (military/southern Italy), and eventually Vittorio Emanuele II as king. Opposed by Austria and the Pope.",
        hint: "Cavour + Garibaldi + Piedmont → Kingdom of Italy",
      },
      {
        id: "u7-c8",
        term: "New Imperialism (1870s–1914)",
        definition:
          "European powers' intensified colonization of Africa, Asia, and Oceania driven by industrial capitalism's need for raw materials and markets, nationalist rivalry, Social Darwinism, and missionary ambitions.",
        hint: "Industrial Europe carves up Africa and Asia for resources + glory",
      },
      {
        id: "u7-c9",
        term: "Berlin Conference (1884–85)",
        definition:
          "Meeting of European powers that formalized rules for colonizing Africa — requiring 'effective occupation' to claim territory, with no African representatives present. Accelerated the 'Scramble for Africa.'",
        hint: "Europeans divide Africa with no Africans at the table",
      },
      {
        id: "u7-c10",
        term: "Feminism / Women's Suffrage",
        definition:
          "19th-century movements demanding equal political and legal rights for women. Suffragettes in Britain (led by Emmeline Pankhurst) used militant tactics. Women gained the vote in most of Europe only after WWI.",
        hint: "Pankhurst's suffragettes: 'deeds not words' for the vote",
      },
    ],
  },
  {
    unitId: 8,
    unitName: "20th-Century Global Conflicts",
    cards: [
      {
        id: "u8-c1",
        term: "Causes of WWI (MAIN)",
        definition:
          "Militarism (arms race), Alliance system (Triple Alliance vs. Triple Entente), Imperialism (colonial rivalries), Nationalism (especially in the Balkans). The assassination of Archduke Franz Ferdinand (June 1914) triggered the alliance system.",
        hint: "MAIN: Militarism, Alliances, Imperialism, Nationalism",
      },
      {
        id: "u8-c2",
        term: "Schlieffen Plan",
        definition:
          "Germany's pre-WWI military strategy: knock out France quickly through Belgium, then shift forces east against Russia. Failed because Belgian resistance slowed Germany and Britain joined the war, leading to Western Front stalemate.",
        hint: "Germany: knock out France fast, then face Russia — it failed",
      },
      {
        id: "u8-c3",
        term: "Total War",
        definition:
          "Modern warfare requiring mobilization of an entire nation's economy, population, and industry. WWI and WWII were total wars — women entered the workforce, economies were centrally planned, and civilians were targeted.",
        hint: "Entire society mobilized for war — economy, people, industry",
      },
      {
        id: "u8-c4",
        term: "Treaty of Versailles (1919)",
        definition:
          "WWI peace treaty that punished Germany: war guilt clause, $33 billion in reparations, loss of territory (Alsace-Lorraine, colonies), military restrictions. Created resentment that Hitler exploited.",
        hint: "Germany humiliated → resentment → Hitler's rise",
      },
      {
        id: "u8-c5",
        term: "Russian Revolution (1917)",
        definition:
          "Two revolutions: February (overthrew Tsar Nicholas II, established Provisional Government) and October (Bolsheviks under Lenin seized power). Led to Russian withdrawal from WWI and eventually the Soviet Union.",
        hint: "February: Tsar out. October: Lenin in.",
      },
      {
        id: "u8-c6",
        term: "Rise of Fascism",
        definition:
          "Authoritarian nationalist ideology rejecting democracy and communism. Mussolini's Italian Fascism (1922) and Hitler's Nazism (1933) exploited post-WWI humiliation, economic depression, and fear of communism.",
        hint: "Post-WWI anger + depression → Mussolini and Hitler",
      },
      {
        id: "u8-c7",
        term: "Appeasement Policy",
        definition:
          "British and French strategy of conceding to Hitler's territorial demands (Rhineland 1936, Austria 1938, Sudetenland 1938) to avoid war. Culminated in Munich Agreement; failed when Germany invaded Poland in 1939.",
        hint: "Give Hitler what he wants to avoid war — Munich 1938",
      },
      {
        id: "u8-c8",
        term: "Holocaust",
        definition:
          "Nazi Germany's systematic genocide of approximately 6 million Jews and millions of others (Roma, disabled, homosexuals, Slavs). Implemented through the 'Final Solution' using concentration and extermination camps.",
        hint: "Nazi genocide of 6 million Jews via 'Final Solution'",
      },
      {
        id: "u8-c9",
        term: "D-Day / Operation Overlord (June 6, 1944)",
        definition:
          "Allied amphibious invasion of Normandy, France, opening the Western Front against Nazi Germany. Combined with Soviet advances from the east, it ultimately led to Germany's defeat in May 1945.",
        hint: "Normandy invasion opens Western Front, dooms Nazi Germany",
      },
      {
        id: "u8-c10",
        term: "Decolonization (post-WWII)",
        definition:
          "The dismantling of European colonial empires after WWII as colonized peoples achieved independence, European powers were weakened, and the UN/US/USSR pressured against formal empire. India (1947), Algeria (1962), Kenya (1963).",
        hint: "WWII weakens Europe; colonies gain independence 1945–1970s",
      },
    ],
  },
  {
    unitId: 9,
    unitName: "Cold War and Contemporary Europe",
    cards: [
      {
        id: "u9-c1",
        term: "Cold War",
        definition:
          "Ideological, political, and military rivalry between the US (capitalism/democracy) and the USSR (communism) from 1945 to 1991. Never direct military conflict between the superpowers, but many proxy wars worldwide.",
        hint: "US vs. USSR: ideology, proxy wars, arms race — no direct war",
      },
      {
        id: "u9-c2",
        term: "Marshall Plan (1948)",
        definition:
          "US program providing $13 billion to rebuild Western European economies after WWII. Aimed to prevent communist movements from gaining power in economically desperate nations and tie Western Europe to American markets.",
        hint: "US rebuilds Western Europe to keep it out of communist hands",
      },
      {
        id: "u9-c3",
        term: "NATO and the Warsaw Pact",
        definition:
          "NATO (1949): Western military alliance led by the US. Warsaw Pact (1955): Soviet-led military alliance of Eastern European satellite states. The two alliances defined the military geography of the Cold War.",
        hint: "NATO = West; Warsaw Pact = East — military Cold War structure",
      },
      {
        id: "u9-c4",
        term: "Truman Doctrine / Containment",
        definition:
          "US policy (1947) of 'containing' Soviet expansion by supporting free peoples resisting subjugation. Articulated by George Kennan; implemented through military aid (Greece, Turkey) and later Korea and Vietnam.",
        hint: "US strategy: stop communism from spreading anywhere",
      },
      {
        id: "u9-c5",
        term: "Berlin Wall (1961–1989)",
        definition:
          "Wall built by East Germany dividing Berlin, preventing East Germans from fleeing to the West. Symbol of the Iron Curtain. Its fall on November 9, 1989 became the iconic moment of Cold War's end.",
        hint: "Built to stop East Germans fleeing; its fall = Cold War ending",
      },
      {
        id: "u9-c6",
        term: "Cuban Missile Crisis (1962)",
        definition:
          "The closest the Cold War came to nuclear war: Soviet nuclear missiles in Cuba, US naval blockade, 13 days of crisis. Resolved when USSR removed missiles; US secretly agreed not to invade Cuba and removed missiles from Turkey.",
        hint: "13 days in 1962 when nuclear war nearly happened",
      },
      {
        id: "u9-c7",
        term: "Decolonization (Cold War context)",
        definition:
          "Newly independent nations became Cold War battlegrounds as US and USSR competed for influence through aid, coups, and proxy wars — Korea, Vietnam, Angola, Afghanistan all reflect this competition.",
        hint: "New nations = Cold War pawns for US and USSR influence",
      },
      {
        id: "u9-c8",
        term: "Gorbachev: Glasnost and Perestroika",
        definition:
          "Soviet leader Mikhail Gorbachev's reforms: glasnost (openness — greater freedom of speech/press) and perestroika (restructuring — limited market elements). Intended to save communism; instead accelerated Soviet collapse.",
        hint: "Reforms meant to save USSR; accidentally destroyed it",
      },
      {
        id: "u9-c9",
        term: "Fall of the USSR (1991)",
        definition:
          "The Soviet Union dissolved on December 25, 1991 as republics declared independence. Caused by economic stagnation, nationalist movements, Gorbachev's reforms undermining Communist Party control, and failed August 1991 coup.",
        hint: "1991: 15 Soviet republics become independent nations",
      },
      {
        id: "u9-c10",
        term: "European Union",
        definition:
          "Political and economic union of European nations evolved from the postwar ECSC (1951) and EEC (1957). The Maastricht Treaty (1993) created the EU; the euro launched in 2002. Represents Europe's postwar integration project.",
        hint: "ECSC → EEC → EU: postwar integration to prevent another war",
      },
    ],
  },
];

export default flashcards;
