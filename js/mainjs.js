'use strict'
  // *****----Beginning of Vocabraly----*****
{
  const vocaset = [
    {d:'1:May 5', 
    v:['Take a crack at','rant','grumpy','get s.t out of your system','date around'],
    m:['Attempt','愚痴(more than vent)','testy','やり尽くして卒業した様','いろんな人と付き合う']},
    {d:'2:May 6', 
    v:['Tacky','Testy','Vindictive','lemon',' mixed signal'],
    m:['ダサい(in a taste or fashion way)','Grumpy','潔白を証明する','不良品','あいまいな']},
    {d:'3:May 10', 
    v:['Not cut it','insolent','on a whole nother level','dedicated','glitch'],
    m:['informal to not be good enough to do something','cheeky','totally different','someone who is dedicated works very hard at what they do because they care a lot about it','out of order']},
    {d:'4:May 14', 
    v:['sprained something','scrape','insect bite','pimple','blister'],
    m:['Twisted','擦る','虫刺され','にきび','水ぶくれ']},
    {d:'5:May 16', 
    v:['gut (feeling/instinct/reaction)','get by','not count someone out','on the go all day','make ends meet'],
    m:['勘','やりくりする(お金面)','重要な人','一日中、動き回る','支出のやりくりをする']},
    {d:'6:May 17', 
    v:['thaw','get it together','on track','guts','-fold'],
    m:['溶かす','しっかりする','進行中','ガッツ','~倍']},
    {d:'7:May 18', 
    v:['mollify','do out of spite','high-maintenance','Its so someone','devote oneself to'],
    m:['to make someone feel less angry and upset about something SYN placate','腹いせに','手のかかる','~だれだれみたい','～捧げる']},
    {d:'8:May 21', 
    v:['make something out of something','bundle up  SYN wrap up','once in blue moon','snug ','dominant'],
    m:['','','','','']},
    {d:'9:May 22', 
    v:['elephant in the room','even as ','I am hearing/seeing things','cutlery','dominish'],
    m:['','','','','']},
    {d:'10:May 23', 
    v:['cranky (testy, grumpy)','flip out (go mad)','surreal ','blow off steam','in return'],
    m:['','','','','']},
    {d:'11:May 24', 
    v:['take something out on me','repel','snug','on the spot','put an end'],
    m:['','','','','']},
    {d:'12:May 25', 
    v:['affluent(wealthy)','you got me','tell it like it is','snug (tight)','prejudice'],
    m:['','','','','']},
    {d:'13:May 26', 
    v:['botch (up)','get away with murder','grant ','acute ','once and for all'],
    m:['','','','','']},
    {d:'14:May 27', 
    v:['shroud','explicit','disparity in/between','based on ~','prevail'],
    m:['','','','','']},
    {d:'15:May 28', 
    v:['hell bent','trade off pv (for/against) ','tangle (up) ','twist (things)','peculiar'],
    m:['','','','','']},
    {d:'16:May 29', 
    v:["I'm torn between",'hook up','on the edge','intimate','tease'],
    m:['','','','','']},
    {d:'17:June 1', 
    v:["I'm still on the fence about",'hook up with ','bail on someone','vicious','timid'],
    m:['','','','','']},
    {d:'18:June 2', 
    v:['hook someone up with s.t / s.o','hurl (throw by force)','in spite of ',"I've been meaning to ",'suppose (assume)'],
    m:['','','','','']},
    {d:'19:June 6', 
    v:['Despite (the fact that) ','split up',"suppose (let's say)",'All but 2 something ','I found myself ~'],
    m:['','','','','']},
    {d:'20:June 7', 
    v:['in hot water','sloth (laziness) indolence','burgeon','uphold','benchmark'],
    m:['','','','','']},
    {d:'21:June 8', 
    v:['knock off','slouch','on thin ice','set in stone','impervious to'],
    m:['','','','','']},
    {d:'22:June 9', 
    v:['given','let off steam','inscrutable','sickening','keep someone company'],
    m:['','','','','']},
    {d:'23:June 10', 
    v:['burly','sissy ','detrimental to','scooch',"It's over my head"],
    m:['','','','','']},
    {d:'24:June 11', 
    v:['stand someone up ','hulk out','pull someone out of something','roundabout','nonchalant','cut to the chase'],
    m:['','','','','']},
    {d:'25:June 12', 
    v:['blatant','go right down the drain','off the top of my head','toxic','induce','ingratiant oneself'],
    m:['','','','','']},
    {d:'26:June 13', 
    v:['gingerly','diputise','Out of my hand','accordingly','come to think of it','give someone a nudge'],
    m:['','','','','']},
    {d:'27:June 15', 
    v:['correspnd','in a correspndence','supposedly','run through','blurt out (slip of the tounge)','scrutinize'],
    m:['','','','','']},
    {d:'28:June 16', 
    v:['fend for oneself','On a budget','Chew on s.t','Bug out','Deficiency '],
    m:['','','','','']},
    {d:'29:June 17', 
    v:['sketchy','P + the wee hours','photogenic','platitude','grapple with'],
    m:['vague','American English the early hours of the morning, just after 12 o’clock at night','','','']},
    {d:'30:June 18', 
    v:['at this ungodly hour','Squirm(wriggle)','Scoot (off)','With alacrity','Novelty'],
    m:['','','','','']},
    {d:'31:June 19', 
    v:['ever since','on and off','equivocal','complacency or complacent adj','clag up'],
    m:['','','','','']},
    {d:'32:June 20', 
    v:['fond of someone ','Pushover','Then and there','accrue','boggle ones mind'],
    m:['','','','','']},
    {d:'33:June 22', 
    v:['Plagiarism ','come back to bite me in the ass ','touch on','hit me','self-conscious'],
    m:['','','','','']},
    {d:'34:June 23', 
    v:['hit on ','rule out','Conceit','Circumlocution','I’m on a roll','Tiptoe around '],
    m:['','','','','']},
    {d:'35:June 24', 
    v:['Extravagant','Keep someone  mind off','The bottom line','Out of the blue','Abruptly','conspicuous'],
    m:['','','','','']},
    {d:'36:June 25', 
    v:['meddle','put someone on the spot','smell a rat','immerse oneself in something','dispirited','plausible'],
    m:['','','','','']},
    {d:'37:June 26', 
    v:['Intolerant','Incredulous','Sloppy',' I don’t really have a preference','Upbeat'],
    m:['','','','','']},
    {d:'38:June 27', 
    v:['Keep your nose clean','Give/get the cold shoulder','Wear your heart on your sleeve','Keep a Stiff upper lip','Intractable ','Personable'],
    m:['','','','','']},
    {d:'39:June 30', 
    v:['cover the cost with my own money','In a nutshell','have a thin skin','irresolute','drastic '],
    m:['','','','','']},
    {d:'40:July 1', 
    v:['have a thick skin ','To put it bluntly',"get under one's skin",'decrepit','Receptive'],
    m:['','','','','']},
    {d:'41:July 2', 
    v:['flatter myself that','let the cat out of the bag','think out of the box(think outside the box)','for just hell(heak) of it','Benevolently'],
    m:['','','','','']},
    {d:'42:July 3', 
    v:['Stall','Put someone up to something ','Has been better days','Bawl out','Efficacious '],
    m:['','','','','']},
    {d:'43:July 7', 
    v:['be all talk no action','old school','throw a fit','get carried away','tranquil','urbain'],
    m:['','','','','']},
    {d:'44:July 8', 
    v:['Sweep under the rug/ carpet','As though','Square up','Temperamental','Feasible ','Lousy'],
    m:['','','','','']},
    {d:'45:July 9', 
    v:['touch on','fair and square','follow suit','menacingly','lax'],
    m:['','','','','']},
    {d:'46:July 10', 
    v:['go with the flow','Follow through ','Not add up','Go over well','Equivocal '],
    m:['','','','','']},
    {d:'47:July 11', 
    v:['straightforward','heft','antagonize','Be in limbo','Get to do'],
    m:['','','','','']},
    {d:'48:July 12', 
    v:['harp on about ','pluck up courage',"have somr thing up one's sleeve",'preclude','expiate'],
    m:['','','','','']},
    {d:'49:July 13', 
    v:['To hell with ','Conspire ','First off','Flawless','Nominally ','Commonplace '],
    m:['','','','','']},
    {d:'50:July 14', 
    v:['Put~first','Get cold feet','Bold','At stake','Reticent','Jumbled '],
    m:['','','','','']},
    {d:'51:July 16', 
    v:['be far ooer','trigger','Seamless ','jumbled','lavish'],
    m:['','','','','']},
    {d:'52:July 17', 
    v:['Cocky','by the skin of my teeth','Flaky','Wary of','Capitulate ','Vanquish '],
    m:['','','','','']},
    {d:'53:July 21', 
    v:['susceptible','exponentially','indefinate','staggered','delineate','plausible'],
    m:['','','','','']},
    {d:'54:July 22', 
    v:['Reprimand ','Game-changing ','Boost','In the first place','Integrity '],
    m:['','','','','']},
    {d:'55:July 24', 
    v:['In the first place','stringent ','crystal ball','forgo','purvay'],
    m:['','','','','']},
    {d:'56:July 25', 
    v:['forgo','vigilant','shoplift','kill time','eschew'],
    m:['','','','','']},
    {d:'57:July 26', 
    v:['lenient','bothersome','thereby','trustworthy','worthwhile'],
    m:['','','','','']},
    {d:'58:July 28', 
    v:['worthwhile ','gruff', 'revert to','abide by','forthright' ],
    m:['','','','','']},
    {d:'59:July 30', 
    v:['viable','Buy time','relapse','exceptionally','shallow','waver'],
    m:['','','','','']},
    {d:'60:July 31', 
    v:['Keep something afloat','Reel v reeling(from) adj','Bustling with','Speculation ','Make a scean','exceptionally'],
    m:['','','','','']},
    {d:'61:Aug 1', 
    v:['Startle','Bust up','Say no more','Steadfast','Precarious ','come to light'],
    m:['','','','','']},
    {d:'62:Aug 24', 
    v:['Reticent ','Impede','Corny','Squander','Complacency/complacent'],
    m:['','','','','']},
    {d:'63:Aug 25', 
    v:['Light-hearted','Reticent','Adhere to','Boil down to ','My way around'],
    m:['','','','','']},
    {d:'64:Aug 26', 
    v:["put one's foot down",'corrode','plentiful','render something','ground situation/situation on the ground'],
    m:['','','','','']},
    {d:'65:Aug 27', 
    v:['readily','pernicious','in flux','aspiration','contingent'],
    m:['','','','','']},
    {d:'66:Aug 28', 
    v:['as a matter of fact','beats me','throw someone under the bus','be fond of someone','beef up'],
    m:['','','','','']},
    {d:'67:Sep 1', 
    v:['rat','pan out','pummel','flaunt','no strings attached'],
    m:['','','','','']},
    {d:'68:Sep 4', 
    v:['stamp out','to this day',"right under someone's nose",'hold someone accountable','grudgingly'],
    m:['','','','','']},
    {d:'69:Sep 5', 
    v:['lay bare','time frame','as hell','I can relate to something','Clutter'],
    m:['','','','','']},
    {d:'70:Sep 6', 
    v:['entail','futile','be accustomed to do','antithetical to something','On the flip side'],
    m:['','','','','']},
    {d:'71:Sep 7', 
    v:['frantic','rebellious','plow+ (Adv)','wealth of','Rocket science'],
    m:['','','','','']},
    {d:'72:Sep 8', 
    v:['Plow through',"(Don't) patronize someone",'rebellious','act up','be geared up for'],
    m:['','','','','']},
    {d:'73:Sep 9', 
    v:['paramount','circumvent','disregard','get up on the wrong side of the bed','be bogged down in'],
    m:['','','','','']},
    {d:'74:Sep 11', 
    v:['concoct','tough cookie','pleasently surprise','gut-wrenching','Agitate'],
    m:['','','','','']},
    {d:'75:Sep 13', 
    v:['buckle down to','fall out with','nod in agreement','perpetrate','eminent'],
    m:['','','','','']},
    {d:'76:Sep 14', 
    v:['nod of approval','snazzy',"work in one's favor",'depraved','deficiency'],
    m:['','','','','']},
    {d:'77:Sep 15', 
    v:['be highly regarded','be viewed as','belligerant','worn on','stand someone up'],
    m:['','','','','']},
    {d:'78:Sep 17', 
    v:['Mitigate','Not to be outdone','Relentless','Undeterred','Shudder'],
    m:['','','','','']},
    {d:'79:Sep 18', 
    v:['Outdo ','Shudder','worrisome','Unwitting ','Beef about'],
    m:['','','','','']},
    {d:'80:Sep 19', 
    v:['Outdo','In my defense ','I’ve been meaning to','Claw back','Out of my hand'],
    m:['','','','','']},
    {d:'81:Sep 20', 
    v:['Ease up on someone','For the long haul','Delve into','Hypocrite','Overstep'],
    m:['','','','','']},
    {d:'82:Sep 21', 
    v:['The moment has passed ','Sort out','Truancy ','Overthrow ','On par with'],
    m:['','','','','']},
    {d:'83:Sep 22', 
    v:['Ebullient ','Deputize for something','Thumbs up','Consensual ','Have someone back'],
    m:['','','','','']},
    {d:'84:Sep 23', 
    v:['Vengeful','Grill','Forthcoming ','Pay tribute to','Courageous '],
    m:['','','','','']},
    {d:'85:Sep 24', 
    v:['Maddening','Get laid ','On the fly','Spring up','Hail as'],
    m:['','','','','']},
    {d:'86:Sep 25', 
    v:['Topple','Internalize','Uptight','Think of the way that~','Nose around'],
    m:['','','','','']},
    {d:'87:Sep 26', 
    v:['Manhandle','Rack up','Nosy','Be preoccupied ','What do you make of'],
    m:['','','','','']},
    {d:'88:Sep 27', 
    v:["I can't unsee it",'sobriety','relent','deterrent (to)','fend for myself'],
    m:['','','','','']},
    {d:'89:Sep 30', 
    v:['Be revered as','Knack','Off the top of my head','Blaintly','Revoke'],
    m:['','','','','']},
    {d:'90:Oct 1', 
    v:['Discrepancy ','Own up to','Eradicate','Baseless','Agitate','specuration'],
    m:['','','','','']},
    {d:'91:Oct 2', 
    v:['Weed out','Crack down on','Undermine','Grasp at strew','Mellow'],
    m:['','','','','']},
    {d:'92:Oct 3', 
    v:['Stamp out','Prostitute ','Talk someone down','Account for','After the dust settles'],
    m:['','','','','']},
    {d:'93:Oct 5', 
    v:['Radical','Platonic','Comfort zone','Geek out over','Pair up'],
    m:['','','','','']},
    {d:'94:Oct 6', 
    v:['Clean freak','That’s more like it','Blast AC / heater','Backhanded compliment ','Unsanitary','pull someone out of something'],
    m:['','','','','']},
    {d:'95:Oct 7', 
    v:['Induce','Cursory','pull someone out of something','Dead pan face','Have an affinity for'],
    m:['','','','','']},
    {d:'96:Oct 8', 
    v:['inquisitive','Nail someone down to ','Rings a bell','Blank out','Judge a book by its cover'],
    m:['','','','','']},
    {d:'97:Oct 9', 
    v:['Nail  down','curtly','Take to someone’s ears off','flabbergusted','Blow money'],
    m:['','','','','']},
    {d:'98:Oct 11', 
    v:['seem off','introvert','across the board','lousy','Slack off'],
    m:['','','','','']},
    {d:'99:Oct 12', 
    v:['extravert','change the tide','a dog with the bone','cut corners','come clean','consume'],
    m:['','','','','']},
    {d:'100:Oct 13', 
    v:['vanilla','feign','uproot','rest up for','go for'],
    m:['','','','','']},
    {d:'101:Oct 14', 
    v:['This is something','prelude to ','cramped','unbearable','brown away','retain'],
    m:['','','','','']},
    {d:'102:Oct 15', 
    v:['resort to ','refer to ','lively','stick around','smooth sailing','pitch in'],
    m:['～手段を取る','look at/ be called','にぎやかな','ぶらぶらする','順風満帆','協力する']},
    {d:'103:Oct 17', 
    v:['just because','throw s.o off','spill the beans','opinionated','stick it out'],
    m:['','','','','']},
    {d:'104:Oct 18', 
    v:['tough it out','revamp','Keep someone mind off','Come on too strong ','Be a world away from '],
    m:['','','','','']},
    {d:'105:Oct 19', 
    v:['dont knock it until you try','Softie','Rave about','Opt out','Self control '],
    m:['実際にするまで否定するな','情にもろい人','to talk about something you enjoy or admire in an excited way','手を引く','自制心']},
    {d:'106:Oct 20', 
    v:['be intent on something','get to the point','get out of the woods','swing by','remorse'],
    m:['決意する','要するに','困難を乗り越える','～少し寄る','深い後悔']},
    {d:'107:Oct 21', 
    v:['contradictory','in this day and age','swamped','back in the day','hold in'],
    m:['','','','','']},
    {d:'108:Oct 22', 
    v:['bottle up','parameter','drop it','hammer out','patch up'],
    m:['','','','','']},
    {d:'109:Oct 23', 
    v:['seamless','at whim','go over well','go with the flow','spare no expence'],
    m:['','','','','']},
    {d:'110:Oct 24', 
    v:['arbitrary','in passing','tell me about a time when','antagonize','tantamount'],
    m:['','','','','']},
    {d:'111:Oct 26', 
    v:['immeasurable','depict','evasive','debacle','ghastly'],
    m:['','','','','']},
    {d:'112:Oct 27', 
    v:['groundless','unduly','strenuous','exasperate','mingle with'],
    m:['','','','','']},
    {d:'113:Oct 28', 
    v:['infer','flat out','immaculate','get around to ','go with'],
    m:['','','','','']},
    {d:'114:Oct 29', 
    v:['stir up','posthumously','rile up',"can't hurt",'reiterate'],
    m:[' to deliberately try to cause arguments or bad feelings between people','死後に','informal to make someone extremely angry','～しても問題ない','repeat']},
    {d:'115:Oct 30', 
    v:['rebut','lay it on me','murky','agitate','the jury is still out'],
    m:['','','','','']},
    {d:'116:Oct 31', 
    v:['come off','talk over someone','in the back of my head','go overboard','pervasive'],
    m:['','','','','']},
    {d:'117:Nov 1', 
    v:['jump in',"get one't feet wet",'while you are at it','No strings attached','cocky'],
    m:['','','','','']},
    {d:'118:Nov 2', 
    v:['roll out','plug away at','play it by ear','align with','digress'],
    m:['','','','','']},
    {d:'119:Nov 3', 
    v:['establish oneself as','iron out','in my book','pervasive','dodge'],
    m:['','','','','']},
    {d:'120:Nov 4', 
    v:['rip off','mediocer','wade in/through','get no service','extenuating circumstances'],
    m:['','','','','']},
    {d:'121:Nov 5', 
    v:['govern','sizeable','silver lining','blab to','quote unquote'],
    m:['','','','','']},
    {d:'122:Nov 6', 
    v:['takeaway','level with','trespass','from day to day','complicity'],
    m:['','','','','']},
    {d:'123:Nov 7', 
    v:['variaty of','Fallback','go through the roof ','disastrous','glorify'],
    m:['','','','','']},
    {d:'124:Nov 9', 
    v:['if you ask me','pick up on','with that being said','at (Time) sharp','laid-back adj'],
    m:['言うならば','気が付く','そうは言ったものの/ということで','ちょうど～時','落ち着いている']},
    {d:'125:Nov 10', 
    v:['fall back on','perpetrate','outside of','honorific','elucidate'],
    m:['頼る','commit','~以外に','敬語','clarify']},
    {d:'126:Nov 11', 
    v:['valger','feel someone out','drop the F bomb','unapologetic','pragmatic'],
    m:['','','','','']},
    {d:'127:Nov 12', 
    v:['stave off','fastedious','by all means','fly off the handle','belittle'],
    m:['','','','','']},
    {d:'128:Nov 13', 
    v:['overreach oneself','it behooves somenone to do something','doozy ','dubious','bark up the wrong tree'],
    m:['','','','','']},
    {d:'129:Nov 14', 
    v:['cagey','stash away','on the same page','spit it out','kiss up to '],
    m:['','','','','']},
    {d:'130:Nov 15', 
    v:['Back in','silver bullet','dry up','read s.t/s.o','abhor'],
    m:['','','','','']},
    {d:'131:Nov 16', 
    v:['grubby','impertial','two-faced','stranded','concede'],
    m:['','','','','']},
    {d:'132:Nov 18', 
    v:['dauting','aboveboard','rotate','call in sick','tweak'],
    m:['','','','','']},
    {d:'133:Nov 19', 
    v:['distractedly','imterminable','leeway','throw out something','go the extra miles '],
    m:['anxious and unable to think clearly','endless',' freedom to do things in the way you want to','to make someone leave a place, school, or organization, especially because they have done something that is against the rules','make effort more']},
    {d:'134:Nov 20', 
    v:['crystal clear','flurry','wrap s.t up','on pins and needles',"I'm booked solid"],
    m:['','','','','']},
    {d:'135:Nov 21', 
    v:['cohesive','insidious','bend over backwards','fead','the apple of ones eyes'],
    m:['','','','','']},
    {d:'136:Nov 22', 
    v:['suave','bum out','wanton','ground yourself','right as rain '],
    m:['','','','','']},
    {d:'137:Nov 25', 
    v:['exhaustive','a little birdie told me','work in ones havor','flat-out','in a bind'],
    m:['','','','','']},
    {d:'138:Nov 26', 
    v:['expediant','intuitive','it just so happens that','go about','if anything','Trustworthy'],
    m:['','','','','']},
    {d:'139:Nov 27', 
    v:['pretentious','throw in the towel','indiscreminate','a big cheese','outlast'],
    m:['','','','','']},
    {d:'140:Nov 28', 
    v:['resort to ','milestone','seemingly','do a double take','rig'],
    m:['','','','','']},
    {d:'141:Nov 29', 
    v:['downplay','hairy','endeavor','single out ','procure'],
    m:['','','','','']},
    {d:'142:Nov 30', 
    v:['freeze up','obtuse','lucrative','tame','fume about'],
    m:['','','','','']},
    {d:'143:Dec 1', 
    v:['assemble','loosen up',"Now you're talking",'obliterate','egg someone on something'],
    m:['','','','','']},
    {d:'144:Dec 2', 
    v:['out of juece','at the age of','take s.t back','pop up','presumptuous'],
    m:['','','','','']},
    {d:'145:Dec 3', 
    v:['replenish','subject to something','brand s.o as','blow over','invincible'],
    m:['','','','','']},
    {d:'146:Dec 4', 
    v:['block out','lurid ','does not seem right','prank',"make s.o sick to one's stomache"],
    m:['','','','','']},
    {d:'147:Dec 5', 
    v:['from that time forward/on','hop on','lag behind','(feel)sick to ones stomache','be underway'],
    m:['','','','','']},
    {d:'148:Dec 6', 
    v:['(have/hit/go through) a dry spell','before long','nose out','abet','long stretch'],
    m:['','','','','']},
    {d:'149:Dec 7', 
    v:['claw back','fall back on','one way or the other','on a regular basis','beat around the bush'],
    m:['','','','','']},
    {d:'150:Dec 8', 
    v:['knuckle down','keep after','pull a prank on s.o','clear ones mind','hint at'],
    m:['','','','','']},
    {d:'151:Dec 9', 
    v:['get s.t across to s.o','pin down','trick','few and far between in','off-limits'],
    m:['','','','','']},
    {d:'152:Dec 10', 
    v:['off-hours','keep to oneself','see the light at the end of the tunnel','facetious','you would think'],
    m:['','','','','']},
    {d:'153:Dec 11', 
    v:['pass off s.t as s.t','lay it on thick','hold up','have come to like s.t','give the green light'],
    m:['','','','','']},
    {d:'154:Dec 12', 
    v:['opt for','kick up','(go/take/choose)route',"that's the story of ones life",'toasty'],
    m:['','','','','']},
    {d:'155:Dec 13', 
    v:['have grown to do ','get s.t down','crank up','do binge','latecomer'],
    m:['','','','','']},
    {d:'156:Dec 14', 
    v:['rabbit hole','hungry for','up-and-coming','in/into mode','cliche'],
    m:['','','','','']},
    {d:'157:Dec 15', 
    v:['block out','long shot','give or take','a good (time)','procrastinate'],
    m:['','','','','']},
    {d:'158:Dec 16', 
    v:['wierdly/strangely enough','groggy','run in the family','dawdle','demean'],
    m:['','','','','']},
    {d:'159:Dec 17', 
    v:['my thing','think it through/think through it','dampen (down)','break the circle','set back'],
    m:['','','','','']},
    {d:'160:Dec 21', 
    v:['deviate','queasy','before you know it','dole out to','time of day'],
    m:['','','','','']},
    {d:'161:Dec 22', 
    v:['not give s.o time of day','underscore','take s.t with a grain of salt','rig','steer clear of'],
    m:['','','','','']},
    {d:'162:Dec 23', 
    v:['detract from','alleviate','overcast','in a/ get a/ a)running start','now that you mantion it'],
    m:['','','','','']},
    {d:'163:Dec 26', 
    v:['entice','in a matter of days','hold back','lead up to','draw back'],
    m:['','','','','']},
    {d:'164:Dec 27', 
    v:['ubiquitous','disparage','pick up','besides','pack up and go'],
    m:['','','','','']},
    {d:'165:Dec 28', 
    v:['push back','resonate','get in habit of','recap','suit yourself'],
    m:['','','','','']},
    {d:'166:Dec 29', 
    v:['push forward','over-the-top','Rub off on','(get) stale','goal-oriented'],
    m:['日付を前倒しにする','盛る','良い影響を与える',' air that is stale is not fresh or pleasant OPP fresh','目標志向']},
    {d:'167:Dec 31', 
    v:['action-oriented','as it stands','use time wisely','requisite','get the picture'],
    m:['','','','','']},
    {d:'168:Jan 6', 
    v:['spill the beans','detail-orianted','paper over','in the maiking','emancipate'],
    m:['','','','','']},
    {d:'169:Jan 7', 
    v:['go by ','kill the mood','red flag','badger','debunk'],
    m:['','','','','']},
    {d:'170:Jan 8', 
    v:['acquire ','have an affinity','leave behind','there is no point in','in ones presence'],
    m:['','','','','']},
    {d:'171:Jan 10', 
    v:['hoax','hard up','make ends meet','mind-boggling','Vernacular'],
    m:['','','','','']},
    {d:'172:Jan 13', 
    v:['ostensible','adamant','commensurate','succinct ','dissent '],
    m:['表向きの','頑固','～に釣り合った、見合った','concise','consent']},
    {d:'173:Jan 16', 
    v:['throw around','heedless','gullible','quick to do','mindset'],
    m:['(言葉が)よく使われている','不注意な','騙されやすい','すぐに・早い(何かをするのが)','マインド']},
    {d:'174:Jan 17', 
    v:['win over','frugal','erroneous','wear ones heart on ones sleeve','think back on'],
    m:['誰かを味方につける','thrifty','incorrect','感情を率直に表す','look back to/on']},
    {d:'175:Jan 18', 
    v:['derogatory','candid','sassy','from place to place','get out of ones way to do'],
    m:['軽蔑的な','率直な','生意気(cheeky)/活発的な','場所による','わざわざ道をそれて～をする']},
    {d:'176:Jan 19', 
    v:['above and beyond','nonchalant','spurious','treachrous','cringy'],
    m:['期待を超える','平然と','胡散臭い','不誠実な','イタイ']},
    {d:'177:Jan 20', 
    v:['devious','lethergic','retrieve','to some extent','bright and early'],
    m:['treacherous','slugish','get back','ある程度','早朝']},
    {d:'178:Jan 21', 
    v:['erratic','subdued','in the cards','dont hold your breath','high end s.t'],
    m:['不規則な','空気がよどんだ','likely to happen','期待しないで','高級な・高性能な']},
    {d:'179:Jan 22', 
    v:['heed','reminisce','perfunctory','think straight','be accustomed to'],
    m:['耳を傾ける','思い出にふける','おざなりな','まともに考える','習慣やライフスタイルなどに慣れている']},
    {d:'180:Jan 23', 
    v:['ameliorate','harsh','switch over to','one-shot','counter intuitive'],
    m:['improve','厳しい','切り替える','one-off','直観に反すること']},
    {d:'181:Jan 26', 
    v:['tied to','play dumb','likelier','drench','impair'],
    m:['','','','','']},
    {d:'182:Jan 27', 
    v:['get a taste of','overstate','revise','grimy','communal'],
    m:['','','','','']},
    {d:'183:Jan 28', 
    v:['transpose','embody','get the hang of','a chip on ones shoulder','backlash against/from '],
    m:['','','','','反発']},
    {d:'184:Jan 29', 
    v:['fit in','transcend','funky','on the fly','has something for everyone'],
    m:['','','','','']},
    {d:'185:Jan 30', 
    v:['hinder','over the course of','saturate','partial','hail down a cab'],
    m:['','','','','','']},
    {d:'186:Jan 31', 
    v:['breath-taking','amplify','grown up','run on no sleep','bombard'],
    m:['','','','','','']},
    {d:'187:Feb 1', 
    v:['a solid','Status quo','jostle','way around','cater to','ambivalence'],
    m:['','','','','','hestation']},
    {d:'188:Feb 2', 
    v:['which leads me to my next question','assemble','plot','sharp','But for'],
    m:['','','','','']},
    {d:'189:Feb 3', 
    v:['that about covers it','discreminatory','fraction of','bizzrre','in one go'],
    m:['','','','','']},
    {d:'190:Feb 5', 
    v:['all about','drawback','doable','put in work','leave up to'],
    m:['','','','','']},
    {d:'191:Feb 6', 
    v:['compunction ','know one way around','in my shues','talk around','push for'],
    m:['conscience','','','','keep after']},
    {d:'192:Feb 7', 
    v:['contradictory','on ones case','on paper','expansively','de facto'],
    m:['','','','','']},
    {d:'193:Feb 8', 
    v:['gratified','dish out','capricious','be on top of','walk the walk'],
    m:['','','','','']},
    {d:'194:Feb 9', 
    v:['egregious','copious','pertinent','that way','talk the talk','walk the walk'],
    m:['','','','','']},
    {d:'195:Feb 10', 
    v:['consequent','illicit','keep on the low','ferocious',"meet someone's expectation"],
    m:['','','','','']},
    {d:'196:Feb 11', 
    v:['frail','perks','look through','redundant','significant amount of'],
    m:['','','','','']},
    {d:'197:Feb 12 ', 
    v:['versatile','paid time off','lenient','love-hate-relationship','lurch'],
    m:['','','','','']},
    {d:'198:Feb 14', 
    v:['bank of question','cram','pick up','volatile',"meet one's expectation"],
    m:['','','','','']},
    {d:'199:Feb 15', 
    v:['pass the time','shy away from','middle of nowhere','whip up','start out with'],
    m:['','','','','']},
    {d:'200:Feb 16', 
    v:['devalue','a hit or miss','Slipped my mind','up until','put/lay/place emphasis on','gung-ho'],
    m:['','','','','']},
    {d:'201:Feb 18', 
    v:['evade','demean','essentially ','made for ','get bent out of shape'],
    m:['','','basiclly','cut out for','']},
    {d:'202:Feb 19', 
    v:['hassle','tenacious','imprudent',"say what's on ones mind",'off the cuff'],
    m:['','','','','']},
    {d:'203:Feb 22', 
    v:['a fine line between','spirit','prudent','take a toll on','speak ones mind'],
    m:['','','','','']},
    {d:'204:Feb 23', 
    v:['pushover','blemish','walk over someone','hold back','back down'],
    m:['','','','','']},
    {d:'205:Feb 24', 
    v:['get a head','fizzle out','brisk','age old','for reason'],
    m:['','','','','']},
    {d:'206:Feb 25', 
    v:['religiously','come down to','cynicle','keep food on the table','unblemished'],
    m:['','~次第・かかっている','','','']},
    {d:'207:Feb 26', 
    v:['fad','aside from','conscription','get/be shufted','blood, sweat and tears','corporate people'],
    m:['','','','','']},
    {d:'208:Feb 27', 
    v:['come from ~ background','be burned out','thrive','live by','uncalled for'],
    m:['','','','','']},
    {d:'209:Mar 3', 
    v:['','','','',''],
    m:['','','','','']},
  ];

  // *****----End of Vocabraly----*****

  const numbers = [];
  for (let i = 0; i < 209; i++){
    numbers[i] = i + 1;
  }

  let currentnum = 0;
  let isWordson = false;
  const pickcontainer = document.getElementById('pickcontainer');
  const number = document.getElementById('number');
  const words = document.getElementById('words');
  const today = new Date();
  const btn = document.getElementById('btn');
  const meanscontainer = document.getElementById('meanscontainer');
  const means = document.getElementById('means');

  function setWords(){
    while(words.firstChild){
      words.removeChild(words.firstChild);
    }

    const info = document.getElementById('info');
    const date = document.getElementById('date');
    info.textContent = vocaset[currentnum].d;
    date.textContent = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`
    const getVoca = [...vocaset[currentnum].v];
    
    getVoca.forEach(eachVoca => {
      const li = document.createElement('li');
      li.textContent = eachVoca;
      
      words.appendChild(li);
    });
  }

  function setMeans(){
    while(means.firstChild){
      means.removeChild(means.firstChild);
    }

    const getMean = [...vocaset[currentnum].m]
    getMean.forEach(mean => {
      const dif = document.createElement('li')
      dif.textContent = mean;

      means.appendChild(dif);
    });
  }

  pickcontainer.addEventListener('click', () =>{
    currentnum = Math.floor(Math.random() * numbers.length);
    number.textContent = currentnum;
    btn.classList.remove('disabled');

    setWords();
    setMeans();
  });

  btn.addEventListener('click', () =>{
    if(btn.classList.contains('disabled')){
      return;
    }

    if (meanscontainer.classList.contains('hidden')){
      meanscontainer.classList.remove('hidden');
      btn.textContent = 'Close';
    }else{
      meanscontainer.classList.add('hidden');
      btn.textContent = 'Show difinitions';
    }
  });

}