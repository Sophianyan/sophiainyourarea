"use strict";
//mini-challenge stuff:
class MiniChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["wigs with "] = 0] = "wigs with ";
            desc1[desc1["a quiz about "] = 1] = "a quiz about ";
            desc1[desc1["nails with "] = 2] = "nails with ";
            desc1[desc1["a competition about "] = 3] = "a competition about ";
            desc1[desc1["a song about "] = 4] = "a song about ";
            desc1[desc1["make-up tutorials with "] = 5] = "make-up tutorials with ";
            desc1[desc1["make a quick look about "] = 6] = "make a quick look about ";
            desc1[desc1["a photoshoot about "] = 7] = "a photoshoot about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["the pitcrew."] = 0] = "the pitcrew.";
            desc2[desc2["a partner."] = 1] = "a partner.";
            desc2[desc2["noodles."] = 2] = "noodles.";
            desc2[desc2["hip pads."] = 3] = "hip pads.";
            desc2[desc2["balls."] = 4] = "balls.";
            desc2[desc2["past Drag Race contestants"] = 5] = "past Drag Race contestants";
            desc2[desc2["a celebrity."] = 6] = "a celebrity.";
        })(desc2 || (desc2 = {}));
        //reading and puppet challenges:
        if (totalCastSize >= 10 && currentCast.length == 7 && !all_stars || currentCast.length == totalCastSize && (all_stars || lipsync_assassin)) {
            description.innerHTML = "The library is open! In today's mini-challenge, the queens will read eachother!";
        }
        else if (totalCastSize != 5 && currentCast.length == 5) {
            description.innerHTML = "Bring in the puppets! The queens will parody eachother using puppets!";
        }
        else {
            description.innerHTML = "In today's mini-challenge, the queens will do " + desc1[randomNumber(0, 7)] + desc2[randomNumber(0, 6)];
        }
    }
    rankPerformances() {
        let screen = new Scene();
        let winner = currentCast[randomNumber(0, currentCast.length - 1)];
        screen.createImage(winner.image, "royalblue");
        screen.createBold(`${winner.getName()} won the mini-challenge!`);
    }
}
//challenge modifiers:
let actingChallengeCounter = 0;
let comedyChallengeCounter = 0;
let marketingChallengeCounter = 0;
let danceChallengeCounter = 0;
let designChallengeCounter = 0;
let improvChallengeCounter = 0;
var isDesignChallenge = false;
let rusicalCounter = false;
let ballCounter = false;
let girlGroupCounter = false;
let runwayChallengeCounter = false;
let makeoverCounter = false;
let snatchCounter = false;
let lastChallenge = '';
function miniChallenge() {
    let miniChallengeScreen = new Scene();
    miniChallengeScreen.clean();
    miniChallengeScreen.createHeader("Mini-challenge!");
    miniChallengeScreen.createParagraph("", "Description");
    let challenge = new MiniChallenge();
    challenge.rankPerformances();
    //deal with maxi chalenges:
    let challenges = ["actingChallenge()", "comedyChallenge()", "danceChallenge()", "designChallenge()", "improvChallenge()", "runwayChallenge()", "girlgroup()", "marketingChallenge()"];
    //remove from possible challenges list:
    if (actingChallengeCounter == 3)
        challenges.splice(challenges.indexOf("actingChallenge()"), 1);
    if (comedyChallengeCounter == 3)
        challenges.splice(challenges.indexOf("comedyChallenge()"), 1);
    if (danceChallengeCounter == 3)
        challenges.splice(challenges.indexOf("danceChallenge()"), 1);
    if (designChallengeCounter == 2)
        challenges.splice(challenges.indexOf("designChallenge()"), 1);
    if (improvChallengeCounter == 3)
        challenges.splice(challenges.indexOf("improvChallenge()"), 1);
    if (runwayChallengeCounter == 1)
        challenges.splice(challenges.indexOf("runwayChallenge()"), 1);
    if (girlGroupCounter == 1)
        challenges.splice(challenges.indexOf("girlgroup()"), 1);
    if (marketingChallengeCounter == 2)
        challenges.splice(challenges.indexOf("marketingChallenge()"), 1);
    createChallenge(challenges, miniChallengeScreen);
}
//GENERAL CHALLENGES:
class ActingChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["theather piece about "] = 0] = "theather piece about ";
            desc1[desc1["parody film about "] = 1] = "parody film about ";
            desc1[desc1["commercial about "] = 2] = "commercial about ";
            desc1[desc1["60's inspired film about "] = 3] = "60's inspired film about ";
            desc1[desc1["80's inspired film about "] = 4] = "80's inspired film about ";
			desc1[desc1["90's inspired film about "] = 5] = "90's inspired film about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["Crime."] = 0] = "Crime.";
            desc2[desc2["Phone Apps."] = 1] = "Phone Apps.";
            desc2[desc2["Social Media."] = 2] = "Social Media.";
            desc2[desc2["Cancel Culture."] = 3] = "Cancel Culture.";
            desc2[desc2["Gayness."] = 4] = "Gayness.";
            desc2[desc2["Celebrities."] = 5] = "Celebrities.";
            desc2[desc2["The Future."] = 6] = "The Future.";
			desc2[desc2["The Rainbow."] = 7] = "The Rainbow.";
			desc2[desc2["Country Queens."] = 8] = "Country Queens.";
            desc2[desc2["Queens in Space."] = 9] = "Queens in Space.";
            desc2[desc2["Queens Behind Bars."] = 10] = "Queens Behind Bars.";
            desc2[desc2["Lip-Sync Eleganza Extravaganza."] = 11] = "Lip-Sync Eleganza Extravaganza.";
            desc2[desc2["Scream Queens."] = 12] = "Scream Queens.";
            desc2[desc2["ShakesQueer."] = 13] = "ShakesQueer.";
            desc2[desc2["RuCo's Empire."] = 14] = "RuCo's Empire.";
			desc2[desc2["9021-HO."] = 15] = "9021-HO.";
			desc2[desc2["Breastworld."] = 16] = "Breastworld.";
            desc2[desc2["Good God Girl, Get Out."] = 17] = "Good God Girl, Get Out.";
            desc2[desc2["Gay's Anatomy."] = 18] = "Gay's Anatomy.";
            desc2[desc2["RuPaulmark Channel."] = 19] = "RuPaulmark Channel.";
            desc2[desc2["Henny, I Shrunk The Drag Queens!"] = 20] = "Henny, I Shrunk The Drag Queens!";
            desc2[desc2["She's A Super Tease."] = 21] = "She's A Super Tease.";
            desc2[desc2["Daytona Wind."] = 22] = "Daytona Wind.";
			desc2[desc2["Drama Queens."] = 23] = "Drama Queens.";
			desc2[desc2["Ru-Hollywood Stories."] = 24] = "Ru-Hollywood Stories.";
            desc2[desc2["Drag Movie Shequels."] = 25] = "Drag Movie Shequels.";
            desc2[desc2["My Best Squirrelfriend's Dragsmaids Wedding Trip."] = 26] = "My Best Squirrelfriend's Dragsmaids Wedding Trip.";
            desc2[desc2["Sex and the Kitty, Girl."] = 27] = "Sex and the Kitty, Girl.";
            desc2[desc2["RuMerican Horror Story: Coven Girls."] = 28] = "RuMerican Horror Story: Coven Girls.";
            desc2[desc2["Santa's School For Girls."] = 29] = "Santa's School For Girls.";
            desc2[desc2["Hollywood Inspirations."] = 30] = "Hollywood Inspirations.";
			desc2[desc2["Twins."] = 31] = "Twins.";
			desc2[desc2["Downton Draggy."] = 32] = "Downton Draggy.";
            desc2[desc2["BeastEnders."] = 33] = "BeastEnders.";
            desc2[desc2["Bra Wars."] = 34] = "Bra Wars.";
            desc2[desc2["The Squirrel Games."] = 35] = "The Squirrel Games.";
            desc2[desc2["Her-itage Moments."] = 36] = "Her-itage Moments.";
            desc2[desc2["Screech!"] = 37] = "Screech!";
            desc2[desc2["Whodunnit."] = 38] = "Whodunnit.";
			desc2[desc2["Básica o Cínica."] = 39] = "Básica o Cínica.";
			desc2[desc2["Caged Queens."] = 40] = "Caged Queens.";
            desc2[desc2["Queen Pour Cent."] = 41] = "Queen Pour Cent.";
            desc2[desc2["Mujeres Engañadas."] = 42] = "Mujeres Engañadas.";
            desc2[desc2["Zombies in Death Valley."] = 43] = "Zombies in Death Valley.";
            desc2[desc2["The Demons Blood."] = 44] = "The Demons Blood.";
            desc2[desc2["Exorsisters."] = 45] = "Exorsisters.";
            desc2[desc2["Dungeons and Dragons."] = 46] = "Dungeons and Dragons.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will act in a " + desc1[randomNumber(0, 5)] + desc2[randomNumber(0, 46)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].getActing();
        }
        sortPerformances(currentCast);
    }
}
function actingChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new ActingChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    actingChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Acting");
}
class ComedyChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["a comedy routine about "] = 0] = "a comedy routine about ";
            desc1[desc1["a roast about "] = 1] = "a roast about ";
            desc1[desc1["a parody commercial about "] = 2] = "a parody commercial about ";
            desc1[desc1["a parody trailer about "] = 3] = "a parody trailer about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["Love."] = 0] = "Love.";
            desc2[desc2["Crime."] = 1] = "Crime.";
            desc2[desc2["School."] = 2] = "School.";
            desc2[desc2["a popular TV series."] = 3] = "a popular TV series.";
            desc2[desc2["Drag Race."] = 4] = "Drag Race.";
            desc2[desc2["Past Drag Race Contestants."] = 5] = "Past Drag Race Contestants.";
            desc2[desc2["a famous drag queen."] = 6] = "a famous drag queen.";
			desc2[desc2["The Charisma, Uniqueness, Nerve and Talent."] = 7] = "The Charisma, Uniqueness, Nerve and Talent.";
            desc2[desc2["Draguation."] = 8] = "Draguation.";
            desc2[desc2["The Kennedy Davenport Center Honors Hall of Shade."] = 9] = "The Kennedy Davenport Center Honors Hall of Shade.";
            desc2[desc2["Pearly Gates."] = 10] = "Pearly Gates.";
            desc2[desc2["the other competitors."] = 11] = "the other competitors.";
            desc2[desc2["Brooke Lynn Hytes."] = 12] = "Brooke Lynn Hytes.";
            desc2[desc2["The Who-Knows Awards."] = 13] = "The Who-Knows Awards.";
			desc2[desc2["A Bottomless Brunch."] = 14] = "A Bottomless Brunch.";
            desc2[desc2["RuPaul."] = 15] = "RuPaul.";
            desc2[desc2["The DESPY Awards."] = 16] = "The DESPY Awards.";
            desc2[desc2["Ross Mathews."] = 17] = "Ross Mathews.";
            desc2[desc2["Michelle Visage."] = 18] = "Michelle Visage.";
            desc2[desc2["Carson Kressley."] = 19] = "Carson Kressley.";
            desc2[desc2["Sophia."] = 20] = "Sophia.";
			desc2[desc2["Iweo."] = 21] = "Iweo.";
            desc2[desc2["Yitzu."] = 22] = "Yitzu.";
            desc2[desc2["Trash Magic."] = 23] = "Trash Magic.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will participate in " + desc1[randomNumber(0, 3)] + desc2[randomNumber(0, 23)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getComedy();
        sortPerformances(currentCast);
    }
}
function comedyChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new ComedyChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    comedyChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Comedy");
}
class MarketingChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["a parody commercial about "] = 0] = "a parody commercial about ";
            desc1[desc1["a parody trailer about "] = 1] = "a parody trailer about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["love."] = 0] = "love.";
            desc2[desc2["sex."] = 1] = "sex.";
            desc2[desc2["crimes."] = 2] = "crimes.";
            desc2[desc2["schools."] = 3] = "schools.";
            desc2[desc2["a popular TV series."] = 4] = "a popular TV series.";
            desc2[desc2["Drag Race."] = 5] = "Drag Race.";
            desc2[desc2["Past Drag Race Contestants."] = 6] = "Past Drag Race Contestants.";
            desc2[desc2["Mac Viva-Glam."] = 7] = "Mac Viva-Glam.";
            desc2[desc2["a book."] = 8] = "a book.";
            desc2[desc2["work out."] = 9] = "work out.";
            desc2[desc2["Life, Liberty & Persuit of Style."] = 10] = "Life, Liberty & Persuit of Style.";
            desc2[desc2["albums."] = 11] = "albums.";
            desc2[desc2["Dragazines."] = 12] = "Dragazines.";
            desc2[desc2["perfumes."] = 13] = "perfumes.";
            desc2[desc2["a make up brand."] = 14] = "a make up brand.";
            desc2[desc2["politics."] = 15] = "politics.";
            desc2[desc2["pilots."] = 16] = "pilots.";
            desc2[desc2["dating apps."] = 17] = "dating apps.";
            desc2[desc2["Drag Con Panels."] = 18] = "Drag Con Panels.";
            desc2[desc2["a product."] = 19] = "a product.";
            desc2[desc2["drinks."] = 20] = "drinks.";
            desc2[desc2["Save A Queen."] = 21] = "Save A Queen.";
            desc2[desc2["Side Hustles."] = 22] = "Side Hustles.";
            desc2[desc2["a TikTok challenge."] = 23] = "a TikTok challenge.";
            desc2[desc2["Draglexa."] = 24] = "Draglexa.";
            desc2[desc2["a Law Firm."] = 25] = "a Law Firm.";
            desc2[desc2["an Eyeshadow Palette."] = 26] = "an Eyeshadow Palette.";
            desc2[desc2["their Hometowns."] = 27] = "their Hometowns.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will participate in " + desc1[randomNumber(0, 1)] + desc2[randomNumber(0, 27)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getMarketing();
        sortPerformances(currentCast);
    }
}
function marketingChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new MarketingChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    marketingChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Mark");
}
class GirlGroup {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["Break Up (Bye Bye)"] = 0] = "Break Up (Bye Bye)";
            desc1[desc1["Drag Up Your Life"] = 1] = "Drag Up Your Life";
            desc1[desc1["Sitting on a Secret"] = 2] = "Sitting on a Secret";
            desc1[desc1["Don't Funk it Up"] = 3] = "Don't Funk it Up";
            desc1[desc1["Everybody Say Love"] = 4] = "Everybody Say Love";
            desc1[desc1["You Don't Know Me"] = 5] = "You Don't Know Me";
            desc1[desc1["I'm That Bitch"] = 6] = "I'm That Bitch";
            desc1[desc1["I'm in Love!"] = 7] = "I'm in Love!";
            desc1[desc1["Not Sorry Aboot It"] = 8] = "Not Sorry Aboot It";
            desc1[desc1["Condragulations "] = 9] = "Condragulations";
            desc1[desc1["Phenomenon"] = 10] = "Phenomenon";
            desc1[desc1["UK Hun?"] = 11] = "UK Hun?";
            desc1[desc1["Queens Down Under"] = 12] = "Queens Down Under";
            desc1[desc1["Divas"] = 13] = "Divas";
            desc1[desc1["Show Up Queen"] = 14] = "Show Up Queen";
            desc1[desc1["B.D.E (Big Drag Energy)"] = 15] = "B.D.E (Big Drag Energy)";
            desc1[desc1["Bye Flop"] = 16] = "Bye Flop";
            desc1[desc1["Superstar"] = 17] = "Superstar";
            desc1[desc1["So Much Better Than You"] = 18] = "So Much Better Than You";
            desc1[desc1["Can I Get An Amen?"] = 19] = "Can I Get An Amen?";
            desc1[desc1["Oh No She Betta Don't!"] = 20] = "Oh No She Betta Don't!";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The remaining queens will record vocals and perform in a Girl Group number for the original song " + desc1[randomNumber(0, 20)] + ".";
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRumix();
        sortPerformances(currentCast);
    }
}
function girlgroup() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new GirlGroup();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    girlGroupCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Group");
}
class RunwayChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc;
        (function (desc) {
            desc[desc["Feathers."] = 0] = "Feathers.";
            desc[desc["Fascinator."] = 1] = "Fascinator.";
            desc[desc["Pink."] = 2] = "Pink.";
            desc[desc["purple."] = 3] = "Purple.";
            desc[desc["Caftan."] = 4] = "Caftan.";
            desc[desc["Trains."] = 5] = "Trains.";
            desc[desc["Yellow."] = 6] = "Yellow.";
            desc[desc["White."] = 7] = "White.";
            desc[desc["Black."] = 8] = "Black.";
            desc[desc["Ugly Dress."] = 9] = "Ugly Dress.";
            desc[desc["Naughty."] = 10] = "Naughty.";
            desc[desc["Crazy Sexy Cool."] = 11] = "Crazy Sexy Cool.";
            desc[desc["Country."] = 12] = "Country.";
            desc[desc["Phoenix."] = 13] = "Phoenix.";
            desc[desc["Silver."] = 14] = "Silver.";
            desc[desc["2 in 1."] = 15] = "2 in 1.";
            desc[desc["Surprise!"] = 16] = "Surprise!";
            desc[desc["Gold."] = 17] = "Gold.";
            desc[desc["Blue."] = 18] = "Blue.";
            desc[desc["Fish"] = 19] = "Fish";
            desc[desc["Butch."] = 20] = "Butch.";
            desc[desc["Amazon."] = 21] = "Amazon.";
            desc[desc["All That Glitters."] = 22] = "All That Glitters.";
            desc[desc["Facekini."] = 23] = "Facekini.";
            desc[desc["Zodiac Sign."] = 24] = "Zodiac Sign.";
            desc[desc["Spring."] = 25] = "Spring.";
            desc[desc["Fall."] = 26] = "Fall.";
            desc[desc["Caftan."] = 27] = "Caftan.";
            desc[desc["Plastique Fantastique."] = 28] = "Plastique Fantastique.";
            desc[desc["Goddess."] = 29] = "Goddess.";
            desc[desc["Club Kid."] = 30] = "Club Kid.";
            desc[desc["Retro."] = 31] = "Retro.";
            desc[desc["Rollergirls."] = 32] = "Rollergirls.";
            desc[desc["Country."] = 33] = "Country.";
            desc[desc["Candy."] = 34] = "Candy.";
            desc[desc["Chaps."] = 35] = "Chaps.";
            desc[desc["Mirror, Mirror."] = 36] = "Mirror, Mirror.";
            desc[desc["Circus."] = 37] = "Circus.";
            desc[desc["Latex."] = 38] = "Latex.";
            desc[desc["Denim & Diamonds."] = 39] = "Denim & Diamonds.";
            desc[desc["Rebellion."] = 40] = "Rebellion.";
            desc[desc["Divalicious."] = 41] = "Divalicious.";
            desc[desc["Trains."] = 42] = "Trains.";
            desc[desc["Flower."] = 43] = "Flower.";
            desc[desc["Pageant."] = 44] = "Pageant.";
            desc[desc["Futurism."] = 45] = "Futurism.";
            desc[desc["Hometown."] = 46] = "Hometown.";
            desc[desc["Favorite Gaga Look."] = 47] = "Favorite Gaga Look.";
            desc[desc["Double Trouble."] = 48] = "Double Trouble.";
            desc[desc["Gay Icon."] = 49] = "Gay Icon.";
            desc[desc["My Favourite Things."] = 50] = "My Favourite Things.";
            desc[desc["Born Naked."] = 51] = "Born Naked.";
            desc[desc["Who's Your Queen?."] = 52] = "Who's Your Queen?.";
            desc[desc["Sissy That Sidewalk."] = 53] = "Sissy That Sidewalk.";
            desc[desc["Day Time Drama Mama."] = 54] = "Day Time Drama Mama.";
            desc[desc["Night Time is the Right Time."] = 55] = "Night Time is the Right Time.";
            desc[desc["The Lady."] = 56] = "The Lady.";
            desc[desc["The Vamp."] = 57] = "The Vamp.";
            desc[desc["Power of Love."] = 58] = "Power of Love.";
            desc[desc["Rainbow After the Rain."] = 59] = "Rainbow After the Rain.";
            desc[desc["Sophia & Her Pussy."] = 60] = "Sophia & Her Pussy.";
            desc[desc["Yitzu's Pink Era."] = 61] = "Yitzu's Pink Era.";
            desc[desc["Death To All Of Them."] = 62] = "Death To All Of Them.";
        })(desc || (desc = {}));
        description.innerHTML = "The Queens will Bring it To The Runway! The Category is: " + desc[randomNumber(0, 62)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRunwayChallenge();
        sortPerformances(currentCast);
    }
}
function runwayChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new RunwayChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    let slay = currentCast.filter(function (queen) { return queen.performanceScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.performanceScore >= 26; });
    createRunwayDesc(slay, great, good, bad);
    challengeScreen.createButton("Proceed", "judging()");
    runwayChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Runway");
}
class DanceChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["The History of Disco."] = 0] = "The History of Disco.";
            desc1[desc1["RuPaul's biography."] = 1] = "RuPaul's biography.";
            desc1[desc1["Rival dance clubs."] = 2] = "Rival dance clubs.";
            desc1[desc1["WTF!: Wrestling's Trashiest Fighters."] = 3] = "WTF!: Wrestling's Trashiest Fighters.";
			desc1[desc1["The Black Swan: Why It Gotta Be Black?"] = 4] = "The Black Swan: Why It Gotta Be Black?";
            desc1[desc1["Prancing."] = 5] = "Prancing.";
            desc1[desc1["Cheerleaders."] = 6] = "Cheerleaders.";
            desc1[desc1["The Draglympics."] = 7] = "The Draglympics.";
			desc1[desc1["Dragoton."] = 8] = "Dragoton.";
            desc1[desc1["Ruets."] = 9] = "Ruets.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The queens will participate in a dance number about " + desc1[randomNumber(0, 9)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getDance();
        sortPerformances(currentCast);
    }
}
function danceChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new DanceChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    danceChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Dance");
}
class DesignChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["trash."] = 0] = "trash.";
            desc1[desc1["random items."] = 1] = "random items.";
            desc1[desc1["dollar store items."] = 2] = "dollar store items.";
            desc1[desc1["a specific color scheme."] = 3] = "a specific color scheme.";
            desc1[desc1["items inspired by past Drag Race contestants."] = 4] = "items inspired by past Drag Race contestants.";
            desc1[desc1["bags."] = 5] = "bags.";
            desc1[desc1["wigs."] = 6] = "wigs.";
            desc1[desc1["winter items."] = 7] = "winter items.";
            desc1[desc1["summer items."] = 8] = "summer items.";
			desc1[desc1["curtains."] = 9] = "curtains.";
            desc1[desc1["wedding dresses."] = 10] = "wedding dresses.";
            desc1[desc1["thrift store items and fabrics."] = 11] = "thrift store items and fabrics.";
            desc1[desc1["items inspired by a style of cake from a bakery."] = 12] = "items inspired by a style of cake from a bakery.";
            desc1[desc1["items they had looted from previous contestants dressed as 'zombies'."] = 13] = "items they had looted from previous contestants dressed as 'zombies'.";
            desc1[desc1["items they found whilst dumpster diving."] = 14] = "items they found whilst dumpster diving.";
            desc1[desc1["materials themed on a nude illusion."] = 15] = "materials themed on a nude illusion.";
            desc1[desc1["sea items."] = 16] = "sea items.";
            desc1[desc1["farm materials."] = 17] = "farm materials.";
			desc1[desc1["items ordered from online shopping."] = 18] = "items ordered from online shopping.";
            desc1[desc1["RuPaul's previous looks."] = 19] = "RuPaul's previous looks.";
            desc1[desc1["Plastic, Metal and Paper."] = 20] = "Plastic, Metal and Paper.";
            desc1[desc1["Rucycled items."] = 21] = "Rucycled items.";
            desc1[desc1["flowers."] = 22] = "flowers.";
            desc1[desc1["random fabric sponsored by My Ass-App."] = 23] = "random fabric sponsored by My Ass-App.";
        })(desc1 || (desc1 = {}));
        if (currentCast.length == 6 && makeoverCounter == false && team == false && currentCast != firstCast && currentCast != secondCast) {
            description.innerHTML = "It's the Makeover Challenge! The Queens will make everyday people their Drag Sisters!";
        }
        else
            description.innerHTML = "The queens will do outfits with " + desc1[randomNumber(0, 23)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getDesign();
        sortPerformances(currentCast);
    }
}
function designChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new DesignChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    isDesignChallenge = true;
    queensPerformances();
    designChallengeCounter++;
    if (currentCast.length == 6 && makeoverCounter == false && team == false && currentCast != firstCast && currentCast != secondCast) {
        episodeChallenges.push("Make");
        makeoverCounter = true;
    }
    else
        episodeChallenges.push("Design");
}
class ImprovChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["political debate."] = 0] = "political debate.";
            desc1[desc1["celebrity interview."] = 1] = "celebrity interview.";
            desc1[desc1["modern morning TV show."] = 2] = "modern morning TV show.";
            desc1[desc1["late-night TV show."] = 3] = "late-night TV show.";
            desc1[desc1["new Bossy Rossy episode."] = 4] = "new Bossy Rossy episode.";
            desc1[desc1["suggestive kids TV show."] = 5] = "suggestive kids TV show.";
            desc1[desc1["Bitchelor Show."] = 6] = "Bitchelor Show.";
            desc1[desc1["Jersey Justice Show."] = 7] = "Jersey Justice Show.";
            desc1[desc1["Diva Worship Talk-Show."] = 8] = "Diva Worship Talk-Show.";
            desc1[desc1["Talent Show for people with Little Talent."] = 9] = "Talent Show for people with Little Talent.";
            desc1[desc1["Drag Queen Spoof of The Celebrity Gossip and Drama Television Show."] = 10] = "Drag Queen Spoof of The Celebrity Gossip and Drama Television Show.";
            desc1[desc1["Pageant, the Miss Loose Jaw Pageant."] = 11] = "Pageant, the Miss Loose Jaw Pageant.";
            desc1[desc1["Intimate Chat Show called Pink Table Talk."] = 12] = "Intimate Chat Show called Pink Table Talk.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The Queens will Improvise in a " + desc1[randomNumber(0, 12)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getImprov();
        sortPerformances(currentCast);
    }
}
function improvChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new ImprovChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    improvChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Improv");
}
//TODO: team challenges here
//SPECIAL CHALLENGES:
class SnatchGame {
    generateDescription() {
        let description = document.querySelector("p#Description");
        description.innerHTML = "Today's maxi-challenge is... SNATCH GAME! The Queens will do Funny Celebrity Impersonations!";
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getSnatch();
    }
}
function snatchGame() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new SnatchGame();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    isDesignChallenge = false;
    snatchCounter = true;
    episodeChallenges.push("Snatch");
}
class Rusical {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc;
        (function (desc) {
            desc[desc["Social Media: The Unverified Rusical."] = 0] = "Social Media: The Unverified Rusical.";
            desc[desc["Halftime Headliners."] = 1] = "Halftime Headliners.";
            desc[desc["CindeRulla: The Rusical."] = 2] = "CindeRulla: The Rusical.";
            desc[desc["Under the Big Top."] = 3] = "Under the Big Top.";
            desc[desc["West End Wendys - The Rusical."] = 4] = "West End Wendys - The Rusical.";
            desc[desc["RuPaul's Music Carreer."] = 5] = "RuPaul's Music Carreer.";
            desc[desc["Shade: The Rusical."] = 6] = "Shade: The Rusical.";
            desc[desc["Glamazonian Airways."] = 7] = "Glamazonian Airways.";
            desc[desc["Bitch Perfect."] = 8] = "Bitch Perfect.";
            desc[desc["HERstory of The World."] = 9] = "HERstory of The World.";
            desc[desc["Kardashians: The Rusical."] = 10] = "Kardashians: The Rusical.";
            desc[desc["VH1 Divas Live."] = 11] = "VH1 Divas Live.";
            desc[desc["PharmaRusical."] = 12] = "PharmaRusical.";
            desc[desc["Cher: The Unauthorized Rusical."] = 13] = "Cher: The Unauthorized Rusical.";
            desc[desc["Trump: The Rusical."] = 14] = "Trump: The Rusical.";
            desc[desc["Madonna: The Unauthorized Rusical."] = 15] = "Madonna: The Unauthorized Rusical.";
            desc[desc["Máxima - The Rusical."] = 16] = "Máxima - The Rusical.";
            desc[desc["Rats: The Rusical."] = 17] = "Rats: The Rusical.";
            desc[desc["Glee: The Rusical."] = 18] = "Glee: The Rusical.";
            desc[desc["Lady Gaga: The Rusical."] = 19] = "Lady Gaga: The Rusical.";
            desc[desc["Lairy Poppins: The Rusical."] = 20] = "Lairy Poppins: The Rusical.";
            desc[desc["Hairspray: The Rusical."] = 21] = "Hairspray: The Rusical.";
            desc[desc["Burlesque: The Rusical."] = 22] = "Burlesque: The Rusical.";
            desc[desc["Sophia: The Furry Rusical."] = 23] = "Sophia: The Furry Rusical.";
        })(desc || (desc = {}));
        description.innerHTML = "Today's maxi-challenge is... THE RUSICAL! The Queens will do a musical about " + desc[randomNumber(0, 23)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRusical();
    }
}
function rusical() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new Rusical();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    isDesignChallenge = false;
    episodeChallenges.push("Rusical");
}
class Ball {
    generateDescription() {
        let description = document.querySelector("p#Description");
        if (randomNumber(0, 100) >= 35) {
            let balls = [
                {name: "Absolut Drag", themes: "Executive Realness, Swimsuit and Evening Gown Extravaganza"},
                {name: "Diva Awards", themes: "Teen Diva Awards, Diva D.C. Press Awards and Diva Hollywood Extravaganza Awards"},
                {name: "Hair", themes: "Historical Hair, Red Carpet Glamour and Fantasy Hair Extravaganza"},
                {name: "Money", themes: "Cocktail Attire After 5 and Evening Gown Eleganza"},
                {name: "Bitch", themes: "Daytime Dog Park, Pooch in a Purse and Canine Couture"},
                {name: "Sugar", themes: "Super Duper Sweet 16, Sugar Mama Executive Realness and Candy Couture"},
                {name: "Glitter", themes: "Banjee Girl Bling, CEO Platinum Card Executive Realness and Dripping In Jewels Eleganza"},
                {name: "Hello Kitty", themes: "Hello Kitty BFF Realnes and Hello Kitty Eleganza"},
                {name: "Book", themes: "Baby Drag Realness, That's My Mama Realness and Book Couture"},
                {name: "Gayest", themes: "Rainbow-She-Betta-Do, Sexy Unicorn and Village People Eleganza Extravaganza"},
                {name: "Last Ball on Earth", themes: "Alaskan Winter Realness, Miami Summer Realness and Martian Eleganza Extravaganza"},
                {name: "Monster", themes: "Trampy Trick or Treater, Witch, Please! and MILF Eleganza: Monster I'd Like to Freak"},
                {name: "Ball", themes: "Lady Baller, Basketball Wife Realness and Balls to the Wall Eleganza"},
                {name: "Bag", themes: "Mixed Bag, Money Bags and Bag Ball Eleganza"},
                {name: "Animal Print", themes: "Zebra Print Resort, Leopard Evening Wear and Animal Print Bridal Couture"},
                {name: "Red, White & Blue", themes: "Red Hot Resort, Evening Wear: All In White and Red, White & Blue Bridal Couture"},
                {name: "Dynamic Drag Duos", themes: "Secret Identity and Superhero vs Supervillain"},
                {name: "Pop Art", themes: "Soup Can Realness and Studio 54 Disco Eleganza"},
                {name: "Charles Family Backyard", themes: "Country Cousin Realness and Backyard Eleganza"},
                {name: "Blue", themes: "Blue Betta Work, Blue Jean Baby and Blue Ball Bonanza"},
                {name: "Realness of Fortune", themes: "Vanna White Realness, Before and After and Realness of Fortune Eleganza"},
                {name: "Great Outdoors", themes: "Happy Campers and Campfire Couture"},
                {name: "Fugly Beauty", themes: "Fugly Swimwear, Charity Shop Chic and Fugly, But Fashionable"},
                {name: "Snow", themes: "Executive Holiday Party Realness, Après the Après Ski: Icy Walk of Shame and Ice Queen Eh-Laganza!"},
                {name: "Sinner's", themes: "Sex, Drugs & Rock 'n' Roll, Ugly As Sin and Seven Deadly Sins"},
                {name: "Masquerade", themes: "Masc for Mascara, Incog-She-To and Masquerade Eleganza"},
                {name: "Spanish", themes: "España Siglo X, España Siglo XX and España Siglo XXX"},
                {name: "RuPaul", themes: "Kitty Girl, Butch Queen and You Wear It Well"},
                {name: "French", themes: "Ma France à moi, French Clichés and Festival de Cannes"},
                {name: "Shop Shop Ladies", themes: "Shop-ulence, She Buys Everything! and Divi Divas"},
            ];
            let number = randomNumber(0, balls.length - 1);
            description.innerHTML = "Today's challenge is... THE BALL! The " + balls[number].name + " Ball! And the Themes are: " + balls[number].themes + ".";
        } else {
            let desc1;
            (function (desc1) {
                desc1[desc1["Executive realness, "] = 0] = "Executive realness, ";
                desc1[desc1["Party night, "] = 1] = "Party night, ";
                desc1[desc1["Summer, "] = 2] = "Summer, ";
                desc1[desc1["Elegant, "] = 3] = "Elegant, ";
                desc1[desc1["Sweet 16, "] = 4] = "Sweet 16, ";
                desc1[desc1["Black and white, "] = 5] = "Black and white, ";
                desc1[desc1["Winter, "] = 6] = "Winter, ";
            })(desc1 || (desc1 = {}));
            let desc2;
            (function (desc2) {
                desc2[desc2["Antique, "] = 0] = "Antique, ";
                desc2[desc2["Rainbow, "] = 1] = "Rainbow, ";
                desc2[desc2["Rich, "] = 2] = "Rich, ";
                desc2[desc2["Space, "] = 3] = "Space, ";
                desc2[desc2["Wild, "] = 4] = "Wild, ";
                desc2[desc2["Water, "] = 5] = "Water, ";
                desc2[desc2["Swimsuit, "] = 6] = "Swimsuit, ";
            })(desc2 || (desc2 = {}));
            let desc3;
            (function (desc3) {
                desc3[desc3["Ice queen."] = 0] = "Ice queen.";
                desc3[desc3["Futuristic."] = 1] = "Futuristic.";
                desc3[desc3["Fire."] = 2] = "Fire.";
                desc3[desc3["Princess."] = 3] = "Princess.";
                desc3[desc3["Jewels."] = 4] = "Jewels.";
                desc3[desc3["Flowers."] = 5] = "Flowers.";
                desc3[desc3["Evening Gown Extravaganza."] = 6] = "Evening Gown Extravaganza.";
            })(desc3 || (desc3 = {}));
            description.innerHTML = "Today's maxi-challenge is... THE BALL! The Queens will bring three looks to The Runway! The Themes are: " + desc1[randomNumber(0, 6)] + desc2[randomNumber(0, 6)] + desc3[randomNumber(0, 6)];
        }
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getBall();
        sortPerformances(currentCast);
    }
}
function ball() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new Ball();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    isDesignChallenge = true;
    ballCounter = true;
    episodeChallenges.push("Ball");
}
class Rumix {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["Read U Wrote U."] = 0] = "Read U Wrote U.";
            desc1[desc1["Category Is."] = 1] = "Category Is.";
            desc1[desc1["Kitty Girl."] = 2] = "Kitty Girl.";
            desc1[desc1["American."] = 3] = "American.";
            desc1[desc1["Super Queen."] = 4] = "Super Queen.";
            desc1[desc1["Queens Everywhere."] = 5] = "Queens Everywhere.";
            desc1[desc1["Rock It (To The Moon)"] = 6] = "Rock It (To The Moon)";
            desc1[desc1["I Made It / Mirror Song / Losing is the New Winning."] = 7] = "I Made It / Mirror Song / Losing is the New Winning.";
            desc1[desc1["Clap Back."] = 8] = "Clap Back.";
            desc1[desc1["U Wear It Well."] = 9] = "U Wear It Well.";
            desc1[desc1["A Little Bit of Love."] = 10] = "A Little Bit of Love.";
            desc1[desc1["Lucky."] = 11] = "Lucky.";
            desc1[desc1["I'm a Winner, Baby."] = 12] = "I'm a Winner, Baby.";
            desc1[desc1["This Is Our Country."] = 13] = "This Is Our Country.";
            desc1[desc1["Hey Sis, It's Christmas."] = 14] = "Hey Sis, It's Christmas.";
            desc1[desc1["Queen of the North."] = 15] = "Queen of the North.";
            desc1[desc1["Catwalk."] = 16] = "Catwalk.";
            desc1[desc1["Blame It on the Edit."] = 17] = "Blame It on the Edit.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "Today's maxi-challenge is... the Rumix! The Queens will make a Verse and a Choreography for " + desc1[randomNumber(0, 17)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRumix();
    }
}
function rumix() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new Rumix();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    isDesignChallenge = false;
    episodeChallenges.push("Rumix");
}
class TalentShow {
    generateDescription() {
        let description = document.querySelector("p#Description");
        description.innerHTML = "In this maxi-challenge, The Queens will prove themselves in a Talent Show, where they Bring all they've got!";
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getTalentShow();
    }
}
function talentshow() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new TalentShow();
    challenge.generateDescription();
    challenge.rankPerformances();
    isDesignChallenge = true;
    queensPerformances();
    episodeChallenges.push("Talent");
}
//performance:
function queensPerformances() {
    let performanceScreen = new Scene();
    performanceScreen.createHorizontalLine();
    performanceScreen.createBigText("Queens' performances...");
    let slay = currentCast.filter(function (queen) { return queen.performanceScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.performanceScore >= 26 && queen.performanceScore < 31; });
    let flop = currentCast.filter(function (queen) { return queen.performanceScore >= 31 && queen.performanceScore < 36; });
    createPerformanceDesc(slay, great, good, bad, flop);
    if (isDesignChallenge == true || episodeChallenges[episodeChallenges.length - 1] == "Design")
        performanceScreen.createButton("Proceed", "judging()");
    else
        performanceScreen.createButton("Proceed", "runway()", "button2");
}
//runway:
function runway() {
    let runwayScreen = new Scene();
    runwayScreen.createHorizontalLine();
    let button2 = document.querySelector("button#button2");
    button2.remove();
    runwayScreen.createRightClick();
    runwayScreen.createBigText("Runway!");
    let desc;
    (function (desc) {
        desc[desc["Feathers."] = 0] = "Feathers.";
        desc[desc["Fascinator."] = 1] = "Fascinator.";
        desc[desc["Pink."] = 2] = "Pink.";
        desc[desc["purple."] = 3] = "Purple.";
        desc[desc["Caftan."] = 4] = "Caftan.";
        desc[desc["Trains."] = 5] = "Trains.";
        desc[desc["Yellow."] = 6] = "Yellow.";
        desc[desc["White."] = 7] = "White.";
        desc[desc["Black."] = 8] = "Black.";
        desc[desc["Ugly Dress."] = 9] = "Ugly Dress.";
        desc[desc["Naughty."] = 10] = "Naughty.";
        desc[desc["Crazy Sexy Cool."] = 11] = "Crazy Sexy Cool.";
        desc[desc["Country."] = 12] = "Country.";
        desc[desc["Phoenix."] = 13] = "Phoenix.";
        desc[desc["Silver."] = 14] = "Silver.";
        desc[desc["2 in 1."] = 15] = "2 in 1.";
        desc[desc["Surprise!"] = 16] = "Surprise!";
        desc[desc["Gold."] = 17] = "Gold.";
        desc[desc["Blue."] = 18] = "Blue.";
        desc[desc["Fish"] = 19] = "Fish";
        desc[desc["Butch."] = 20] = "Butch.";
        desc[desc["Amazon."] = 21] = "Amazon.";
        desc[desc["All That Glitters."] = 22] = "All That Glitters.";
        desc[desc["Facekini."] = 23] = "Facekini.";
        desc[desc["Zodiac Sign."] = 24] = "Zodiac Sign.";
        desc[desc["Spring."] = 25] = "Spring.";
        desc[desc["Fall."] = 26] = "Fall.";
        desc[desc["Caftan."] = 27] = "Caftan.";
        desc[desc["Plastique Fantastique."] = 28] = "Plastique Fantastique.";
        desc[desc["Goddess."] = 29] = "Goddess.";
        desc[desc["Club Kid."] = 30] = "Club Kid.";
        desc[desc["Retro."] = 31] = "Retro.";
        desc[desc["Rollergirls."] = 32] = "Rollergirls.";
        desc[desc["Country."] = 33] = "Country.";
        desc[desc["Candy."] = 34] = "Candy.";
        desc[desc["Chaps."] = 35] = "Chaps.";
        desc[desc["Mirror, Mirror."] = 36] = "Mirror, Mirror.";
        desc[desc["Circus."] = 37] = "Circus.";
        desc[desc["Latex."] = 38] = "Latex.";
        desc[desc["Denim & Diamonds."] = 39] = "Denim & Diamonds.";
        desc[desc["Rebellion."] = 40] = "Rebellion.";
        desc[desc["Divalicious."] = 41] = "Divalicious.";
        desc[desc["Trains."] = 42] = "Trains.";
        desc[desc["Flower."] = 43] = "Flower.";
        desc[desc["Pageant."] = 44] = "Pageant.";
        desc[desc["Futurism."] = 45] = "Futurism.";
        desc[desc["Hometown."] = 46] = "Hometown.";
        desc[desc["Favorite Gaga Look."] = 47] = "Favorite Gaga Look.";
        desc[desc["Double Trouble."] = 48] = "Double Trouble.";
        desc[desc["Gay Icon."] = 49] = "Gay Icon.";
        desc[desc["My Favourite Things."] = 50] = "My Favourite Things.";
        desc[desc["Born Naked."] = 51] = "Born Naked.";
        desc[desc["Who's Your Queen?."] = 52] = "Who's Your Queen?.";
        desc[desc["Sissy That Sidewalk."] = 53] = "Sissy That Sidewalk.";
        desc[desc["Day Time Drama Mama."] = 54] = "Day Time Drama Mama.";
        desc[desc["Night Time is the Right Time."] = 55] = "Night Time is the Right Time.";
        desc[desc["The Lady."] = 56] = "The Lady.";
        desc[desc["The Vamp."] = 57] = "The Vamp.";
        desc[desc["Power of Love."] = 58] = "Power of Love.";
        desc[desc["Rainbow After The Rain."] = 59] = "Rainbow After The Rain.";
    })(desc || (desc = {}));
    runwayScreen.createParagraph("The Queens will bring it to The Runway!");
    if (currentCast.length > 4)
        runwayScreen.createParagraph("The Theme is: " + desc[randomNumber(0, 59)]);
    else if (currentCast.length == 3 && top3 || currentCast.length == 5 && top4 || currentCast.length == 4 && (all_stars || lipsync_assassin) || currentCast.length == 2 && team)
        runwayScreen.createParagraph("The Theme is... Best Drag!");
    for (let i = 0; i < currentCast.length; i++)
        currentCast[i].getRunway();
    let slay = currentCast.filter(function (queen) { return queen.runwayScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.runwayScore >= 6 && queen.runwayScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.runwayScore >= 16 && queen.runwayScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.runwayScore >= 26; });
    createRunwayDesc(slay, great, good, bad);
    if (currentCast.length > 4)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 4 && (top3 || team))
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 3 && team)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 3 && (top3))
        runwayScreen.createButton("Proceed", "finaleJudging()");
    else if (currentCast.length == 4 && (all_stars || lipsync_assassin))
        runwayScreen.createButton("Proceed", "finaleASJudging()");
    else if (currentCast.length == 2 && team)
        runwayScreen.createButton("Proceed", "finaleTeamJudging()");
}
//helper functions
////create next challenge
function createChallenge(challenges, miniChallengeScreen) {
    //first design challenge for normal seasons
    if (currentCast.length == totalCastSize && top3 && s6Premiere == false || currentCast.length == totalCastSize && top4 && s6Premiere == false || currentCast.length == totalCastSize && team || sweatshop || currentCast == firstCast && s6Premiere || currentCast == secondCast && s6Premiere)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    //rumix challenge for s6 or porkchop premiere
    else if (premiereCounter <= 2 && (s12Premiere || porkchopPremiere))
        miniChallengeScreen.createButton("Proceed", "girlgroup()");
    //talent show for all stars
    else if (currentCast.length == totalCastSize && (all_stars || lipsync_assassin))
        miniChallengeScreen.createButton("Proceed", "talentshow()");
    //snatch game
    else if (totalCastSize >= 10 && currentCast.length == 9 && !team && snatchCounter == false || totalCastSize >= 6 && currentCast.length == 5 && team)
        miniChallengeScreen.createButton("Proceed", "snatchGame()");
    //the ball for the third competitive episode for lsftc seasons
    else if (currentCast.length == totalCastSize - 3 && top4 && !ballCounter)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //same but if above condition doesn't apply (example: snatch game needs to happen before the ball)
    else if (currentCast.length == totalCastSize - 4 && (top4 || (all_stars || lipsync_assassin) && randomNumber(0, 100) < 30) && !ballCounter || currentCast.length == 3 && team)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //rusical
    else if (currentCast.length > 6 && randomNumber(0, 20) == 20 && !rusicalCounter || currentCast.length > 5 && randomNumber(0, 20) == 20 && team && rusicalCounter == false)
        miniChallengeScreen.createButton("Proceed", "rusical()");
    //makeover
    else if (currentCast.length == 6 && (top3 || top4) && makeoverCounter == false || currentCast.length == 6 && randomNumber(0, 15) == 15 && (all_stars || lipsync_assassin) && makeoverCounter == false)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    //rumix
    else if (currentCast.length == 5 && top4 && (!smackdown || returningQueen == true))
        miniChallengeScreen.createButton("Proceed", "rumix()");
    //ball for top3 seasons
    else if (currentCast.length == 4 && top3 && !ballCounter)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //if no conditions apply, create random challenge
    else {
        let currentChallenge = challenges[randomNumber(0, challenges.length - 1)];
        if (currentChallenge === lastChallenge && currentCast.length != totalCastSize) {
            currentChallenge = challenges[randomNumber(0, challenges.length - 1)];
            lastChallenge = currentChallenge;
            miniChallengeScreen.createButton("Proceed", currentChallenge);
        }
        else {
            lastChallenge = currentChallenge;
            miniChallengeScreen.createButton("Proceed", currentChallenge);
        }
    }
}
////create performance descriptions
function createPerformanceDesc(slay, great, good, bad, flop) {
    let screen = new Scene();
    if (slay.length !== 0) {
        for (let i = 0; i < slay.length; i++)
            screen.createImage(slay[i].image, "darkblue");
        screen.createBold("", "slay");
        let slayText = document.getElementById("slay");
        for (let i = 0; i < slay.length; i++)
            slayText.innerHTML += `${slay[i].getName()}, `;
        slayText.innerHTML += "slayed the challenge!";
    }
    if (great.length !== 0) {
        for (let i = 0; i < great.length; i++)
            screen.createImage(great[i].image, "royalblue");
        screen.createBold("", "great");
        let greatText = document.getElementById("great");
        for (let i = 0; i < great.length; i++)
            greatText.innerHTML += `${great[i].getName()}, `;
        greatText.innerHTML += "had a great performance!";
    }
    if (good.length !== 0) {
        for (let i = 0; i < good.length; i++)
            screen.createImage(good[i].image);
        screen.createBold("", "good");
        let goodText = document.getElementById("good");
        for (let i = 0; i < good.length; i++)
            goodText.innerHTML += `${good[i].getName()}, `;
        goodText.innerHTML += "had a good performance.";
    }
    if (bad.length !== 0) {
        for (let i = 0; i < bad.length; i++)
            screen.createImage(bad[i].image, "pink");
        screen.createBold("", "bad");
        let badText = document.getElementById("bad");
        for (let i = 0; i < bad.length; i++)
            badText.innerHTML += `${bad[i].getName()}, `;
        badText.innerHTML += "had a bad performance...";
    }
    if (flop.length !== 0) {
        for (let i = 0; i < flop.length; i++)
            screen.createImage(flop[i].image, "tomato");
        screen.createBold("", "flop");
        let flopText = document.getElementById("flop");
        for (let i = 0; i < flop.length; i++)
            flopText.innerHTML += `${flop[i].getName()}, `;
        flopText.innerHTML += "flopped the challenge...";
    }
}
function createRunwayDesc(slay, great, good, bad) {
    let screen = new Scene();
    if (slay.length !== 0) {
        for (let i = 0; i < slay.length; i++) {
            screen.createImage(slay[i].image, "darkblue");
            slay[i].runwayScore = 10;
        }
        screen.createBold("", "slayR");
        let slayText = document.getElementById("slayR");
        for (let i = 0; i < slay.length; i++)
            slayText.innerHTML += `${slay[i].getName()}, `;
        slayText.innerHTML += "slayed the runway!";
    }
    if (great.length !== 0) {
        for (let i = 0; i < great.length; i++) {
            screen.createImage(great[i].image, "royalblue");
            great[i].runwayScore = 5;
        }
        screen.createBold("", "greatR");
        let greatText = document.getElementById("greatR");
        for (let i = 0; i < great.length; i++)
            greatText.innerHTML += `${great[i].getName()}, `;
        greatText.innerHTML += "had a great runway!";
    }
    if (good.length !== 0) {
        for (let i = 0; i < good.length; i++) {
            screen.createImage(good[i].image);
            good[i].runwayScore = 0;
        }
        screen.createBold("", "goodR");
        let goodText = document.getElementById("goodR");
        for (let i = 0; i < good.length; i++)
            goodText.innerHTML += `${good[i].getName()}, `;
        goodText.innerHTML += "had a good runway.";
    }
    if (bad.length !== 0) {
        for (let i = 0; i < bad.length; i++) {
            screen.createImage(bad[i].image, "pink");
            bad[i].runwayScore = -3;
        }
        screen.createBold("", "badR");
        let badText = document.getElementById("badR");
        for (let i = 0; i < bad.length; i++)
            badText.innerHTML += `${bad[i].getName()}, `;
        badText.innerHTML += "had a bad runway...";
    }
}
function addQueen() {
    let name = document.getElementById("queenName").value;
    let acting = document.getElementById("actingStat").valueAsNumber;
    let comedy = document.getElementById("comedyStat").valueAsNumber;
    let dance = document.getElementById("danceStat").valueAsNumber;
    let design = document.getElementById("designStat").valueAsNumber;
    let improv = document.getElementById("improvStat").valueAsNumber;
    let runway = document.getElementById("runwayStat").valueAsNumber;
    let lipsync = document.getElementById("lipsyncStat").valueAsNumber;
    if ((acting || comedy || dance || design || improv || runway || lipsync) < 0 || (acting || comedy || dance || design || improv || runway || lipsync) > 15) {
        window.alert("Queens' stats must be between 0 and 15!");
        return;
    }
    if (name == "" || isNaN((acting || comedy || dance || design || improv || runway || lipsync))) {
        window.alert("One of the boxes is empty!");
        return;
    }
    let customQueen = new Queen(name, acting, comedy, dance, design, improv, runway, lipsync);
    let sameName = false;
    for (let i = 0; i < allCustomQueens.length; i++)
        if (allCustomQueens[i].getName() == customQueen.getName()) {
            window.alert(`There's already a queen with the name ${customQueen.getName()}! Please use another name.`);
            sameName = true;
            break;
        }
    if (sameName == false) {
        allCustomQueens.push(customQueen);
        let announce = document.getElementById("announce-new");
        announce.innerHTML = `${customQueen.getName()} added to the queen list!`;
        localStorage.setItem("customQueens", JSON.stringify(allCustomQueens));
        setTimeout(() => {
            document.location.reload();
        }, 1500);
    }
}
function customQueenSelectList() {
    let select = document.getElementById("custom-remove");
    for (let i = 0; i < allCustomQueens.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = allCustomQueens[i].getName();
        option.value = i.toString();
        select.appendChild(option);
    }
}
function removeCustomQueen() {
    let select = document.getElementById("custom-remove");
    let index = parseInt(select.options[select.selectedIndex].value);
    let announce = document.getElementById("announce-remove");
    announce.innerHTML = `${allCustomQueens[index].getName()} removed from the queen list!`;
    allCustomQueens.splice(index, 1);
    localStorage.setItem("customQueens", JSON.stringify(allCustomQueens));
    setTimeout(() => {
        document.location.reload();
    }, 1500);
}
function randomizeStats() {
    let stats = document.getElementsByClassName("stats");
    for (let i = 0; i < stats.length; i++) {
        stats[i].value = randomNumber(0, 15).toString();
    }
}
let premiereCounter = 0;
let firstCast = [];
let secondCast = [];
function doublePremiere() {
    if (premiereCounter == 0)
        if (s6Premiere || s12Premiere) {
            shuffle(currentCast);
            firstCast = currentCast.splice(0, Math.floor(currentCast.length / 2));
            secondCast = [...currentCast];
        }
    if (premiereCounter == 0) {
        currentCast = firstCast;
        for (let i = 0; i < secondCast.length; i++)
            secondCast[i].addToTrackRecord("");
        premiereCounter++;
        newEpisode();
    }
    else if (premiereCounter == 1) {
        currentCast = secondCast;
        for (let i = 0; i < firstCast.length; i++)
            firstCast[i].addToTrackRecord("");
        premiereCounter++;
        newEpisode();
    }
    else if (premiereCounter == 2) {
        currentCast = [...firstCast, ...secondCast];
        premiereCounter++;
        newEpisode();
    }
}
function porkchopLipsyncs() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createParagraph("After the queens enter the workroom, it's time for them to lip-sync... for their lives!");
    for (let i = 0; i < Math.floor(totalCastSize / 2); i++) {
        screen.createHorizontalLine();
        let queen1 = currentCast[randomNumber(0, currentCast.length - 1)];
        currentCast.splice(currentCast.indexOf(queen1), 1);
        let queen2 = currentCast[randomNumber(0, currentCast.length - 1)];
        currentCast.splice(currentCast.indexOf(queen2), 1);
        if (currentCast.length == 1) {
            let queen3 = currentCast[randomNumber(0, currentCast.length - 1)];
            currentCast.splice(currentCast.indexOf(queen3), 1);
            screen.createImage(queen1.image, "royalblue");
            screen.createImage(queen2.image, "royalblue");
            screen.createImage(queen3.image, "royalblue");
            screen.createBold(`${queen1.getName()}, ${queen2.getName()} and ${queen3.getName()} will lipsync...`);
            lsSong();
            let lipSync = [queen1, queen2, queen3];
            for (let i = 0; i < lipSync.length; i++) {
                lipSync[i].getASLipsync();
            }
            lipSync.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
            queen1 = lipSync[0];
            queen2 = lipSync[1];
            queen3 = lipSync[2];
            screen.createImage(queen1.image, "green");
            screen.createBold(`${queen1.getName()}, shantay you stay!`);
            screen.createImage(queen2.image, "orange");
            screen.createImage(queen3.image, "orange");
            screen.createBold(`${queen2.getName()} and ${queen3.getName()}, you're getting the porkchop...`);
            queen1.addToTrackRecord(" WIN ");
            queen2.addToTrackRecord("LOSS");
            queen3.addToTrackRecord("LOSS");
            firstCast.push(queen1);
            secondCast.push(queen2, queen3);
        }
        else {
            screen.createImage(queen1.image, "royalblue");
            screen.createImage(queen2.image, "royalblue");
            screen.createBold(`${queen1.getName()} and ${queen2.getName()} will lipsync...`);
            lsSong();
            let lipSync = [queen1, queen2];
            for (let i = 0; i < lipSync.length; i++) {
                lipSync[i].getASLipsync();
            }
            lipSync.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
            queen1 = lipSync[0];
            queen2 = lipSync[1];
            screen.createImage(queen1.image, "green");
            screen.createBold(`${queen1.getName()}, shantay you stay!`);
            screen.createImage(queen2.image, "orange");
            screen.createBold(`${queen2.getName()}, you're getting the porkchop...`);
            queen1.addToTrackRecord(" WIN ");
            queen2.addToTrackRecord("LOSS");
            firstCast.push(queen1);
            secondCast.push(queen2);
        }
    }
    episodeChallenges.push("Porkchop");
    screen.createButton("Proceed", "doublePremiere()");
}
function doublePremiereJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    screen.createImage(topQueens[0].image, "cyan");
    screen.createImage(topQueens[1].image, "cyan");
    screen.createBold(`${topQueens[0].getName()}, ${topQueens[1].getName()}, condragulations, you're the Top 2 of the week!`);
    screen.createParagraph("Nobody is going home tonight!");
    screen.createHorizontalLine();
    screen.createBold("The Top 2 will now lip-sync... for the win!");
    lsSong();
    for (let i = 0; i < topQueens.length; i++) {
        topQueens[i].getASLipsync();
    }
    topQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createImage(topQueens[0].image, "royalblue");
    screen.createBold(`${topQueens[0].getName()}, you're a winner baby!`);
    topQueens[0].addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    topQueens[1].addToTrackRecord("TOP2");
    topQueens[0].favoritism += 2;
    screen.createButton("Proceed", "doublePremiere()");
}
let currentCast = [];
let eliminatedCast = [];
let safeQueens = [];
let topQueens = [];
let bottomQueens = [];
let top2 = [];
let doubleShantay = false;
let doubleSashay = false;
let episodeChallenges = [];
let episodeCount = 0;
let returningQueen = false;
let noDouble = false;
let riggory = false;
let riggoryLipsync = false;
let s6Premiere = false;
let s12Premiere = false;
let porkchopPremiere = false;
let firstPremiere = false;
let secondPremiere = false;
//challenge seasons
let sweatshop = false;
let chaos = false;
function newEpisode() {
    safeQueens = [];
    topQueens = [];
    bottomQueens = [];
    top2 = [];
    episodeCount++;
    let queensRemainingScreen = new Scene();
    if (episodeCount == 1 || premiereCounter <= 2 && (s12Premiere || porkchopPremiere || s6Premiere) || team) {
        queensRemainingScreen.clean();
        queensRemainingScreen.createHeader("Full cast");
        for (let i = 0; i < currentCast.length; i++) {
            queensRemainingScreen.createImage(currentCast[i].image);
            queensRemainingScreen.createBold(currentCast[i].getName());
        }
    }
    else {
        contestantProgress();
    }
    if (currentCast.length == totalCastSize && team == true)
        queensRemainingScreen.createButton("Proceed", "teamsScreen()");
    else if (currentCast.length > 4)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && (top3 || team))
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && top4)
        queensRemainingScreen.createButton("Proceed", "finaleLS()");
    else if (currentCast.length == 4 && (all_stars || lipsync_assassin))
        queensRemainingScreen.createButton("Proceed", "finaleAS()");
    else if (currentCast.length == 3 && team)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 2 && team)
        queensRemainingScreen.createButton("Proceed", "finaleTeam()");
    else
        queensRemainingScreen.createButton("Proceed", "finale()");
    //add an empty placement on eliminated queen's track records
    for (let i = 0; i < eliminatedCast.length; i++)
        eliminatedCast[i].addToTrackRecord('');
}
function reSimulate() {
    //add eliminated queens again to cast and clean it
    for (let i = 0; i < eliminatedCast.length; i++) {
        currentCast.push(eliminatedCast[i]);
    }
    if (top4) {
        currentCast.push(finalLS[0]);
        finalLS = [];
        firstLS = [];
        secondLS = [];
    }
    currentCast.sort((a, b) => a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()));
    eliminatedCast = [];
    firstCast = [];
    secondCast = [];
    premiereCounter = 0;
    episodeCount = 0;
    onFinale = false;
    onTop4Finale = false;
    totalCastSize = currentCast.length;
    //clean track records
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].trackRecord = [];
        currentCast[i].favoritism = 0;
        currentCast[i].unfavoritism = 0;
        currentCast[i].finaleScore = 0;
        currentCast[i].votes = 0;
    }
    //clean challenges
    episodeChallenges = [];
    actingChallengeCounter = 0;
    comedyChallengeCounter = 0;
    marketingChallengeCounter = 0;
    danceChallengeCounter = 0;
    designChallengeCounter = 0;
    runwayChallengeCounter = 0;
    improvChallengeCounter = 0;
    rusicalCounter = false;
    ballCounter = false;
    girlGroupCounter = false;
    doubleShantay = false;
    doubleSashay = false;
    //refill lip-sync songs and lsa
    lsSongs = allLsSongs;
    allQueens = allQueensCopy;
    if (s6Premiere || s12Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}
