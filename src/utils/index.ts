let abc = 'sdkfjhskdf34234623V4sdfjgh234234JG3eu247y237RKWRG3U2YTGKUW7R234TGqwmjhegmqjrgea,jthlei485y3i4yr';

const getChar = () => abc[Math.round(Math.random()*(abc.length-1))]ж

export function getString(length = 8){

    let result = '';

    for (let i = 0; i < length; i++){
        result += getChar();
    }

    return result;
}


export function generatorRandomString() {
    let idsForEnemies = [];
    return {
        getIdForEnemy() {
            let id = getString();
            if (idsForEnemies.indexOf(id) >= 0) {
                this.getIdForEnemy();
            }
            else {
                idsForEnemies.push(id);
                return id;
            }
        }
    }
}