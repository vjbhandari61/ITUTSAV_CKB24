
//Remove key from array of objects
export function removeKey(obj, keyToRemove){
    const removeKey = (obj, key) => {
        const { [key]: removedKey, ...rest } = obj;
        return rest;
    };

    const newArray = obj.map(obj => removeKey(obj, keyToRemove));
    return newArray
}   


export function sortArrayOfObjects(arr) {
    arr.sort(function(firstItem, secItem) {
        if (firstItem.key1 === secItem.key1) {
            return secItem.key2 - firstItem.key2; 
        }
        return secItem.key1 - firstItem.key1; 
    });
    return arr;
}

export function formatTime(timer) {
    const mins = Math.floor(timer / 60);
    const secs = timer % 60;
    const formattedTime = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    return formattedTime;
}