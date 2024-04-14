"use strict";
let guest_list = ['imran khan', 'zulfiqar ali bhutto', 'Nawaz Shareef', 'Altaf bhai'];
// for(let i=0; i<=guest_list.length; i++)
// {console.log('Dear Mister'+guest_list[i] +', \n\nit our pleasure to invite you in our party\n\nthank you\n\n')}
let absent_guest = 'imran khan';
let new_guest = 'Kamran tessori';
guest_list[0] = new_guest;
// for(let i=0; i<=guest_list.length; i++)
// {console.log('Dear Mister'+guest_list[i] +',\n\nit our pleasure to invite you in our party\n\nthank you\n\n')}
console.log(`MR.${absent_guest},is not coming inthe party.`);
console.log('Good news! we find Big table so we are inviting our 3 new guests.');
guest_list.unshift('Sir zia khan');
guest_list.splice(2, 0, 'maryam nawaz');
guest_list.push('benazir');
for (let i = 0; i <= guest_list.length; i++) {
    console.log('Dear Mister' + guest_list[i] + ',\n\nit our pleasure to invite you in our party\n\nthank you\n\n');
}
console.log('\nsorry we cannot arrange big table, Only two peoples will be invited.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`sorry Mr. ${remove_guest},u are not invited for dinner.`);
}
for (let i = 0; i <= guest_list.length; i++) {
    console.log('Dear Mister' + guest_list[i] + ',\n\n you are still invited.\n\nthank you\n\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
