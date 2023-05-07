Question: how the dynamic properties work on react form?

so the thing is lets asume we have three input called Name,Email and Age, respectively.

now each input have a name,and value property right.also a onchange event handler stick to it right.

so lets assume we are typing something in name what you think happens?
we have 3 inputs but currently we are only using the name input, so the event handler in name gets fired ritht with it captures some infomation as a event.

if i kiss on your nose what happens? the reseptor underneeth of your nose gets triggered right and they sends the signal to the brain that nose has been kiseed. in the same way as reseptors the onchange hander works, reseptors will send information to your bain like the pressure, the duration,the etc etc in the same way onchange handle will send the letters you are typing deleting, along with name, and bunch of other informations.

so now you know which input is active, and you extract information from  that input only,

so the dinamic propoerties says [name]: value ,
what ever input will be active send me its name, that name will goes in name part and the value that will come will go to the value part, so its become dinamic, doesnt matter how many input have it will alaws know which on is triggered and which name and value is should display right.