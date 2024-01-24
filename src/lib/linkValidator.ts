export default function LinkValidator(link :string | undefined){
    const regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if(link && regex.test(link)){
        return true
    }
    else{
        return false
    }
}