# MIETSherlockHolmes
A crime solving mystery for a college festival event.

This node app was created to indulge the participants in a role playing game in which the participants would potray themselves as Sherlock Holmes.

In this crime mystery, the participants were given 24 hours to stop a plot put forward by Sherloc's nemesis Moriarty and prevent a mishap.

The event included various challanges including decoding cryptic text, filtering through overwhelming amount of data, and others.

Solving the mystery includes the following steps:

1. Go through the diary, solve the Cesar's Cipher.
2. From the solved cipher, obtain the unlock code to a phone (imitated), default is the DOB of the victim.
3. Go through the phone, check SMS and call history to get background info.
4. Under SMS, get a phone number (set in /middleware/phoneData.js) and instructions to complete the game.
5. Under SMS also, participants realize they need to send a passphrase to the phone number acquired in step 4.
6. Use the notes app to get a array of three dimentional array.
7. There is also a book clue, the participants use the previous array to find the phrase. i.e, the first dimention represents page number of book, second represents line number and the third represents the word.
8. Test the phrase to acquired number to finish the game.