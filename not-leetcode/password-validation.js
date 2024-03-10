// check password for constraints:
// 1. must have capital letter
// 2. must contain at least one number
// 3. must contain punctuation or mathematical symbol
// 4. cannot have the string "password" in it
// 5. more than 7 chars and less than 31 chars.
//
// return true if password meets constraints, false if not.
//
//


function simplePassword(str) {

    // capital letter check
    if(!/[A-Z]/g.test(str)) return false;

    //number check
    if(!/[0-9]/g.test(str)) return false;

    //punc or math symbol check
    if(!/[:;,."'-=()!#$%^*&~]/) return false;

    //password
    if(/password/gi.test(srt)) return false;

    //length
    if(!(str.length > 7 && str.length < 31)) return false;

    return true;
}