let firstLS = [];
let secondLS = [];
let finalLS = [];
let onFinale = false;
let onTop4Finale = false;
;
function finaleLS() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    screen.createImage(currentCast[0].image, "royalblue");
    screen.createImage(currentCast[1].image, "royalblue");
    screen.createImage(currentCast[2].image, "royalblue");
    screen.createImage(currentCast[3].image, "royalblue");
    screen.createParagraph("Our Top 4 will participate in a lip-sync smackdown for the crown! The preliminaries will now be decided...");
    screen.createHorizontalLine();
    for (let i = 0; i < 2; i++) {
        let q1 = currentCast[randomNumber(0, currentCast.length - 1)];
        firstLS.push(q1);
        currentCast.splice(currentCast.indexOf(q1), 1);
        let q2 = currentCast[randomNumber(0, currentCast.length - 1)];
        secondLS.push(q2);
        currentCast.splice(currentCast.indexOf(q2), 1);
    }
    screen.createBigText("The preliminaries will be: ");
    screen.createImage(firstLS[0].image, "darkblue");
    screen.createImage(firstLS[1].image, "darkblue");
    screen.createBold(firstLS[0].getName() + " vs. " + firstLS[1].getName());
    screen.createParagraph("and");
    screen.createImage(secondLS[0].image, "darkred");
    screen.createImage(secondLS[1].image, "darkred");
    screen.createBold(secondLS[0].getName() + " vs. " + secondLS[1].getName());
    episodeChallenges.push("Finale");
    screen.createButton("Proceed", "finaleLipSyncs()");
}
function finaleLipSyncs() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The Lip-Syncs...");
    screen.createParagraph(firstLS[0].getName() + " and " + firstLS[1].getName() + " lip-sync...");
    lsSong();
    for (let i = 0; i < firstLS.length; i++) {
        firstLS[i].getLipsync();
    }
    firstLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    finalLS.push(firstLS[0]);
    firstLS[1].addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(firstLS[1]);
    screen.createImage(firstLS[0].image, "silver");
    screen.createBold(firstLS[0].getName() + ", shantay you stay.");
    screen.createImage(firstLS[1].image, "sienna");
    screen.createBold(firstLS[1].getName() + ", sashay away...");
    screen.createHorizontalLine();
    screen.createParagraph(secondLS[0].getName() + " and " + secondLS[1].getName() + " lip-sync...");
    lsSong();
    for (let i = 0; i < secondLS.length; i++) {
        secondLS[i].getASLipsync();
    }
    secondLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    finalLS.push(secondLS[0]);
    secondLS[1].addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(secondLS[1]);
    screen.createImage(secondLS[0].image, "silver");
    screen.createBold(secondLS[0].getName() + ", shantay you stay.");
    screen.createImage(secondLS[1].image, "sienna");
    screen.createBold(secondLS[1].getName() + ", sashay away...");
    screen.createButton("Proceed", "finalLipSync()");
}
function finalLipSync() {
    onTop4Finale = true;
    onFinale = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The end...");
    screen.createBold(finalLS[0].getName() + " and " + finalLS[1].getName() + " will lip-sync for the crown...!");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");
    for (let i = 0; i < finalLS.length; i++)
        finalLS[i].getFinale();
    finalLS.sort((a, b) => b.finaleScore - a.finaleScore);
    let winner = 0;
    screen.createImage(finalLS[winner].image, "yellow");
    screen.createBigText(finalLS[winner].getName() + "!!");
    screen.createBold("Now prance, my queen!");
    finalLS[winner].addToTrackRecord("WINNER");
    for (let i = 0; i < finalLS.length; i++) {
        if (!(finalLS.indexOf(finalLS[i]) == winner)) {
            finalLS[i].addToTrackRecord("RUNNER UP");
            eliminatedCast.unshift(finalLS[i]);
            finalLS.splice(i, 1);
        }
    }
    screen.createButton("Proceed", "contestantProgress()");
}
function finale() {
    //sort queens by finale score:
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    for (let i = 0; i < currentCast.length; i++)
        screen.createImage(currentCast[i].image);
    screen.createParagraph("Our Top 3 will participate in a music video for RuPaul's newest single!");
    screen.createButton("Proceed", "runway()", "button2");
}
function finaleTeam() {
    //sort queens by finale score:
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    screen.createParagraph("Our Top 4 will participate in a music video for RuPaul's newest single!");
    screen.createButton("Proceed", "runway()", "button2");
}
function finaleJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    screen.createImage(currentCast[2].image, "sienna");
    screen.createBold(currentCast[2].getName() + ", I'm sorry my dear but it's not your time. I must ask you to sashay away...");
    currentCast[2].addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(currentCast[2]);
    currentCast.splice(2, 1);
    screen.createHorizontalLine();
    screen.createImage(currentCast[0].image, "silver");
    screen.createImage(currentCast[1].image, "silver");
    screen.createBold(currentCast[0].getName() + " and " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
    lsSong();
    screen.createButton("Proceed", "finaleFinale()");
}
function finaleTeamJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    screen.createBold(currentCast[1].getName() + ", I'm sorry my dears but it's not your time. I must ask you both to sashay away...");
    screen.createHorizontalLine();
    currentCast[1].QueenA.addToTrackRecord("ELIMINATED");
    currentCast[1].QueenB.addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(currentCast[1].QueenA);
    eliminatedCast.unshift(currentCast[1].QueenB);
    currentCast.splice(1, 1);
    if (randomNumber(0, 100) <= 50) {
        currentCast.push(currentCast[0].QueenA);
        currentCast.push(currentCast[0].QueenB);
    }
    else {
        currentCast.push(currentCast[0].QueenB);
        currentCast.push(currentCast[0].QueenA);
    }
    currentCast.splice(0, 1);
    screen.createBold(currentCast[0].getName() + " and " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
    lsSong();
    screen.createButton("Proceed", "finaleFinale()");
}
function finaleFinale() {
    onFinale = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The end.");
    screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");
    screen.createImage(currentCast[0].image, "yellow");
    screen.createBigText(currentCast[0].getName() + "!!");
    screen.createBold("Now prance, my queen!");
    currentCast[0].addToTrackRecord("WINNER");
    currentCast[1].addToTrackRecord("RUNNER UP");
    eliminatedCast.unshift(currentCast[1]);
    currentCast.splice(1, 1);
    if (all_stars || lipsync_assassin) {
        currentCast[1].addToTrackRecord("RUNNER UP");
        eliminatedCast.unshift(currentCast[1]);
        currentCast.splice(1, 1);
    }
    episodeChallenges.push("Finale");
    screen.createButton("Proceed", "contestantProgress()");
}
function finaleAS() {
    //sort queens by finale score:
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    for (let i = 0; i < currentCast.length; i++)
        screen.createImage(currentCast[i].image);
    screen.createParagraph("Our Top 4 will create Verses and Coreography for a new Original Song!");
    screen.createButton("Proceed", "runway()", "button2");
}
function finaleASJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    screen.createImage(currentCast[3].image, "sienna");
    screen.createBold(currentCast[3].getName() + ", I'm sorry my dear but it's not your time. I must ask you to sashay away...");
    currentCast[3].addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(currentCast[3]);
    currentCast.splice(3, 1);
    screen.createHorizontalLine();
    for (let i = 0; i < currentCast.length; i++)
        screen.createImage(currentCast[i].image, "silver");
    screen.createBold(currentCast[0].getName() + ", " + currentCast[1].getName() + ", " + currentCast[2].getName() + ", this is your Last Chance to prove yourself. It's time for you to lip-sync...FOR THE CROWN!");
    lsSong();
    screen.createButton("Proceed", "finaleFinale()");
}
function contestantProgress() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Contestant Progress");
    let main = document.querySelector("div#MainBlock");
    let trackRecords = document.createElement("table");
    if (totalCastSize >= 12 && totalCastSize < 15)
        trackRecords.setAttribute("style", "font-size: 85%;");
    if (totalCastSize >= 15)
        trackRecords.setAttribute("style", "font-size: 75%");
    let header = document.createElement("tr");
    trackRecords.appendChild(header);
    let th = document.createElement("th");
    th.innerHTML = "Queen";
    header.appendChild(th);
    for (let i = 0; i < episodeChallenges.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = episodeChallenges[i];
        header.appendChild(th);
    }
    let winner = document.createElement("tr");
    let name = document.createElement("td");
    name.setAttribute("style", "font-weight: bold;");
    if (onFinale) {
        let winnerQueen;
        if (!top4)
            winnerQueen = currentCast[0];
        else if (onTop4Finale)
            winnerQueen = finalLS[0];
        else
            winnerQueen = currentCast[0];
        name.innerHTML = winnerQueen.getName();
        winner.appendChild(name);
        for (let i = 0; i < winnerQueen.trackRecord.length; i++) {
            let placement = document.createElement("td");
            placement.innerHTML = winnerQueen.trackRecord[i];
            if (placement.innerHTML == "WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
            }
            else if (placement.innerHTML == "TOP2") {
                placement.setAttribute("style", "font-weight: bold; background-color: deepskyblue;");
            }
            else if (placement.innerHTML == "LOW") {
                placement.setAttribute("style", "background-color: pink;");
            }
            else if (placement.innerHTML == "HIGH") {
                placement.setAttribute("style", "background-color: lightblue;");
            }
            else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5") {
                placement.setAttribute("style", "background-color: tomato;");
            }
            else if (placement.innerHTML == " BTM2") {
                placement.setAttribute("style", "background-color: #FF69B4;");
            }
            else if (placement.innerHTML == " ELIM ") {
                placement.setAttribute("style", "font-weight: bold; background-color: #8B0000; color: white;");
            }
            else if (placement.innerHTML == "ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: red;");
            }
            else if (placement.innerHTML == "WINNER") {
                placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
            }
            else if (placement.innerHTML == "RUNNER-UP") {
                placement.setAttribute("style", "font-weight: bold; background-color: silver;");
            }
            else if (placement.innerHTML == "ELIMINATED") {
                placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
            }
            else if (placement.innerHTML == "") {
                placement.setAttribute("style", "background-color: gray");
            }
            else if (placement.innerHTML == "WIN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
            }
            else if (placement.innerHTML == "SAFE") {
                placement.setAttribute("style", "background-color: white;");
            }
            else if (placement.innerHTML == " WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
            }
            else if (placement.innerHTML == "DISQ") {
                placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
            }
            else if (placement.innerHTML == "RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: orange;");
            }
            else if (placement.innerHTML == " WIN ") {
                placement.setAttribute("style", "background-color: #87CEFA;");
            }
            else if (placement.innerHTML == "LOSS") {
                placement.setAttribute("style", "background-color: #ff9e9e;");
            }
            winner.appendChild(placement);
        }
        trackRecords.appendChild(winner);
    }
    if (!onFinale) {
        for (let i = 0; i < currentCast.length; i++) {
            let contestant = document.createElement("tr");
            let name = document.createElement("td");
            name.setAttribute("style", "font-weight: bold;");
            name.innerHTML = currentCast[i].getName();
            contestant.appendChild(name);
            for (let k = 0; k < currentCast[i].trackRecord.length; k++) {
                let placement = document.createElement("td");
                placement.innerHTML = currentCast[i].trackRecord[k];
                if (placement.innerHTML == "WIN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
                }
                else if (placement.innerHTML == "TOP2") {
                    placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
                }
                else if (placement.innerHTML == "LOW") {
                    placement.setAttribute("style", "background-color: pink;");
                }
                else if (placement.innerHTML == "HIGH") {
                    placement.setAttribute("style", "background-color: lightblue;");
                }
                else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5") {
                    placement.setAttribute("style", "background-color: tomato;");
                }
                else if (placement.innerHTML == " BTM2") {
                    placement.setAttribute("style", "background-color: #FF69B4;");
                }
                else if (placement.innerHTML == " ELIM ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #8B0000; color: white;");
                }
                else if (placement.innerHTML == "ELIM") {
                    placement.setAttribute("style", "font-weight: bold; background-color: red;");
                }
                else if (placement.innerHTML == "WINNER") {
                    placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
                }
                else if (placement.innerHTML == "RUNNER UP") {
                    placement.setAttribute("style", "font-weight: bold; background-color: silver;");
                }
                else if (placement.innerHTML == "ELIMINATED") {
                    placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
                }
                else if (placement.innerHTML == "") {
                    placement.setAttribute("style", "background-color: gray");
                }
                else if (placement.innerHTML == "WIN ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
                }
                else if (placement.innerHTML == "SAFE") {
                    placement.setAttribute("style", "background-color: white;");
                }
                else if (placement.innerHTML == " WIN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
                }
                else if (placement.innerHTML == "DISQ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
                }
                else if (placement.innerHTML == "RTRN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: orange;");
                }
                else if (placement.innerHTML == " WIN ") {
                    placement.setAttribute("style", "background-color: #87CEFA;");
                }
                else if (placement.innerHTML == "LOSS") {
                    placement.setAttribute("style", "background-color: #ff9e9e;");
                }
                contestant.appendChild(placement);
            }
            trackRecords.appendChild(contestant);
        }
    }
    for (let i = 0; i < eliminatedCast.length; i++) {
        let contestant = document.createElement("tr");
        let name = document.createElement("td");
        name.setAttribute("style", "font-weight: bold;");
        name.innerHTML = eliminatedCast[i].getName();
        contestant.appendChild(name);
        for (let k = 0; k < eliminatedCast[i].trackRecord.length; k++) {
            let placement = document.createElement("td");
            placement.innerHTML = eliminatedCast[i].trackRecord[k];
            if (placement.innerHTML == "WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
            }
            else if (placement.innerHTML == "TOP2") {
                placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
            }
            else if (placement.innerHTML == "LOW") {
                placement.setAttribute("style", "background-color: pink;");
            }
            else if (placement.innerHTML == "HIGH") {
                placement.setAttribute("style", "background-color: lightblue;");
            }
            else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5") {
                placement.setAttribute("style", "background-color: tomato;");
            }
            else if (placement.innerHTML == " BTM2") {
                 placement.setAttribute("style", "background-color: #FF69B4;");
            }
            else if (placement.innerHTML == " ELIM ") {
                placement.setAttribute("style", "font-weight: bold; background-color: #8B0000; color: white;");
            }
            else if (placement.innerHTML == "ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: red;");
            }
            else if (placement.innerHTML == "WINNER") {
                placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
            }
            else if (placement.innerHTML == "RUNNER UP") {
                placement.setAttribute("style", "font-weight: bold; background-color: silver;");
            }
            else if (placement.innerHTML == "ELIMINATED") {
                placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
            }
            else if (placement.innerHTML == "") {
                placement.setAttribute("style", "background-color: gray");
            }
            else if (placement.innerHTML == "WIN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
            }
            else if (placement.innerHTML == "SAFE") {
                placement.setAttribute("style", "background-color: white;");
            }
            else if (placement.innerHTML == " WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
            }
            else if (placement.innerHTML == "DISQ") {
                placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
            }
            else if (placement.innerHTML == "RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: orange;");
            }
            else if (placement.innerHTML == " WIN ") {
                placement.setAttribute("style", "background-color: #87CEFA;");
            }
            else if (placement.innerHTML == "LOSS") {
                placement.setAttribute("style", "background-color: #ff9e9e;");
            }
            contestant.appendChild(placement);
        }
        trackRecords.appendChild(contestant);
    }
    main.appendChild(trackRecords);
    if (onFinale) {
        screen.createButton("Simulate again!", "reSimulate()");
        screen.createHorizontalLine();
        screen.createButton("Back to main page", "location.reload()");
    }
}
let totalCastSize;
function randomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
function sortPerformances(cast) {
    cast.sort((a, b) => (a.performanceScore - b.performanceScore));
}
//generate spaces to insert cast:
function generateSpace() {
    let castSize = document.querySelector("input#castSize").valueAsNumber;
    totalCastSize = castSize;
    let castSelection = document.querySelector("p#castSelection");
    castSelection.innerHTML = '';
    if (totalCastSize < 3)
        window.alert("Please, use at least 3 queens on your cast!");
    else if (totalCastSize > 20)
        window.alert("Please, use less than 20 queens in your cast!");
    else
        for (let i = 0; i < castSize; i++) {
            let select = document.createElement("select");
            select.setAttribute("class", "queenList");
            select.setAttribute("id", i.toString());
            select.setAttribute("onchange", "setImage()");
            let img = document.createElement("img");
            img.setAttribute("class", "images");
            img.setAttribute("id", "image" + i.toString());
            let p = document.createElement("p");
            p.appendChild(img);
            for (let k = 0; k < allQueens.length; k++) {
                let option = document.createElement("option");
                option.innerHTML = allQueens[k].getName();
                option.value = allQueens[k].image;
                select.add(option);
            }
            select.selectedIndex = randomNumber(0, allQueens.length - 1);
            let br = document.createElement("br");
            castSelection.appendChild(p);
            castSelection.appendChild(select);
            castSelection.appendChild(br);
        }
    setImage();
}
function setImage() {
    let images = document.getElementsByClassName("images");
    for (let i = 0; i < images.length; i++) {
        let img = document.getElementById("image" + i.toString());
        let select = document.getElementById(i.toString());
        img.src = select.options[select.selectedIndex].value;
    }
}
let top3 = false;
let top4 = false;
let all_stars = false;
let lipsync_assassin = false;
let team = false;
function predefCast(cast, format, premiere = '', returning = '') {
    currentCast = cast;
    totalCastSize = cast.length;
    if (format == "top3")
        top3 = true;
    else if (format == "top4")
        top4 = true;
    else if (format == "all-stars")
        all_stars = true;
    else if (format == "team")
        team = true;
    else if (format == "lipsync-assassin") {
        lipsync_assassin = true;
        allQueens = allQueens.filter(function (queen) { return queen.getLipSyncStat() >= 9; });
        allQueens = allQueens.filter(function (queen) { return currentCast.indexOf(queen) == -1; });
    }
    if (premiere == "s6-premiere")
        s6Premiere = true;
    else if (premiere == "s12-premiere")
        s12Premiere = true;
    else if (premiere == "porkchop")
        porkchopPremiere = true;
    if (returning == "return")
        randomReturn = true;
    else if (returning == "vote")
        voteReturn = true;
    else if (returning == "smackdown")
        smackdown = true;
    if (document.getElementById("disableDouble").checked == true)
        noDouble = true;
    if (s6Premiere || s12Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}
function startSimulation(challenge = "") {
    //get selected names and compare them to the all queens list:
    for (let i = 0; i < document.getElementsByClassName("queenList").length; i++) {
        let select = document.getElementById(i.toString());
        let value = select.options[select.selectedIndex].text;
        for (let k = 0; k < allQueens.length; k++) {
            if (value == allQueens[k].getName())
                currentCast.push(allQueens[k]);
        }
    }
    if (currentCast.length == 0)
        window.alert("Your Cast is Empty!");
    else if (duplicateQueens(currentCast))
        window.alert("Please, only Use One of Each Queen on Your Cast!");
    else {
        let select = document.getElementById("format");
        let select2 = document.getElementById("premiere-format");
        let select3 = document.getElementById("returning");
        if (select.options[select.selectedIndex].value == "top3")
            top3 = true;
        else if (select.options[select.selectedIndex].value == "top4")
            top4 = true;
        else if (select.options[select.selectedIndex].value == "all-stars")
            all_stars = true;
        else if (select.options[select.selectedIndex].value == "team")
            team = true;
        else if (select.options[select.selectedIndex].value == "lipsync-assassin") {
            lipsync_assassin = true;
            allQueens = allQueens.filter(function (queen) { return queen.getLipSyncStat() >= 8; });
            allQueens = allQueens.filter(function (queen) { return currentCast.indexOf(queen) == -1; });
            allQueensCopy = [...allQueens];
        }
        if (select2.options[select2.selectedIndex].value == "s6-premiere")
            s6Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "s12-premiere")
            s12Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "porkchop")
            porkchopPremiere = true;
        if (select3.options[select3.selectedIndex].value == "random")
            randomReturn = true;
        else if (select3.options[select3.selectedIndex].value == "votes")
            voteReturn = true;
        else if (select3.options[select3.selectedIndex].value == "rurupalooza")
            rurupalooza = true;
        else if (select3.options[select3.selectedIndex].value == "smackdown")
            smackdown = true;
        if (document.getElementById("disableDouble").checked == true)
            noDouble = true;
        if (currentCast.length == 3 && top4 || currentCast.length == 3 && all_stars) {
            window.alert("Lip-Sync For The Crown and All Star Formats needs at Least 4 Queens!");
            top4 = false;
            all_stars = false;
            currentCast = [];
        }
        else if (team == true && currentCast.length % 2 !== 0) {
            window.alert("The Team Format Needs an even Amout of Queens!");
            currentCast = [];
            team = false;
        }
        else if ((s6Premiere || s12Premiere || porkchopPremiere) && currentCast.length < 10) {
            window.alert("Double Premiere Formats needs at Least 10 Queens!");
            s6Premiere = false;
            s12Premiere = false;
            porkchopPremiere = false;
            top4 = false;
            top3 = false;
            lipsync_assassin = false;
            all_stars = false;
            currentCast = [];
        }
        else if (team && (smackdown || voteReturn || randomReturn || s6Premiere || rurupalooza || s12Premiere || porkchopPremiere)) {
            window.alert("The Team Format isn't Supported with any Special Premiere or Returning Formats, Sorry...!");
            team = false;
            smackdown = false;
            voteReturn = false;
            randomReturn = false;
            rurupalooza = false;
            s6Premiere = false;
            s12Premiere = false;
            porkchopPremiere = false;
        }
        else if (s6Premiere || s12Premiere) {
            doublePremiere();
        }
        else if (porkchopPremiere) {
            porkchopLipsyncs();
        }
        else {
            newEpisode();
        }
    }
}
//see if there is two of the same queens:
function duplicateQueens(cast) {
    let valuesAlreadySeen = [];
    for (let i = 0; i < cast.length; i++) {
        let value = cast[i];
        if (valuesAlreadySeen.indexOf(value) !== -1) {
            currentCast = [];
            return true;
        }
        valuesAlreadySeen.push(value);
    }
    return false;
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
function judging() {
    if ((s12Premiere || porkchopPremiere) && premiereCounter <= 2) {
        //add 2 queens to the top and the rest is safe
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        for (let i = 0; i < currentCast.length; i++) {
            if (topQueens.indexOf(currentCast[i]) == -1)
                currentCast[i].addToTrackRecord("SAFE");
        }
        doublePremiereJudging();
    }
    else if (currentCast.length > 5 && team) {
        //add 2 teams to the top and 3 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        bottomQueens.push(currentCast[currentCast.length - 3]);
        judgingScreen();
    }
    else if (currentCast.length == 5 && team) {
        //add 2 teams to the top and 3 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        bottomQueens.push(currentCast[currentCast.length - 3]);
        teamWinAndBtm2();
    }
    else if (currentCast.length == 4 && team) {
        //add 2 teams to the top and 2 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        teamWinAndBtm2();
    }
    else if (currentCast.length == 3 && team) {
        //add 1 team to the top and 2 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        teamWinAndBtm2();
    }
    else if (currentCast.length > 13) {
        //add 4 queens to the top and 4 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 4; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingScreen();
    }
    else if (currentCast.length > 6) {
        //add first 3 queens to the top and last 3 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingScreen();
    }
    else if (currentCast.length <= 6 && lipsync_assassin) {
        //add 1 queen to the top and the rest to the btm
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        for (let i = 0; i < currentCast.length; i++) {
            if (topQueens.indexOf(currentCast[i]) == -1) {
                bottomQueens.push(currentCast[i]);
            }
        }
        topAndBtm();
    }
    else if (currentCast.length == 6) {
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        if (top3 || top4)
            winAndBtm2();
        else if (all_stars)
            top2AndBtm();
        else if (lipsync_assassin)
            topAndBtm();
    }
    else if (currentCast.length == 5) {
        //add first 2 queens to the top and last 3 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        if (currentCast[2].performanceScore >= 6 && currentCast[2].performanceScore < 16 && !all_stars)
            topQueens.push(currentCast[2]);
        else
            bottomQueens.push(currentCast[2]);
        bottomQueens.push(currentCast[3]);
        bottomQueens.push(currentCast[4]);
        if (top3 || top4)
            winAndBtm2();
        else if (all_stars)
            top2AndBtm();
        else if (lipsync_assassin)
            topAndBtm();
    }
    else if (currentCast.length == 4) {
        //add first 2 queens to the top and last 2 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[2]);
        bottomQueens.push(currentCast[3]);
        if (top3 || top4)
            winAndBtm2();
        else if (all_stars)
            top2AndBtm();
        else if (lipsync_assassin)
            topAndBtm();
    }
}
function judgingScreen() {
    let judgingScreen = new Scene();
    judgingScreen.clean();
    judgingScreen.createHeader("Judging!");
    judgingScreen.createBold("Based on tonight's performances...");
    if (team == true) {
        judgingScreen.createImage(topQueens[0].image, "cyan");
        judgingScreen.createImage(topQueens[1].image, "cyan");
        judgingScreen.createImage(bottomQueens[0].image, "cyan");
        judgingScreen.createImage(bottomQueens[1].image, "cyan");
        judgingScreen.createImage(bottomQueens[2].image, "cyan");
        judgingScreen.createBold(`${topQueens[0].getName()}, ${topQueens[1].getName()}, ${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, ${bottomQueens[2].getName()}, you represent the tops and bottoms of the week.`);
    }
    else {
        for (let i = 0; i < topQueens.length; i++) {
            judgingScreen.createImage(topQueens[i].image, "cyan");
            judgingScreen.createImage(bottomQueens[i].image, "cyan");
        }
        judgingScreen.createBold("", "judged");
        let judged = document.getElementById("judged");
        for (let i = 0; i < topQueens.length; i++) {
            judged.innerHTML += `${topQueens[i].getName()}, `;
            judged.innerHTML += `${bottomQueens[i].getName()}, `;
        }
        judged.innerHTML += "you represent the tops and bottoms of the week.";
    }
    judgingScreen.createHorizontalLine();
    judgingScreen.createParagraph("", "safeQueens");
    let safeQueens = document.querySelector("p#safeQueens");
    //check if the queen is in the top or in the bottom, and if not put her as safe:
    for (let i = 0; i < currentCast.length; i++)
        if (topQueens.indexOf(currentCast[i]) == -1 && bottomQueens.indexOf(currentCast[i]) == -1) {
            safeQueens.innerHTML += currentCast[i].getName() + ", ";
            if (team == false)
                currentCast[i].addToTrackRecord("SAFE");
            if (team == true) {
                currentCast[i].QueenA.addToTrackRecord("SAFE");
                currentCast[i].QueenB.addToTrackRecord("SAFE");
            }
        }
    safeQueens.innerHTML += "you are safe.";
    if (top3 || top4)
        judgingScreen.createButton("Proceed", "winAndBtm2()");
    else if (all_stars)
        judgingScreen.createButton("Proceed", "top2AndBtm()");
    else if (lipsync_assassin)
        judgingScreen.createButton("Proceed", "topAndBtm()");
    else if (team)
        judgingScreen.createButton("Proceed", "teamWinAndBtm2()");
}
function winAndBtm2() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    //double win:
    if (topQueens[0].performanceScore == topQueens[1].performanceScore && randomNumber(0, 100) < 60) {
        topQueens[0].addToTrackRecord(" WIN");
        topQueens[0].favoritism += 5;
        topQueens[1].addToTrackRecord(" WIN");
        topQueens[1].favoritism += 5;
        screen.createImage(topQueens[0].image, "darkblue");
        screen.createImage(topQueens[1].image, "darkblue");
        screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's challenge!");
        topQueens.splice(0, 2);
    }
    else {
        topQueens[0].addToTrackRecord("WIN");
        topQueens[0].favoritism += 5;
        screen.createImage(topQueens[0].image, "royalblue");
        screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
        topQueens.splice(0, 1);
    }
    if (topQueens.length > 0) {
        for (let i = 0; i < topQueens.length; i++) {
            screen.createImage(topQueens[i].image, "lightblue");
            topQueens[i].addToTrackRecord("HIGH");
        }
        screen.createParagraph("", "highs");
        let highs = document.getElementById("highs");
        for (let i = 0; i < topQueens.length; i++)
            highs.innerHTML += `${topQueens[i].getName()}, `;
        highs.innerHTML += "good job this week, you're safe.";
    }
    screen.createHorizontalLine();
    if (bottomQueens.length >= 3) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createParagraph("", "bottom3");
        let bottom3 = document.getElementById("bottom3");
        for (let i = 0; i < bottomQueens.length; i++)
            bottom3.innerHTML += bottomQueens[i].getName() + ", ";
        bottom3.innerHTML += "you're the bottoms of the week...";
    }
    //do the same, but for the bottom queens:
    if (bottomQueens.length == 4) {
        for (let i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        bottomQueens[0].addToTrackRecord("LOW");
        bottomQueens[1].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createImage(bottomQueens[1].image, "pink");
        screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[1].unfavoritism += 1;
        bottomQueens.splice(0, 2);
    }
    else if (bottomQueens.length == 3) {
        for (let i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        bottomQueens[0].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens.splice(0, 1);
    }
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "btm2");
    let btm2 = document.getElementById("btm2");
    for (let i = 0; i < bottomQueens.length; i++) {
        btm2.innerHTML += bottomQueens[i].getName() + ", ";
    }
    btm2.innerHTML += "I'm sorry my dears but you are up for elimination.";
    screen.createButton("Proceed", "lipSync()");
}
function teamWinAndBtm2() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    topQueens[0].QueenA.addToTrackRecord("WIN");
    topQueens[0].QueenB.addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    screen.createBold(topQueens[0].getName() + ", condragulations you're the winners of this week's challenge!");
    if (topQueens.length > 1) {
        topQueens[1].QueenA.addToTrackRecord("HIGH");
        topQueens[1].QueenB.addToTrackRecord("HIGH");
        screen.createParagraph(topQueens[1].getName() + ", good work this week, you're safe.");
    }
    screen.createHorizontalLine();
    if (bottomQueens.length > 2) {
        screen.createParagraph(`${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, ${bottomQueens[2].getName()}, you're the bottoms of the week...`);
        for (let i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        bottomQueens[0].QueenA.addToTrackRecord("LOW");
        bottomQueens[0].QueenB.addToTrackRecord("LOW");
        bottomQueens[0].unfavoritism += 1;
        screen.createBold(bottomQueens[0].getName() + ", you are safe.");
        bottomQueens.splice(0, 1);
    }
    screen.createBold(`${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, I'm sorry my dears but you are up for elimination.`);
    screen.createButton("Proceed", "teamLipSync()");
}
function top2AndBtm() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    top2.push(topQueens[0]);
    top2.push(topQueens[1]);
    topQueens.splice(0, 2);
    screen.createImage(top2[0].image, "cyan");
    screen.createImage(top2[1].image, "cyan");
    screen.createBold(top2[0].getName() + ", " + top2[1].getName() + ", condragulations, you're the Top 2 of the week!");
    for (let i = 0; i < topQueens.length; i++)
        screen.createImage(topQueens[i].image, "lightblue");
    screen.createParagraph("", "highs");
    let highs = document.querySelector("p#highs");
    for (let i = 0; i < topQueens.length; i++) {
        highs.innerHTML += topQueens[i].getName() + ", ";
        topQueens[i].addToTrackRecord("HIGH");
    }
    if (topQueens.length > 0)
        highs.innerHTML += "good work this week, you're safe.";
    screen.createHorizontalLine();
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "bottoms");
    let bottoms = document.querySelector("b#bottoms");
    for (let i = 0; i < bottomQueens.length; i++) {
        bottoms.innerHTML += bottomQueens[i].getName() + ", ";
    }
    bottoms.innerHTML += "I'm sorry my dears but you're the bottoms of the week.";
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens[i].performanceScore >= 6 && bottomQueens[i].performanceScore < 16) {
            screen.createImage(bottomQueens[i].image, "pink");
            screen.createParagraph(bottomQueens[i].getName() + ", you are safe.");
            bottomQueens[i].addToTrackRecord("LOW");
            bottomQueens.splice(bottomQueens.indexOf(bottomQueens[i]), 1);
            screen.createImage(bottomQueens[0].image, "tomato");
            screen.createImage(bottomQueens[1].image, "tomato");
            screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + ", you're up for elimination.");
            break;
        }
    }
    screen.createHorizontalLine();
    screen.createBigText("After deliberation...");
    for (let i = 0; i < top2.length; i++) {
        if (randomNumber(0, 100) <= 45 && currentCast.length <= totalCastSize - 2)
            top2[i].lipstick = bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0];
        else
            top2[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
        screen.createImage(top2[i].image, "cyan");
        screen.createImage(top2[i].lipstick.image, "red");
        screen.createBold(top2[i].getName() + " chose " + top2[i].lipstick.getName() + "'s lipstick!");
    }
    screen.createButton("Proceed", "asLipSync()");
}
function topAndBtm() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    top2.push(topQueens[0]);
    top2[0].favoritism += 5;
    topQueens.splice(0, 1);
    screen.createImage(top2[0].image, "royalblue");
    screen.createBold(top2[0].getName() + ", condragulations, you're the Top All Star of the week!");
    for (let i = 0; i < topQueens.length; i++)
        screen.createImage(topQueens[i].image, "lightblue");
    screen.createParagraph("", "highs");
    let highs = document.querySelector("p#highs");
    for (let i = 0; i < topQueens.length; i++) {
        highs.innerHTML += topQueens[i].getName() + ", ";
        topQueens[i].addToTrackRecord("HIGH");
    }
    if (topQueens.length > 0)
        highs.innerHTML += "good work this week, you're safe.";
    screen.createHorizontalLine();
    ;
    if (currentCast.length > 6) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createBold("", "bottoms");
        let bottoms = document.querySelector("b#bottoms");
        for (let i = 0; i < bottomQueens.length; i++) {
            bottoms.innerHTML += bottomQueens[i].getName() + ", ";
        }
        bottoms.innerHTML += "I'm sorry my dears but you're the bottoms of the week.";
        for (let i = 0; i < bottomQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        bottomQueens[0].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens.splice(0, 1);
    }
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createParagraph("", "btms");
    let btms = document.getElementById("btms");
    for (let i = 0; i < bottomQueens.length; i++)
        btms.innerHTML += `${bottomQueens[i].getName()}, `;
    btms.innerHTML += ", you're up for elimination.";
    screen.createHorizontalLine();
    screen.createBigText("After deliberation...");
    if (randomNumber(0, 100) <= 45 && currentCast.length <= totalCastSize - 2)
        top2[0].lipstick = bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0];
    else
        top2[0].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
    screen.createImage(top2[0].image, "cyan");
    screen.createImage(top2[0].lipstick.image, "red");
    screen.createBold(top2[0].getName() + " chose " + top2[0].lipstick.getName() + "'s lipstick!");
    screen.createHorizontalLine();
    screen.createBigText("The queens vote...");
    for (let i = 0; i < currentCast.length; i++) {
        if (top2.indexOf(currentCast[i]) == -1) {
            if (randomNumber(0, 100) <= 15 && currentCast.length > 6 && bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0] != currentCast[i] && currentCast.length <= totalCastSize - 2)
                currentCast[i].lipstick = bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0];
            else
                currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
            screen.createBold(currentCast[i].getName() + " voted for " + currentCast[i].lipstick.getName() + "!");
            currentCast[i].lipstick.votes++;
        }
    }
    screen.createHorizontalLine();
    for (let i = 0; i < bottomQueens.length; i++) {
        screen.createImage(bottomQueens[i].image, "red");
        screen.createBold(bottomQueens[i].getName() + ": " + bottomQueens[i].votes.toString() + " votes");
    }
    bottomQueens.sort((a, b) => b.votes - a.votes);
    screen.createButton("Proceed", "lsaLipSync()");
}
function lipSync() {
    for (let i = 0; i < bottomQueens.length; i++) {
        bottomQueens[i].getLipsync();
    }
    bottomQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your lives! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("I've made my decision.");
    let score1 = bottomQueens[0].lipsyncScore - bottomQueens[0].favoritism + bottomQueens[0].unfavoritism;
    let score2 = bottomQueens[1].lipsyncScore - bottomQueens[0].favoritism + bottomQueens[0].unfavoritism;
    if (score1 > 7 && score2 > 7 && randomNumber(0, 100) <= 50 && !doubleShantay && noDouble == false && currentCast.length > 5) {
        screen.createImage(bottomQueens[0].image, "magenta");
        screen.createImage(bottomQueens[1].image, "magenta");
        screen.createBold("Condragulations, shantay you both stay!!");
        bottomQueens[0].addToTrackRecord(" BTM2");
        bottomQueens[0].unfavoritism += 5;
        bottomQueens[1].addToTrackRecord(" BTM2");
        bottomQueens[1].unfavoritism += 5;
        doubleShantay = true;
    }
    else if (score1 < 4 && score2 < 4 && randomNumber(0, 100) <= 10 && !doubleSashay && currentCast.length > 5 && noDouble == false) {
        screen.createImage(bottomQueens[0].image, "darkred");
        screen.createImage(bottomQueens[1].image, "darkred");
        screen.createBold("I'm sorry but none of you showed the fire it takes to stay. You must both... sashay away.");
        doubleSashay = true;
        bottomQueens[0].addToTrackRecord(" ELIM ");
        eliminatedCast.unshift(bottomQueens[0]);
        currentCast.splice(currentCast.indexOf(bottomQueens[0]), 1);
        bottomQueens[1].addToTrackRecord(" ELIM ");
        eliminatedCast.unshift(bottomQueens[1]);
        currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
    }
    else if (randomNumber(0, 1000) >= 995) {
        let disqualifiedQueen = currentCast[randomNumber(0, currentCast.length - 1)];
        screen.createImage(disqualifiedQueen.image, "red");
        screen.createBold(disqualifiedQueen.getName() + ", it has come to my attention that you have broken the rules of this competition. I must ask you to sashay away.");
        bottomQueens[0].addToTrackRecord(" BTM2");
        bottomQueens[0].unfavoritism += 5;
        bottomQueens[1].addToTrackRecord(" BTM2");
        bottomQueens[1].unfavoritism += 5;
        disqualifiedQueen.trackRecord.pop();
        disqualifiedQueen.addToTrackRecord("DISQ");
        eliminatedCast.unshift(disqualifiedQueen);
        currentCast.splice(currentCast.indexOf(disqualifiedQueen), 1);
    }
    else {
        screen.createImage(bottomQueens[0].image, "tomato");
        screen.createBold(bottomQueens[0].getName() + ", shantay you stay.");
        bottomQueens[0].addToTrackRecord("BTM2");
        bottomQueens[0].unfavoritism += 3;
        screen.createImage(bottomQueens[1].image, "red");
        screen.createBold(bottomQueens[1].getName() + ", sashay away...");
        bottomQueens[1].addToTrackRecord("ELIM");
        eliminatedCast.unshift(bottomQueens[1]);
        currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function teamLipSync() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your lives! Good luck and don't fuck it up.");
    if (randomNumber(0, 100) <= 50)
        bottomQueens[0].lipsyncQueen = bottomQueens[0].QueenA;
    else
        bottomQueens[0].lipsyncQueen = bottomQueens[0].QueenB;
    if (randomNumber(0, 100) <= 50)
        bottomQueens[1].lipsyncQueen = bottomQueens[1].QueenA;
    else
        bottomQueens[1].lipsyncQueen = bottomQueens[1].QueenB;
    screen.createImage(bottomQueens[0].lipsyncQueen.image);
    screen.createImage(bottomQueens[1].lipsyncQueen.image);
    screen.createBold(`[${bottomQueens[0].lipsyncQueen.getName()} and ${bottomQueens[1].lipsyncQueen.getName()} will be lip-syncing]`);
    lsSong();
    bottomQueens[0].lipsyncQueen.getLipsync();
    bottomQueens[1].lipsyncQueen.getLipsync();
    bottomQueens.sort((a, b) => (a.lipsyncQueen.lipsyncScore - a.favoritism + a.unfavoritism) - (b.lipsyncQueen.lipsyncScore - b.favoritism + b.unfavoritism));
    screen.createHorizontalLine();
    screen.createImage(bottomQueens[0].lipsyncQueen.image, "pink");
    screen.createBold(bottomQueens[0].lipsyncQueen.getName() + ", shantay you stay.");
    screen.createImage(bottomQueens[1].lipsyncQueen.image, "red");
    screen.createBold(bottomQueens[1].lipsyncQueen.getName() + ", you will always be an All Star, now, sashay away...");
    bottomQueens[0].QueenA.addToTrackRecord("BTM2");
    bottomQueens[0].QueenB.addToTrackRecord("BTM2");
    bottomQueens[0].unfavoritism += 3;
    bottomQueens[1].QueenA.addToTrackRecord("ELIM");
    bottomQueens[1].QueenB.addToTrackRecord("ELIM");
    eliminatedCast.unshift(bottomQueens[1].QueenA);
    eliminatedCast.unshift(bottomQueens[1].QueenB);
    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
    if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function asLipSync() {
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your legacy! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 7 && top2[1].lipsyncScore > 7 && currentCast.length > 5) {
        screen.createImage(top2[0].image, "darkblue");
        screen.createImage(top2[1].image, "darkblue");
        screen.createBold("Condragulations, you're both winners baby!");
        top2[0].favoritism += 5;
        top2[1].favoritism += 5;
        top2[0].addToTrackRecord(" WIN");
        top2[1].addToTrackRecord(" WIN");
        screen.createHorizontalLine();
        if (top2[0].lipstick == top2[1].lipstick) {
            screen.createImage(top2[0].lipstick.image, "red");
            screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
            top2[0].lipstick.addToTrackRecord("ELIM");
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
        }
        else {
            screen.createImage(top2[0].lipstick.image, "red");
            screen.createImage(top2[1].lipstick.image, "red");
            screen.createBold(`${top2[0].lipstick.getName()}, ${top2[1].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
            top2[0].lipstick.addToTrackRecord("ELIM");
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            top2[1].lipstick.addToTrackRecord("ELIM");
            eliminatedCast.unshift(top2[1].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
        }
    }
    else {
        top2[0].favoritism += 5;
        top2[0].addToTrackRecord("WIN");
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        top2[1].addToTrackRecord("TOP2");
        top2[1].favoritism += 4;
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", you are safe.");
        screen.createHorizontalLine();
        screen.createImage(top2[0].lipstick.image, "red");
        screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
        top2[0].lipstick.addToTrackRecord("ELIM");
        eliminatedCast.unshift(top2[0].lipstick);
        bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
        currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 3;
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function lsaLipSync() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time to ruveal...");
    let assassin = allQueens[randomNumber(0, allQueens.length - 1)];
    bottomQueens.sort((a, b) => b.votes - a.votes);
    assassin.lipstick = bottomQueens[0];
    top2.push(assassin);
    screen.createImage(assassin.image, "royalblue");
    screen.createBold("The lip-sync assassin is... " + assassin.getName() + "!");
    screen.createParagraph("Now, it's time for you to lip-sync... for your legacy!");
    lsSong();
    screen.createHorizontalLine();
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    assassin.lipsyncScore -= 3;
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createImage(top2[0].image, "darkblue");
    screen.createBold(top2[0].getName() + ", you're a winner baby!");
    if (top2[0] == assassin) {
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", you're safe.");
        top2[1].addToTrackRecord("WIN ");
    }
    else {
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", thanks for participating.");
        top2[0].addToTrackRecord("WIN");
    }
    allQueens.splice(allQueens.indexOf(assassin), 1);
    screen.createHorizontalLine();
    screen.createImage(top2[0].lipstick.image, "red");
    screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
    top2[0].lipstick.addToTrackRecord("ELIM");
    eliminatedCast.unshift(top2[0].lipstick);
    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length == 4)
            bottomQueens[i].addToTrackRecord("BTM5");
        else if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 2;
        bottomQueens[i].votes = 0;
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
class Queen {
    constructor(name, acting, comedy, dance, design, improv, runway, lipsync, image = "noimage") {
        this.trackRecord = [];
        this.runwayScore = 0;
        this.lipsyncScore = 0;
        this.performanceScore = 0;
        this.finaleScore = 0;
        this.winCount = 0;
        this.favoritism = 0;
        this.unfavoritism = 0;
        this.votes = 0;
        this._name = name;
        this._actingStat = acting;
        this._comedyStat = comedy;
        this._danceStat = dance;
        this._designStat = design;
        this._improvStat = improv;
        this._runwayStat = runway;
        this._lipsyncStat = lipsync;
        if (image == "noimage")
            this.image = "image/queens/noimage.jpg";
        else
            this.image = "image/queens/" + image + ".webp";
    }
    _calculateScores(min, max, stat = 0) {
        let score = randomNumber(min, max);
        return score - stat;
    }
    getName() {
        return this._name;
    }
    getLipSyncStat() {
        return this._lipsyncStat;
    }
    getActing() {
        this.performanceScore = this._calculateScores(15, 35, this._actingStat);
    }
    getComedy() {
        this.performanceScore = this._calculateScores(15, 35, this._comedyStat);
    }
    getMarketing() {
        this.performanceScore = this._calculateScores(25, 45, this._comedyStat + this._actingStat);
    }
    getDance() {
        this.performanceScore = this._calculateScores(15, 35, this._danceStat);
    }
    getDesign() {
        this.performanceScore = this._calculateScores(15, 35, this._designStat);
    }
    getRunwayChallenge() {
        this.performanceScore = this._calculateScores(15, 35, this._runwayStat);
    }
    getImprov() {
        this.performanceScore = this._calculateScores(15, 35, this._improvStat);
    }
    //special 'gets':
    getSnatch() {
        this.performanceScore = this._calculateScores(25, 45, this._improvStat + this._comedyStat);
    }
    getRusical() {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._lipsyncStat);
    }
    getBall() {
        this.performanceScore = this._calculateScores(25, 45, this._designStat + this._runwayStat);
    }
    getRumix() {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._improvStat);
    }
    getTalentShow() {
        this.performanceScore = this._calculateScores(40, 70, this._actingStat + this._comedyStat + this._danceStat + this._designStat + this._improvStat + this._lipsyncStat);
    }
    getFinale() {
        this.finaleScore = this.favoritism - this.unfavoritism;
    }
    getRunway() {
        this.runwayScore = this._calculateScores(12, 35, this._runwayStat);
    }
    getLipsync() {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat, this.unfavoritism) + this.favoritism;
    }
    getASLipsync() {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat);
    }
    addToTrackRecord(placement) {
        this.trackRecord.push(placement);
    }
}
//QUEENS:
//SEASON 1:
let akashia = new Queen("Akashia", 3, 2, 7, 3, 2, 7, 12, "Akashia");
let bebe = new Queen("BeBe Zahara Benet", 7, 7, 7, 10, 7, 10, 9, "BeBe");
let jade = new Queen("Jade Sotomeyer", 3, 3, 6, 7, 3, 7, 7, "Jade");
let ninaf = new Queen("Nina Flowers", 4, 4, 5, 11, 3, 10, 4, "NinaFlowers");
let ongina = new Queen("Ongina", 10, 7, 7, 9, 10, 8, 8, "Ongina");
let rebecca = new Queen("Rebecca Glasscock", 3, 3, 6, 4, 2, 6, 5, "Rebecca");
let shannel = new Queen("Shannel", 5, 5, 5, 9, 4, 9, 7, "Shannel");
let tammie = new Queen("Tammie Brown", 10, 8, 5, 7, 8, 7, 6, "Tammie");
let victoria = new Queen("Victoria 'Porkchop' Parker", 10, 8, 4, 3, 9, 5, 4, "Victoria");
let us_season1 = [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria];
//SEASON 2:
let jessica = new Queen("Jessica Wild", 11, 12, 13, 7, 12, 12, 12, "Jessica");
let jujubee = new Queen("Jujubee", 9, 10, 8, 6, 10, 6, 15, "Jujubee");
let morgan = new Queen("Morgan McMichaels", 6, 6, 8, 8, 3, 10, 9, "Morgan");
let mystique = new Queen("Mystique Summers Madison", 4, 6, 3, 3, 3, 6, 6, "Mystique");
let nicole = new Queen("Nicole Paige Brooks", 4, 4, 6, 6, 4, 7, 7, "Nicole");
let pandora = new Queen("Pandora Boxx", 9, 11, 7, 6, 10, 7, 9, "Pandora");
let raven = new Queen("Raven", 5, 8, 9, 10, 5, 8, 10, "Raven");
let sahara = new Queen("Sahara Davenport", 9, 7, 10, 4, 6, 7, 11, "Sahara");
let shangela = new Queen("Shangela", 10, 11, 7, 2, 10, 6, 9, "Shangela");
let sonique = new Queen("Kylie Sonique Love", 8, 7, 12, 10, 6, 9, 8, "Kylie");
let tatianna = new Queen("Tatianna", 8, 10, 7, 8, 10, 8, 10, "Tatianna");
let tyra = new Queen("King Tyra", 9, 4, 7, 11, 3, 9, 10, "Tyra");
let us_season2 = [jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra];
//SEASON 3:
let alexis = new Queen("Alexis Mateo", 10, 11, 8, 6, 9, 7, 12, "Alexis");
let carmen = new Queen("Carmen Carrera", 3, 2, 6, 4, 2, 5, 8, "Carmen");
let delta = new Queen("Delta Work", 8, 7, 5, 5, 5, 7, 9, "Delta");
let india = new Queen("India Ferrah", 6, 4, 8, 8, 3, 10, 7, "India");
let manila = new Queen("Manila Luzon", 10, 9, 8, 11, 9, 10, 11, "Manila");
let mariah = new Queen("Mariah", 8, 5, 6, 8, 5, 9, 7, "Mariah");
let mimi = new Queen("Mimi Imfurst", 10, 8, 6, 9, 9, 8, 7, "Mimi");
let phoenix = new Queen("Phoenix", 3, 3, 6, 5, 3, 5, 4, "Phoenix");
let raja = new Queen("Raja", 9, 9, 7, 13, 9, 10, 11, "Raja");
let stacey = new Queen("Stacy Layne Matthews", 6, 10, 5, 4, 9, 5, 9, "Stacy");
let venus = new Queen("Venus D-Lite", 4, 5, 8, 2, 3, 5, 2, "Venus");
let yara = new Queen("Yara Sofia", 9, 10, 7, 10, 5, 10, 9, "Yara");
let us_season3 = [alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, shangela, stacey, venus, yara];
//SEASON 4:
let alisa = new Queen("Alisa Summers", 4, 4, 6, 2, 3, 5, 3, "Alisa");
let chad = new Queen("Chad Michaels", 9, 9, 8, 8, 9, 9, 9, "Chad");
let dida = new Queen("Dida Ritz", 6, 7, 7, 5, 7, 7, 11, "Dida");
let jiggly = new Queen("Jiggly Caliente", 6, 4, 7, 3, 3, 6, 9, "Jiggly");
let kenya = new Queen("Kenya Olivera", 5, 6, 6, 6, 4, 7, 8, "Kenya");
let leshauwn = new Queen("Lashauwn Beyond", 5, 4, 7, 11, 5, 9, 8, "Lashauwn");
let latrice = new Queen("Latrice Royale", 9, 9, 9, 6, 9, 5, 9, "Latrice");
let madame = new Queen("Madame LaQueer", 7, 7, 6, 6, 7, 7, 7, "Madame");
let milan = new Queen("Milan", 5, 5, 9, 6, 5, 8, 10, "Milan");
let phiphi = new Queen("Jaremi Carey", 9, 7, 8, 9, 9, 10, 9, "PhiPhi");
let princess = new Queen("The Princess", 4, 4, 5, 8, 4, 7, 8, "Princess");
let willam = new Queen("Willam", 8, 9, 7, 10, 8, 9, 8, "Willam");
let us_season4 = [alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, willam];
//ALL STARS 1:
let allstars_1 = [alexis, chad, jujubee, latrice, manila, mimi, ninaf, pandora, raven, shannel, tammie, yara];
//SEASON 5:
let alaska = new Queen("Alaska", 10, 11, 7, 8, 9, 9, 11, "Alaska");
let alyssa = new Queen("Alyssa Edwards", 5, 9, 12, 5, 9, 7, 9, "Alyssa");
let coco = new Queen("Coco Montrese", 4, 9, 9, 8, 6, 9, 15, "Coco");
let detox = new Queen("Detox", 8, 10, 6, 8, 3, 9, 9, "Detox");
let honey = new Queen("Honey Mahogany", 3, 3, 3, 6, 2, 5, 3, "Honey");
let ivy = new Queen("Ivy Winters", 8, 8, 9, 9, 7, 9, 7, "Ivy");
let jadejolie = new Queen("Jade Jolie", 6, 5, 6, 6, 6, 6, 9, "JadeJ");
let jinkx = new Queen("Jinkx Monsoon", 11, 10, 8, 7, 10, 9, 9, "Jinkx");
let lineysha = new Queen("Lineysha Sparx", 9, 6, 8, 10, 6, 9, 8, "Lineysha");
let monica = new Queen("Monica Beverly Hillz", 4, 4, 10, 6, 3, 10, 9, "Monica");
let penny = new Queen("Penny Tration", 7, 9, 4, 5, 7, 5, 5, "Penny");
let roxxxy = new Queen("Roxxxy Andrews", 6, 4, 6, 10, 4, 9, 9, "Roxxxy");
let serena = new Queen("Serena ChaCha", 3, 3, 8, 4, 5, 5, 7, "Serena");
let vivienne = new Queen("Vivienne Pinay", 3, 3, 5, 5, 3, 6, 5, "Vivienne");
let us_season5 = [alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne];
//SEASON 6:
let adore = new Queen("Adore Delano", 9, 8, 8, 5, 9, 7, 9, "Adore");
let april = new Queen("April Carrión", 6, 5, 7, 9, 5, 9, 8, "April");
let bendelacreme = new Queen("BenDeLaCreme", 10, 8, 7, 8, 10, 9, 7, "Bendelacreme");
let bianca = new Queen("Bianca Del Rio", 11, 11, 8, 10, 10, 9, 6, "Bianca");
let courtney = new Queen("Courtney Act", 8, 8, 9, 8, 8, 9, 9, "Courtney");
let darienne = new Queen("Darienne Lake", 9, 9, 7, 5, 8, 12, 14, "Darienne");
let gia = new Queen("Gia Gunn", 5, 4, 8, 8, 3, 8, 8, "Gia");
let joslyn = new Queen("Joslyn Fox", 7, 9, 9, 5, 9, 6, 9, "Joslyn");
let kelly = new Queen("Kelly Mantle", 8, 8, 7, 5, 7, 7, 7, "Kellu");
let laganja = new Queen("Laganja Estranja", 8, 5, 8, 7, 4, 8, 9, "Laganja");
let magnolia = new Queen("Magnolia Crawford", 7, 7, 6, 4, 5, 7, 4, "Magnolia");
let milk = new Queen("Milk", 9, 8, 5, 7, 6, 7, 5, "Milk");
let trinityk = new Queen("Trinity K. Bonet", 5, 9, 8, 10, 6, 9, 12, "TrinityKB");
let vivacious = new Queen("Vivacious", 4, 5, 5, 4, 4, 7, 7, "Vivacious");
let us_season6 = [adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious];
//SEASON 7:
let ginger = new Queen("Ginger Minj", 12, 13, 8, 7, 13, 7, 12, "Ginger");
let jaidynn = new Queen("Jaidynn Diore Fierce", 8, 9, 7, 6, 8, 7, 9, "Jaidynn");
let jasmine = new Queen("Jasmine Masters", 3, 4, 6, 5, 2, 7, 7, "Jasmine");
let kandy = new Queen("Kandy Ho", 4, 5, 7, 5, 4, 7, 9, "KandyH");
let katya = new Queen("Katya", 9, 9, 9, 7, 9, 9, 9, "Katya");
let kennedy = new Queen("Kennedy Davenport", 9, 9, 8, 7, 9, 6, 11, "Kennedy");
let max = new Queen("Max", 10, 4, 6, 8, 3, 8, 3, "Max");
let fame = new Queen("Miss Fame", 4, 4, 5, 10, 3, 9, 4, "MissFame");
let kasha = new Queen("Mrs. Kasha Davis", 12, 12, 7, 7, 12, 8, 9, "Kasha");
let pearl = new Queen("Pearl", 3, 9, 8, 9, 8, 8, 5, "Pearl");
let sashab = new Queen("Frisbee Jenkins", 6, 6, 6, 6, 6, 6, 6, "SashaB");
let tempest = new Queen("Tempest DuJour", 8, 8, 7, 3, 6, 7, 6, "Tempest");
let trixie = new Queen("Trixie Mattel", 10, 6, 6, 9, 9, 9, 6, "Trixie");
let violet = new Queen("Violet Chachki", 8, 7, 7, 14, 7, 10, 8, "Violet");
let us_season7 = [ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet];
//SEASON 8:
let acid = new Queen("Acid Betty", 8, 3, 7, 9, 2, 8, 7, "Acid");
let bob = new Queen("Bob The Drag Queen", 13, 15, 8, 7, 13, 7, 13, "Bob");
let chichi = new Queen("Chi Chi DeVayne", 7, 8, 12, 3, 5, 7, 9, "ChiChi");
let cynthia = new Queen("Cynthia Lee Fontaine", 5, 4, 8, 6, 4, 7, 6, "Cynthia");
let dax = new Queen("Dax ExclamationPoint", 5, 6, 6, 7, 6, 7, 4, "Dax");
let derrick = new Queen("Derrick Barry", 4, 9, 7, 3, 9, 7, 8, "Derrick");
let kim = new Queen("Kim Chi", 6, 7, 4, 13, 6, 10, 5, "Kim");
let laila = new Queen("Laila McQueen", 7, 7, 4, 4, 6, 8, 8, "Laila");
let naomi = new Queen("Naomi Smalls", 9, 9, 8, 8, 9, 10, 10, "Naomi");
let naysha = new Queen("Naysha Lopez", 4, 4, 8, 4, 3, 8, 4, "Naysha");
let robbie = new Queen("Robbie Turner", 5, 4, 6, 4, 3, 6, 6, "Robbie");
let thorgy = new Queen("Thorgy Thor", 9, 9, 7, 8, 9, 9, 9, "Thorgy");
let us_season8 = [acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy];
//ALL STARS 2:
let allstars_2 = [adore, alaska, alyssa, coco, detox, ginger, katya, phiphi, roxxxy, tatianna];
//SEASON 9:
let aja = new Queen("Aja", 7, 7, 9, 4, 7, 9, 9, "Aja");
let alexism = new Queen("Alexis Michelle", 9, 12, 10, 11, 11, 12, 11, "AlexisM");
let charlie = new Queen("Charlie Hides", 6, 7, 5, 7, 3, 9, 2, "Charlie");
let eureka = new Queen("Eureka O'Hara", 9, 8, 6, 6, 10, 7, 8, "Eureka");
let farrah = new Queen("Farrah Moan", 9, 5, 7, 3, 6, 8, 7, "Farrah");
let jaymes = new Queen("Jaymes Mansfield", 12, 13, 6, 10, 12, 8, 7, "Jaymes");
let kimora = new Queen("Kimora Blac", 5, 5, 4, 2, 5, 8, 3, "Kimora");
let ninab = new Queen("Nina Bo'Nina Brown", 4, 8, 8, 8, 8, 9, 12, "NinaBB");
let peppermint = new Queen("Peppermint", 8, 10, 7, 7, 3, 7, 14, "Peppermint");
let sasha = new Queen("Sasha Velour", 10, 9, 7, 9, 9, 10, 11, "Sasha");
let shea = new Queen("Shea Couleé", 10, 9, 9, 8, 10, 10, 11, "Shea");
let trinity = new Queen("Trinity The Tuck", 9, 8, 8, 9, 8, 9, 8, "TrinityTT");
let valentina = new Queen("Valentina", 9, 9, 9, 9, 9, 9, 7, "Valentina");
let us_season9 = [aja, alexism, charlie, cynthia, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina];
//ALL STARS 3:
let allstars_3 = [aja, bebe, bendelacreme, chichi, kennedy, milk, morgan, shangela, thorgy, trixie];
//SEASON 10:
let aquaria = new Queen("Aquaria", 9, 9, 8, 14, 9, 10, 10, "Aquaria");
let asia = new Queen("Asia O'Hara", 9, 5, 6, 6, 8, 9, 9, "Asia");
let blair = new Queen("Blair St. Clair", 9, 5, 6, 9, 7, 8, 7, "Blair");
let dusty = new Queen("Dusty Ray Bottoms", 7, 6, 8, 7, 6, 7, 6, "Dusty");
let kalorie = new Queen("Kalorie K. Williams", 6, 8, 6, 5, 7, 7, 8, "Kalorie");
let kameron = new Queen("Kameron Michaels", 5, 7, 9, 8, 6, 8, 14, "Kameron");
let mayhem = new Queen("Mayhem Miller", 6, 8, 8, 8, 5, 9, 8, "Mayhem");
let miz = new Queen("Miz Cracker", 9, 9, 5, 7, 9, 7, 7, "Miz");
let monet = new Queen("Monét X Change", 9, 10, 7, 5, 7, 9, 11, "Monet");
let monique = new Queen("Mo Heart", 9, 8, 7, 8, 10, 8, 9, "Monique");
let vanessa = new Queen("Vanessa 'Vanjie' Mateo", 10, 7, 7, 6, 7, 7, 8, "Vanjie");
let vixen = new Queen("The Vixen", 4, 4, 11, 9, 3, 8, 13, "Vixen");
let yuhua = new Queen("Yuhua Hamasaki", 5, 7, 6, 8, 6, 7, 7, "Yuhua");
let us_season10 = [aquaria, asia, blair, dusty, eureka, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua];
//ALL STARS 4:
let allstars_4 = [farrah, gia, jasmine, latrice, manila, monet, monique, naomi, trinity, valentina];
//SEASON 11:
let akeria = new Queen("A'keria C. Davenport", 10, 9, 9, 8, 8, 9, 9, "Akeria");
let ariel = new Queen("Ariel Versace", 6, 8, 7, 6, 8, 8, 8, "Ariel");
let brooke = new Queen("Brooke Lynn Hytes", 8, 6, 10, 8, 4, 9, 9, "Brooke");
let honeyd = new Queen("Honey Davenport", 6, 6, 7, 6, 6, 9, 4, "HoneyD");
let kahanna = new Queen("Kahanna Montrese", 8, 5, 13, 11, 8, 14, 12, "Kahanna");
let mercedes = new Queen("Mercedes Iman Diamond", 4, 6, 6, 6, 6, 8, 8, "Mercedes");
let ninaw = new Queen("Nina West", 10, 7, 6, 6, 9, 7, 5, "NinaW");
let plastique = new Queen("Plastique Tiara", 7, 7, 8, 9, 5, 8, 6, "Plastique");
let rajah = new Queen("Ra'Jah O'Hara", 7, 8, 14, 13, 6, 10, 12, "Rajah");
let scarlet = new Queen("Scarlet Envy", 10, 8, 6, 9, 7, 9, 8, "Scarlet");
let shuga = new Queen("Shuga Cain", 8, 7, 7, 5, 7, 10, 7, "Shuga");
let silky = new Queen("Silky Nutmeg Ganache", 8, 9, 7, 6, 9, 7, 7, "Silky");
let yvie = new Queen("Yvie Oddly", 10, 5, 8, 9, 5, 8, 11, "Yvie");
let us_season11 = [akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, vanessa, yvie];
//SEASON 12
let aiden = new Queen("Aiden Zhane", 9, 3, 6, 4, 3, 8, 7, "Aiden");
let brita = new Queen("Brita", 7, 6, 7, 4, 3, 7, 9, "Brita");
let crystal = new Queen("Crystal Methyd", 8, 7, 7, 8, 5, 9, 5, "CrystalM");
let dahlia = new Queen("Dahlia Sin", 4, 4, 8, 7, 6, 10, 3, "Dahlia");
let gigi = new Queen("Gigi Goode", 8, 7, 9, 8, 9, 9, 5, "Gigi");
let heidi = new Queen("Heidi N Closet", 11, 11, 5, 11, 9, 9, 12, "Heidi");
let jackie = new Queen("Jackie Cox", 8, 9, 5, 7, 10, 8, 11, "Jackie");
let jaida = new Queen("Jaida Essence Hall", 7, 9, 9, 14, 9, 10, 14, "Jaida");
let jan = new Queen("Jan", 8, 7, 9, 7, 8, 8, 7, "Jan");
let nicky = new Queen("Nicky Doll", 4, 4, 7, 10, 3, 10, 5, "Nicky");
let rock = new Queen("Rock M. Sakura", 6, 8, 6, 7, 8, 8, 6, "Rock");
let widow = new Queen("Widow Von'Du", 8, 9, 7, 7, 9, 8, 9, "Widow");
let us_season12 = [aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, widow];
//ALL STARS 5
let allstars_5 = [alexis, blair, derrick, india, jujubee, mariah, mayhem, miz, ongina, shea];
//SEASON 13
let denali = new Queen("Denali", 4, 7, 12, 7, 9, 9, 12, "Denali");
let elliott = new Queen("Elliott With 2 Ts", 4, 5, 10, 7, 3, 7, 10, "Elliott");
let mik = new Queen("Gottmik", 8, 9, 4, 13, 9, 10, 6, "Gottmik");
let joey = new Queen("Joey Jay", 5, 5, 8, 6, 4, 6, 4, "Joey");
let kahmora = new Queen("Kahmora Hall", 3, 4, 3, 9, 3, 10, 4, "Kahmora");
let kandym = new Queen("Kandy Muse", 9, 9, 7, 6, 9, 6, 13, "KandyM");
let lala = new Queen("LaLa Ri", 10, 11, 11, 4, 12, 7, 14, "Lala");
let olivia = new Queen("Olivia Lux", 8, 5, 9, 8, 4, 9, 10, "Olivia");
let rose = new Queen("Rosé", 10, 9, 12, 8, 9, 7, 6, "Rose");
let symone = new Queen("Symone", 12, 8, 8, 7, 12, 9, 13, "Symone");
let tamisha = new Queen("Tamisha Iman", 7, 6, 7, 6, 6, 7, 8, "Tamisha");
let tina = new Queen("Tina Burner", 7, 7, 8, 5, 8, 4, 8, "TinaB");
let utica = new Queen("Utica Queen", 7, 4, 4, 13, 4, 10, 12, "Utica");
let us_season13 = [denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica];
//ALL STARS 6
let allstars_6 = [akeria, eureka, ginger, jan, jiggly, pandora, rajah, scarlet, serena, silky, sonique, trinityk, yara];
//DRUK SEASON 1
let baga = new Queen("Baga Chipz", 11, 12, 6, 7, 11, 8, 9, "Baga");
let blu = new Queen("Blu Hydrangea", 5, 8, 3, 9, 9, 11, 8, "Blu");
let cheryl = new Queen("Cheryl Hole", 5, 5, 10, 6, 6, 9, 10, "Cheryl");
let crystaluk = new Queen("Crystal", 6, 5, 7, 9, 4, 8, 6, "Crystal");
let divina = new Queen("Divina De Campo", 8, 6, 7, 12, 9, 9, 9, "Divina");
let gothy = new Queen("Gothy Kendoll", 4, 5, 4, 3, 5, 8, 4, "Gothy");
let scaredy = new Queen("Scaredy Kat", 3, 5, 6, 4, 4, 6, 4, "Scaredy");
let sumting = new Queen("Sum Tin Wong", 9, 9, 7, 8, 9, 8, 8, "Sum");
let viv = new Queen("The Vivienne", 10, 12, 9, 12, 12, 10, 11, "TVivienne");
let vinegar = new Queen("Vinegar Strokes", 7, 7, 7, 4, 4, 6, 7, "Vinegar");
let uk_season1 = [baga, blu, cheryl, crystaluk, divina, gothy, scaredy, sumting, viv, vinegar];
//DRUK SEASON 2
let awhora = new Queen("A'Whora", 9, 8, 7, 12, 9, 8, 9, "Awhora");
let asttina = new Queen("Asttina Mandella", 8, 7, 10, 9, 9, 9, 11, "Asttina");
let bimini = new Queen("Bimini Bon-Boulash", 11, 14, 9, 6, 12, 11, 12, "Bimini");
let cherry = new Queen("Cherry Valentine", 5, 6, 5, 10, 6, 11, 4, "Cherry");
let ellie = new Queen("Ellie Diamond", 8, 5, 5, 10, 7, 9, 9, "Ellie");
let ginny = new Queen("Ginny Lemon", 6, 8, 5, 7, 7, 8, 4, "Ginny");
let joe = new Queen("Joe Black", 8, 7, 4, 9, 7, 10, 8, "Joe");
let lawrence = new Queen("Lawrence Chaney", 14, 13, 3, 11, 9, 12, 14, "Lawrence");
let sister = new Queen("Sister Sister", 8, 6, 6, 4, 7, 8, 10, "Sister");
let tayce = new Queen("Tayce", 9, 9, 12, 5, 9, 9, 14, "Tayce");
let tia = new Queen("Tia Kofi", 9, 11, 8, 3, 6, 5, 12, "Tia");
let veronica = new Queen("Veronica Green", 7, 7, 11, 8, 5, 10, 8, "Veronica");
let uk_season2 = [awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica];
//DRUK SEASON 3
let anubis = new Queen("Anubis", 6, 6, 7, 4, 5, 6, 4, "Anubis");
let charity = new Queen("Charity Kase", 8, 7, 6, 8, 8, 7, 7, "Charity");
let choriza = new Queen("Choriza May", 9, 9, 6, 9, 7, 8, 10, "Choriza");
let elektraF = new Queen("Elektra Fence", 5, 6, 5, 4, 5, 4, 9, "ElektraF");
let ella = new Queen("Ella Vaday", 9, 9, 9, 8, 7, 9, 8, "Ella");
let kitty = new Queen("Kitty Scott Claus", 10, 10, 8, 8, 8, 7, 7, "Kitty");
let krystal = new Queen("Krystal Versace", 7, 6, 8, 9, 9, 9, 8, "Krystal");
let river = new Queen("River Medway", 8, 8, 7, 5, 6, 5, 7, "River");
let scarlett = new Queen("Scarlett Harlett", 8, 7, 8, 8, 5, 8, 8, "ScarlettH");
let vanity = new Queen("Vanity Milan", 6, 9, 6, 8, 8, 7, 9, "Vanity");
let victoriaS = new Queen("Victoria Scone", 10, 10, 8, 10, 9, 9, 8, "VictoriaS");
let uk_season3 = [anubis, charity, choriza, elektraF, ella, kitty, krystal, river, scarlett, vanity, victoriaS];
//DRUK SEASON 4
let danny = new Queen("Danny Beard", 12, 10, 11, 8, 11, 13, 9, "Danny");
let cheddar = new Queen("Cheddar Gorgeous", 12, 9, 9, 8, 13, 14, 8, "Cheddar");
let dakota = new Queen("Dakota Schiffer", 6, 9, 9, 10, 9, 11, 10, "Dakota");
let jonbers = new Queen("Jonbers Blonde", 5, 10, 8, 7, 9, 9, 9, "Jonbers");
let pixie = new Queen("Pixie Polite", 7, 5, 9, 8, 8, 9, 9, "PixiePolite");
let baby = new Queen("Baby", 6, 6, 9, 10, 4, 9, 11, "Baby");
let leFil = new Queen("Le Fil", 6, 5, 8, 9, 5, 12, 9, "LeFil");
let copper = new Queen("Copper Topp", 5, 4, 9, 7, 6, 7, 8, "Copper");
let sminty = new Queen("Sminty Drop", 5, 6, 5, 9, 4, 14, 8, "Sminty");
let black = new Queen("Black Peppa", 5, 4, 8, 4, 6, 13, 13, "BlackPeppa");
let starlet = new Queen("Starlet", 4, 4, 4, 4, 4, 13, 6, "Starlet");
let just = new Queen("Just May", 4, 4, 4, 4, 4, 4, 4, "JustMay");
let uk_season4 = [danny, cheddar, dakota, jonbers, pixie, baby, leFil, copper, sminty, black, starlet, just];
//CAN SEASON 1
let anastarzia = new Queen("Anastarzia Anaquway", 7, 7, 6, 10, 8, 9, 11, "Starzy");
let boa = new Queen("BOA", 6, 9, 6, 7, 6, 8, 8, "BOA");
let ilona = new Queen("Ilona Verley", 7, 8, 5, 8, 8, 10, 10, "Ilona");
let jimbo = new Queen("Jimbo", 13, 11, 4, 6, 10, 13, 4, "Jimbo");
let juice = new Queen("Juice Boxx", 7, 9, 8, 4, 6, 10, 9, "Juice");
let kiara = new Queen("Kiara", 8, 7, 9, 8, 6, 8, 13, "Kiara");
let kyne = new Queen("Kyne", 5, 4, 6, 6, 6, 7, 7, "Kyne");
let lemon = new Queen("Lemon", 9, 9, 10, 4, 8, 5, 10, "Lemon");
let priyanka = new Queen("Priyanka", 12, 9, 10, 11, 6, 10, 15, "Priyanka");
let rita = new Queen("Rita Baga", 10, 9, 5, 10, 9, 12, 13, "Rita");
let bobo = new Queen("Scarlett BoBo", 9, 9, 9, 9, 9, 10, 12, "Scarlett");
let tynomi = new Queen("Tynomi Banks", 5, 7, 7, 8, 5, 9, 12, "Tynomi");
let can_season1 = [anastarzia, boa, ilona, jimbo, juice, kiara, kyne, lemon, priyanka, rita, bobo, tynomi];
//CAN SEASON 2
let adriana = new Queen("Adriana", 9, 7, 7, 7, 8, 8, 5, "Adriana");
let beth = new Queen("Beth", 5, 5, 6, 4, 6, 5, 6, "Beth");
let eve = new Queen("Eve 6000", 5, 5, 5, 4, 5, 7, 7, "Eve");
let giametric = new Queen("Gia Metric", 8, 7, 7, 4, 6, 7, 7, "Giametric");
let icesis = new Queen("Icesis Couture", 6, 7, 4, 10, 7, 9, 8, "Icesis");
let kendall = new Queen("Kendall Gender", 8, 9, 8, 4, 7, 8, 8, "Kendall");
let kimoraA = new Queen("Kimora Amour", 6, 5, 5, 6, 7, 7, 5, "KimoraA");
let oceane = new Queen("Océane Aqua-Black", 6, 7, 5, 7, 7, 7, 6, "Oceane");
let pythia = new Queen("Pythia", 8, 6, 9, 8, 7, 8, 6, "Pythia");
let stephanie = new Queen("Stephanie Prince", 7, 6, 6, 8, 5, 5, 6, "Stephanie");
let sukidoll = new Queen("Suki Doll", 7, 7, 7, 9, 7, 9, 5, "SukiDoll");
let synthia = new Queen("Synthia Kiss", 8, 5, 5, 7, 5, 7, 8, "Synthia");
let can_season2 = [adriana, beth, eve, giametric, icesis, kendall, kimoraA, oceane, pythia, stephanie, sukidoll, synthia];
//CAN SEASON 3
let gisele = new Queen("Gisèle Lullaby", 6, 10, 8, 11, 10, 12, 9, "Gisele");
let vanderpuss = new Queen("Vivian Vanderpuss", 9, 9, 9, 7, 8, 9, 8, "Vanderpuss");
let kimmy = new Queen("Kimmy Couture", 7, 7, 12, 9, 6, 11, 12, "Kimmy");
let jadashada = new Queen("Jada Shada Hudson", 9, 7, 9, 8, 7, 10, 12, "JadaShada");
let fiercalicious = new Queen("Miss Fiercalicious", 9, 9, 8, 7, 7, 11, 9, "Fiercalicious");
let boomboom = new Queen("Lady Boom Boom", 5, 8, 9, 9, 6, 10, 9, "BoomBoom");
let irma = new Queen("Irma Gerd", 5, 7, 7, 8, 10, 9, 7, "Irma");
let bombae = new Queen("Bombae", 5, 7, 6, 8, 6, 7, 7, "Bombae");
let chelazon = new Queen("Chelazon Leroux", 4, 9, 4, 7, 5, 7, 6, "Chelazon");
let kaos = new Queen("Kaos", 5, 7, 5, 5, 5, 9, 9, "Kaos");
let moco = new Queen("Miss Moço", 5, 4, 6, 4, 4, 7, 9, "Moco");
let halal = new Queen("Halal Bae", 4, 4, 3, 3, 4, 7, 5, "Halal");
let can_season3 = [gisele, vanderpuss, kimmy, jadashada, fiercalicious, boomboom, irma, bombae, chelazon, kaos, moco, halal];
//DRAG RACE HOLLAND
let chelsea = new Queen("Chelsea Boy", 8, 9, 6, 9, 9, 11, 5, "Chelsea");
let envy = new Queen("Envy Peru", 10, 10, 9, 10, 9, 13, 12, "Envy");
let janey = new Queen("Janey Jacké", 7, 8, 7, 11, 9, 12, 9, "Janey");
let madamem = new Queen("Madame Madness", 6, 6, 6, 8, 5, 8, 7, "MadameM");
let mama = new Queen("Ma'Ma Queen", 7, 7, 5, 6, 8, 10, 7, "Mama");
let megan = new Queen("Megan Schoonbrood", 7, 8, 7, 5, 6, 9, 11, "Megan");
let abby = new Queen("Miss Abby OMG", 9, 8, 12, 8, 7, 8, 11, "Abby");
let patty = new Queen("Patty Pam-Pam", 8, 6, 6, 8, 8, 9, 7, "Patty");
let roem = new Queen("Roem", 8, 8, 5, 5, 7, 6, 5, "Roem");
let sederginne = new Queen("Sederginne", 8, 6, 6, 10, 7, 13, 5, "Sederginne");
let hol_season1 = [chelsea, envy, janey, madamem, mama, megan, abby, patty, roem, sederginne];
//DRAG RACE HOLLAND SEASON 2
let ivyelise = new Queen("Ivy-Elise", 5, 5, 5, 4, 6, 5, 9, "IvyE");
let juicy = new Queen("Juicy Kouture", 5, 6, 5, 5, 7, 7, 6, "Juicy");
let keta = new Queen("Keta Minaj", 8, 9, 7, 9, 9, 9, 7, "Keta");
let love = new Queen("Love Masisi", 6, 7, 7, 8, 8, 10, 10, "Love");
let mlp = new Queen("My Little Puny", 7, 6, 9, 9, 6, 9, 8, "MLP");
let reggy = new Queen("Reggy B", 7, 6, 9, 7, 8, 8, 8, "Reggy");
let tabitha = new Queen("Tabitha", 7, 7, 7, 7, 6, 8, 8, "Tabitha");
let countess = new Queen("The Countess", 8, 9, 7, 9, 8, 8, 8, "Countess");
let vanessaC = new Queen("Vanessa Van Cartier", 7, 8, 8, 10, 9, 11, 10, "VanessaC");
let vivaldi = new Queen("Vivaldi", 8, 9, 7, 7, 9, 9, 9, "Vivaldi");
let hol_season2 = [ivyelise, juicy, keta, love, mlp, reggy, tabitha, countess, vanessaC, vivaldi];
//DRT SEASON 1
let amadiva = new Queen("Amadiva", 9, 6, 7, 9, 3, 13, 6, "Amadiva");
let annee = new Queen("Anneé Maywong", 9, 9, 7, 13, 4, 14, 9, "Annee");
let b = new Queen("B Ella", 7, 9, 6, 8, 11, 7, 7, "B");
let bunny = new Queen("Bunny Be Fly", 7, 5, 5, 8, 5, 8, 6, "Bunny");
let dearis = new Queen("Dearis Doll", 7, 7, 7, 10, 10, 11, 10, "Dearis");
let jaja = new Queen("JAJA", 8, 6, 7, 9, 5, 11, 9, "Jaja");
let meannie = new Queen("Meannie Minaj", 7, 5, 5, 6, 5, 5, 5, "Meannie");
let morrigan = new Queen("Morrigan", 5, 6, 7, 5, 7, 7, 7, "Morrigan");
let natalia = new Queen("Natalia Pliacam", 9, 9, 7, 13, 9, 14, 12, "Natalia");
let petchra = new Queen("Petchra", 7, 7, 6, 7, 8, 7, 9, "Petchra");
let drt_season1 = [amadiva, annee, b, bunny, dearis, jaja, meannie, morrigan, natalia, petchra];
//DRT SEASON 2
let angele = new Queen("Angele Anang", 9, 9, 9, 12, 8, 14, 10, "Angele");
let bandit = new Queen("Bandit", 7, 7, 7, 10, 6, 14, 9, "Bandit");
let genie = new Queen("Genie", 9, 8, 9, 9, 7, 9, 8, "Genie");
let kana = new Queen("Kana Warrior", 8, 8, 8, 7, 7, 9, 13, "Kana");
let kandyz = new Queen("Kandy Zyanide", 9, 9, 9, 9, 9, 12, 7, "KandyZ");
let katy = new Queen("Katy Killer", 7, 8, 7, 8, 7, 10, 8, "Katy");
let m = new Queen("M Stranger Fox", 5, 6, 5, 6, 6, 8, 8, "M");
let maya = new Queen("Maya B'haro", 9, 8, 6, 9, 9, 10, 7, "Maya");
let mocha = new Queen("Mocha Diva", 9, 9, 6, 10, 9, 7, 9, "Mocha");
let gimhuay = new Queen("Miss Gimhuay", 8, 9, 7, 11, 10, 12, 8, "Gimhuay");
let silver = new Queen("Silver Sonic", 5, 5, 7, 6, 7, 7, 8, "Silver");
let srimala = new Queen("Srimala", 7, 7, 8, 7, 8, 11, 12, "Srimala");
let tormai = new Queen("Tormai", 8, 8, 7, 7, 6, 8, 9, "Tormai");
let vanda = new Queen("Vanda Miss Joaquim", 9, 8, 9, 7, 7, 11, 10, "Vanda");
let drt_season2 = [angele, bandit, genie, kana, kandyz, katy, m, maya, mocha, gimhuay, silver, srimala, tormai, vanda];
//DRAG RACE DOWN UNDER
let anita = new Queen("Anita Wigl'it", 9, 9, 8, 7, 8, 7, 8, "Anita");
let art = new Queen("Art Simone", 5, 4, 5, 10, 4, 10, 2, "Art");
let cocoj = new Queen("Coco Jumbo", 7, 6, 7, 6, 5, 8, 9, "CocoJ");
let elektra = new Queen("Elektra Shock", 8, 6, 7, 5, 4, 6, 10, "Elektra");
let etc = new Queen("Etcetera Etcetera", 7, 8, 7, 6, 7, 8, 8, "Etc");
let jojo = new Queen("Jojo Zaho", 5, 5, 5, 5, 5, 6, 8, "Jojo");
let karen = new Queen("Karen From Finance", 6, 6, 7, 7, 5, 7, 5, "Karen");
let kita = new Queen("Kita Mean", 8, 8, 7, 8, 9, 9, 10, "Kita");
let maxi = new Queen("Maxi Shield", 6, 7, 7, 9, 7, 8, 9, "Maxi");
let drdu = [anita, art, cocoj, elektra, etc, jojo, karen, kita, maxi];
//DRAG RACE DOWN UNDER S2
let hannah = new Queen("Hannah Conda", 11, 10, 8, 9, 9, 11, 8, "Hannah");
let yuri = new Queen("Yuri Guaii", 6, 11, 6, 12, 9, 13, 7, "Yuri");
let spankie = new Queen("Spankie Jackzon", 11, 11, 8, 5, 8, 7, 9, "Spankie");
let kweenKong = new Queen("Kween Kong", 5, 9, 10, 5, 8, 10, 11, "Kween");
let molly = new Queen("Molly Poppinz", 8, 7, 6, 9, 7, 10, 9, "Molly");
let beverly = new Queen("Beverly Kills", 8, 4, 10, 9, 5, 9, 10, "Beverly");
let minnie = new Queen("Minnie Cooper", 9, 8, 5, 6, 6, 9, 7, "Minnie");
let pomara = new Queen("Pomara Fifth", 8, 5, 5, 7, 5, 9, 8, "Pomara");
let aubrey = new Queen("Aubrey Haive", 5, 4, 5, 7, 4, 8, 7, "Aubrey");
let faux = new Queen("Faúx Fúr", 4, 5, 4, 5, 4, 5, 6, "Faux");
let drdu2 = [hannah, yuri, spankie, kweenKong, molly, beverly, minnie, pomara, aubrey, faux];
//DRAG RACE DOWN UNDER S3
let amyl = new Queen("Amyl", 7, 7, 7, 7, 7, 7, 7, "Amyl");
let ashley = new Queen("Ashley Madison", 7, 7, 7, 7, 7, 7, 7, "AshleyMadison");
let bumpa = new Queen("Bumpa Love", 7, 7, 7, 7, 7, 7, 7, "BumpaLove");
let flor = new Queen("Flor", 7, 7, 7, 7, 7, 7, 7, "Flor");
let gabriella = new Queen("Gabriella Labucci", 7, 7, 7, 7, 7, 7, 7, "GabriellaLabucci");
let hollywould = new Queen("Hollywould Star", 7, 7, 7, 7, 7, 7, 7, "HollywouldStar");
let isisavis = new Queen("Isis Avis Loren", 7, 7, 7, 7, 7, 7, 7, "IsisAvisLoren");
let ivanna = new Queen("Ivanna Drink", 7, 7, 7, 7, 7, 7, 7, "IvannaDrink");
let ivoryglaze = new Queen("Ivory Glaze", 7, 7, 7, 7, 7, 7, 7, "IvoryGlaze");
let ritamenu = new Queen("Rita Menu", 7, 7, 7, 7, 7, 7, 7, "RitaMenu");
let drdu3 = [amyl, ashley, bumpa, flor, gabriella, hollywould, isisavis, ivanna, ivoryglaze, ritamenu];
//DRAG RACE ESPAÑA
let arantxa = new Queen("Arantxa Castilla La Mancha", 8, 8, 7, 7, 4, 9, 9, "Arantxa");
let carmenf = new Queen("Carmen Farala", 8, 7, 9, 9, 5, 11, 9, "CarmenF");
let dovima = new Queen("Dovima Nurmi", 6, 5, 5, 4, 5, 8, 8, "Dovima");
let drag = new Queen("Drag Vulcano", 6, 6, 5, 7, 7, 8, 6, "Drag");
let hugaceo = new Queen("Hugáceo Crujiente", 7, 6, 7, 11, 6, 8, 9, "Hugaceo");
let inti = new Queen("Inti", 7, 7, 7, 7, 7, 12, 7, "Inti");
let killer = new Queen("Killer Queen", 7, 8, 6, 7, 9, 9, 7, "Killer");
let pupi = new Queen("Pupi Poisson", 8, 8, 8, 6, 9, 9, 9, "Puppy");
let sagittaria = new Queen("Sagittaria", 7, 8, 9, 9, 8, 9, 8, "Sagittaria");
let macarena = new Queen("The Macarena", 10, 6, 8, 8, 5, 8, 8, "Macarena");
let dres = [arantxa, carmenf, dovima, drag, hugaceo, inti, killer, pupi, sagittaria, macarena];
//DRAG RACE ESPAÑA 2
let arielRec = new Queen("Ariel Rec", 5, 5, 7, 4, 5, 9, 5, "ArielRec");
let diamante = new Queen("Diamante Merybrown", 7, 6, 10, 5, 5, 8, 11, "Diamante");
let sethlas = new Queen("Drag Sethlas", 7, 5, 9, 10, 5, 11, 7, "DragSethlas");
let estrella = new Queen("Estrella Xtravaganza", 10, 7, 7, 5, 9, 8, 8, "Estrella");
let jota = new Queen("Jota Carajota", 4, 5, 6, 4, 4, 8, 7, "Jota");
let juriji = new Queen("Juriji Der Klee", 8, 9, 7, 9, 10, 10, 9, "Juriji");
let marina = new Queen("Marina", 6, 10, 8, 7, 7, 8, 11, "Marina");
let marisa = new Queen("Marisa Prisa", 4, 4, 3, 2, 4, 4, 4, "Marisa");
let onyx = new Queen("Onyx", 6, 6, 7, 7, 6, 13, 7, "Onyx");
let samantha = new Queen("Samantha Ballentines", 4, 4, 5, 5, 5, 5, 3, "Samantha");
let sharonne = new Queen("Sharonne", 12, 10, 8, 8, 12, 10, 9, "Sharonne");
let venedita = new Queen("Venedita Von Däsh", 9, 9, 9, 9, 9, 10, 9, "Venedita");
let dres2 = [arielRec, diamante, sethlas, estrella, jota, juriji, marina, marisa, onyx, samantha, sharonne, venedita];
//DRAG RACE ESPAÑA 3
let bestiah = new Queen("Bestiah", 8, 7, 9, 10, 5, 13, 9, "Bestiah");
let chanel = new Queen("Chanel Anorex", 6, 6, 8, 5, 6, 10, 7, "ChanelAnorex");
let clover = new Queen("Clover Bish", 5, 9, 11, 8, 8, 9, 12, "CloverBish");
let chuchi = new Queen("Drag Chuchi", 6, 6, 6, 6, 6, 8, 8, "DragChuchi");
let hornella = new Queen("Hornella Góngora", 9, 9, 8, 7, 9, 9, 9, "HornellaGongora");
let maria = new Queen("María Edília", 4, 6, 4, 4, 4, 4, 4, "MariaEdilia");
let kellyRoller = new Queen("Kelly Roller", 5, 10, 9, 6, 6, 8, 11, "KellyRoller");
let pakita = new Queen("Pakita", 9, 5, 6, 11, 6, 10, 10, "Pakita");
let pink = new Queen("Pink Chadora", 8, 9, 8, 7, 11, 10, 7, "PinkChadora");
let pitita = new Queen("Pitita", 11, 6, 8, 13, 10, 11, 9, "Pitita");
let vania = new Queen("Vania Vainilla", 8, 12, 8, 10, 8, 10, 9, "VaniaVainilla");
let visa = new Queen("Visa", 7, 8, 8, 9, 9, 12, 12, "Visa");
let dres3 = [bestiah, chanel, clover, chuchi, hornella, macarena, maria, kellyRoller, pakita, pink, pitita, vania, visa];
//DRAG RACE ITALIA
let ava = new Queen("Ava Hangar", 6, 6, 5, 5, 5, 6, 6, "Ava");
let divinity = new Queen("Divinity", 6, 6, 8, 7, 7, 8, 7, "Divinity");
let elecktrabionic = new Queen("Elecktra Bionic", 7, 7, 7, 7, 7, 7, 7, "ElecktraBionic");
let enorma = new Queen("Enorma Jean", 7, 7, 6, 6, 5, 7, 6, "Enorma");
let farida = new Queen("Farida Kant", 7, 7, 7, 7, 7, 7, 7, "Farida");
let ivana = new Queen("Ivana Vamp", 6, 5, 6, 8, 6, 6, 5, "Ivana");
let riche = new Queen("Le Riche", 7, 6, 6, 7, 7, 6, 8, "Riche");
let luquisha = new Queen("Luquisha Lubamba", 6, 6, 7, 8, 7, 8, 9, "Luquisha");
let italia = [ava, divinity, elecktrabionic, enorma, farida, ivana, riche, luquisha];
//DRAG RACE ITALIA 2
let aura = new Queen("Aura Eternal", 11, 9, 9, 6, 5, 9, 8, "Aura");
let gioffre = new Queen("Gioffré", 6, 8, 5, 7, 5, 8, 8, "Gioffre");
let diamond = new Queen("La Diamond", 10, 12, 8, 12, 11, 13, 9, "LaDiamond");
let petite = new Queen("La Petite Noire", 10, 5, 10, 8, 7, 11, 11, "Petite");
let narciso = new Queen("Narciso", 4, 4, 4, 4, 4, 4, 4, "Narciso");
let nehellenia = new Queen("Nehellenia", 8, 10, 10, 8, 10, 12, 9, "Nehellenia");
let obama = new Queen("Obama", 5, 9, 6, 8, 9, 8, 8, "Obama");
let panthera = new Queen("Panthera Virus", 7, 5, 6, 6, 5, 8, 9, "Panthera");
let skandalove = new Queen("Skandalove", 9, 7, 8, 8, 7, 9, 9, "Skandalove");
let tanissa = new Queen("Tanissa Yoncè", 5, 6, 6, 10, 6, 9, 7, "Tanissa");
let drita_season2 = [aura, gioffre, diamond, petite, narciso, nehellenia, obama, panthera, skandalove, tanissa];
//V.S THE WORLD
let pangina = new Queen("Pangina Heals", 9, 7, 14, 11, 8, 13, 14, "Pangina");
let ukvstw = [baga, blu, cheryl, janey, jimbo, jujubee, lemon, monique, pangina];
let canvstw = [anita, icesis, kendall, rajah, rita, silky, stephanie, victoriaS, vanity];
let ukvstw2 = [arantxa, choriza, gothy, hannah, jonbers, keta, mayhem, scarlet, tia];
//Drag Race España AS1
let dresas1 = [sethlas, hornella, juriji, onyx, pakita, pink, pupi, sagittaria, samantha];
//All Stars 7
let allstars_7 = [raja, jinkx, yvie, jaida, trinity, monet, shea, viv];
//All Stars 8
let allstars_8 = [alexism, darienne, heidi, jaymes, jessica, jimbo, kahanna, kandym, lala, monica, kasha, naysha];
//SEASON 14
let alyssaH = new Queen("Alyssa Hunter", 5, 6, 7, 10, 7, 13, 8, "AlyssaH");
let angeria = new Queen("Angeria Paris VanMicheals", 11, 6, 9, 12, 8, 11, 8, "Angeria");
let bosco = new Queen("Bosco", 11, 12, 6, 7, 12, 11, 6, "Bosco");
let daya = new Queen("Daya Betty", 9, 8, 9, 9, 10, 10, 8, "DayaBetty");
let deja = new Queen("DeJa Skye", 9, 7, 9, 8, 13, 8, 8, "DeJa");
let jasmineK = new Queen("Jasmine Kennedie", 7, 6, 13, 7, 6, 10, 14, "JasmineK");
let jorgeous = new Queen("Jorgeous", 5, 5, 13, 10, 5, 10, 15, "Jorgeous");
let june = new Queen("June Jambalaya", 5, 6, 6, 4, 5, 6, 6, "June");
let kerri = new Queen("Kerri Colby", 6, 6, 5, 5, 6, 9, 6, "Kerri");
let kornbread = new Queen("Kornbread Jeté", 6, 7, 6, 6, 7, 8, 7, "Kornbread");
let cadmen = new Queen("Lady Camden", 12, 11, 12, 11, 7, 10, 11, "LadyCamden");
let maddy = new Queen("Maddy Morphosis", 8, 7, 6, 5, 6, 9, 7, "Maddy");
let orion = new Queen("Orion Story", 4, 6, 6, 5, 6, 6, 5, "Orion");
let willow = new Queen("Willow Pill", 11, 8, 7, 10, 10, 12, 8, "Willow");
let us_season14 = [alyssaH, angeria, bosco, daya, deja, jasmineK, jorgeous, june, kerri, kornbread, cadmen, maddy, orion, willow];
//SEASON 15
let amethyst = new Queen("Amethyst", 4, 8, 6, 5, 9, 8, 10, "Amethyst");
let anetra = new Queen("Anetra", 9, 7, 13, 11, 8, 11, 13, "Anetra");
let auraMayari = new Queen("Aura Mayari", 5, 5, 9, 7, 6, 9, 7, "AuraMayari");
let irene = new Queen("Irene Dubois", 4, 5, 4, 4, 4, 8, 6, "IreneDubois");
let jax = new Queen("Jax", 5, 6, 9, 8, 6, 8, 14, "Jax");
let loosey = new Queen("Loosey LaDuca", 10, 14, 9, 8, 13, 11, 9, "LooseyLaDuca");
let luxx = new Queen("Luxx Noir London", 10, 10, 9, 13, 9, 14, 9, "LuxxNoirLondon");
let malaysia = new Queen("Malaysia Babydoll Foxx", 9, 7, 7, 8, 6, 9, 8, "MalaysiaBabydollFoxx");
let marcia = new Queen("Marcia Marcia Marcia", 9, 9, 10, 8, 9, 8, 12, "MarciaMarciaMarcia");
let mistress = new Queen("Mistress Isabelle Brooks", 11, 10, 10, 10, 10, 13, 9, "MistressIsabelleBrooks");
let poppy = new Queen("Princess Poppy", 5, 6, 5, 5, 6, 6, 8, "PrincessPoppy");
let robin = new Queen("Robin Fierce", 7, 7, 6, 11, 7, 10, 9, "RobinFierce");
let salina = new Queen("Salina EsTitties", 9, 9, 9, 5, 7, 7, 11, "SalinaEsTitties");
let sashaColby = new Queen("Sasha Colby", 12, 8, 13, 11, 11, 15, 13, "SashaColby");
let spice = new Queen("Spice", 8, 6, 7, 8, 5, 11, 7, "Spice");
let sugar = new Queen("Sugar", 9, 7, 6, 6, 5, 11, 7, "Sugar");
let us_season15 = [amethyst, anetra, auraMayari, irene, jax, loosey, luxx, malaysia, marcia, mistress, poppy, robin, salina, sashaColby, spice, sugar];
//DRAG RACE FRANCE
let elips = new Queen("Elips", 7, 9, 8, 8, 8, 8, 7, "Elips");
let kam = new Queen("Kam Hugh", 7, 5, 6, 9, 4, 13, 7, "Kam");
let bigbertha = new Queen("La Big Bertha", 7, 6, 7, 6, 6, 8, 9, "BigBertha");
let briochee = new Queen("La Briochée", 6, 6, 6, 5, 6, 8, 5, "LaBriochee");
let lgd = new Queen("La Grande Dame", 11, 10, 8, 12, 8, 11, 8, "GrandeDame");
let kahena = new Queen("La Kahena", 5, 6, 5, 3, 5, 6, 5, "Kahena");
let lolita = new Queen("Lolita Banana", 9, 7, 13, 11, 6, 9, 12, "LolitaBanana");
let lova = new Queen("Lova Ladiva", 5, 5, 6, 4, 6, 6, 5, "Lova");
let paloma = new Queen("Paloma", 11, 11, 6, 7, 9, 9, 8, "Paloma");
let soa = new Queen("Soa de Muse", 9, 10, 10, 8, 8, 9, 10, "Soa");
let drfr = [elips, kam, bigbertha, briochee, lgd, kahena, lolita, lova, paloma, soa];
//DRAG RACE FRANCE 2
let cookie = new Queen("Cookie Kunty", 7, 7, 7, 7, 7, 7, 7, "CookieKunty");
let gingerB = new Queen("Ginger Bitch", 7, 7, 7, 7, 7, 7, 7, "GingerBitch");
let keiona = new Queen("Keiona", 7, 7, 7, 7, 7, 7, 7, "Keiona");
let kittyS = new Queen("Kitty Space", 7, 7, 7, 7, 7, 7, 7, "KittySpace");
let mami = new Queen("Mami Watta", 7, 7, 7, 7, 7, 7, 7, "MamiWatta");
let moon = new Queen("Moon", 7, 7, 7, 7, 7, 7, 7, "Moon");
let piche = new Queen("Piche", 7, 7, 7, 7, 7, 7, 7, "Piche");
let punani = new Queen("Punani", 7, 7, 7, 7, 7, 7, 7, "Punani");
let roseF = new Queen("Rose", 7, 7, 7, 7, 7, 7, 7, "RoseF");
let sara = new Queen("Sara Forever", 7, 7, 7, 7, 7, 7, 7, "SaraForever");
let vespi = new Queen("Vespi", 7, 7, 7, 7, 7, 7, 7, "Vespi");
let drfr_season2 = [cookie, gingerB, keiona, kittyS, mami, moon, piche, punani, roseF, sara, vespi];
//DRAG RACE PHILIPPINES
let brigiding = new Queen("Brigiding", 6, 5, 8, 8, 4, 9, 10, "Brigiding");
let corazon = new Queen("Corazon", 4, 5, 4, 3, 4, 7, 5, "Corazon");
let eva = new Queen("Eva Le Queen", 6, 9, 8, 7, 8, 10, 8, "EvaLeQueen");
let gigiEra = new Queen("Gigi Era", 5, 5, 4, 5, 5, 6, 7, "GigiEra");
let morgana = new Queen("Lady Morgana", 6, 6, 7, 7, 5, 8, 11, "LadyMorgana");
let summers = new Queen("Marina Summers", 6, 9, 12, 9, 10, 12, 10, "MarinaSummers");
let minty = new Queen("Minty Fresh", 6, 5, 4, 12, 4, 11, 9, "MintyFresh");
let precious = new Queen("Precious Paula Nicole", 8, 8, 10, 7, 9, 9, 9, "PreciousPaulaNicole");
let prince = new Queen("Prince", 4, 4, 4, 4, 4, 7, 4, "Prince");
let turing = new Queen("Turing", 6, 6, 9, 6, 6, 7, 9, "Turing");
let vinas = new Queen("Viñas DeLuxe", 6, 8, 8, 10, 8, 11, 7, "VinasDeLuxe");
let xilhouete = new Queen("Xilhouete", 6, 10, 6, 8, 11, 10, 8, "Xilhouete");
let drph = [brigiding, corazon, eva, gigiEra, morgana, summers, minty, precious, prince, turing, vinas, xilhouete];
//DRAG RACE PHILIPPINES S2
let arizona = new Queen("Arizona Brandy", 7, 7, 7, 7, 7, 7, 7, "ArizonaBrandy");
let astrid = new Queen("Astrid Mercury", 7, 7, 7, 7, 7, 7, 7, "AstridMercury");
let bernie = new Queen("Bernie", 7, 7, 7, 7, 7, 7, 7, "Bernie");
let captivating = new Queen("Captivating KatKat", 7, 7, 7, 7, 7, 7, 7, "CaptivatingKatKat");
let deedee = new Queen("Dee Dee Marié Holliday", 7, 7, 7, 7, 7, 7, 7, "DeeDeeMariéHolliday");
let hana = new Queen("Hana Beshie", 7, 7, 7, 7, 7, 7, 7, "HanaBeshie");
let matilduh = new Queen("Matilduh", 7, 7, 7, 7, 7, 7, 7, "Matilduh");
let m1ssjade = new Queen("M1ss Jade So", 7, 7, 7, 7, 7, 7, 7, "M1ssJadeSo");
let nicolepardaux = new Queen("Nicole Pardaux", 7, 7, 7, 7, 7, 7, 7, "NicolePardaux");
let vct = new Queen("ØV C--T", 7, 7, 7, 7, 7, 7, 7, "VCT");
let tiny = new Queen("Tiny Deluxe", 7, 7, 7, 7, 7, 7, 7, "TinyDeluxe");
let veruschka = new Queen("Veruschka Levels", 7, 7, 7, 7, 7, 7, 7, "VeruschkaLevels");
let drph_season2 = [arizona, astrid, bernie, captivating, deedee, hana, matilduh, m1ssjade, nicolepardaux, vct, tiny, veruschka];
//DRAG RACE BELGIQUE
let amanda = new Queen("Amanda Tears", 7, 6, 6, 6, 6, 8, 8, "AmandaTears");
let athena = new Queen("Athena Sorgelikis", 9, 6, 7, 6, 8, 13, 9, "AthenaSorgelikis");
let brittany = new Queen("Brittany Von Bottoks", 5, 5, 5, 5, 5, 5, 5, "BrittanyVonBottoks");
let dragCouenne = new Queen("Drag Couenne", 12, 11, 7, 9, 8, 13, 9, "DragCouenne");
let edna = new Queen("Edna Sorgelsen", 7, 6, 6, 7, 6, 9, 7, "EdnaSorgelsen");
let mademoiselle = new Queen("Mademoiselle Boop", 9, 9, 7, 7, 10, 9, 8, "MademoiselleBoop");
let moca = new Queen("Mocca Bone", 7, 7, 7, 6, 6, 9, 10, "MoccaBone");
let peach = new Queen("Peach", 10, 6, 6, 9, 6, 9, 8, "Peach");
let susan = new Queen("Susan", 5, 10, 7, 10, 9, 9, 9, "Susan");
let valenciaga = new Queen("Valenciaga", 5, 5, 6, 8, 6, 10, 9, "Valenciaga");
let drbl = [amanda, athena, brittany, dragCouenne, edna, mademoiselle, moca, peach, susan, valenciaga];
//DRAG RACE SVERIGE
let admira = new Queen("Admira Thunderpussy", 10, 10, 10, 9, 10, 11, 9, "AdmiraThunderpussy");
let almighty = new Queen("Almighty Aphroditey", 4, 4, 4, 4, 4, 7, 5, "AlmightyAphroditey");
let antonina = new Queen("Antonina Nutshell", 6, 6, 8, 6, 5, 5, 6, "AntoninaNutshell");
let elecktra = new Queen("Elecktra", 9, 9, 6, 7, 9, 10, 9, "Elecktra");
let endigo = new Queen("Endigo", 6, 5, 6, 6, 5, 9, 8, "Endigo");
let fontana = new Queen("Fontana", 9, 8, 8, 6, 8, 9, 11, "Fontana");
let imaa = new Queen("Imaa Queen", 6, 6, 6, 11, 5, 14, 7, "ImaaQueen");
let santana = new Queen("Santana Sexmachine", 6, 8, 7, 9, 8, 10, 9, "SantanaSexmachine");
let vanityVain = new Queen("Vanity Vain", 7, 7, 9, 12, 6, 12, 10, "VanityVain");
let drsv = [admira, almighty, antonina, elecktra, endigo, fontana, imaa, santana, vanityVain];
//DRAG RACE SOFTBLOX S1
let bear = new Queen("Bear", 7, 7, 7, 7, 7, 7, 7, "Bear");
let bunneh = new Queen("Bunneh2", 7, 7, 7, 7, 7, 7, 7, "Bunneh2");
let coachheat = new Queen("Coach_Heat", 7, 7, 7, 7, 7, 7, 7, "CoachHeat");
let gluecouture = new Queen("Gluecouture", 7, 7, 7, 7, 7, 7, 7, "Gluecouture");
let irina = new Queen("Irina", 7, 7, 7, 7, 7, 7, 7, "Irina");
let jennie = new Queen("Jennie", 7, 7, 7, 7, 7, 7, 7, "Jennie");
let kellymantle = new Queen("KellyMantle", 7, 7, 7, 7, 7, 7, 7, "KellyMantle");
let rain = new Queen("Rain", 7, 7, 7, 7, 7, 7, 7, "Rain");
let manicouture = new Queen("TheManiCouture", 7, 7, 7, 7, 7, 7, 7, "TheManiCouture");
let softbloxs1 = [bear, bunneh, coachheat, gluecouture, irina, jennie, kellymantle, rain, manicouture];
//DRAG RACE SOFTBLOX S2
let daniel = new Queen("Danielmelosanmiel", 7, 7, 7, 7, 7, 7, 7, "Daniel");
let marta = new Queen("Marta2013_07", 7, 7, 7, 7, 7, 7, 7, "Marta");
let anime = new Queen("Anime_123687", 7, 7, 7, 7, 7, 7, 7, "Anime");
let alice = new Queen("Alice", 7, 7, 7, 7, 7, 7, 7, "Alice");
let suki = new Queen("Suki", 7, 7, 7, 7, 7, 7, 7, "Suki");
let peachy = new Queen("Peachy", 7, 7, 7, 7, 7, 7, 7, "Peachy");
let elsiplay = new Queen("Elsiplay", 7, 7, 7, 7, 7, 7, 7, "Elsiplay");
let enigmatica = new Queen("ENlGMATlCA", 7, 7, 7, 7, 7, 7, 7, "Enigmatica");
let medinilla = new Queen("Medinilla", 7, 7, 7, 7, 7, 7, 7, "Medinilla");
let dyarita = new Queen("Dyarita", 7, 7, 7, 7, 7, 7, 7, "Dyarita");
let soi = new Queen("Soi", 7, 7, 7, 7, 7, 7, 7, "Soi");
let liv = new Queen("Liv", 7, 7, 7, 7, 7, 7, 7, "Liv");
let softbloxs2 = [daniel, marta, anime, alice, suki, peachy, elsiplay, enigmatica, medinilla, dyarita, soi, liv];
//DRAG RACE SOFTBLOX S3
let babynuxx = new Queen("BabyNuxx", 7, 7, 7, 7, 7, 7, 7, "BabyNuxx");
let dashingwiljay = new Queen("DashingWiljay", 7, 7, 7, 7, 7, 7, 7, "DashingWiljay");
let f4my = new Queen("F4my", 7, 7, 7, 7, 7, 7, 7, "F4my");
let pierre = new Queen("Pierregaslysgf", 7, 7, 7, 7, 7, 7, 7, "Pierregaslysgf");
let pineapplesquid = new Queen("Pineapplesquid14", 7, 7, 7, 7, 7, 7, 7, "Pineapplesquid14");
let uglysmellyfat = new Queen("Uglysmellyfat", 7, 7, 7, 7, 7, 7, 7, "Uglysmellyfat");
let vanvan = new Queen("Vanvan", 7, 7, 7, 7, 7, 7, 7, "Vanvan");
let vitoria = new Queen("Vitoria", 7, 7, 7, 7, 7, 7, 7, "Vitoria");
let ermagurll = new Queen("Ermagurll_1", 7, 7, 7, 7, 7, 7, 7, "Ermagurll");
let wolfboy = new Queen("Wolfboy7l85856", 7, 7, 7, 7, 7, 7, 7, "Wolfboy7l85856");
let softbloxs3 = [babynuxx, dashingwiljay, f4my, pierre, pineapplesquid, uglysmellyfat, vanvan, vitoria, ermagurll, wolfboy, liv, gluecouture, peachy];
//DRAG RACE SOFTBLOX S4
let austin = new Queen("Austin", 7, 7, 7, 7, 7, 7, 7, "Austin");
let feya = new Queen("Feya", 7, 7, 7, 7, 7, 7, 7, "Feya");
let fgteev = new Queen("FgtEEv139922", 7, 7, 7, 7, 7, 7, 7, "FgtEEv139922");
let jayda = new Queen("Jayda", 7, 7, 7, 7, 7, 7, 7, "Jayda");
let kate = new Queen("Kate", 7, 7, 7, 7, 7, 7, 7, "Kate");
let livpersson = new Queen("Livpersson246", 7, 7, 7, 7, 7, 7, 7, "Livpersson246");
let mariaalh = new Queen("Mariaalh12", 7, 7, 7, 7, 7, 7, 7, "Mariaalh12");
let metabase = new Queen("MetaBase", 7, 7, 7, 7, 7, 7, 7, "MetaBase");
let narwhaleartist = new Queen("NarwhaleArtist", 7, 7, 7, 7, 7, 7, 7, "NarwhaleArtist");
let o777 = new Queen("O777", 7, 7, 7, 7, 7, 7, 7, "O777");
let oink = new Queen("Oink", 7, 7, 7, 7, 7, 7, 7, "Oink");
let yobigmomm = new Queen("YoBigMomm", 7, 7, 7, 7, 7, 7, 7, "YoBigMomm");
let zahrawhite = new Queen("ZahraWhite4", 7, 7, 7, 7, 7, 7, 7, "ZahraWhite4");
let softbloxs4 = [austin, feya, fgteev, jayda, kate, livpersson, mariaalh, metabase, narwhaleartist, o777, oink, yobigmomm, zahrawhite];
//DRAG RACE AI S2
let blairbitch = new Queen("Blair Bitch", 7, 7, 7, 7, 7, 7, 7, "BlairBitch");
let botox = new Queen("Botox Major Diva", 7, 7, 7, 7, 7, 7, 7, "BotoxMajorDiva");
let cinderoolla = new Queen("Cinderoolla", 7, 7, 7, 7, 7, 7, 7, "Cinderoolla");
let francesca = new Queen("Francesca Fontaine", 7, 7, 7, 7, 7, 7, 7, "FrancescaFontaine");
let vitus = new Queen("Ginger Vitus", 7, 7, 7, 7, 7, 7, 7, "GingerVitus");
let gorgeous = new Queen("Gorgeous Lux", 7, 7, 7, 7, 7, 7, 7, "GorgeousLux");
let coochie = new Queen("Miss Coochie", 7, 7, 7, 7, 7, 7, 7, "MissCoochie");
let shay = new Queen("Shay D", 7, 7, 7, 7, 7, 7, 7, "ShayD");
let tinycox = new Queen("Tiny Cox", 7, 7, 7, 7, 7, 7, 7, "TinyCox");
let mary = new Queen("Virgin Mary", 7, 7, 7, 7, 7, 7, 7, "VirginMary");
let vladmir = new Queen("Vladmir Put-In My Ass", 7, 7, 7, 7, 7, 7, 7, "VladmirPut-InMyAss");
let yarasophia = new Queen("Yara Sophia", 7, 7, 7, 7, 7, 7, 7, "YaraSophia");
let ais2 = [blairbitch, botox, cinderoolla, francesca, vitus, gorgeous, coochie, shay, tinycox, mary, vladmir, yarasophia];
//DRAG RACE AI S1
let bigpuss = new Queen("Big Puss", 7, 7, 7, 7, 7, 7, 7, "BigPuss");
let bloody = new Queen("Bloody Mary", 7, 7, 7, 7, 7, 7, 7, "BloodyMary");
let broca = new Queen("Broca Lee", 7, 7, 7, 7, 7, 7, 7, "BrocaLee");
let godiva = new Queen("Godiva Hangover", 7, 7, 7, 7, 7, 7, 7, "GodivaHangover");
let kar = new Queen("Kar Krash", 7, 7, 7, 7, 7, 7, 7, "KarKrash");
let liljon = new Queen("Lil Jon", 7, 7, 7, 7, 7, 7, 7, "LilJon");
let mapussi = new Queen("Ma Pussi", 7, 7, 7, 7, 7, 7, 7, "MaPussi");
let palipali = new Queen("Pali Pali Princess", 7, 7, 7, 7, 7, 7, 7, "PaliPaliPrincess");
let robbinhearts = new Queen("Robbin Hearts", 7, 7, 7, 7, 7, 7, 7, "RobbinHearts");
let hairyballs = new Queen("Sophia's Hairy Balls", 7, 7, 7, 7, 7, 7, 7, "Sophia'sHairyBalls");
let travis = new Queen("Travis Trans", 7, 7, 7, 7, 7, 7, 7, "TravisTrans");
let wisma = new Queen("Wisma Teeth", 7, 7, 7, 7, 7, 7, 7, "WismaTeeth");
let ais1 = [bigpuss, bloody, broca, godiva, kar, liljon, mapussi, palipali, robbinhearts, hairyballs, travis, wisma];
//DRAGULA S1
let foxie = new Queen("Foxie Adjuia", 6, 5, 14, 4, 4, 5, 15, "Foxie");
let frankie = new Queen("Frankie Doom", 8, 5, 6, 6, 7, 12, 10, "Frankie");
let loris = new Queen("Loris", 5, 4, 8, 14, 4, 13, 9, "Loris");
let meatball = new Queen("Meatball", 13, 14, 7, 2, 15, 5, 12, "Meatball");
let melissa = new Queen("Melissa Befierce", 9, 5, 14, 9, 6, 11, 15, "Melissa");
let pinche = new Queen("Pinche Queen", 7, 6, 5, 2, 5, 3, 6, "Pinche");
let ursula = new Queen("Ursula Major", 5, 3, 3, 6, 5, 7, 3, "Ursula");
let vander = new Queen("Vander Von Odd", 13, 8, 7, 15, 9, 15, 8, "Vander");
let xochi = new Queen("Xochi Mochi", 9, 7, 6, 6, 7, 8, 6, "Xochi");
let dragula = [foxie, frankie, loris, meatball, melissa, pinche, ursula, vander, xochi];
//DRAGULA S2
let abhora = new Queen("Abhora", 7, 6, 5, 10, 5, 12, 10, "Abhora");
let biqtch = new Queen("Biqtch Puddin'", 13, 14, 8, 8, 15, 10, 10, "Biqtch");
let dahli = new Queen("Dahli", 7, 10, 8, 12, 8, 15, 10, "Dahli");
let disasterina = new Queen("Disasterina", 6, 8, 4, 10, 14, 7, 4, "Disasterina");
let erika = new Queen("Erika Klash", 6, 5, 9, 8, 5, 7, 10, "Erika");
let felony = new Queen("Felony Dodger", 6, 8, 4, 6, 6, 5, 5, "Felony");
let kendra = new Queen("Kendra Onixxx", 5, 7, 10, 8, 9, 10, 10, "Kendra");
let majesty = new Queen("Majesty", 14, 8, 7, 12, 9, 14, 10, "Majesty");
let monikkie = new Queen("Monikkie Shame", 4, 2, 2, 3, 2, 2, 3, "Monikkie");
let victoriaelizabeth = new Queen("Victoria Elizabeth Black", 4, 6, 4, 15, 8, 15, 7, "VictoriElizabeth");
let dragula2 = [abhora, biqtch, dahli, disasterina, erika, felony, kendra, majesty, monikkie, victoriaelizabeth];
//DRAGULA S3
let dollya = new Queen("Dollya Black", 6, 6, 6, 15, 6, 14, 8, "Dollya");
let evah = new Queen("Evah Destruction", 13, 8, 10, 11, 7, 11, 11, "Evah");
let hollow = new Queen("Hollow Eve", 9, 3, 4, 7, 4, 10, 9, "Hollow");
let landon = new Queen("Landon Cider", 12, 11, 10, 14, 12, 15, 13, "Landon");
let louisianna = new Queen("Louisianna Purchase", 10, 8, 10, 9, 6, 10, 10, "Louisianna");
let maddelynn = new Queen("Maddelynn Hatter", 5, 6, 6, 10, 7, 10, 8, "Maddelynn");
let maxiG = new Queen("Maxi Glamour", 4, 4, 10, 7, 4, 8, 10, "MaxiG");
let priscilla = new Queen("Priscilla Chambers", 8, 10, 13, 7, 10, 9, 13, "Priscilla");
let saint = new Queen("Saint", 5, 7, 8, 15, 7, 15, 12, "Saint");
let violencia = new Queen("Violencia!", 7, 6, 4, 4, 7, 4, 6, "Violencia");
let yovska = new Queen("Yovska", 5, 7, 4, 11, 7, 11, 6, "Yoska");
let dragula3 = [dollya, evah, hollow, landon, louisianna, maddelynn, maxiG, priscilla, saint, violencia, yovska];
//DRAGULA RESURRECTION
let dragulares = [dahli, frankie, kendra, loris, priscilla, saint, victoriaelizabeth];
//DRAGULA S4
let astrud = new Queen("Astrud Aurelia", 6, 4, 8, 12, 5, 15, 10, "Astrud");
let betty = new Queen("Bitter Betty", 7, 5, 7, 9, 5, 11, 7, "Betty");
let formelda = new Queen("Formelda Hyde", 3, 3, 3, 6, 3, 6, 2, "Formelda");
let hoso = new Queen("HoSo Terra Toma", 13, 8, 9, 13, 9, 14, 10, "HoSo");
let koco = new Queen("Koco Caine", 6, 9, 13, 6, 8, 8, 13, "Koco");
let lazavaleta = new Queen("La Zavaleta", 8, 8, 12, 10, 8, 13, 13, "LaZavaleta");
let merrie = new Queen("Merrie Cherry", 5, 5, 4, 2, 6, 4, 6, "Merrie");
let sigourney = new Queen("Sigourney Beaver", 10, 9, 9, 13, 9, 13, 10, "Sigourney");
let dragula4 = [astrud, betty, dahli, formelda, hoso, jadejolie, koco, lazavaleta, merrie, saint, sigourney];
//DRAGULA TITANS S1
let titans1 = [victoriaelizabeth, hoso, koco, astrud, evah, melissa, abhora, erika, kendra, yovska];
//La Más Draga S1
let barbara = new Queen("Bárbara Durango", 10, 7, 6, 11, 7, 7, 7, "Barbara");
let deborah = new Queen("Deborah La Grande", 10, 8, 5, 4, 9, 4, 8, "Deborah");
let margaret = new Queen("Margaret Y Ya", 7, 6, 5, 9, 7, 12, 6, "MargaretYYa");
let blunt = new Queen("Eva Blunt", 7, 5, 9, 7, 6, 8, 12, "Eva");
let debra = new Queen("Debra Men", 6, 7, 6, 4, 6, 5, 8, "Debra");
let lana = new Queen("Lana", 5, 4, 4, 8, 5, 10, 6, "Lana");
let cordelia = new Queen("Cordelia Durango", 4, 5, 4, 4, 4, 6, 5, "Cordelia");
let lamasdraga = [barbara, deborah, margaret, blunt, debra, lana, cordelia];
//La Más Draga S2
let sophia = new Queen("Sophia Jiménez", 9, 8, 15, 10, 6, 10, 15, "Sophia");
let alexisxl = new Queen("Alexis 3XL", 5, 12, 4, 15, 8, 15, 5, "AlexisXL");
let soro = new Queen("Soro Nasty", 8, 8, 8, 12, 6, 13, 10, "Soro");
let gvajardo = new Queen("Gvajardo", 10, 7, 6, 7, 8, 8, 8, "Gvajardo");
let redrabbitduo = new Queen("Red Rabbit Duo", 6, 5, 12, 6, 6, 9, 12, "RedRabbitDuo");
let amelia = new Queen("Amelia Waldorf", 6, 5, 6, 12, 6, 12, 8, "Amelia");
let job = new Queen("Job Star", 8, 6, 7, 4, 7, 4, 8, "Job");
let ninade = new Queen("Nina De La Fuente", 8, 6, 7, 4, 7, 4, 8, "NinaDe");
let leandra = new Queen("Leandra Rose", 5, 4, 5, 4, 4, 3, 5, "Leandra");
let lamasdraga2 = [sophia, alexisxl, soro, gvajardo, redrabbitduo, amelia, job, ninade, leandra];
//La Más Draga S3
let madison = new Queen("Madison Basrey", 12, 10, 8, 6, 10, 8, 8, "Madison");
let raga = new Queen("Raga Diamante", 10, 8, 10, 6, 9, 8, 8, "Raga");
let rudy = new Queen("Rudy Reyes", 8, 6, 15, 4, 4, 7, 15, "Rudy");
let regina = new Queen("Regina Bronx", 6, 8, 8, 5, 10, 6, 10, "Regina");
let luna = new Queen("Luna Lansman", 6, 5, 12, 6, 6, 9, 12, "Luna");
let memo = new Queen("Memo Reyri", 6, 8, 5, 5, 9, 6, 5, "Memo");
let aviesc = new Queen("Aviesc Who?", 6, 4, 2, 15, 4, 15, 4, "Aviesc");
let huntyy = new Queen("Huntyy B", 6, 5, 7, 8, 5, 10, 8, "Huntyy");
let mista = new Queen("Mista Boo", 7, 8, 3, 5, 7, 6, 4, "Mista");
let iviza = new Queen("Iviza Lioza", 5, 6, 5, 4, 6, 4, 6, "Iviza");
let wynter = new Queen("Wynter", 4, 5, 4, 4, 3, 5, 4, "Wynter");
let stupidrag = new Queen("StupiDrag", 3, 3, 6, 4, 4, 5, 8, "StupiDrag");
let yayoi = new Queen("Yayoi Bowery", 3, 4, 3, 6, 4, 6, 3, "Yayoi");
let lamasdraga3 = [madison, raga, rudy, regina, luna, memo, aviesc, huntyy, mista, iviza, wynter, stupidrag, yayoi];
//La Más Draga S4
let paper = new Queen("Paper Cut", 8, 8, 8, 14, 10, 14, 8, "Paper");
let cpher = new Queen("C-Pher", 10, 8, 12, 15, 5, 15, 10, "Pher");
let vera = new Queen("Vera Cruz", 10, 12, 6, 5, 13, 10, 7, "Vera");
let iris = new Queen("Iris XC", 9, 10, 4, 8, 12, 8, 5, "Iris");
let elektravander = new Queen("Elektra Vandergeld", 6, 8, 9, 10, 9, 8, 10, "ElektraVander");
let georgiana = new Queen("Georgiana", 8, 8, 6, 5, 12, 10, 6, "Georgiana");
let rebel = new Queen("Rebel Mörk", 7, 7, 8, 9, 5, 10, 8, "Rebel");
let sirena = new Queen("Sirena", 6, 4, 12, 8, 5, 12, 10, "Sirena");
let lisa = new Queen("La Morra Lisa", 8, 6, 7, 7, 5, 10, 8, "Lisa");
let leexa = new Queen("Leexa Fox", 5, 5, 13, 6, 4, 8, 13, "Leexa");
let lupita = new Queen("Lupita Kush", 5, 6, 6, 4, 7, 5, 4, "Lupita");
let carrera = new Queen("La Carrera Mami", 5, 6, 5, 6, 6, 6, 6, "Carrera");
let tiresias = new Queen("Tiresias", 4, 4, 10, 3, 3, 4, 10, "Tiresias");
let aurora = new Queen("Aurora Wonders", 5, 4, 3, 3, 5, 2, 5, "Aurora");
let lamasdraga4 = [paper, cpher, vera, iris, elektravander, georgiana, rebel, sirena, lisa, leexa, lupita, carrera, tiresias, aurora];
//La Más Draga S5
let peke = new Queen("Peke Balderas", 10, 8, 10, 8, 12, 10, 12, "Peke");
let fifi = new Queen("Fifí Estah", 9, 6, 15, 4, 8, 10, 15, "Fifi");
let liza = new Queen("Liza Zan Zuzzi", 12, 10, 8, 2, 10, 8, 8, "Liza");
let hidden = new Queen("Hidden Mistake", 6, 4, 13, 13, 4, 13, 12, "Hidden");
let gretha = new Queen("Gretha White", 8, 5, 6, 12, 6, 10, 8, "Gretha");
let deseos = new Queen("Deseos Fab", 6, 8, 2, 10, 8, 8, 4, "Deseos");
let santa = new Queen("Santa Lucía", 5, 5, 8, 10, 4, 7, 8, "Santa");
let light = new Queen("Light King", 5, 3, 5, 11, 8, 9, 4, "Light");
let isabella = new Queen("Isabella y Catalina", 5, 5, 10, 6, 5, 8, 10, "Isabella");
let huma = new Queen("Huma Kyle", 8, 8, 4, 4, 4, 6, 5, "Huma");
let aisha = new Queen("Aisha Dollkills", 4, 4, 8, 5, 4, 6, 9, "Aisha");
let lamasdraga5 = [paper, peke, fifi, liza, hidden, gretha, deseos, santa, light, isabella, huma, aisha];
//DRAG RACE MEXICO
let argennis = new Queen("Argennis", 7, 7, 7, 7, 7, 7, 7, "Argennis");
let cristian = new Queen("Cristian Peralta", 7, 7, 7, 7, 7, 7, 7, "CristianPeralta");
let gala = new Queen("Gala Varo", 7, 7, 7, 7, 7, 7, 7, "GalaVaro");
let kero = new Queen("Lady Kero", 7, 7, 7, 7, 7, 7, 7, "LadyKero");
let matraka = new Queen("Matraka", 7, 7, 7, 7, 7, 7, 7, "Matraka");
let vallarta = new Queen("Miss Vallarta", 7, 7, 7, 7, 7, 7, 7, "MissVallarta");
let pixiePixie = new Queen("Pixie Pixie", 7, 7, 7, 7, 7, 7, 7, "PixiePixie");
let reginavoce = new Queen("Regina Voce", 7, 7, 7, 7, 7, 7, 7, "ReginaVoce");
let serenaM = new Queen("Serena Morena", 7, 7, 7, 7, 7, 7, 7, "SerenaMorena");
let vermelha = new Queen("Vermelha Noir", 7, 7, 7, 7, 7, 7, 7, "VermelhaNoir");
let drmx = [argennis, cristian, gala, kero, margaret, matraka, vallarta, pixiePixie, reginavoce, serenaM, vermelha];

//all possible queens:
let allCustomQueens = [];
if (localStorage.getItem("customQueens") != null)
    allCustomQueens = JSON.parse(localStorage.getItem("customQueens") || "{}");
let customLength = allCustomQueens.length;
for (let i = 0; i < customLength; i++) {
    let queen = new Queen('', 0, 0, 0, 0, 0, 0, 0, '');
    Object.assign(queen, allCustomQueens[i]);
    allCustomQueens.push(queen);
}
allCustomQueens.splice(0, customLength);
let allQueens = [
    akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria,
    jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra,
    alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, stacey, venus, yara,
    alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, willam,
    alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne,
    adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious,
    ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet,
    acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy,
    aja, alexism, charlie, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina,
    aquaria, asia, blair, dusty, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua,
    akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, yvie,
    aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, widow,
    denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica,
    baga, blu, cheryl, crystaluk, divina, gothy, scaredy, sumting, viv, vinegar,
    awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica,
    anubis, charity, choriza, elektraF, ella, kitty, krystal, river, scarlett, vanity, victoriaS,
    anastarzia, boa, ilona, jimbo, juice, kiara, kyne, lemon, priyanka, rita, bobo, tynomi,
    chelsea, envy, janey, madamem, mama, megan, abby, patty, roem, sederginne,
    ivyelise, juicy, keta, love, mlp, reggy, tabitha, countess, vanessaC, vivaldi,
    amadiva, annee, b, bunny, dearis, jaja, meannie, morrigan, natalia, petchra,
    angele, bandit, genie, kana, kandyz, katy, m, maya, mocha, gimhuay, silver, srimala, tormai, vanda,
    anita, art, cocoj, elektra, etc, jojo, karen, kita, maxi,
    arantxa, carmenf, dovima, drag, hugaceo, inti, killer, pupi, sagittaria, macarena,
    adriana, beth, eve, giametric, icesis, kendall, kimoraA, oceane, pythia, stephanie, sukidoll, synthia,
    ava, divinity, elecktra, enorma, farida, ivana, riche, luquisha,
	pangina,
	gisele, vanderpuss, kimmy, jadashada, fiercalicious, boomboom, irma, bombae, chelazon, kaos, moco, halal,
	danny, cheddar, dakota, jonbers, pixie, baby, leFil, copper, sminty, black, starlet, just,
    bestiah, chanel, clover, chuchi, hornella, maria, kellyRoller, pakita, pink, pitita, vania, visa, macarena,
    arielRec, diamante, sethlas, estrella, jota, juriji, marina, marisa, onyx, samantha, sharonne, venedita,
    hannah, yuri, spankie, kweenKong, molly, beverly, minnie, pomara, aubrey, faux,
    alyssaH, angeria, bosco, daya, deja, jasmineK, jorgeous, june, kerri, kornbread, cadmen, maddy, orion, willow,
    amethyst, anetra, auraMayari, irene, jax, loosey, luxx, malaysia, marcia, mistress, poppy, robin, salina, sashaColby, spice, sugar,
    elips, kam, bigbertha, briochee, lgd, kahena, lolita, lova, paloma, soa,
    brigiding, corazon, eva, gigiEra, morgana, summers, minty, precious, prince, turing, vinas, xilhouete,
    amanda, athena, brittany, dragCouenne, edna, mademoiselle, moca, peach, susan, valenciaga,
    admira, almighty, antonina, elecktra, endigo, fontana, imaa, santana, vanityVain,
    aura, gioffre, diamond, petite, narciso, nehellenia, obama, panthera, skandalove, tanissa,
	bear, bunneh, coachheat, gluecouture, irina, jennie, kellymantle, rain, manicouture,
    foxie, frankie, loris, meatball, melissa, pinche, ursula, vander, xochi,
    abhora, biqtch, dahli, disasterina, erika, felony, kendra, majesty, monikkie, victoriaelizabeth,
    dollya, evah, hollow, landon, louisianna, maddelynn, maxiG, priscilla, saint, violencia, yovska,
    astrud, betty, formelda, hoso, jadejolie, koco, lazavaleta, merrie, sigourney,
    cookie, gingerB, keiona, kittyS, mami, moon, piche, punani, roseF, sara, vespi,
    barbara, deborah, margaret, blunt, debra, lana, cordelia,
    sophia, alexisxl, soro, gvajardo, redrabbitduo, amelia, job, ninade, leandra,
    madison, raga, rudy, regina, luna, memo, aviesc, huntyy, mista, iviza, wynter, stupidrag, yayoi,
    cpher, vera, iris, elektravander, georgiana, rebel, sirena, lisa, leexa, lupita, carrera, tiresias, aurora, paper,
    peke, fifi, liza, hidden, gretha, deseos, santa, light, isabella, huma, aisha,
    argennis, cristian, gala, kero, matraka, vallarta, pixiePixie, reginavoce, serenaM, vermelha,
    daniel, marta, anime, alice, suki, peachy, elsiplay, enigmatica, medinilla, dyarita, soi, liv,
    amyl, ashley, bumpa, flor, gabriella, hollywould, isisavis, ivanna, ivoryglaze, ritamenu,
    arizona, astrid, bernie, captivating, deedee, hana, matilduh, m1ssjade, nicolepardaux, vct, tiny, veruschka,
    bigpuss, bloody, broca, godiva, kar, liljon, mapussi, palipali, robbinhearts, hairyballs, travis, wisma,
    blairbitch, botox, cinderoolla, francesca, vitus, gorgeous, coochie, shay, tinycox, mary, vladmir, yarasophia,
	
].concat(allCustomQueens).sort((a, b) => a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()));
let allQueensCopy = [];
let randomReturn = false;
let voteReturn = false;
let rurupalooza = false;
let smackdown = false;
function CheckForReturning() {
    if ((randomReturn || voteReturn) == true && currentCast.length < totalCastSize - 3 && returningQueen == false && eliminatedCast.length > 0) {
        if (randomNumber(0, 100) < 5 * episodeCount || currentCast.length == 4) {
            returningQueen = true;
            return true;
        }
        return false;
    }
    if (smackdown && currentCast.length == 4 && (all_stars || top4 || lipsync_assassin) && returningQueen == false || smackdown && currentCast.length == 3 && returningQueen == false) {
        returningQueen = true;
        return true;
    }
    return false;
}
function returningQueenScreen() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("A lovely surprise...");
    if (randomReturn)
        queenReturns();
    if (voteReturn)
        queenReturnsVote();
    if (smackdown)
        lipsyncSmackdown();
    screen.createButton("Proceed", "newEpisode()");
}
function queenReturns() {
    let screen = new Scene();
    screen.createParagraph("I've decided that one of my queens have gone a bit too soon... I'd like to welcome back...");
    let queen = eliminatedCast[(randomNumber(0, eliminatedCast.length - 1))];
    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
    screen.createBold(queen.getName());
}
function queenReturnsVote() {
    let screen = new Scene();
    screen.createParagraph("I've decided that one of my quens deserve a second chance... you'll vote for which of the eliminated queens will come back!");
    screen.createHorizontalLine();
    screen.createBold("The queens vote...");
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].lipstick = eliminatedCast[randomNumber(0, eliminatedCast.length - 1)];
        currentCast[i].lipstick.votes++;
        screen.createParagraph(`${currentCast[i].getName()} voted for ${currentCast[i].lipstick.getName()}!`);
    }
    for (let i = 0; i < eliminatedCast.length; i++) {
        screen.createBold(`${eliminatedCast[i].getName()}: ${eliminatedCast[i].votes.toString()} votes`);
    }
    screen.createHorizontalLine();
    let queen = [...eliminatedCast].sort((a, b) => b.votes - a.votes)[0];
    screen.createBold(`${queen.getName()} returns to the competition!`);
    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
}
function lipsyncSmackdown() {
    let screen = new Scene();
    screen.createBold("All eliminated queens will return for a lip-sync smackdown tournament!");
    let currentWinner = eliminatedCast[eliminatedCast.length - 1];
    let lipsync = [currentWinner, eliminatedCast[eliminatedCast.length - 2]];
    for (let i = eliminatedCast.length - 2; i >= 0; i--) {
        screen.createHorizontalLine();
        screen.createImage(lipsync[0].image);
        screen.createImage(lipsync[1].image);
        screen.createParagraph(`${lipsync[0].getName()} and ${lipsync[1].getName()} will lip-sync`);
        lsSong();
        currentWinner = smackdownLS(lipsync);
        screen.createImage(currentWinner.image, "royalblue");
        if (i - 1 >= 0)
            screen.createBold(`${currentWinner.getName()}, condragulations, you'll proceed to the next stage!`);
        else
            screen.createBold(`${currentWinner.getName()}, condragulations, you can return to the competition!`);
        screen.createImage(lipsync[1].image, "orange");
        screen.createParagraph(`${lipsync[1].getName()}, thank you for participating, now sashay away...`);
        if (i - 1 < 0)
            break;
        else {
            lipsync = [currentWinner, eliminatedCast[i - 1]];
        }
    }
    currentWinner.addToTrackRecord("WIN");
    eliminatedCast.splice(eliminatedCast.indexOf(currentWinner), 1);
    episodeChallenges.push("Smackdown");
    for (let i = 0; i < currentCast.length; i++)
        currentCast[i].addToTrackRecord("SAFE");
    currentCast.push(currentWinner);
    for (let i = 0; i < eliminatedCast.length; i++)
        eliminatedCast[i].addToTrackRecord("LOSS");
}
function smackdownLS(queens) {
    for (let i = 0; i < queens.length; i++) {
        queens[i].getASLipsync();
    }
    queens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    return queens[0];
}
class Scene {
    constructor() {
        this._MainBlock = document.querySelector("div#MainBlock");
    }
    clean() {
        this._MainBlock.innerHTML = '';
        this.createRightClick();
        let scrollup = document.querySelector(".toTop");
        window.addEventListener("scroll", e => {
            if (window.scrollY > 100) {
                scrollup.classList.add("active");
            } else {
                scrollup.classList.remove("active");
            }
        });
    }

createRightClick() {
    if (document.getElementById("inputRightKey") == undefined) {
        let text = document.createElement("input");
        text.setAttribute("class", "textRightClick");
        text.setAttribute("id", "inputRightKey");
        text.setAttribute("type", "text");
        text.setAttribute("readonly", "readonly");
        this._MainBlock.parentElement.appendChild(text);
    }
}
    createHeader(text) {
        let title = document.getElementById("MainTitle");
        title.innerHTML = text;
    }
    createBigText(text) {
        let big = document.createElement("big");
        let p = document.createElement("p");
        big.innerHTML = text;
        p.appendChild(big);
        this._MainBlock.appendChild(p);
    }
    createParagraph(text, id = '') {
        let p = document.createElement("p");
        p.innerHTML = text;
        p.setAttribute("id", id);
        this._MainBlock.appendChild(p);
    }
    createBold(text, id = '') {
        let p = document.createElement("p");
        let bold = document.createElement("b");
        bold.innerHTML = text;
        bold.setAttribute("id", id);
        p.appendChild(bold);
        this._MainBlock.appendChild(p);
    }
    createButton(text, method, id = '') {
        let button = document.createElement("button");
        button.innerHTML = text;
        button.setAttribute("onclick", method);
        button.setAttribute("id", id);
        this._MainBlock.appendChild(button);
        if (text == "Proceed") {
            let textField = document.getElementById("inputRightKey");
            textField.focus();
            textField.addEventListener("keydown", (e) => {
                let key = e.key;
                if (key === "ArrowRight" && document.querySelector("button[onclick='" + method + "']") == button) {
                    e.target.remove();
                    button.click();
                    this.goToTop();
                }
            }, {once: true});
            document.addEventListener("click", e => {
                if (e.target.matches('div#MainBlock') == false && e.target.matches('select') == false) {
                    textField.focus();
                }
            });
        }
    }
    createHorizontalLine() {
        let hr = document.createElement("hr");
        this._MainBlock.appendChild(hr);
    }
    createImage(source, color = "black") {
        let image = document.createElement("img");
        image.src = source;
        image.setAttribute("style", `border-color: ${color}`);
        this._MainBlock.appendChild(image);
    }
    goToTop() {
        this._MainBlock.scrollIntoView({ 
            behavior: 'smooth'
          });
    }
}
function lsSong() {
    let screen = new Scene();
    let song = randomNumber(0, lsSongs.length - 1);
    screen.createBold(`The Lip-Sync Song is... ${lsSongs[song]}!`);
    lsSongs.splice(song, 1);
}
let allLsSongs = [
    "Supermodel by RuPaul",
    "We Break The Dawn by Michelle Williams",
    "The Greatest Love Of All by Whitney Houstoun",
    "Would I Lie to You by Eurythmics",
    "Stronger by Britney Spears",
    "Shackles (Praise You) by Mary Mary",
    "Cover Girl (Put The Bass In Your Walk) by RuPaul",
    "My Lovin' (You're Never Gonna Get It) by En Vogue",
    "I Hear You Knocking by Wynnona Judd",
    "Two of Hearts by Stacey Q",
    "Carry On by Martha Wash",
    "Black Velvet by Alannah Myles",
    "He's The Greatest Dancer by Sister Sledge",
    "Shake Your Love by Debbie Gibson",
    "Something He Can Feel by Aretha Franklin",
    "Jealous of My Boogie by RuPaul",
    "The Right Stuff by Vanessa Williams",
    "Bad Romance by Lady Gaga",
    "Don't Leave Me This Way by Thelma Houston",
    "Meeting in the Ladies Room by Klymaxx",
    "Looking For A New Love by Jody Watley",
    "Knock On Wood by Amii Stewart",
    "MacArthur Park by Donna Summer",
    "Hey Mickey by Toni Basil",
    "Believe by Cher",
    "Even Angels by Fantasia",
    "Straight Up by Paula Abdul",
    "I Think About You by Patti LaBelle",
    "Champion by RuPaul",
    "Toxic by Britney Spears",
    "Bad Girls by Donna Summer",
    "This Will Be (An Everlasting Love) by Natalie Cole",
    "Trouble by P!nk",
    "Vogue by Madonna",
    "Born This Way by Lady Gaga",
    "Mi Vida Loca by Pam Tillis",
    "It's Raining Men (The Sequel) by Martha Wash and RuPaul",
    "I've Got To Use My Imagination by Gladys Knight",
    "(You Make Me Feel Like) A Natural Woman by Aretha Franklin",
    "No One Else On Earth by Wynnona Judd",
    "Glamazon by RuPaul",
    "Party in the U.S.A by Miley Cyrus",
    "Only Girl (In The World) by Rihanna",
    "When I Grow Up by Pussycat Dolls",
    "Oops!...I Did It Again by Britney Spears",
    "Take Me Home by Cher",
    "I'm So Excited by The Pointer Sisters",
    "Whip My Hair by Willow Smith",
    "Ain't Nothin' Going on but the Rent by Gwen Guthrie",
    "Cold Hearted by Paula Abdul",
    "(It Takes) Two To Make It Right by Seduction",
    "Malambo No. 1 by Yma Sumac",
    "The Beginning by RuPaul",
    "Express Yourself by Madonna",
    "Turn The Beat Around by Vicky Sue Robinson",
    "Shake it Up by Selena Gomez",
    "I'm Every Woman by Chaka Khan",
    "Head to Toe by Lisa Lisa & Cult Jam",
    "Whatta Man by Salt-n-Pepa feat. En Vogue",
    "Point of No Return by Exposé",
    "Stupid Girls by P!nk",
    "Vibeology by Paula Abdul",
    "Think by Aretha Franklin",
    "Stronger (What Doesn't Kill You) by Kelly Clarkson",
    "Sissy That Walk by RuPaul",
    "Geronimo by RuPaul",
    "Twist of Fate by Olivia Newton-John",
    "I Was Gonna Cancel by Kylie Minogue",
    "Dreaming by Blondie",
    "Lovergirl by Teena Marie",
    "Break Free by Ariana Grande",
    "No More Lies by Michel'le",
    "I Think We're Alone Now by Tiffany",
    "Really Don't Care by Demi Lovato",
    "Show Me Love by Robin S.",
    "Roar by Katy Perry",
    "Born Naked by RuPaul",
    "Applause by Lady Gaga",
    "I Will Survive by Gloria Gaynor",
    "Mesmerized by Faith Evans",
    "Call Me by Blondie",
    "Causing A Commotion by Madonna",
    "I Don't Care by Icona Pop",
    "And I Am Telling You I'm Not Going by Jennifer Holliday",
    "You Make Me Feel (Mighty Real) by Sylvester",
    "The Realness by RuPaul",
    "Love Shack by The B-52's",
    "Holding Out For A Hero by Bonnie Tyler",
    "I Wanna Go by Britney Spears",
    "Woman Up by Meghan Trainor",
    "Music by Madonna",
    "Finally by Cece Peniston",
    "Baby I'm Burnin' by Dolly Parton",
    "Greedy by Ariana Grande",
    "Cool For The Summer by Demi Lovato",
    "Macho Man by The Village People",
    "U Wear It Well by RuPaul",
    "So Emotional by Whitney Houston",
    "It's Not Right But It's Okay by Whitney Houston",
    "Ain't No Other Man by Christina Aguilera",
    "Best Of My Love by The Emotions",
    "Celebrity Skin by Hole",
    "Pound The Alarm by Nicki Minaj",
    "Man! I Feel Like A Woman by Shania Twain",
    "I'm Coming Out by Diana Ross",
    "Cut To The Feeling by Carly Rae Jepsen",
    "Groove Is In The Heart by Deee-Lite",
    "New Attitude by Patti LaBelle",
    "Good As Hell by Lizzo",
    "Nasty Girl by Vanity 6",
    "Call Me Mother by RuPaul",
    "Nasty by Janet Jackson",
    "If by Janet Jackson",
    "Bang Bang by Jessie J, Ariana Grande and Nicki Minaj",
    "Best of Both Worlds by Hannah Montana",
    "Work Bitch by Britney Spears",
    "Waiting For Tonight by Jennifer Lopez",
    "Living in America by James Brown",
    "I'm Your Baby Tonight by Whitney Houston",
    "Last Dance by Donna Summer",
    "Strut by Sheena Easton",
    "Sorry Not Sorry by Demi Lovato",
    "Hood Boy by Fantasia",
    "No More Drama by Mary J. Blige",
    "No Scrubs by TLC",
    "Pride: A Deeper Love by Aretha Franklin",
    "Bootylicious by Destiny's Child",
    "SOS by Rihanna",
    "The Edge of Glory by Lady Gaga",
    "Starships by Nicki Minaj",
    "Call Your Girlfriend by Robyn",
    "Problem by Ariana Grande and Iggy Azalea",
    "S&M by Rihanna",
    "Heart to Break by Kim Petras",
    "Let It Go by Caissie Levy",
    "Burning Up by Madonna",
    "This Is My Night by Chaka Khan",
    "Firework by Katy Perry",
    "Kill The Lights by Alex Newell",
    "1999 by Prince",
    "On The Floor by Jennifer Lopez and Pitbull",
    "Bring Back My Girls by RuPaul",
    "Survivor by Destiny's Child",
    "Call Me Maybe by Carly Rae Jepsen",
    "The Pleasure Principle by Janet Jackson",
    "Rumors by Lindsay Lohan",
    "Ex's & Oh's by Elle King",
    "Lady Marmalade by Christina Aguilera, Lil' Kim, Mya & Pink",
    "Break My Heart by Dua Lipa",
    "If U Seek Amy by Britney Spears",
    "100% Pure Love by Crystal Waters",
    "Fancy by Iggy Azalea and Charli XCX",
    "Hit 'Em Up Style (Oops!) by Blue Cantrell",
    "Whole Lotta Woman by Kelly Clarkson",
    "BO$$ by Fifth Harmony",
    "Fascinated by Company B",
    "My Humps by Black Eyed Peas",
    "No Tears Left To Cry by Ariana Grande",
    "Strong Enough by Cher",
    "I Learned from the Best by Whitney Houston",
    "Gimme More by Britney Spears",
    "Till the World Ends by Britney Spears",
    "Turn Me On by David Guetta and Nicki Minaj",
    "Alone by Kim Petras, Nicki Minaj",
    "Dancing Queen by ABBA",
    "Bring Me To Life by Evanescence",
    "Sk8er Boi by Avril Lavigne",
    "Hung Up by Madonna",
    "Cannibal by Kesha",
    "Candyman by Christina Aguilera",
    "Bohemian Rhapsody by Queen",
    "Venus by Lady Gaga",
    "Dancing Queen by ABBA",
    "STFU by Rina Sawayama",
    "Superbass by Nicki Minaj",
    "Can't Get You Out of My Head by Kylie Minogue",
    "Freeway of Love by Aretha Franklin",
    "Tell It To My Heart by Taylor Dayne",
    "Dirrty by Christina Aguilera",
    "34+35 by Ariana Grande",
    "Barbie Girl by Aqua",
    "Hallucinate by Dua Lipa",
    "Bubblegum Bitch by MARINA",
    "Boss Bitch by Doja Cat",
    "Your Disco Needs You by Kylie Minogue",
    "Froot by MARINA",
    "She Works Hard For The Money by Donna Summer",
    "Supernova by Kylie Minogue",
    "Detention by Melanie Martinez",
    "Complicated by Avril Lavigne",
    "So What by P!nk",
    "Good 4 U by Olivia Rodrigo",
    "Take A Chance On Me by ABBA",
    "Casanova by Allie X",
    "TIk Tok by Kesha",
    "When I Think of You by Janet Jackson",
    "Prisoner by Miley Cyrus (ft. Dua Lipa)",
    "Say So by Doja Cat",
    "Break The Ice by Britney Spears",
    "Vroom Vroom by Charlie XCX",
    "XS by Rina Sawayama",
    "Teenage Dream by Katy Perry",
    "Hollaback Girl by Gwen Stefani",
    "I Feel Love by Donna Summer",
    "Don't Stop The Music by Rihanna",
    "Everybody’s Gay by Lizzo",
    "G.U.Y by Lady Gaga",
    "Waka Waka (This Time For Africa) by Shakira",
    "Dangerous Woman by Ariana Grande",
    "Whenever, Whenever by Shakira",
    "I Disagree by Poppy",
	"X by Poppy",
	"Computer Boy by Poppy",
	"Moshi Moshi by Poppy",
    "Dynasty by Rina Sawayama",
    "Fergalicious by Fergie",
    "Aura by Lady Gaga",
    "Back To Black by Amy Winehouse",
    "Tears Dry On Their Own by Amy Winehouse",
    "Baby One More Time by Britney Spears",
    "Million Dollar Baby by Ava Max",
    "A Little Party Never Killed Nobody by Fergie",
    "Say My Name by Destiny's Child",
    "Do It by Chloe X Halle",
    "Like A Virgin by Madonna",
    "Chun Li by Nicki Minaj",
    "Express by Christina Aguillera",
    "Taki Taki by DJ Snake (ft. Selena Gomez, Cardi B)",
    "Private Dancer by Tina Turner",
    "Sweet Dreams by Beyoncé",
    "Kiss Me More by Doja Cat (ft. SZA)",
    "Take A Chance On Me by ABBA",
    "Mine by Slayyyter",
    "Baby One More Time by Britney Spears",
    "Troubled Paradise by Slayyyter",
    "Swine by Lady Gaga",
    "Vacation by GRL",
    "Alive by SIA",
    "IDGAF by Dua Lipa",
    "Get Outta My Way by Kylie Minogue",
    "I Drove All Night by Celine Dion",
    "Bad Bitch Tip by LaLa Ri",
    "Run The World (Girls) by Beyoncé",
    "Judas by Lady Gaga",
    "Circus by Britney Spears",
    "Buttons by The Pussycat Dolls",
    "Venom by Slayyyter",
    "Shut Up And Drive by Rihanna",
    "Dollhouse by Melanie Martinez",
    "About You Now by Miranda Cosgrove",
    "Queen Of The Night by Whitney Houston",
    "Say So by Doja Cat",
    "About Damn Time by Lizzo",
    "Bitch I'm Madonna by Madonna",
    "Not Myself Tonight by Christina Aguillera",
    "Boys by Lizzo",
    "Fantasy by Mariah Carey",
    "All About That Bass by Meghan Trainor",
    "Chandelier by SIA",
    "This Hell by Rina Sawayama",
    "Washing Machine Heart by Mitski",
    "Cherry by Rina Sawayama",
    "See You Again by Miley Cyrus",
    "Spice Up Your Life by Spice Girls",
    "Tears Dry On Their Own by Amy Winehouse",
    "Power by Little Mix",
	"That's My Girl by Little Mix",
    "Miss You Much by Janet Jackson",
    "Rain On Me by Lady Gaga ft. Ariana Grande",
    "Stupid Love by Lady Gaga",
    "Levitating by Dua Lipa",
    "Vagina by CupcakKe",
    "Wildest Dreams by Taylor Swift",
    "good 4 u by Olivia Rodrigo",
    "Telephone by Lady Gaga ft. Beyoncé",
    "Physical by Dua Lipa",
    "Conqueror by Estelle",
    "Dance Again by Jenifer Lopez",
    "Brutal by Olivia Rodrigo",
    "Oh No! by MARINA",
    "How You Like That by BLACKPINK",
    "Focus by Ariana Grande",
    "Stronger by Christina Aguillera",
    "Domino by Jessie J",
    "Salute by Little Mix",
    "Scandalous by Mis-Teeq",
    "Fantasy by Mariah Carey",
    "All I Want For Christmas Is You by Mariah Carey",
    "Sweet Melody by Little Mix",
    "Blame It On The Edit by RuPaul",
    "Big Spender by Shirley Bassey",
    "Unholy by Sam Smith & Kim Petras",
    "Freakum Dress by Beyoncé",
    "She Bop by Cyndi Lauper",
    "Coconuts by Kim Petras",
    "Bad Reputation by Joan Jett",
    "I'm Not Perfect But I'm Perfect for You by Grace Jones",
    "These Boots Were Made For Walkin' by Nancy Sinatra",
    "Despechá by Rosalía",
    "La Noche Es Para Mí by Soraya",
    "Genio Atrapado by Christina Aguilera",
    "Ay Mamá by Rigoberta Bandini",
    "Desátame by Mónica Naranjo",
    "Dime by Beth",
    "No Controles by Olé Olé",
    "La Niña by María Peláe",
    "Vas a Volverme Loca by Natalia",
    "Punto de Partida by Rocio Jurado",
    "Revelations by Kim Petras",
    "Uhoh by Kim Petras",
    "Claws by Kim Petras",
    "King of Hearts by Kim Petras",
    "Problématique by Kim Petras",
    "Diamonds & Dancefloors by Ava Max",
    "Dancing's Done by Ava Max",
    "Maybe You're the Problem by Ava Max",
    "Dance the Night by Dua Lipa",
    "Angel by PinkPantheress",
    "Just For Me by PinkPantheress",
    "Barbie World by Ice Spice and Nicki Minaj",
    "Home to Another One by Madison Beer",
    "Versions Of Me by Anitta",
    "Boys Don't Cry by Anitta",
];
let lsSongs = [...allLsSongs];
class Team extends Queen {
    constructor(QueenA, QueenB) {
        let Name;
        if (QueenA == kasha)
            Name = "Team Mrs. " + QueenB._name.split(" ")[0] + " Davis";
        else if (QueenB == kasha)
            Name = "Team Mrs. " + QueenA._name.split(" ")[0] + " Davis";
        else if ((QueenA || QueenB) == latrice && ((QueenA && QueenB) == manila))
            Name = "Team Latrila";
        else if ((QueenA || QueenB) == yara && ((QueenA && QueenB) == alexis))
            Name = "Team Yarlexis";
        else if ((QueenA || QueenB) == chad && ((QueenA && QueenB) == shannel))
            Name = "Team Shad";
        else if ((QueenA || QueenB) == ninaf && ((QueenA && QueenB) == tammie))
            Name = "Team Brown Flowers";
        else if ((QueenA || QueenB) == raven && ((QueenA && QueenB) == jujubee))
            Name = "Team Rujubee";
        else if ((QueenA || QueenB) == mimi && ((QueenA && QueenB) == pandora))
            Name = "Team Mandora";
        else if (QueenA._name.split(' ')[0].length == 3 && QueenB._name.split(' ')[0].length > 3)
            Name = "Team " + QueenA._name.split(' ')[0] + QueenB._name.split(' ')[0].slice(QueenB._name.split(' ')[0].length - 4, QueenB._name.split(' ')[0].length);
        else if (QueenA._name.split(' ')[0].length > 3 && QueenB._name.split(' ')[0].length == 3)
            Name = "Team " + QueenA._name.split(' ')[0].slice(0, 4) + QueenB._name.split(' ')[0];
        else if (QueenA._name.split(' ')[0].length == 3 && QueenB._name.split(' ')[0].length == 3)
            Name = "Team " + QueenA._name.split(' ')[0] + QueenB._name.split(' ')[0];
        else
            Name = "Team " + QueenA._name.split(' ')[0].slice(0, 4) + QueenB._name.split(' ')[0].slice(QueenB._name.split(' ')[0].length - 4, QueenB._name.split(' ')[0].length);
        super(Name, ((QueenA._actingStat + QueenB._actingStat) / 2), ((QueenA._comedyStat + QueenB._comedyStat) / 2), ((QueenA._danceStat + QueenB._danceStat) / 2), ((QueenA._designStat + QueenB._designStat) / 2), ((QueenA._improvStat + QueenB._improvStat) / 2), ((QueenA._runwayStat + QueenB._runwayStat) / 2), 0);
        this.QueenA = QueenA;
        this.QueenB = QueenB;
    }
}
function teamsScreen() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Pair time!");
    screen.createParagraph("After all The Queens enter The Werkroom, they now have to choose Their Pairs!");
    screen.createHorizontalLine();
    let teamList = [];
    for (let i = 0; i < totalCastSize / 2; i++) {
        let indexA = randomNumber(0, currentCast.length - 1);
        let indexB = randomNumber(0, currentCast.length - 1);
        while (indexB == indexA)
            indexB = randomNumber(0, currentCast.length - 1);
        let QueenA = currentCast[indexA];
        let QueenB = currentCast[indexB];
        let team = new Team(QueenA, QueenB);
        screen.createImage(QueenA.image);
        screen.createImage(QueenB.image);
        screen.createBold(`${QueenA.getName()} and ${QueenB.getName()} formed ${team.getName()}!`);
        teamList.push(team);
        currentCast.splice(currentCast.indexOf(QueenA), 1);
        currentCast.splice(currentCast.indexOf(QueenB), 1);
    }
    currentCast = [...teamList];
    totalCastSize = currentCast.length;
    screen.createButton("Proceed", "miniChallenge()");
}
