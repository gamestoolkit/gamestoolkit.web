export async function maybePromise<T>(func: () => Promise<T>, defaultValue: T) : Promise<T> {
  try {
    return await func();
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
}


export function maybeFunction<T>(func: () => Promise<T>, defaultValue: T) : () => Promise<T> {
  return async function () {
    try {
      return await func();
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  }  
}

