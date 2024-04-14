let guest_list :string[]=['imran khan','zulfiqar ali bhutto','Nawaz Shareef','Altaf bhai']
for(let i=0; i<=guest_list.length; i++)
{console.log('Dear Mister'+guest_list[i] +', \n\nit our pleasure to invite you in our party\n\nthank you\n\n')}
let absent_guest :string='imran khan';
let new_guest :string='Kamran tessori';
guest_list[0] = new_guest;
for(let i=0; i<=guest_list.length; i++)
{console.log('Dear Mister'+guest_list[i] +',\n\nit our pleasure to invite you in our party\n\nthank you\n\n')}

console.log( `MR.${absent_guest},is not coming inthe party.`)