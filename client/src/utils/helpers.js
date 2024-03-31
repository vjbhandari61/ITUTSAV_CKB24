
//Remove key from array of objects
export function removeKey(obj, keyToRemove){
    const removeKey = (obj, key) => {
        const { [key]: removedKey, ...rest } = obj;
        return rest;
    };

    const newArray = obj.map(obj => removeKey(obj, keyToRemove));
    return newArray
}   