const string = ['sunday','monday','tuesday','wednesday','thuday','friday','saturday'];

for(let day of string){
    day =day.charAt(0).toUpperCase()+day.substring(1);

    console.log(day);
}