import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

const CatholicQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const quotes = [
    {
      "text": "Au commencement, Dieu créa le ciel et la terre.",
      "author": "Genèse 1:1",
      "latin": "In principio creavit Deus caelum et terram."
    },
    {
      "text": "Que la lumière soit, et la lumière fut.",
      "author": "Genèse 1:3",
      "latin": "Fiat lux, et facta est lux."
    },
    {
      "text": "Tu es poussière, et à la poussière tu retourneras.",
      "author": "Genèse 3:19",
      "latin": "Quia pulvis es, et in pulverem reverteris."
    },
    {
      "text": "Suis-je le gardien de mon frère ?",
      "author": "Genèse 4:9",
      "latin": "Num custos fratris mei sum ego ?"
    },
    {
      "text": "L'homme quitte son père et sa mère, il s'attache à sa femme, et ils deviennent une seule chair.",
      "author": "Genèse 2:24",
      "latin": "Relinquet homo patrem suum et matrem et adhaerebit uxori suae, et erunt duo in carne una."
    },
    {
      "text": "Le Seigneur est mon berger, je ne manque de rien.",
      "author": "Psaume 23:1",
      "latin": "Dominus pascit me, et nihil mihi deerit."
    },
    {
      "text": "Même si je marche dans la vallée de l'ombre de la mort, je ne crains aucun mal, car tu es avec moi.",
      "author": "Psaume 23:4",
      "latin": "Nam et si ambulavero in valle umbrae mortis, non timebo mala, quoniam tu mecum es."
    },
    {
      "text": "Lave-moi, et je serai plus blanc que neige.",
      "author": "Psaume 51:9",
      "latin": "Lavabis me, et super nivem dealbabor."
    },
    {
      "text": "Crée en moi un cœur pur, ô Dieu.",
      "author": "Psaume 51:12",
      "latin": "Cor mundum crea in me, Deus."
    },
    {
      "text": "L'abîme appelle l'abîme.",
      "author": "Psaume 42:8",
      "latin": "Abyssus abyssum invocat."
    },
    {
      "text": "La pierre qu'ont rejetée les bâtisseurs est devenue la pierre d'angle.",
      "author": "Psaume 118:22",
      "latin": "Lapidem quem reprobaverunt aedificantes, hic factus est in caput anguli."
    },
    {
      "text": "Vanité des vanités, et tout est vanité.",
      "author": "Ecclésiaste 1:2",
      "latin": "Vanitas vanitatum, et omnia vanitas."
    },
    {
      "text": "Rien de nouveau sous le soleil.",
      "author": "Ecclésiaste 1:9",
      "latin": "Nihil novi sub sole."
    },
    {
      "text": "Il y a un temps pour tout.",
      "author": "Ecclésiaste 3:1",
      "latin": "Omnia tempus habent."
    },
    {
      "text": "L'homme ne vit pas seulement de pain.",
      "author": "Deutéronome 8:3",
      "latin": "Non in solo pane vivit homo."
    },
    {
      "text": "Œil pour œil, dent pour dent.",
      "author": "Exode 21:24",
      "latin": "Oculum pro oculo, dentem pro dente."
    },
    {
      "text": "Tu aimeras ton prochain comme toi-même.",
      "author": "Lévitique 19:18",
      "latin": "Diliges proximum tuum sicut teipsum."
    },
    {
      "text": "Soyez saints, car moi, le Seigneur votre Dieu, je suis saint.",
      "author": "Lévitique 19:2",
      "latin": "Sancti estote, quia ego sanctus sum, Dominus Deus vester."
    },
    {
      "text": "Voici, la jeune femme concevra et enfantera un fils.",
      "author": "Isaïe 7:14",
      "latin": "Ecce, virgo concipiet et pariet filium."
    },
    {
      "text": "Le peuple qui marchait dans les ténèbres a vu une grande lumière.",
      "author": "Isaïe 9:1",
      "latin": "Populus, qui ambulabat in tenebris, vidit lucem magnam."
    },
    {
      "text": "Préparez le chemin du Seigneur.",
      "author": "Isaïe 40:3",
      "latin": "Parate viam Domini."
    },
    {
      "text": "Mon âme exalte le Seigneur.",
      "author": "Luc 1:46",
      "latin": "Magnificat anima mea Dominum."
    },
    {
      "text": "Gloire à Dieu au plus haut des cieux, et paix sur la terre aux hommes qu'il aime.",
      "author": "Luc 2:14",
      "latin": "Gloria in altissimis Deo, et in terra pax hominibus bonae voluntatis."
    },
    {
      "text": "Maintenant, ô Maître souverain, tu peux laisser ton serviteur s'en aller en paix, selon ta parole.",
      "author": "Luc 2:29",
      "latin": "Nunc dimittis servum tuum, Domine, secundum verbum tuum in pace."
    },
    {
      "text": "Père, pardonne-leur, car ils ne savent pas ce qu'ils font.",
      "author": "Luc 23:34",
      "latin": "Pater, dimitte illis, non enim sciunt quid faciunt."
    },
    {
      "text": "En vérité, je te le dis, aujourd'hui tu seras avec moi dans le paradis.",
      "author": "Luc 23:43",
      "latin": "Amen dico tibi : Hodie mecum eris in paradiso."
    },
    {
      "text": "Père, entre tes mains je remets mon esprit.",
      "author": "Luc 23:46",
      "latin": "Pater, in manus tuas commendo spiritum meum."
    },
    {
      "text": "Au commencement était le Verbe, et le Verbe était avec Dieu, et le Verbe était Dieu.",
      "author": "Jean 1:1",
      "latin": "In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum."
    },
    {
      "text": "Et le Verbe s'est fait chair, et il a habité parmi nous.",
      "author": "Jean 1:14",
      "latin": "Et Verbum caro factum est et habitavit in nobis."
    },
    {
      "text": "Voici l'agneau de Dieu, qui enlève le péché du monde.",
      "author": "Jean 1:29",
      "latin": "Ecce agnus Dei, qui tollit peccatum mundi."
    },
    {
      "text": "Car Dieu a tant aimé le monde qu'il a donné son Fils unique.",
      "author": "Jean 3:16",
      "latin": "Sic enim dilexit Deus mundum, ut Filium suum unigenitum daret."
    },
    {
      "text": "La vérité vous rendra libres.",
      "author": "Jean 8:32",
      "latin": "Veritas liberabit vos."
    },
    {
      "text": "Je suis le bon berger.",
      "author": "Jean 10:11",
      "latin": "Ego sum pastor bonus."
    },
    {
      "text": "Je suis la résurrection et la vie.",
      "author": "Jean 11:25",
      "latin": "Ego sum resurrectio et vita."
    },
    {
      "text": "Je suis le chemin, la vérité et la vie.",
      "author": "Jean 14:6",
      "latin": "Ego sum via et veritas et vita."
    },
    {
      "text": "Que votre cœur ne se trouble point.",
      "author": "Jean 14:1",
      "latin": "Non turbetur cor vestrum."
    },
    {
      "text": "Aimez-vous les uns les autres comme je vous ai aimés.",
      "author": "Jean 15:12",
      "latin": "Hoc est praeceptum meum, ut diligatis invicem, sicut dilexi vos."
    },
    {
      "text": "Père, que tous soient un.",
      "author": "Jean 17:21",
      "latin": "Pater, ut omnes unum sint."
    },
    {
      "text": "Qu'est-ce que la vérité ?",
      "author": "Jean 18:38",
      "latin": "Quid est veritas ?"
    },
    {
      "text": "Voici l'homme.",
      "author": "Jean 19:5",
      "latin": "Ecce homo."
    },
    {
      "text": "Tout est accompli.",
      "author": "Jean 19:30",
      "latin": "Consummatum est."
    },
    {
      "text": "Ne me touche pas.",
      "author": "Jean 20:17",
      "latin": "Noli me tangere."
    },
    {
      "text": "Heureux les pauvres en esprit, car le royaume des cieux est à eux.",
      "author": "Matthieu 5:3",
      "latin": "Beati pauperes spiritu, quoniam ipsorum est regnum caelorum."
    },
    {
      "text": "Vous êtes le sel de la terre.",
      "author": "Matthieu 5:13",
      "latin": "Vos estis sal terrae."
    },
    {
      "text": "Vous êtes la lumière du monde.",
      "author": "Matthieu 5:14",
      "latin": "Vos estis lux mundi."
    },
    {
      "text": "Ne jugez pas, pour ne pas être jugés.",
      "author": "Matthieu 7:1",
      "latin": "Nolite iudicare, ut non iudicemini."
    },
    {
      "text": "Demandez, et l'on vous donnera ; cherchez, et vous trouverez ; frappez, et l'on vous ouvrira.",
      "author": "Matthieu 7:7",
      "latin": "Petite, et dabitur vobis ; quaerite, et invenietis ; pulsate, et aperietur vobis."
    },
    {
      "text": "Tu es Pierre, et sur cette pierre je bâtirai mon Église.",
      "author": "Matthieu 16:18",
      "latin": "Tu es Petrus, et super hanc petram aedificabo Ecclesiam meam."
    },
    {
      "text": "Rendez à César ce qui est à César, et à Dieu ce qui est à Dieu.",
      "author": "Matthieu 22:21",
      "latin": "Reddite ergo, quae sunt Caesaris, Caesari et, quae sunt Dei, Deo."
    },
    {
      "text": "Allez donc, de toutes les nations faites des disciples.",
      "author": "Matthieu 28:19",
      "latin": "Euntes ergo docete omnes gentes."
    },
    {
      "text": "Je suis avec vous tous les jours, jusqu'à la fin du monde.",
      "author": "Matthieu 28:20",
      "latin": "Et ecce ego vobiscum sum omnibus diebus usque ad consummationem saeculi."
    },
    {
      "text": "Allez par tout le monde, et prêchez la bonne nouvelle à toute la création.",
      "author": "Marc 16:15",
      "latin": "Euntes in mundum universum praedicate Evangelium omni creaturae."
    },
    {
      "text": "La foi vient de ce que l'on entend.",
      "author": "Romains 10:17",
      "latin": "Ergo fides ex auditu."
    },
    {
      "text": "Si Dieu est pour nous, qui sera contre nous ?",
      "author": "Romains 8:31",
      "latin": "Si Deus pro nobis, quis contra nos ?"
    },
    {
      "text": "Le juste vivra par la foi.",
      "author": "Romains 1:17",
      "latin": "Iustus autem ex fide vivit."
    },
    {
      "text": "Là où le péché a abondé, la grâce a surabondé.",
      "author": "Romains 5:20",
      "latin": "Ubi autem abundavit delictum, superabundavit gratia."
    },
    {
      "text": "Le salaire du péché, c'est la mort.",
      "author": "Romains 6:23",
      "latin": "Stipendia enim peccati mors."
    },
    {
      "text": "Rendez à tous ce qui leur est dû.",
      "author": "Romains 13:7",
      "latin": "Reddite omnibus debita."
    },
    {
      "text": "L'amour ne fait pas de mal au prochain.",
      "author": "Romains 13:10",
      "latin": "Dilectio proximo malum non operatur."
    },
    {
      "text": "Quand je suis faible, c'est alors que je suis fort.",
      "author": "2 Corinthiens 12:10",
      "latin": "Cum enim infirmor, tunc potens sum."
    },
    {
      "text": "Ma grâce te suffit.",
      "author": "2 Corinthiens 12:9",
      "latin": "Sufficit tibi gratia mea."
    },
    {
      "text": "Car nous marchons par la foi, et non par la vue.",
      "author": "2 Corinthiens 5:7",
      "latin": "Per fidem enim ambulamus et non per speciem."
    },
    {
      "text": "Il n'y a plus ni Juif ni Grec, il n'y a plus ni esclave ni homme libre, il n'y a plus ni homme ni femme ; car tous vous êtes un en Jésus Christ.",
      "author": "Galates 3:28",
      "latin": "Non est Iudaeus neque Graecus, non est servus neque liber, non est masculus et femina ; omnes enim vos unum estis in Christo Iesu."
    },
    {
      "text": "Portez les fardeaux les uns des autres.",
      "author": "Galates 6:2",
      "latin": "Alter alterius onera portate."
    },
    {
      "text": "J'ai combattu le bon combat, j'ai achevé la course, j'ai gardé la foi.",
      "author": "2 Timothée 4:7",
      "latin": "Bonum certamen certavi, cursum consummavi, fidem servavi."
    },
    {
      "text": "Celui qui trouve un ami trouve un trésor.",
      "author": "Siracide 6:14",
      "latin": "Amicus fidelis, protectio fortis ; qui autem invenit illum, invenit thesaurum."
    },
    {
      "text": "Une femme forte, qui la trouvera ?",
      "author": "Proverbes 31:10",
      "latin": "Mulierem fortem quis inveniet ?"
    },
    {
      "text": "La crainte du Seigneur est le commencement de la sagesse.",
      "author": "Proverbes 1:7",
      "latin": "Timor Domini principium sapientiae."
    },
    {
      "text": "Heureux l'homme qui a trouvé la sagesse.",
      "author": "Proverbes 3:13",
      "latin": "Beatus homo, qui invenit sapientiam."
    },
    {
      "text": "L'espérance différée rend le cœur malade.",
      "author": "Proverbes 13:12",
      "latin": "Spes, quae differtur, affligit animam."
    },
    {
      "text": "Confie-toi au Seigneur de tout ton cœur.",
      "author": "Proverbes 3:5",
      "latin": "Habe fiduciam in Domino ex toto corde tuo."
    },
    {
      "text": "Comme un père a compassion de ses enfants, le Seigneur a compassion de ceux qui le craignent.",
      "author": "Psaume 103:13",
      "latin": "Quomodo miseretur pater filiorum, misertus est Dominus timentibus se."
    },
    {
      "text": "Le Seigneur est proche de ceux qui ont le cœur brisé.",
      "author": "Psaume 34:19",
      "latin": "Iuxta est Dominus iis, qui contrito sunt corde."
    },
    {
      "text": "J'ai été jeune, j'ai vieilli, et je n'ai pas vu le juste abandonné.",
      "author": "Psaume 37:25",
      "latin": "Iunior fui et senui et non vidi iustum derelictum."
    },
    {
      "text": "Les cieux racontent la gloire de Dieu.",
      "author": "Psaume 19:2",
      "latin": "Caeli enarrant gloriam Dei."
    },
    {
      "text": "Auprès du Seigneur est la miséricorde.",
      "author": "Psaume 130:7",
      "latin": "Quia apud Dominum misericordia."
    },
    {
      "text": "La parole de Dieu est vivante et efficace.",
      "author": "Hébreux 4:12",
      "latin": "Vivus est enim sermo Dei et efficax."
    },
    {
      "text": "La foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.",
      "author": "Hébreux 11:1",
      "latin": "Est autem fides sperandorum substantia, rerum argumentum non apparentium."
    },
    {
      "text": "Dieu est amour.",
      "author": "1 Jean 4:8",
      "latin": "Deus caritas est."
    },
    {
      "text": "L'amour parfait bannit la crainte.",
      "author": "1 Jean 4:18",
      "latin": "Perfecta caritas foras mittit timorem."
    },
    {
      "text": "Moi, je suis l'Alpha et l'Oméga, dit le Seigneur Dieu.",
      "author": "Apocalypse 1:8",
      "latin": "Ego sum Alpha et Omega, dicit Dominus Deus."
    },
    {
      "text": "Voici, je me tiens à la porte, et je frappe.",
      "author": "Apocalypse 3:20",
      "latin": "Ecce sto ad ostium et pulso."
    },
    {
      "text": "Ne crains point, crois seulement.",
      "author": "Marc 5:36",
      "latin": "Noli timere, crede tantum."
    },
    {
      "text": "Que celui qui est sans péché parmi vous lui jette la première pierre.",
      "author": "Jean 8:7",
      "latin": "Qui sine peccato est vestrum, primus in illam lapidem mittat."
    },
    {
      "text": "Car là où est ton trésor, là aussi sera ton cœur.",
      "author": "Matthieu 6:21",
      "latin": "Ubi enim est thesaurus tuus, ibi est et cor tuum."
    },
    {
      "text": "Nul ne peut servir deux maîtres.",
      "author": "Matthieu 6:24",
      "latin": "Nemo potest duobus dominis servire."
    },
    {
      "text": "Cherchez premièrement le royaume de Dieu et sa justice.",
      "author": "Matthieu 6:33",
      "latin": "Quaerite ergo primum regnum Dei et iustitiam eius."
    },
    {
      "text": "A chaque jour suffit sa peine.",
      "author": "Matthieu 6:34",
      "latin": "Sufficit diei malitia sua."
    },
    {
      "text": "Car mon joug est doux, et mon fardeau léger.",
      "author": "Matthieu 11:30",
      "latin": "Iugum enim meum suave est, et onus meum leve est."
    },
    {
      "text": "Celui qui voudra sauver sa vie la perdra.",
      "author": "Matthieu 16:25",
      "latin": "Qui enim voluerit animam suam salvam facere, perdet eam."
    },
    {
      "text": "Ce que Dieu a uni, que l'homme ne le sépare pas.",
      "author": "Matthieu 19:6",
      "latin": "Quod ergo Deus iunxit, homo non separet."
    },
    {
      "text": "Les premiers seront les derniers, et les derniers seront les premiers.",
      "author": "Matthieu 20:16",
      "latin": "Sic erunt novissimi primi, et primi novissimi."
    },
    {
      "text": "Mon Dieu, mon Dieu, pourquoi m'as-tu abandonné ?",
      "author": "Matthieu 27:46",
      "latin": "Deus meus, Deus meus, ut quid dereliquisti me ?"
    },
    {
      "text": "Qui es-tu, Seigneur ?",
      "author": "Actes 9:5",
      "latin": "Quis es, Domine ?"
    },
    {
      "text": "Il y a plus de bonheur à donner qu'à recevoir.",
      "author": "Actes 20:35",
      "latin": "Beatius est magis dare quam accipere."
    },
    {
      "text": "Tout concourt au bien de ceux qui aiment Dieu.",
      "author": "Romains 8:28",
      "latin": "Diligentibus Deum omnia cooperantur in bonum."
    },
    {
      "text": "L'amour est patient, l'amour est serviable.",
      "author": "1 Corinthiens 13:4",
      "latin": "Caritas patiens est, benigna est."
    },
    {
      "text": "Maintenant donc demeurent la foi, l'espérance et la charité, ces trois-là ; mais la plus grande d'entre elles, c'est la charité.",
      "author": "1 Corinthiens 13:13",
      "latin": "Nunc autem manent fides, spes, caritas, tria haec ; maior autem horum est caritas."
    },
    {
      "text": "Ô mort, où est ta victoire ?",
      "author": "1 Corinthiens 15:55",
      "latin": "Ubi est, mors, victoria tua ?"
    },
    {
      "text": "Tout est permis, mais tout n'est pas utile.",
      "author": "1 Corinthiens 10:23",
      "latin": "Omnia licent, sed non omnia expediunt."
    },
    {
      "text": "Dieu résiste aux orgueilleux, mais il fait grâce aux humbles.",
      "author": "Jacques 4:6",
      "latin": "Deus superbis resistit, humilibus autem dat gratiam."
    },
    {
      "text": "Approchez-vous de Dieu, et il s'approchera de vous.",
      "author": "Jacques 4:8",
      "latin": "Appropinquate Deo, et appropinquabit vobis."
    },
    {
      "text": "La foi sans les œuvres est morte.",
      "author": "Jacques 2:26",
      "latin": "Fides sine operibus mortua est."
    },
    {
      "text": "Soyez sobres, veillez.",
      "author": "1 Pierre 5:8",
      "latin": "Sobrii estote, vigilate."
    },
    {
      "text": "Le salut de l'Éternel est dans le camp des justes.",
      "author": "Psaume 118:15",
      "latin": "Vox exsultationis et salutis in tabernaculis iustorum."
    },
    {
      "text": "Mieux vaut un jour dans tes parvis que mille ailleurs.",
      "author": "Psaume 84:11",
      "latin": "Quia melior est dies una in atriis tuis super milia."
    },
    {
      "text": "Mon aide vient du Seigneur, qui a fait le ciel et la terre.",
      "author": "Psaume 121:2",
      "latin": "Auxilium meum a Domino, qui fecit caelum et terram."
    },
    {
      "text": "Des profondeurs je crie vers toi, Seigneur.",
      "author": "Psaume 130:1",
      "latin": "De profundis clamavi ad te, Domine."
    },
    {
      "text": "J'élèverai la coupe du salut.",
      "author": "Psaume 116:13",
      "latin": "Calicem salutaris accipiam."
    },
    {
      "text": "Fais-moi connaître tes chemins, Seigneur.",
      "author": "Psaume 25:4",
      "latin": "Vias tuas, Domine, demonstra mihi."
    },
    {
      "text": "L'esprit est ardent, mais la chair est faible.",
      "author": "Matthieu 26:41",
      "latin": "Spiritus quidem promptus est, caro autem infirma."
    },
    {
      "text": "Que ta volonté soit faite.",
      "author": "Matthieu 6:10",
      "latin": "Fiat voluntas tua."
    },
    {
      "text": "Notre Père, qui es aux cieux.",
      "author": "Matthieu 6:9",
      "latin": "Pater noster, qui es in caelis."
    },
    {
      "text": "Pardonnez-nous nos offenses, comme nous pardonnons aussi à ceux qui nous ont offensés.",
      "author": "Matthieu 6:12",
      "latin": "Et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris."
    },
    {
      "text": "Ne nous soumets pas à la tentation.",
      "author": "Matthieu 6:13",
      "latin": "Et ne nos inducas in tentationem."
    },
    {
      "text": "Heureux ceux qui pleurent, car ils seront consolés.",
      "author": "Matthieu 5:4",
      "latin": "Beati, qui lugent, quoniam ipsi consolabuntur."
    },
    {
      "text": "Heureux les doux, car ils hériteront la terre.",
      "author": "Matthieu 5:5",
      "latin": "Beati mites, quoniam ipsi possidebunt terram."
    },
    {
      "text": "Heureux ceux qui ont faim et soif de la justice, car ils seront rassasiés.",
      "author": "Matthieu 5:6",
      "latin": "Beati, qui esuriunt et sitiunt iustitiam, quoniam ipsi saturabuntur."
    },
    {
      "text": "Heureux les miséricordieux, car ils obtiendront miséricorde.",
      "author": "Matthieu 5:7",
      "latin": "Beati misericordes, quia ipsi misericordiam consequentur."
    },
    {
      "text": "Heureux les cœurs purs, car ils verront Dieu.",
      "author": "Matthieu 5:8",
      "latin": "Beati mundo corde, quoniam ipsi Deum videbunt."
    },
    {
      "text": "Heureux les artisans de paix, car ils seront appelés fils de Dieu.",
      "author": "Matthieu 5:9",
      "latin": "Beati pacifici, quoniam filii Dei vocabuntur."
    },
    {
      "text": "Que votre 'oui' soit 'oui', que votre 'non' soit 'non'.",
      "author": "Matthieu 5:37",
      "latin": "Sit autem sermo vester: “Est, est”, “Non, non”."
    },
    {
      "text": "Aimez vos ennemis.",
      "author": "Matthieu 5:44",
      "latin": "Diligite inimicos vestros."
    },
    {
      "text": "Aime ton prochain comme toi-même.",
      "author": "Marc 12:31",
      "latin": "Diliges proximum tuum tamquam teipsum."
    },
    {
      "text": "La moisson est abondante, mais les ouvriers sont peu nombreux.",
      "author": "Luc 10:2",
      "latin": "Messis quidem multa, operarii autem pauci."
    },
    {
      "text": "Il n'y a rien de caché qui ne doive être découvert.",
      "author": "Luc 12:2",
      "latin": "Nihil autem opertum est, quod non reveletur."
    },
    {
      "text": "Réjouissez-vous de ce que vos noms sont écrits dans les cieux.",
      "author": "Luc 10:20",
      "latin": "Gaudete autem, quod nomina vestra scripta sunt in caelis."
    },
    {
      "text": "La paix soit avec vous.",
      "author": "Jean 20:19",
      "latin": "Pax vobis."
    },
    {
      "text": "Avance ton doigt ici, et vois mes mains.",
      "author": "Jean 20:27",
      "latin": "Infer digitum tuum huc et vide manus meas."
    },
    {
      "text": "Mon Seigneur et mon Dieu !",
      "author": "Jean 20:28",
      "latin": "Dominus meus et Deus meus !"
    },
    {
      "text": "Heureux ceux qui n'ont pas vu, et qui ont cru.",
      "author": "Jean 20:29",
      "latin": "Beati, qui non viderunt et crediderunt."
    },
    {
      "text": "Pais mes agneaux.",
      "author": "Jean 21:15",
      "latin": "Pasce agnos meos."
    },
    {
      "text": "Saul, Saul, pourquoi me persécutes-tu ?",
      "author": "Actes 9:4",
      "latin": "Saule, Saule, quid me persequeris ?"
    },
    {
      "text": "L'amour du Christ nous presse.",
      "author": "2 Corinthiens 5:14",
      "latin": "Caritas enim Christi urget nos."
    },
    {
      "text": "Revêtez-vous de toutes les armes de Dieu.",
      "author": "Éphésiens 6:11",
      "latin": "Induite vos armaturam Dei."
    },
    {
      "text": "Soyez toujours joyeux.",
      "author": "1 Thessaloniciens 5:16",
      "latin": "Semper gaudete."
    },
    {
      "text": "Priez sans cesse.",
      "author": "1 Thessaloniciens 5:17",
      "latin": "Sine intermissione orate."
    },
    {
      "text": "Rendez grâces en toutes choses.",
      "author": "1 Thessaloniciens 5:18",
      "latin": "In omnibus gratias agite."
    },
    {
      "text": "Examinez toutes choses ; retenez ce qui est bon.",
      "author": "1 Thessaloniciens 5:21",
      "latin": "Omnia autem probate ; quod bonum est, tenete."
    },
    {
      "text": "Le Seigneur est fidèle.",
      "author": "2 Thessaloniciens 3:3",
      "latin": "Fidelis est autem Dominus."
    },
    {
      "text": "Celui qui ne veut pas travailler, qu'il ne mange pas non plus.",
      "author": "2 Thessaloniciens 3:10",
      "latin": "Si quis non vult operari, nec manducet."
    },
    {
      "text": "Que la paix du Christ, à laquelle vous avez été appelés, règne dans vos cœurs.",
      "author": "Colossiens 3:15",
      "latin": "Et pax Christi, ad quam et vocati estis, exultet in cordibus vestris."
    },
    {
      "text": "Tout ce que vous faites, faites-le de bon cœur.",
      "author": "Colossiens 3:23",
      "latin": "Quodcumque facitis, ex animo operamini."
    },
    {
      "text": "Je puis tout en celui qui me fortifie.",
      "author": "Philippiens 4:13",
      "latin": "Omnia possum in eo, qui me confortat."
    },
    {
      "text": "Ne vous inquiétez de rien.",
      "author": "Philippiens 4:6",
      "latin": "Nihil solliciti sitis."
    },
    {
      "text": "Votre corps est le temple du Saint-Esprit.",
      "author": "1 Corinthiens 6:19",
      "latin": "Corpus vestrum templum est Spiritus Sancti."
    },
    {
      "text": "Les dons sont variés, mais c'est le même Esprit.",
      "author": "1 Corinthiens 12:4",
      "latin": "Divisiones vero gratiarum sunt, idem autem Spiritus."
    },
    {
      "text": "La lettre tue, mais l'esprit vivifie.",
      "author": "2 Corinthiens 3:6",
      "latin": "Littera enim occidit, Spiritus autem vivificat."
    },
    {
      "text": "Maintenant nous voyons comme dans un miroir, d'une manière confuse.",
      "author": "1 Corinthiens 13:12",
      "latin": "Videmus nunc per speculum in aenigmate."
    },
    {
      "text": "Les cheveux d'une femme sont sa gloire.",
      "author": "1 Corinthiens 11:15",
      "latin": "Mulier si comam nutriat, gloria est illi."
    },
    {
      "text": "Soyez mes imitateurs, comme je le suis moi-même de Christ.",
      "author": "1 Corinthiens 11:1",
      "latin": "Imitatores mei estote, sicut et ego Christi."
    },
    {
      "text": "Tout est pur pour ceux qui sont purs.",
      "author": "Tite 1:15",
      "latin": "Omnia munda mundis."
    },
    {
      "text": "Car le Seigneur châtie celui qu'il aime.",
      "author": "Hébreux 12:6",
      "latin": "Quem enim diligit Dominus, castigat."
    },
    {
      "text": "Jésus-Christ est le même hier, aujourd'hui, et éternellement.",
      "author": "Hébreux 13:8",
      "latin": "Iesus Christus heri et hodie, ipse et in saecula."
    },
    {
      "text": "Toute Écriture est inspirée de Dieu.",
      "author": "2 Timothée 3:16",
      "latin": "Omnis Scriptura divinitus inspirata."
    },
    {
      "text": "Prêche la parole, insiste à temps et à contretemps.",
      "author": "2 Timothée 4:2",
      "latin": "Praedica verbum, insta opportune, importune."
    },
    {
      "text": "Je sais en qui j'ai cru.",
      "author": "2 Timothée 1:12",
      "latin": "Scio enim, cui credidi."
    },
    {
      "text": "Ne crains point, petite troupe.",
      "author": "Luc 12:32",
      "latin": "Noli timere, pusillus grex."
    },
    {
      "text": "Les portes de l'enfer ne prévaudront point contre elle.",
      "author": "Matthieu 16:18",
      "latin": "Et portae inferi non praevalebunt adversus eam."
    },
    {
      "text": "Le sabbat a été fait pour l'homme, et non l'homme pour le sabbat.",
      "author": "Marc 2:27",
      "latin": "Sabbatum propter hominem factum est, et non homo propter sabbatum."
    },
    {
      "text": "Qui n'est pas avec moi est contre moi.",
      "author": "Matthieu 12:30",
      "latin": "Qui non est mecum, contra me est."
    },
    {
      "text": "La sagesse d'en haut est premièrement pure.",
      "author": "Jacques 3:17",
      "latin": "Quae autem de sursum est sapientia, primum quidem pudica est."
    },
    {
      "text": "La prière fervente du juste a une grande efficace.",
      "author": "Jacques 5:16",
      "latin": "Multum enim valet deprecatio iusti assidua."
    },
    {
      "text": "Soyez parfaits comme votre Père céleste est parfait.",
      "author": "Matthieu 5:48",
      "latin": "Estote ergo vos perfecti, sicut et Pater vester caelestis perfectus est."
    },
    {
      "text": "Les justes resplendiront comme le soleil.",
      "author": "Matthieu 13:43",
      "latin": "Tunc iusti fulgebunt sicut sol."
    },
    {
      "text": "La foi transporte les montagnes.",
      "author": "Matthieu 17:20",
      "latin": "Fides sicut granum sinapis."
    },
    {
      "text": "L'ouvrier mérite son salaire.",
      "author": "Luc 10:7",
      "latin": "Dignus est enim operarius mercede sua."
    },
    {
      "text": "Il s'est anéanti lui-même, prenant la condition de serviteur.",
      "author": "Philippiens 2:7",
      "latin": "Sed semetipsum exinanivit formam servi accipiens."
    },
    {
      "text": "Devant le nom de Jésus, tout genou fléchit.",
      "author": "Philippiens 2:10",
      "latin": "In nomine Iesu omne genu flectatur."
    },
    {
      "text": "Il est la tête du corps, de l'Église.",
      "author": "Colossiens 1:18",
      "latin": "Et ipse est caput corporis ecclesiae."
    },
    {
      "text": "C'est dans la tranquillité et le repos que sera votre salut.",
      "author": "Isaïe 30:15",
      "latin": "In silentio et in spe erit fortitudo vestra."
    },
    {
      "text": "L'Éternel est ma force et mon bouclier.",
      "author": "Psaume 28:7",
      "latin": "Dominus fortitudo mea et scutum meum."
    },
    {
      "text": "Le Seigneur est ma lumière et mon salut.",
      "author": "Psaume 27:1",
      "latin": "Dominus illuminatio mea et salus mea."
    },
    {
      "text": "Un cœur contrit et brisé, ô Dieu, tu ne le méprises pas.",
      "author": "Psaume 51:19",
      "latin": "Cor contritum et humiliatum, Deus, non despicies."
    },
    {
      "text": "Je chanterai éternellement les miséricordes du Seigneur.",
      "author": "Psaume 89:2",
      "latin": "Misericordias Domini in aeternum cantabo."
    },
    {
      "text": "Fais silence devant le Seigneur, et espère en lui.",
      "author": "Psaume 37:7",
      "latin": "Sile et exspecta Dominum."
    },
    {
      "text": "Que tout ce qui respire loue le Seigneur !",
      "author": "Psaume 150:6",
      "latin": "Omnis spiritus laudet Dominum !"
    }
  ]

  useEffect(() => {
    const showQuote = () => {
      const randomDelay = Math.random() * 15000 + 10000
      setTimeout(() => {
        setCurrentQuote(Math.floor(Math.random() * quotes.length))
        setIsVisible(true)
        
        setTimeout(() => {
          setIsVisible(false)
        }, 4000)
        
        showQuote()
      }, randomDelay)
    }

    showQuote()
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className="catholic-quote-notification"
          style={{
            animation: isVisible ? 'slideInNotification 0.6s ease-out forwards' : 'slideOutNotification 0.6s ease-out forwards'
          }}
        >
          <div className="quote-content">
            <p className="quote-text">"{quotes[currentQuote].text}"</p>
            <p className="quote-author">— {quotes[currentQuote].author}</p>
            {quotes[currentQuote].latin && (
              <p className="quote-latin">{quotes[currentQuote].latin}</p>
            )}
          </div>
          <div className="cross-symbol">✝</div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CatholicQuotes
